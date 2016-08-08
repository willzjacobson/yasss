'use strict';

const KEYS = require('./constants').OBJECTS_LIST;
const isTimeOf = require('./parseObjectsList').isTimeOf;
const parseTimeOf = require('./parseObjectsList').parseTimeOf;

//indicators
function isProtocolSupported(text) {
	return /protocol-(.+)-supported/.test(text);
}

function isProtocolEnded(text) {
	return /^        \)/.test(text);
}

function isDeviceList(text) {
  return text.indexOf('object-list') > -1;
}

function isDeviceListEnded(text) {
	return /}/.test(text);
}

function isDeviceAddressBinding(text) {
	return /^\{ (.+) \}$/.test(text);
}


// function parseDeviceAddressBinding(text){
//   const search = text.match(/(\([^\)]+\),\d,[^,]{12})/g);
//   if(!search) return;
//   return search.map(result => {
//     const elements = result.match(/(\([^\)]+\)),(\d),(.+)/),
//       controller = parseToIdObject(elements[1]),
//       value = parseToPrimitive(elements[2]),
//       address = elements[3];
//     return {
//       controller,
//       value,
//       address
//     };
//   });
// }

// function parseSupportedLine(text){
//   const search = text.match(/        (.+)   --(.+),$/),
//     values = search[1].split(','),
//     keys = search[2].split(',');

//   function formatTextToBoolean(text){
//     const formattedText = text.toLowerCase();
//     if(formattedText === 't') return true;
//     else if(formattedText === 'f') return false;
//     else return;
//   }

//   return keys.reduce((accum, key, index) => {
//     //format text to boolean
//     const raw = values[index].trim(),
//       protocol = {
//         raw,
//         key: key.trim(),
//         value : formatTextToBoolean(raw)
//       };
//     accum.push(protocol);
//     return accum;
//   }, []);
// }

// function parseSupported(textArr){
//   return textArr.map(line => parseSupportedLine(line))
//     .reduce((aggregate, objArr) => aggregate.concat(objArr), []);
// }

// function parseDeviceList(textArr){
//   return textArr
//     .map(line => {
//       const elements = line.match(/(\([^\)]+\))/g);
//       return elements.map(element => parseToIdObject(element));
//     })
//     .reduce((aggregate, objectArr) => aggregate.concat(objectArr), []);
// }



// function parseDeviceValue(key, value){
//   if(isProtocolSupported(key)) return parseSupported(value);
//   else if(isDeviceList(key)) return parseDeviceList(value);
//   else if(isDeviceAddressBinding(value)) return parseDeviceAddressBinding(value);
//   else if(isTimeOf(key)) return parseTimeOf(value);
//   else return parseValue(value);
// }

//parse chunks
function parseDevice(textArr){
  // try {
  //   let sections = [],
  //     temp = [],
  //     currentSection = [],
  //     hasStarted = false;

  //   function initialize(key){
  //     currentSection.push(key);
  //     hasStarted = true;
  //   }

  //   function reset(){
  //     currentSection.push(temp);
  //     sections.push(currentSection);
  //     temp = [];
  //     currentSection = [];
  //     hasStarted = false;
  //   }

  //   textArr.forEach(line => {
  //     if(hasStarted) {
  //       //if reach end of protocol supported section
  //       if(isProtocolEnded(line)) return reset();
  //       //push line
  //       temp.push(line);

  //       //if this is the end of the device list section
  //       if(isDeviceListEnded(line)) return reset();
  //     }
  //     else {
  //       const property = line.match(/(\S+): (.+)/);
  //       if(!property) return;
  //       const key = property[1];
  //       const value = property[2];
  //       //checks to see if it is a multi-line section property
  //       if(isProtocolSupported(key)) initialize(key);
  //       else if(isDeviceList(key)) initialize(key);
  //       else if(value) sections.push([key, value]);
  //     }
  //   });

  //   return sections.map(section => {
  //     const key = section[0],
  //       raw = section[1],
  //       value = parseDeviceValue(key, raw);
  //     return { [key] : value };
  //   })
  //   .reduce((accum, property) => Object.assign(accum, property), {});
  // }
  // catch(e){
  //   console.error(e.stack);
  //   throw(e);
  // }
}


module.exports = {
	isProtocolSupported,
	isProtocolEnded,
	isDeviceList,
	isDeviceListEnded,
	isDeviceAddressBinding,
	parseDevice
};





