'use strict';

const KEYS = require('./constants').KEYS;
const parseBasic = require('./section-parsing').parseBasic;
const parseWithColons = require('./section-parsing').parseWithColons;
const parseObjectsList = require('./parseObjectsList').parseObjectsList;


// CREATING THE SECTIONS
function genericStart(text){
	return /^{/.test(text);
}

function genericEnd(text){
  	return /^}/.test(text);
}

const nameToParser = {
  [KEYS.VENDOR] : parseWithColons,
  [KEYS.BIBBS] : parseBasic,
  [KEYS.SERVICES] : parseBasic,
  [KEYS.TYPES] : parseBasic,
  [KEYS.LINK] : parseBasic,
  [KEYS.CHARSET] : parseBasic,
  [KEYS.FUNCTIONALITY] : parseWithColons,
  [KEYS.LIST] : parseObjectsList
};

const sections = [
  {
    name : KEYS.VENDOR,
    startOn : text => text.indexOf('Vendor') > -1,
    endOn : text => text.indexOf('Product Description') > -1
  },
  {
    name : KEYS.BIBBS,
    startOn : genericStart,
    endOn : genericEnd
  },
  {
    name : KEYS.SERVICES,
    startOn : genericStart,
    endOn : genericEnd,
  },
  {
    name : KEYS.TYPES,
    startOn : genericStart,
    endOn : genericEnd
  },
  {
    name : KEYS.LINK,
    startOn : genericStart,
    endOn : genericEnd
  },
  {
    name : KEYS.CHARSET,
    startOn : genericStart,
    endOn : genericEnd
  },
  {
    name : KEYS.FUNCTIONALITY,
    startOn : genericStart,
    endOn : genericEnd
  },
  {
    name : KEYS.LIST,
    startOn : genericStart,
    endOn : genericEnd
  }
];


// loop through the array of the lines of the epics string
// and aggragate each sect into a key:value pair in a single object
function divideToSections(textArr){
    let currentIndex = 0;
    let currentSection = sections[currentIndex];
    let hasStarted = false;
    let map = {};
    let temp = [];

    //splits the big text to smaller sections
    textArr.forEach((line, i) => {
      if(currentSection){
        //checks when to start and when to end
        if(!hasStarted && currentSection.startOn(line)) hasStarted = true;
        else if(hasStarted && currentSection.endOn(line)) {
          //push the last chunk of data
          temp.push(line);

          //set to the map
          map[currentSection.name] = temp;

          //set to the next one
          currentIndex++;
          currentSection = sections[currentIndex];

          //reset
          temp = [];
          hasStarted = false;
        }

        //if has started, push to array
        if(hasStarted) temp.push(line);
      }
    });

    return map;
}

// DRIVER
function parseEpics(text){
  if (text.slice(0,4) !== 'PICS') return { error: text.replace(/\rError:|ERROR/, '') };

  var sectionMap = divideToSections(text.split('\n'));

    // parse each section with correct parsing function
	for (var key in sectionMap) {
		const value = sectionMap[key];
	  const parser = nameToParser[key];
	  sectionMap[key] = parser(value);
	}

	return sectionMap;
}


module.exports = {
	genericStart,
	genericEnd,
	divideToSections,
	parseEpics
};

var raw = require('fs').readFileSync('./dev_345Park/4138819.txt', 'utf8');
parseEpics(raw);




