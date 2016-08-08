'use strict';

const moment = require('moment');
const KEYS = require('./constants').OBJECTS_LIST;

const parseFuncs = {
  parseToPrimitive,
  parseToDate,
  parseToArray,
  parseTimeOf,
  parseToIdObject,
  parseValue,
  parseSupportedLine,
  parseSupported,
  parseDeviceList,
  parseDeviceAddressBinding
};

// Indicators
function genericStart(text){
  return /^  {/.test(text);
}

// UNIT TESTED
function genericEnd(text){
  return /^  }/.test(text);
}

// UNIT TESTED
function isDate(text){
  return /^{ \(/.test(text);
}

// UNIT TESTED
function isArray(text){
  return /{|}/.test(text);
}

// UNIT TESTED
function isIdObject(text){
  return /\(|\)/.test(text);
}

// UNIT TESTED
function isProtocolSupported(text) {
  return /protocol-(.+)-supported/.test(text);
}

// UNIT TESTED
function isProtocolEnded(text) {
  return /^        \)/.test(text);
}

// UNIT TESTED
function isDeviceList(text) {
  return text.indexOf('object-list') > -1;
}

// UNIT TESTED
function isDeviceListEnded(text) {
  return /}/.test(text);
}

// UNIT TESTED
function isDeviceAddressBinding(text) {
  return /^\{ (.+) \}$/.test(text);
}

// UNIT TESTED
function isTimeOf(text) {
  return /^time-of-(.+)-reset/.test(text);
}

// UNIT TESTED
//parse individual
function parseToPrimitive(text){
  const formattedText = text.toLowerCase();
  if(formattedText === 'false') return false;
  else if(formattedText === 'true') return true;
  else if(formattedText === 'null') return null;
  else if(!Number.isNaN(Number(formattedText))) {
    if (formattedText.indexOf('.') > -1) return parseFloat(formattedText);
    else return parseInt(formattedText);
  }
  else return text;
}

// UNIT TESTED
function parseToDate(text) {
  const elements = text.match(/\((.+), .\),(.+)\./);
  if(!elements) return text;
  const dateString = `${elements[1]} ${elements[2]}`;
  const momentObject = moment(dateString, 'DD-MMM-YYYY HH:mm');
  //returns a date object
  return momentObject.toDate();
}

// UNIT TESTED
function parseToArray(text, parseFuncs){
  const formattedText = text.replace(/{|}/g, '');
  return formattedText.split(',')
    .map(text => parseFuncs.parseToPrimitive(text.trim()));
}

// UNIT TESTED
function parseToIdObject(text){
  const elements = text.match(/\((.+), (.+)\)/);
  const error = text.match(/(BACnet Error:.+)/);
  if(!elements && error) return { error : error[1] };
  if(!elements) return text; // cannot parse
  const type = elements[1];
  const id = elements[2];
  return { id, type };
}

// UNIT TESTED
function parseTimeOf(text, parseFuncs){
    const elements = text.match(/\((.+),(.+)\)/);
    const string = elements[1];
    const number = parseFuncs.parseToPrimitive(elements[2]);
    return [ string , number ];
}

// UNIT TESTED
function parseSupported(textArr, parseFuncs) {
  return textArr.map(line => parseFuncs.parseSupportedLine(line))
    .reduce((aggregate, objArr) => aggregate.concat(objArr), []);
}

// UNIT TESTED
function parseDeviceList(textArr, parseFuncs) {
  return textArr.map(line => {
    const elements = line.match(/(\([^\)]+\))/g);
    return elements.map(element => parseFuncs.parseToIdObject(element));
  })
  .reduce((aggregate, objectArr) => aggregate.concat(objectArr), []);
}

