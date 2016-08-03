const chai = require('chai');
chai.use(require('chai-as-promised'));
chai.use(require('chai-spies'));
const expect = chai.expect;
const should = chai.should;
const fs = require('fs');

const rawText = fs.readFileSync('./dev_345Park/4138819.txt', 'utf8');
const parsedSections = require('./section-parsing-test');
const sectionMapKey = require('./sectionMap');

const parseBasic = require('./section-parsing.js').parseBasic;
const parseWithColons = require('./section-parsing.js').parseWithColons;

const genericStart = require('./index').genericStart;
const genericEnd = require('./index').genericEnd;
const divideToSections = require('./index').divideToSections;

const sectionify = require('./parseObjectsList').sectionify;
const genericStartList = require('./parseObjectsList').genericStart;
const genericEndList = require('./parseObjectsList').genericEnd;
const isDate = require('./parseObjectsList').isDate;
const isArray = require('./parseObjectsList').isArray;
const isIdObject = require('./parseObjectsList').isIdObject;
const parseToPrimitive = require('./parseObjectsList').parseToPrimitive;
const parseToDate = require('./parseObjectsList').parseToDate;
const parseToArray = require('./parseObjectsList').parseToArray;
const parseToIdObject = require('./parseObjectsList').parseToIdObject;
const parseTimeOf = require('./parseObjectsList').parseTimeOf;
const parseValue = require('./parseObjectsList').parseValue;
const parseController = require('./parseObjectsList').parseController;


describe('function divideIntoSections', function() {
	it('divides array of strings into an object with specified sections', function() {
		var sectionMap = divideToSections(rawText.split('\n'));
		expect(sectionMap).to.be.a('object');

		expect(sectionMap.vendor).to.be.a('array');
		expect(sectionMap.vendor.length).to.equal(4);
		expect(sectionMap.vendor[0]).to.equal("Vendor Name: \"TAC\"");

		expect(sectionMap['bibbs-supported']).to.be.a('array');
		expect(sectionMap['bibbs-supported'].length).to.equal(18);
		expect(sectionMap['bibbs-supported'][1]).to.equal(" DS-RP-B");

		expect(sectionMap['bacnet-standard-application-services-supported']).to.be.a('array');
		expect(sectionMap['bacnet-standard-application-services-supported'].length).to.equal(29);
		expect(sectionMap['bacnet-standard-application-services-supported'][1]).to.equal("-- services reported by this device");

		expect(sectionMap['standard-object-types-supported']).to.be.a('array');
		expect(sectionMap['standard-object-types-supported'].length).to.equal(22);
		expect(sectionMap['standard-object-types-supported'][1]).to.equal("-- objects reported by this device");

		expect(sectionMap['data-link-layer-option']).to.be.a('array');
		expect(sectionMap['data-link-layer-option'].length).to.equal(21);
		expect(sectionMap['data-link-layer-option'][1]).to.equal("-- choose the data link options supported");

		expect(sectionMap['character-sets-supported']).to.be.a('array');
		expect(sectionMap['character-sets-supported'].length).to.equal(9);
		expect(sectionMap['character-sets-supported'][1]).to.equal("-- choose any character sets supported");

		expect(sectionMap['special-functionality']).to.be.a('array');
		expect(sectionMap['special-functionality'].length).to.equal(3);
		expect(sectionMap['special-functionality'][1]).to.equal(" Maximum APDU size in octets: 1476");

		expect(sectionMap['list-of-objects-in-test-device']).to.be.a('array');
		expect(sectionMap['list-of-objects-in-test-device'].length).to.equal(6960);
		expect(sectionMap['list-of-objects-in-test-device'][2]).to.equal("    object-identifier: (device, 4138819)");
	});
});


describe('function parseBasic', function() {
	it('it removes all the right caracters from an array of strings', function() {
		expect(parseBasic(parsedSections.basic1.raw)).to.deep.equal(parsedSections.basic1.result);
		expect(parseBasic(parsedSections.basic2.raw)).to.deep.equal(parsedSections.basic2.result);
		expect(parseBasic(parsedSections.basic3.raw)).to.deep.equal(parsedSections.basic3.result);
		expect(parseBasic(parsedSections.basic4.raw)).to.deep.equal(parsedSections.basic4.result);
		expect(parseBasic(parsedSections.basic5.raw)).to.deep.equal(parsedSections.basic5.result);
	});
});


