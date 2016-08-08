const chai = require('chai');
chai.use(require('chai-as-promised'));
chai.use(require('chai-spies'));
const expect = chai.expect;
const should = chai.should;
const fs = require('fs');

const rawText = fs.readFileSync('./raw.txt', 'utf8');
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
const isTimeOf = require('./parseObjectsList').isTimeOf;
const isProtocolSupported = require('./parseObjectsList').isProtocolSupported;
const isProtocolEnded = require('./parseObjectsList').isProtocolEnded;
const isDeviceList = require('./parseObjectsList').isDeviceList;
const isDeviceListEnded = require('./parseObjectsList').isDeviceListEnded;
const isDeviceAddressBinding = require('./parseObjectsList').isDeviceAddressBinding;
const parseToPrimitive = require('./parseObjectsList').parseToPrimitive;
const parseToDate = require('./parseObjectsList').parseToDate;
const parseToArray = require('./parseObjectsList').parseToArray;
const parseToIdObject = require('./parseObjectsList').parseToIdObject;
const parseTimeOf = require('./parseObjectsList').parseTimeOf;
const parseValue = require('./parseObjectsList').parseValue;
const parseDeviceValue = require('./parseObjectsList').parseDeviceValue;
const parseSupportedLine = require('./parseObjectsList').parseSupportedLine;
const parseSupported = require('./parseObjectsList').parseSupported;
const parseDeviceList = require('./parseObjectsList').parseDeviceList;
const parseDeviceAddressBinding = require('./parseObjectsList').parseDeviceAddressBinding;
const parseController = require('./parseObjectsList').parseController;
const parseDevice = require('./parseObjectsList').parseDevice;
const parseEpics = require('./index').parseEpics;


