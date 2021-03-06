const basic1 = {
	raw: [ '{',
	  ' DS-RP-B',
	  '-- possible BIBBs in this device',
	  '-- DS-RPM-B',
	  '-- DS-WP-B',
	  '-- DM-DDB-B',
	  '-- DM-DOB-B',
	  '-- DM-DCC-B',
	  '-- DM-RD-B',
	  '-- DS-COV-A',
	  '-- DS-COV-B',
	  '-- AE-N-A',
	  '-- AE-N-I-B',
	  '-- AE-N-E-B',
	  '-- AE-ACK-B',
	  '-- AE-ACK-A',
	  '-- DM-UTC-B',
	  '}' ],
	result: [ 
	  'DS-RP-B',
	  'DS-RPM-B',
	  'DS-WP-B',
	  'DM-DDB-B',
	  'DM-DOB-B',
	  'DM-DCC-B',
	  'DM-RD-B',
	  'DS-COV-A',
	  'DS-COV-B',
	  'AE-N-A',
	  'AE-N-I-B',
	  'AE-N-E-B',
	  'AE-ACK-B',
	  'AE-ACK-A',
	  'DM-UTC-B' ]
};

const basic2 = {
	raw: [ '{',
	  '-- services reported by this device',
	  ' Acknowledge-Alarm',
	  ' COV-Notification',
	  ' Event-Notification',
	  ' Get-Enrollment-Summary',
	  ' Subscribe-COV',
	  ' Atomic-Read-File',
	  ' Atomic-Write-File',
	  ' Create-Object',
	  ' Delete-Object',
	  ' Read-Property',
	  ' Read-Property-Conditional',
	  ' Read-Property-Multiple',
	  ' Write-Property',
	  ' Write-Property-Multiple',
	  ' Device-Communication-Control',
	  ' Reinitialize-Device',
	  ' I-Am',
	  ' I-Have',
	  ' COV-Notification',
	  ' Event-Notification',
	  ' Time-Synchronization',
	  ' Who-Has',
	  ' Who-Is',
	  ' Read-Range',
	  ' UTC-Time-Synchronization',
	  ' Get-Event-Information',
	  '}' ],
	result: [ 
	  'Acknowledge-Alarm',
	  'COV-Notification',
	  'Event-Notification',
	  'Get-Enrollment-Summary',
	  'Subscribe-COV',
	  'Atomic-Read-File',
	  'Atomic-Write-File',
	  'Create-Object',
	  'Delete-Object',
	  'Read-Property',
	  'Read-Property-Conditional',
	  'Read-Property-Multiple',
	  'Write-Property',
	  'Write-Property-Multiple',
	  'Device-Communication-Control',
	  'Reinitialize-Device',
	  'I-Am',
	  'I-Have',
	  'COV-Notification',
	  'Event-Notification',
	  'Time-Synchronization',
	  'Who-Has',
	  'Who-Is',
	  'Read-Range',
	  'UTC-Time-Synchronization',
	  'Get-Event-Information' ]
};

const basic3 = {
	raw: [ '{',
	  '-- objects reported by this device',
	  ' analog-input',
	  ' analog-output',
	  ' analog-value',
	  ' binary-input',
	  ' binary-output',
	  ' binary-value',
	  ' calendar',
	  ' command',
	  ' device',
	  ' event-enrollment',
	  ' file',
	  ' loop',
	  ' multi-state-input',
	  ' multi-state-output',
	  ' notification-class',
	  ' program',
	  ' schedule',
	  ' multi-state-value',
	  ' trend-log',
	  '}' ],
	result: [ 
	  'analog-input',
	  'analog-output',
	  'analog-value',
	  'binary-input',
	  'binary-output',
	  'binary-value',
	  'calendar',
	  'command',
	  'device',
	  'event-enrollment',
	  'file',
	  'loop',
	  'multi-state-input',
	  'multi-state-output',
	  'notification-class',
	  'program',
	  'schedule',
	  'multi-state-value',
	  'trend-log' ]
};

const basic4 = {
	raw: [ '{',
	  '-- choose the data link options supported',
	  '-- ISO 8802-3, 10BASE5',
	  '-- ISO 8802-3, 10BASE2',
	  '-- ISO 8802-3, 10BASET',
	  '-- ISO 8802-3, fiber',
	  '-- ARCNET, coax star',
	  '-- ARCNET, coax bus',
	  '-- ARCNET, twisted pair star ',
	  '-- ARCNET, twisted pair bus',
	  '-- ARCNET, fiber star',
	  '-- ARCNET, twisted pair, EIA-485, Baud rate(s): 156000',
	  '-- MS/TP master. Baud rate(s): 9600, 38400',
	  '-- MS/TP slave. Baud rate(s): 9600, 38400',
	  '-- Point-To-Point. EIA 232, Baud rate(s): 9600',
	  '-- Point-To-Point. Modem, Baud rate(s): 9600',
	  '-- Point-To-Point. Modem, Baud rate(s): 9600 to 115200',
	  '-- BACnet/IP, \'DIX\' Ethernet',
	  '-- BACnet/IP, Other',
	  '-- Other',
	  '}' ],
	result: [ 
	  'ISO 8802-3, 10BASE5',
	  'ISO 8802-3, 10BASE2',
	  'ISO 8802-3, 10BASET',
	  'ISO 8802-3, fiber',
	  'ARCNET, coax star',
	  'ARCNET, coax bus',
	  'ARCNET, twisted pair star',
	  'ARCNET, twisted pair bus',
	  'ARCNET, fiber star',
	  'ARCNET, twisted pair, EIA-485, Baud rate(s): 156000',
	  'MS/TP master. Baud rate(s): 9600, 38400',
	  'MS/TP slave. Baud rate(s): 9600, 38400',
	  'Point-To-Point. EIA 232, Baud rate(s): 9600',
	  'Point-To-Point. Modem, Baud rate(s): 9600',
	  'Point-To-Point. Modem, Baud rate(s): 9600 to 115200',
	  'BACnet/IP, \'DIX\' Ethernet',
	  'BACnet/IP, Other',
	  'Other' ]
};

const basic5 = {
	raw: [ '{',
	  '-- choose any character sets supported',
	  '-- ANSI X3.4',
	  '-- IBM/Microsoft DBCS',
	  '-- JIS C 6226',
	  '-- ISO 8859-1',
	  '-- ISO 10646 (UCS-4)',
	  '-- ISO 10646 (UCS2)',
	  '}' ],
	result: [ 
	  'ANSI X3.4',
	  'IBM/Microsoft DBCS',
	  'JIS C 6226',
	  'ISO 8859-1',
	  'ISO 10646 (UCS-4)',
	  'ISO 10646 (UCS2)' ]
};


const colon1 = {
	raw: [
	  'Vendor Name: "TAC"',
	  'Product Name: "bCX1-CR"',
	  'Product Model Number: "bCX1-CR"',
	  'Product Description: ""' ],
  	result: { 
	  'Vendor Name': 'TAC',
	  'Product Name': 'bCX1-CR',
	  'Product Model Number': 'bCX1-CR',
	  'Product Description': '' 
	}
};

const colon2 = {
	raw: [ '{', ' Maximum APDU size in octets: 1476', '}' ],
	result: { 'Maximum APDU size in octets': '1476' }
};


module.exports = {
	basic1,
	basic2,
	basic3,
	basic4,
	basic5,
	colon1,
	colon2
};