describe('function parseWithColons', function() {
	it('parses sections with colons into nice objects', function() {
		expect(parseWithColons(parsedSections.colon1.raw)).to.deep.equal(parsedSections.colon1.result);
		expect(parseWithColons(parsedSections.colon2.raw)).to.deep.equal(parsedSections.colon2.result);
	});
});


describe('function genericStart', function() {
	it('tells whether to start a new section', function() {
		expect(genericStart('{')).to.be.true;
		expect(genericStart(' {')).to.be.false;
	});
});


describe('function genericEnd', function() {
	it('tells whether to end the current section', function() {
		expect(genericEnd('}')).to.be.true;
		expect(genericEnd(' }')).to.be.false;
	});
});


// OBJECTS LIST PARSING

describe('function sectionify', function() {
	it('breaks object list section into sections', function() {
		var sections = sectionify(require('./sectionify-test'));

		expect(sections).to.be.a('object');
		expect(sections.device).to.be.a('array');
		expect(sections.device[1]).to.equal('fried lobster footsteps');
		expect(sections.device[2]).to.equal('beta-carrotene');

		expect(sections.points).to.be.a('array');
		expect(sections.points[0]).to.be.a('array');
		expect(sections.points[0][1]).to.equal('fine fruits');
		expect(sections.points[0][2]).to.equal('closet monster');

		expect(sections.points[1]).to.be.a('array');
		expect(sections.points[1][1]).to.equal('testing this is the worst');
		expect(sections.points[1][2]).to.equal('testing this is great');
	});
});

describe('function genericStart for object lists', function() {
	it('determines whether to start a new section', function() {
		expect(genericStartList('  {')).to.be.true;
		expect(genericStartList(' {')).to.be.false;
		expect(genericStartList('   {')).to.be.false;
	});
});

describe('function genericEnd for object lists', function() {
	it('determines whether to start a new section', function() {
		expect(genericEndList('  }')).to.be.true;
		expect(genericEndList(' }')).to.be.false;
		expect(genericEndList('   }')).to.be.false;
	});
});

describe('function isArray', function() {
	it('determines whether to parse into an array', function() {
		expect(isArray('{')).to.be.true;
		expect(isArray('}')).to.be.true;
		expect(isArray('lalala')).to.be.false;
	});
});

describe('function isDate', function() {
	it('determines whether to parse into a Date Object', function() {
		expect(isDate('{ (')).to.be.true;
		expect(isDate(' { (')).to.be.false;
		expect(isDate('lalala')).to.be.false;
	});
});

describe('function isIdObject', function() {
	it('determines whether to parse into a ID object', function() {
		expect(isIdObject('(')).to.be.true;
		expect(isIdObject(')')).to.be.true;
		expect(isIdObject('lalala')).to.be.false;
	});
});

describe('function parseToPrimitive', function() {
	it('returns primitive version of what a wants to be', function() {
		expect(parseToPrimitive('TRUE')).to.be.true;
		expect(parseToPrimitive('FALSE')).to.be.false;
		expect(parseToPrimitive('3.14')).to.equal(3.14);
		expect(parseToPrimitive('314')).to.equal(314);
	});
});

describe('function parseToArray', function() {
	it('parses string into an array', function() {
		const test = '{ thing, stuff  , { beatles }';
		expect(parseToArray(test)).to.deep.equal([ 'thing', 'stuff', 'beatles' ]);
	});
});

describe('function parseToArray', function() {
	it('parses string into an array', function() {
		const test = '{ thing, stuff  , { beatles }';
		expect(parseToArray(test)).to.deep.equal([ 'thing', 'stuff', 'beatles' ]);
	});
});

describe('function parseTimeOf', function() {
	it('parses correctly strings containing "time-of"', function() {
		const test1 = '(string, 314)';
		const test2 = '(string, 3.14)';
		function toNum(numStr) {return Number(numStr); }

		expect(parseTimeOf(test1, toNum)).to.deep.equal([ 'string', 314 ]);
		expect(parseTimeOf(test2, toNum)).to.deep.equal([ 'string', 3.14 ]);
	});
});

describe('function parseToIdObject', function() {
	it('parses string to object', function() {
		const test1 = '(key1, key2)';
		expect(parseToIdObject(test1)).to.deep.equal({ id: 'key2', type: 'key1' });
	});
});