// UNIT TESTED
//directs to the correct parsers
function parseValue(text, parseFuncs){
  if(text.indexOf('"') > -1) return text.replace(/"/g, '');
  else if(isDate(text)) return parseFuncs.parseToDate(text);
  else if(isArray(text)) return parseFuncs.parseToArray(text, parseFuncs);
  else if(isIdObject(text)) return parseFuncs.parseToIdObject(text);
  else return parseFuncs.parseToPrimitive(text);
}

// UNIT TESTED
function parseDeviceValue(key, value, parseFuncs){
  if(isProtocolSupported(key)) return parseFuncs.parseSupported(value, parseFuncs);
  else if(isDeviceList(key)) return parseFuncs.parseDeviceList(value, parseFuncs);
  else if(isDeviceAddressBinding(value)) return parseFuncs.parseDeviceAddressBinding(value, parseFuncs);
  else if(isTimeOf(key)) return parseFuncs.parseTimeOf(value);
  else return parseFuncs.parseValue(value, parseFuncs);
}

// UNIT TESTED
function parseController(textArr, parseFuncs) {
	return textArr.reduce((accum, line, i) => {
		const keyVal = line.match(/(\S+): (.+)/);
		if(!keyVal) return accum;
	    const key = keyVal[1];
	    const raw = keyVal[2];
	    var value;

      if (isTimeOf(raw)) value = parseFuncs.parseTimeOf(raw, parseFuncs);
	    else value = parseFuncs.parseValue(raw, parseFuncs);
	    accum[key] = value;
	    return accum;
	}, {});
}

// UNIT TESTED
function sectionify(textArr){
    let sections = [];
    let temp = [];
    let hasStarted = false;
    textArr.forEach(line => {
        if(!hasStarted && genericStart(line)) hasStarted = true;
        else if(hasStarted && genericEnd(line)) {
            //push last chunk of data
            temp.push(line);

            //push entire set into sections
            sections.push(temp);

            //reset
            temp = [];
            hasStarted = false;
        }

    	//if has started, push to array
        if(hasStarted) temp.push(line);
    });

    return {
        [KEYS.DEVICE] : sections[0],
        [KEYS.CONTROLLERS] : sections.slice(1)
    };
}

// UNIT TESTED
function parseDeviceAddressBinding(text, parseFuncs){
  const search = text.match(/(\([^\)]+\),[\d]+,[^,]+)/g);
  if(!search) return;

  return search.map(result => {
    const elements = result.match(/(\([^\)]+\)),([\d]+),([^\s}]+)/);
    const controller = parseFuncs.parseToIdObject(elements[1]);
    const value = parseFuncs.parseToPrimitive(elements[2]);
    const address = elements[3];

    return {
      controller,
      value,
      address
    };
  });
}

// UNIT TESTED
function parseSupportedLine(text){
  const search = text.match(/        (.+)   --(.+),$/);
  if (!search) return [];
  const values = search[1].split(',');
  const keys = search[2].split(',');

  return keys.reduce((accum, key, index) => {
    //format text to boolean
    const raw = values[index].trim(),
      protocol = {
        raw,
        key: key.trim(),
        value : raw.toLowerCase() === 't' ? true : raw.toLowerCase() === 'f' ? false : undefined
      };
    accum.push(protocol);
    return accum;
  }, []);
}


// NOT UNIT TESTABLE
//parse chunks
function parseDevice(textArr) {

  let sections = [];
  let temp = [];
  let currentSection = [];
  let hasStarted = false;

  function initialize(key){
    currentSection.push(key);
    hasStarted = true;
  }

  function reset(){
    currentSection.push(temp);
    sections.push(currentSection);
    temp = [];
    currentSection = [];
    hasStarted = false;
  }

  textArr.forEach(line => {
    if(hasStarted) {
      //if reach end of protocol supported section
      if(isProtocolEnded(line)) return reset();
      //push line
      temp.push(line);

      //if this is the end of the device list section
      if(isDeviceListEnded(line)) return reset();
    }
    else {
      const property = line.match(/(\S+): (.+)/);
      if(!property) return;
      const key = property[1];
      const value = property[2];
      //checks to see if it is a multi-line section property
      if(isProtocolSupported(key)) initialize(key);
      else if(isDeviceList(key)) initialize(key);
      else if(value) sections.push([key, value]);
    }
  });

  return sections.map(section => {
    const key = section[0];
    const raw = section[1];
    const value = parseDeviceValue(key, raw, parseFuncs);
    return { [key] : value };
  })
  .reduce((accum, property) => Object.assign(accum, property), {});
}

function parseObjectsList(textArr) {
	var sections = sectionify(textArr);

	try {
		sections[KEYS.DEVICE] = parseDevice(sections[KEYS.DEVICE]);
	} catch(e) {
		console.log('Error parsing device:', '\n', e.stack);
		throw e;
	}

	try {
		sections[KEYS.CONTROLLERS] = sections[KEYS.CONTROLLERS].map(controller => parseController(controller, parseFuncs));
	} catch(e) {
		console.log('Error parsing controllers:', '\n', e.stack);
		throw e;
	}
  require('fs').writeFile('./parsedControllers.js', JSON.stringify(sections[KEYS.CONTROLLERS]));

	return sections;
}


module.exports = {
	parseObjectsList,
	sectionify,
	genericStart,
	genericEnd,
	isArray,
	isDate,
	isIdObject,
  isTimeOf,
  isProtocolSupported,
  isProtocolEnded,
  isDeviceList,
  isDeviceListEnded,
  isDeviceAddressBinding,
  parseDevice,
	parseToPrimitive,
	parseToDate,
	parseToArray,
	parseTimeOf,
	parseToIdObject,
	parseValue,
  parseDeviceValue,
  parseSupportedLine,
  parseSupported,
  parseDeviceList,
  parseDeviceAddressBinding,
	parseController
};




