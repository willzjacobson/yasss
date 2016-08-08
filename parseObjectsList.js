'use strict';
const moment = require('moment');
const KEYS = require('./constants').OBJECTS_LIST;
const parseDevice = require('./parseDevice').parseDevice;

const parseFuncs = {
  parseToPrimitive,
  parseToDate,
  parseToArray,
  parseTimeOf,
  parseToIdObject,
  parseValue
};


function genericStart(text){
  return /^  {/.test(text);
}

function genericEnd(text){
  return /^  }/.test(text);
}

function isDate(text){
  return /^{ \(/.test(text);
}

function isArray(text){
  return /{|}/.test(text);
}

function isIdObject(text){
  return /\(|\)/.test(text);
}

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

function parseToDate(text) {
  const elements = text.match(/\((.+), .\),(.+)\./);
  if(!elements) return text;
  const dateString = `${elements[1]} ${elements[2]}`;
  const momentObject = moment(dateString, 'DD-MMM-YYYY HH:mm');
  //returns a date object
  return momentObject.toDate();
}

function parseToArray(text, parseFuncs){
  const formattedText = text.replace(/{|}/g, '');
  return formattedText.split(',')
    .map(text => parseFuncs.parseToPrimitive(text.trim()));
}

function parseTimeOf(text, parseFuncs){
  	const elements = text.match(/\((.+),(.+)\)/);
    const string = elements[1];
    const number = parseFuncs.parseToPrimitive(elements[2]);
    return [ string , number ];
}

function parseToIdObject(text){
  const elements = text.match(/\((.+), (.+)\)/);
  const error = text.match(/(BACnet Error:.+)/);
  if(!elements && error) return { error : error[1] };
  if(!elements) return text; // cannot parse
  const type = elements[1];
  const id = elements[2];
  return { id, type };
}

//directs to the correct parsers
function parseValue(text, parseFuncs){
  if(text.indexOf('"') > -1) return text.replace(/"/g, '');
  else if(isDate(text)) return parseFuncs.parseToDate(text);
  else if(isArray(text)) return parseFuncs.parseToArray(text, parseFuncs);
  else if(isIdObject(text)) return parseFuncs.parseToIdObject(text);
  else return parseFuncs.parseToPrimitive(text);
}


function parseController(textArr, parseFuncs) {
	return textArr.reduce((accum, line, i) => {
		const keyVal = line.match(/(\S+): (.+)/);
		if(!keyVal) return accum;
	    const key = keyVal[1];
	    const raw = keyVal[2];
	    var value;

	    if(/^time-of-(.+)-reset/.test(raw)) value = parseFuncs.parseTimeOf(raw, parseFuncs);
	    else value = parseFuncs.parseValue(raw, parseFuncs);
	    accum[key] = value;
	    return accum;
	}, {});
}

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

	// console.log('contr', sections[KEYS.CONTROLLERS]);
}


module.exports = {
	parseObjectsList,
	sectionify,
	genericStart,
	genericEnd,
	isArray,
	isDate,
	isIdObject,
	parseToPrimitive,
	parseToDate,
	parseToArray,
	parseTimeOf,
	parseToIdObject,
	parseValue,
	parseController
};