describe('epics parsing', function() {
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


	describe('parsing epics objects list', function() {
		describe('function sectionify', function() {
			it('breaks object list section into sections', function() {
				var sections = sectionify(require('./textArrs').sectionifyTest);

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

		describe('function isTimeOf', function() {
			it('identified specified string pattern', function() {
				expect(isTimeOf('time-of-lalala-reset')).to.be.true;
				expect(isTimeOf('time-of--reset')).to.be.false;
			});
		});

		describe('function isProtocolSupported', function() {
			it('identifies specified string pattern', function() {
				expect(isProtocolSupported('protocol-lalala-supported')).to.be.true;
				expect(isProtocolSupported('protocol--supported')).to.be.false;
			});
		});

		describe('function isProtocolEnded', function() {
			it('identifies specified string pattern', function() {
				expect(isProtocolEnded('        )')).to.be.true;
				expect(isProtocolEnded('       )')).to.be.false;
				expect(isProtocolEnded('         )')).to.be.false;
			});
		});

		describe('function isDeviceList', function() {
			it('identifies specified string pattern', function() {
				expect(isDeviceList('object-list')).to.be.true;
				expect(isDeviceList('object-lisst')).to.be.false;
			});
		});

		describe('function isDeviceListEnded', function() {
			it('identifies specified string pattern', function() {
				expect(isDeviceListEnded('}')).to.be.true;
				expect(isDeviceListEnded('nope')).to.be.false;
			});
		});

		describe('function isDeviceAddressBinding', function() {
			it('identifies specified string pattern', function() {
				expect(isDeviceAddressBinding('{ lalala }')).to.be.true;
				expect(isDeviceAddressBinding(' { lalala }')).to.be.false;
				expect(isDeviceAddressBinding('{ lalala } ')).to.be.false;
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
				const parseFuncs = {
					parseToPrimitive: (text) => text.toString()
				};
				expect(parseToArray(test, parseFuncs)).to.deep.equal([ 'thing', 'stuff', 'beatles' ]);
			});
		});

		describe('function parseTimeOf', function() {
			it('parses correctly strings containing "time-of"', function() {
				const test1 = '(string, 314)';
				const test2 = '(string, 3.14)';
				const parseFuncs = {
					parseToPrimitive: (numStr) => Number(numStr)
				};

				expect(parseTimeOf(test1, parseFuncs)).to.deep.equal([ 'string', 314 ]);
				expect(parseTimeOf(test2, parseFuncs)).to.deep.equal([ 'string', 3.14 ]);
			});
		});

		describe('function parseToIdObject', function() {
			it('parses string to object', function() {
				const test1 = '(key1, key2)';
				expect(parseToIdObject(test1)).to.deep.equal({ id: 'key2', type: 'key1' });
			});
		});

		// relies on isDate, isArray, and isIDObject
		describe('function parseValue', function() {
			it('chooses correct parsing function', function() {
				const test1 = 'pl"ain t"ext';
				const test2 = '{ isArray true';
				const test3 = '( isIdObject true';
				const test4 = '{ (';
				const test5 = '3.14';
				
				const parseFuncs = {
					parseToDate: () => 'parseToDate',
					parseToArray: () => 'parseToArray',
					parseToIdObject: () => 'parseToIdObject',
					parseToDate: () => 'parseToDate',
					parseToPrimitive: () => 'parseToPrimitive'
				};

				expect(parseValue(test1, parseFuncs)).to.equal('plain text');
				expect(parseValue(test2, parseFuncs)).to.equal('parseToArray');
				expect(parseValue(test3, parseFuncs)).to.equal('parseToIdObject');
				expect(parseValue(test4, parseFuncs)).to.equal('parseToDate');
				expect(parseValue(test5, parseFuncs)).to.equal('parseToPrimitive');
			});
		});

		// relies on isProtocolSupported, isDeviceList, isDeviceAddressBinding, isTimeOf
		describe('parseDeviceValue', function() {
			it('chooses correct parsing function based on key and calls it on value', function() {
				var data;
				const parseFuncs = {
					parseSupported: (val) => { data = ['parseSupported', val] },
					parseDeviceList: (val) => { data = ['parseDeviceList', val] },
					parseDeviceAddressBinding: (val) => { data = ['parseDeviceAddressBinding', val] },
					parseTimeOf: (val) => { data = ['parseTimeOf', val] },
					parseValue: (val) => { data = ['parseValue', val] }
				};

				parseDeviceValue('protocol-(.+)-supported', 'val', parseFuncs);
				expect(data).to.deep.equal(['parseSupported', 'val']);

				parseDeviceValue('object-list', 'val', parseFuncs);
				expect(data).to.deep.equal(['parseDeviceList', 'val']);

				parseDeviceValue('', '{ lalala }', parseFuncs);
				expect(data).to.deep.equal(['parseDeviceAddressBinding', '{ lalala }']);

				parseDeviceValue('time-of-(.+)-reset', 'val', parseFuncs);
				expect(data).to.deep.equal(['parseTimeOf', 'val']);

				parseDeviceValue('lalala', 'val', parseFuncs);
				expect(data).to.deep.equal(['parseValue', 'val']);
			});
		});

		// relies on isTimeOf
		describe('parseController', function() {
			it('parses text array into controller object', function() {
				const parseFuncs = {
					parseTimeOf: () => 'parseTimeOf',
					parseValue: () => 'parseValue'
				};
				const rawController = require('./textArrs').parseControllerTest;
				const parsed = parseController(rawController, parseFuncs);
				
				expect(parsed['description']).to.equal('parseValue');
				expect(parsed['object-name']).to.equal('parseValue');
				expect(parsed['object-type']).to.equal('parseTimeOf');
				expect(parsed['out-of-service']).to.equal('parseValue');
				expect(parsed['program-change']).to.equal('parseTimeOf');
				expect(parsed['program-state']).to.equal('parseValue');
				expect(parsed['status-flags']).to.equal('parseValue');
			});
		});

		describe('parseSupportedLine', function() {
			it('correctly parses a line of "protocol supported" section', function() {
				const in1 = '';
				const out1 = [];

				const in2 = '        F    -- ,'
				const out2 = [ { raw: 'F', key: '', value: false } ];

				const in3 = '        T,F,F,F,   --  trend-log,,,,';
				const out3 = [ { raw: 'T', key: 'trend-log', value: true },
				  { raw: 'F', key: '', value: false },
				  { raw: 'F', key: '', value: false },
				  { raw: 'F', key: '', value: false } ];

				const in4 = '        T,T,F,T,   --  program, schedule,, multi-state-value,';
				const out4 =  [ { raw: 'T', key: 'program', value: true },
				  { raw: 'T', key: 'schedule', value: true },
				  { raw: 'F', key: '', value: false },
				  { raw: 'T', key: 'multi-state-value', value: true } ];

				expect(parseSupportedLine(in1)).to.deep.equal(out1);
				expect(parseSupportedLine(in2)).to.deep.equal(out2);
				expect(parseSupportedLine(in3)).to.deep.equal(out3);
				expect(parseSupportedLine(in4)).to.deep.equal(out4);
			});
		});
		
		describe('function parseSupported', function() {
			it('parses supported protocols section', function() {
				const parseFuncs = {
					parseSupportedLine: (text) => [text, text]
				};

				const in2 = ['la', 'lala', 'lalala'];
				const out2 = [ 'la', 'la', 'lala', 'lala', 'lalala', 'lalala' ];

				expect(parseSupported([], parseFuncs)).to.deep.equal([]);
				expect(parseSupported(in2, parseFuncs)).to.deep.equal(out2);
			});
		});

		describe('function parseDeviceList', function() {
			it('parses device list into array of objects', function() {
				const parseFuncs = {
					parseToIdObject: (text) => { return {key: text}; }
				};
				const in1 = ['    (hi), (hi), (hi), (hi)',
					'    (hi), (hi), (hi), (hi)',
					'    (hi), (hi), (hi), (hi)' ];
				const out1 = [{key: '(hi)'}, {key: '(hi)'}, {key: '(hi)'}, {key: '(hi)'}, {key: '(hi)'}, {key: '(hi)'}, {key: '(hi)'}, {key: '(hi)'}, {key: '(hi)'}, {key: '(hi)'}, {key: '(hi)'}, {key: '(hi)'}, ];
				expect(parseDeviceList(in1, parseFuncs)).to.deep.equal(out1);
			});
		});

		describe('function parseDeviceAddressBinding', function() {
			it('parses the address bindings into an array of objects', function() {
				const parseFuncs = {
					parseToIdObject: (text) => text + 'parseToIdObject',
					parseToPrimitive: (text) => text + 'parseToPrimitive'
				};
				const in1 = '{ (device, 4138819),1,C0A802D1BAC0,(device, 4098468),1,C0A802C8BAC0,(device, 4030322),2765,25,(device, 4006295),2766,32 }';
				const out1 = parseDeviceAddressBinding(in1, parseFuncs);

				expect(out1).to.be.a('array');
				expect(out1.length).to.equal(4);

				expect(out1[0].controller).to.equal('(device, 4138819)parseToIdObject');
				expect(out1[0].value).to.equal('1parseToPrimitive');
				expect(out1[0].address).to.equal('C0A802D1BAC0');

				expect(out1[1].controller).to.equal('(device, 4098468)parseToIdObject');
				expect(out1[1].value).to.equal('1parseToPrimitive');
				expect(out1[1].address).to.equal('C0A802C8BAC0');

				expect(out1[2].controller).to.equal('(device, 4030322)parseToIdObject');
				expect(out1[2].value).to.equal('2765parseToPrimitive');
				expect(out1[2].address).to.equal('25');

				expect(out1[3].controller).to.equal('(device, 4006295)parseToIdObject');
				expect(out1[3].value).to.equal('2766parseToPrimitive');
				expect(out1[3].address).to.equal('32');
			});
		});

		// This is a driver function: it depends on many of the functions tested above
		describe('function parseDevice', function() {
			it('parses device section of epics output', function() {
				const unparsedDevice = require('./unparsedDevice');
				const parsedDevice = require('./parsedDevice');
				expect(parseDevice(unparsedDevice)).to.deep.equal(parsedDevice);
			});
		});

	});

});



