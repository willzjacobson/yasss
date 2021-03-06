module.exports = {
  "vendor": {
    "Vendor Name": "TAC",
    "Product Name": "bCX1-CR",
    "Product Model Number": "bCX1-CR",
    "Product Description": ""
  },
  "bibbs-supported": [
    "DS-RP-B",
    "DS-RPM-B",
    "DS-WP-B",
    "DM-DDB-B",
    "DM-DOB-B",
    "DM-DCC-B",
    "DM-RD-B",
    "DS-COV-A",
    "DS-COV-B",
    "AE-N-A",
    "AE-N-I-B",
    "AE-N-E-B",
    "AE-ACK-B",
    "AE-ACK-A",
    "DM-UTC-B"
  ],
  "bacnet-standard-application-services-supported": [
    "Acknowledge-Alarm",
    "COV-Notification",
    "Event-Notification",
    "Get-Enrollment-Summary",
    "Subscribe-COV",
    "Atomic-Read-File",
    "Atomic-Write-File",
    "Create-Object",
    "Delete-Object",
    "Read-Property",
    "Read-Property-Conditional",
    "Read-Property-Multiple",
    "Write-Property",
    "Write-Property-Multiple",
    "Device-Communication-Control",
    "Reinitialize-Device",
    "I-Am",
    "I-Have",
    "COV-Notification",
    "Event-Notification",
    "Time-Synchronization",
    "Who-Has",
    "Who-Is",
    "Read-Range",
    "UTC-Time-Synchronization",
    "Get-Event-Information"
  ],
  "standard-object-types-supported": [
    "analog-input",
    "analog-output",
    "analog-value",
    "binary-input",
    "binary-output",
    "binary-value",
    "calendar",
    "command",
    "device",
    "event-enrollment",
    "file",
    "loop",
    "multi-state-input",
    "multi-state-output",
    "notification-class",
    "program",
    "schedule",
    "multi-state-value",
    "trend-log"
  ],
  "data-link-layer-option": [
    "ISO 8802-3, 10BASE5",
    "ISO 8802-3, 10BASE2",
    "ISO 8802-3, 10BASET",
    "ISO 8802-3, fiber",
    "ARCNET, coax star",
    "ARCNET, coax bus",
    "ARCNET, twisted pair star",
    "ARCNET, twisted pair bus",
    "ARCNET, fiber star",
    "ARCNET, twisted pair, EIA-485, Baud rate(s): 156000",
    "MS\/TP master. Baud rate(s): 9600, 38400",
    "MS\/TP slave. Baud rate(s): 9600, 38400",
    "Point-To-Point. EIA 232, Baud rate(s): 9600",
    "Point-To-Point. Modem, Baud rate(s): 9600",
    "Point-To-Point. Modem, Baud rate(s): 9600 to 115200",
    "BACnet\/IP, 'DIX' Ethernet",
    "BACnet\/IP, Other",
    "Other"
  ],
  "character-sets-supported": [
    "ANSI X3.4",
    "IBM\/Microsoft DBCS",
    "JIS C 6226",
    "ISO 8859-1",
    "ISO 10646 (UCS-4)",
    "ISO 10646 (UCS2)"
  ],
  "special-functionality": {
    "Maximum APDU size in octets": "1476"
  },
  "list-of-objects-in-test-device": {
    "device": {
      "object-identifier": {
        "id": "4138819",
        "type": "device"
      },
      "object-name": "BCXDiBoss",
      "object-type": "device",
      "system-status": "operational",
      "vendor-name": "TAC",
      "vendor-identifier": 10,
      "model-name": "bCX1-CR",
      "firmware-revision": "Bootloader 4.500065",
      "application-software-version": "Firmware 4.500065",
      "protocol-version": 1,
      "protocol-revision": 4,
      "protocol-services-supported": [
        {
          "raw": "T",
          "key": "Acknowledge-Alarm",
          "value": true
        },
        {
          "raw": "T",
          "key": "COV-Notification",
          "value": true
        },
        {
          "raw": "T",
          "key": "Event-Notification",
          "value": true
        },
        {
          "raw": "F",
          "key": "",
          "value": false
        },
        {
          "raw": "T",
          "key": "Get-Enrollment-Summary",
          "value": true
        },
        {
          "raw": "T",
          "key": "Subscribe-COV",
          "value": true
        },
        {
          "raw": "T",
          "key": "Atomic-Read-File",
          "value": true
        },
        {
          "raw": "T",
          "key": "Atomic-Write-File",
          "value": true
        },
        {
          "raw": "F",
          "key": "",
          "value": false
        },
        {
          "raw": "F",
          "key": "",
          "value": false
        },
        {
          "raw": "T",
          "key": "Create-Object",
          "value": true
        },
        {
          "raw": "T",
          "key": "Delete-Object",
          "value": true
        },
        {
          "raw": "T",
          "key": "Read-Property",
          "value": true
        },
        {
          "raw": "T",
          "key": "Read-Property-Conditional",
          "value": true
        },
        {
          "raw": "T",
          "key": "Read-Property-Multiple",
          "value": true
        },
        {
          "raw": "T",
          "key": "Write-Property",
          "value": true
        },
        {
          "raw": "T",
          "key": "Write-Property-Multiple",
          "value": true
        },
        {
          "raw": "T",
          "key": "Device-Communication-Control",
          "value": true
        },
        {
          "raw": "F",
          "key": "",
          "value": false
        },
        {
          "raw": "F",
          "key": "",
          "value": false
        },
        {
          "raw": "T",
          "key": "Reinitialize-Device",
          "value": true
        },
        {
          "raw": "F",
          "key": "",
          "value": false
        },
        {
          "raw": "F",
          "key": "",
          "value": false
        },
        {
          "raw": "F",
          "key": "",
          "value": false
        },
        {
          "raw": "F",
          "key": "",
          "value": false
        },
        {
          "raw": "F",
          "key": "",
          "value": false
        },
        {
          "raw": "T",
          "key": "I-Am",
          "value": true
        },
        {
          "raw": "T",
          "key": "I-Have",
          "value": true
        },
        {
          "raw": "T",
          "key": "COV-Notification",
          "value": true
        },
        {
          "raw": "T",
          "key": "Event-Notification",
          "value": true
        },
        {
          "raw": "F",
          "key": "",
          "value": false
        },
        {
          "raw": "F",
          "key": "",
          "value": false
        },
        {
          "raw": "T",
          "key": "Time-Synchronization",
          "value": true
        },
        {
          "raw": "T",
          "key": "Who-Has",
          "value": true
        },
        {
          "raw": "T",
          "key": "Who-Is",
          "value": true
        },
        {
          "raw": "T",
          "key": "Read-Range",
          "value": true
        },
        {
          "raw": "T",
          "key": "UTC-Time-Synchronization",
          "value": true
        },
        {
          "raw": "F",
          "key": "",
          "value": false
        },
        {
          "raw": "F",
          "key": "",
          "value": false
        },
        {
          "raw": "T",
          "key": "Get-Event-Information",
          "value": true
        }
      ],
      "protocol-object-types-supported": [
        {
          "raw": "T",
          "key": "analog-input",
          "value": true
        },
        {
          "raw": "T",
          "key": "analog-output",
          "value": true
        },
        {
          "raw": "T",
          "key": "analog-value",
          "value": true
        },
        {
          "raw": "T",
          "key": "binary-input",
          "value": true
        },
        {
          "raw": "T",
          "key": "binary-output",
          "value": true
        },
        {
          "raw": "T",
          "key": "binary-value",
          "value": true
        },
        {
          "raw": "T",
          "key": "calendar",
          "value": true
        },
        {
          "raw": "T",
          "key": "command",
          "value": true
        },
        {
          "raw": "T",
          "key": "device",
          "value": true
        },
        {
          "raw": "T",
          "key": "event-enrollment",
          "value": true
        },
        {
          "raw": "T",
          "key": "file",
          "value": true
        },
        {
          "raw": "F",
          "key": "",
          "value": false
        },
        {
          "raw": "T",
          "key": "loop",
          "value": true
        },
        {
          "raw": "T",
          "key": "multi-state-input",
          "value": true
        },
        {
          "raw": "T",
          "key": "multi-state-output",
          "value": true
        },
        {
          "raw": "T",
          "key": "notification-class",
          "value": true
        },
        {
          "raw": "T",
          "key": "program",
          "value": true
        },
        {
          "raw": "T",
          "key": "schedule",
          "value": true
        },
        {
          "raw": "F",
          "key": "",
          "value": false
        },
        {
          "raw": "T",
          "key": "multi-state-value",
          "value": true
        },
        {
          "raw": "T",
          "key": "trend-log",
          "value": true
        },
        {
          "raw": "F",
          "key": "",
          "value": false
        },
        {
          "raw": "F",
          "key": "",
          "value": false
        },
        {
          "raw": "F",
          "key": "",
          "value": false
        },
        {
          "raw": "F",
          "key": "",
          "value": false
        }
      ],
      "object-list": [
        {
          "id": "4138819",
          "type": "device"
        },
        {
          "id": "1",
          "type": "file"
        },
        {
          "id": "7608",
          "type": "program"
        },
        {
          "id": "7609",
          "type": "program"
        },
        {
          "id": "7610",
          "type": "program"
        },
        {
          "id": "7611",
          "type": "program"
        },
        {
          "id": "7612",
          "type": "program"
        },
        {
          "id": "7613",
          "type": "program"
        },
        {
          "id": "7614",
          "type": "program"
        },
        {
          "id": "7617",
          "type": "program"
        },
        {
          "id": "7018",
          "type": "program"
        },
        {
          "id": "7137",
          "type": "binary-value"
        },
        {
          "id": "7138",
          "type": "analog-value"
        },
        {
          "id": "7139",
          "type": "analog-value"
        },
        {
          "id": "7140",
          "type": "analog-value"
        },
        {
          "id": "7141",
          "type": "analog-value"
        },
        {
          "id": "7143",
          "type": "analog-value"
        },
        {
          "id": "7144",
          "type": "analog-value"
        },
        {
          "id": "7142",
          "type": "analog-value"
        },
        {
          "id": "7145",
          "type": "analog-value"
        },
        {
          "id": "7146",
          "type": "analog-value"
        },
        {
          "id": "7486",
          "type": "binary-value"
        },
        {
          "id": "7487",
          "type": "binary-value"
        },
        {
          "id": "7488",
          "type": "binary-value"
        },
        {
          "id": "7489",
          "type": "binary-value"
        },
        {
          "id": "7491",
          "type": "binary-value"
        },
        {
          "id": "7492",
          "type": "binary-value"
        },
        {
          "id": "7493",
          "type": "binary-value"
        },
        {
          "id": "7494",
          "type": "binary-value"
        },
        {
          "id": "7495",
          "type": "binary-value"
        },
        {
          "id": "7496",
          "type": "binary-value"
        },
        {
          "id": "7497",
          "type": "binary-value"
        },
        {
          "id": "7481",
          "type": "binary-value"
        },
        {
          "id": "7498",
          "type": "binary-value"
        },
        {
          "id": "7499",
          "type": "binary-value"
        },
        {
          "id": "7500",
          "type": "binary-value"
        },
        {
          "id": "7484",
          "type": "binary-value"
        },
        {
          "id": "7483",
          "type": "binary-value"
        },
        {
          "id": "7482",
          "type": "binary-value"
        },
        {
          "id": "7485",
          "type": "binary-value"
        },
        {
          "id": "7490",
          "type": "binary-value"
        },
        {
          "id": "7401",
          "type": "analog-value"
        },
        {
          "id": "7402",
          "type": "analog-value"
        },
        {
          "id": "7403",
          "type": "analog-value"
        },
        {
          "id": "7404",
          "type": "analog-value"
        },
        {
          "id": "7408",
          "type": "analog-value"
        },
        {
          "id": "7409",
          "type": "analog-value"
        },
        {
          "id": "7410",
          "type": "analog-value"
        },
        {
          "id": "7411",
          "type": "analog-value"
        },
        {
          "id": "7412",
          "type": "analog-value"
        },
        {
          "id": "7413",
          "type": "analog-value"
        },
        {
          "id": "7414",
          "type": "analog-value"
        },
        {
          "id": "7396",
          "type": "analog-value"
        },
        {
          "id": "7415",
          "type": "analog-value"
        },
        {
          "id": "7416",
          "type": "analog-value"
        },
        {
          "id": "7417",
          "type": "analog-value"
        },
        {
          "id": "7399",
          "type": "analog-value"
        },
        {
          "id": "7398",
          "type": "analog-value"
        },
        {
          "id": "7397",
          "type": "analog-value"
        },
        {
          "id": "7400",
          "type": "analog-value"
        },
        {
          "id": "7406",
          "type": "analog-value"
        },
        {
          "id": "7407",
          "type": "analog-value"
        },
        {
          "id": "7405",
          "type": "analog-value"
        },
        {
          "id": "7147",
          "type": "analog-value"
        },
        {
          "id": "7149",
          "type": "analog-value"
        },
        {
          "id": "7148",
          "type": "analog-value"
        },
        {
          "id": "7152",
          "type": "analog-value"
        },
        {
          "id": "7150",
          "type": "analog-value"
        },
        {
          "id": "7151",
          "type": "analog-value"
        },
        {
          "id": "7153",
          "type": "binary-value"
        },
        {
          "id": "7154",
          "type": "binary-value"
        },
        {
          "id": "7155",
          "type": "binary-value"
        },
        {
          "id": "7156",
          "type": "binary-value"
        },
        {
          "id": "7157",
          "type": "binary-value"
        },
        {
          "id": "7158",
          "type": "binary-value"
        },
        {
          "id": "7160",
          "type": "binary-value"
        },
        {
          "id": "7159",
          "type": "binary-value"
        },
        {
          "id": "7161",
          "type": "binary-value"
        },
        {
          "id": "7501",
          "type": "analog-value"
        },
        {
          "id": "7502",
          "type": "analog-value"
        },
        {
          "id": "7503",
          "type": "analog-value"
        },
        {
          "id": "7504",
          "type": "analog-value"
        },
        {
          "id": "7505",
          "type": "analog-value"
        },
        {
          "id": "7506",
          "type": "analog-value"
        },
        {
          "id": "7513",
          "type": "analog-value"
        },
        {
          "id": "7507",
          "type": "analog-value"
        },
        {
          "id": "7508",
          "type": "analog-value"
        },
        {
          "id": "7509",
          "type": "analog-value"
        },
        {
          "id": "7510",
          "type": "analog-value"
        },
        {
          "id": "7511",
          "type": "analog-value"
        },
        {
          "id": "7512",
          "type": "analog-value"
        },
        {
          "id": "7520",
          "type": "analog-value"
        },
        {
          "id": "7514",
          "type": "analog-value"
        },
        {
          "id": "7515",
          "type": "analog-value"
        },
        {
          "id": "7516",
          "type": "analog-value"
        },
        {
          "id": "7517",
          "type": "analog-value"
        },
        {
          "id": "7518",
          "type": "analog-value"
        },
        {
          "id": "7519",
          "type": "analog-value"
        },
        {
          "id": "7521",
          "type": "analog-value"
        },
        {
          "id": "7522",
          "type": "analog-value"
        },
        {
          "id": "7523",
          "type": "analog-value"
        },
        {
          "id": "7585",
          "type": "analog-value"
        },
        {
          "id": "7575",
          "type": "analog-value"
        },
        {
          "id": "7576",
          "type": "analog-value"
        },
        {
          "id": "7577",
          "type": "analog-value"
        },
        {
          "id": "7578",
          "type": "analog-value"
        },
        {
          "id": "7579",
          "type": "analog-value"
        },
        {
          "id": "7580",
          "type": "analog-value"
        },
        {
          "id": "7581",
          "type": "analog-value"
        },
        {
          "id": "7582",
          "type": "analog-value"
        },
        {
          "id": "7583",
          "type": "analog-value"
        },
        {
          "id": "7584",
          "type": "analog-value"
        },
        {
          "id": "7588",
          "type": "analog-value"
        },
        {
          "id": "7586",
          "type": "analog-value"
        },
        {
          "id": "7589",
          "type": "analog-value"
        },
        {
          "id": "7590",
          "type": "analog-value"
        },
        {
          "id": "7591",
          "type": "analog-value"
        },
        {
          "id": "7592",
          "type": "analog-value"
        },
        {
          "id": "7593",
          "type": "analog-value"
        },
        {
          "id": "7594",
          "type": "analog-value"
        },
        {
          "id": "7595",
          "type": "analog-value"
        },
        {
          "id": "7587",
          "type": "analog-value"
        },
        {
          "id": "7162",
          "type": "binary-value"
        },
        {
          "id": "7163",
          "type": "binary-value"
        },
        {
          "id": "7164",
          "type": "binary-value"
        },
        {
          "id": "7165",
          "type": "binary-value"
        },
        {
          "id": "7166",
          "type": "binary-value"
        },
        {
          "id": "7167",
          "type": "binary-value"
        },
        {
          "id": "7168",
          "type": "binary-value"
        },
        {
          "id": "7169",
          "type": "binary-value"
        },
        {
          "id": "7524",
          "type": "analog-value"
        },
        {
          "id": "7618",
          "type": "analog-value"
        },
        {
          "id": "7619",
          "type": "analog-value"
        },
        {
          "id": "7620",
          "type": "analog-value"
        },
        {
          "id": "7173",
          "type": "analog-value"
        },
        {
          "id": "7171",
          "type": "analog-value"
        },
        {
          "id": "7172",
          "type": "analog-value"
        },
        {
          "id": "7170",
          "type": "analog-value"
        },
        {
          "id": "7174",
          "type": "binary-value"
        },
        {
          "id": "7175",
          "type": "binary-value"
        },
        {
          "id": "7525",
          "type": "binary-value"
        },
        {
          "id": "7526",
          "type": "binary-value"
        },
        {
          "id": "7527",
          "type": "binary-value"
        },
        {
          "id": "7528",
          "type": "binary-value"
        },
        {
          "id": "7529",
          "type": "analog-value"
        },
        {
          "id": "7530",
          "type": "binary-value"
        },
        {
          "id": "7176",
          "type": "analog-value"
        },
        {
          "id": "7177",
          "type": "analog-value"
        },
        {
          "id": "7531",
          "type": "analog-value"
        },
        {
          "id": "7621",
          "type": "analog-value"
        },
        {
          "id": "7179",
          "type": "analog-value"
        },
        {
          "id": "7178",
          "type": "analog-value"
        },
        {
          "id": "7532",
          "type": "analog-value"
        },
        {
          "id": "7180",
          "type": "analog-value"
        },
        {
          "id": "7181",
          "type": "analog-value"
        },
        {
          "id": "7533",
          "type": "analog-value"
        },
        {
          "id": "7182",
          "type": "analog-value"
        },
        {
          "id": "7183",
          "type": "analog-value"
        },
        {
          "id": "7184",
          "type": "analog-value"
        },
        {
          "id": "7185",
          "type": "analog-value"
        },
        {
          "id": "7534",
          "type": "analog-value"
        },
        {
          "id": "7535",
          "type": "binary-value"
        },
        {
          "id": "7536",
          "type": "binary-value"
        },
        {
          "id": "7537",
          "type": "binary-value"
        },
        {
          "id": "7538",
          "type": "binary-value"
        },
        {
          "id": "7539",
          "type": "binary-value"
        },
        {
          "id": "7540",
          "type": "binary-value"
        },
        {
          "id": "7541",
          "type": "binary-value"
        },
        {
          "id": "7542",
          "type": "binary-value"
        },
        {
          "id": "7543",
          "type": "binary-value"
        },
        {
          "id": "7544",
          "type": "binary-value"
        },
        {
          "id": "7545",
          "type": "binary-value"
        },
        {
          "id": "7546",
          "type": "binary-value"
        },
        {
          "id": "7547",
          "type": "binary-value"
        },
        {
          "id": "7548",
          "type": "binary-value"
        },
        {
          "id": "7549",
          "type": "binary-value"
        },
        {
          "id": "7550",
          "type": "binary-value"
        },
        {
          "id": "7551",
          "type": "binary-value"
        },
        {
          "id": "7552",
          "type": "binary-value"
        },
        {
          "id": "7553",
          "type": "binary-value"
        },
        {
          "id": "7554",
          "type": "binary-value"
        },
        {
          "id": "7555",
          "type": "binary-value"
        },
        {
          "id": "7556",
          "type": "binary-value"
        },
        {
          "id": "7557",
          "type": "binary-value"
        },
        {
          "id": "7558",
          "type": "binary-value"
        },
        {
          "id": "7559",
          "type": "binary-value"
        },
        {
          "id": "7560",
          "type": "binary-value"
        },
        {
          "id": "7561",
          "type": "binary-value"
        },
        {
          "id": "7562",
          "type": "binary-value"
        },
        {
          "id": "7563",
          "type": "binary-value"
        },
        {
          "id": "7564",
          "type": "binary-value"
        },
        {
          "id": "7565",
          "type": "binary-value"
        },
        {
          "id": "7566",
          "type": "binary-value"
        },
        {
          "id": "7418",
          "type": "analog-value"
        },
        {
          "id": "7419",
          "type": "analog-value"
        },
        {
          "id": "7420",
          "type": "analog-value"
        },
        {
          "id": "7421",
          "type": "analog-value"
        },
        {
          "id": "7422",
          "type": "analog-value"
        },
        {
          "id": "7423",
          "type": "analog-value"
        },
        {
          "id": "7424",
          "type": "analog-value"
        },
        {
          "id": "7425",
          "type": "analog-value"
        },
        {
          "id": "7426",
          "type": "analog-value"
        },
        {
          "id": "7427",
          "type": "analog-value"
        },
        {
          "id": "7428",
          "type": "analog-value"
        },
        {
          "id": "7429",
          "type": "analog-value"
        },
        {
          "id": "7430",
          "type": "analog-value"
        },
        {
          "id": "7431",
          "type": "analog-value"
        },
        {
          "id": "7432",
          "type": "analog-value"
        },
        {
          "id": "7433",
          "type": "analog-value"
        },
        {
          "id": "7186",
          "type": "binary-value"
        },
        {
          "id": "7187",
          "type": "binary-value"
        },
        {
          "id": "7188",
          "type": "binary-value"
        },
        {
          "id": "7189",
          "type": "binary-value"
        },
        {
          "id": "7190",
          "type": "binary-value"
        },
        {
          "id": "7191",
          "type": "binary-value"
        },
        {
          "id": "7192",
          "type": "binary-value"
        },
        {
          "id": "7193",
          "type": "binary-value"
        },
        {
          "id": "7194",
          "type": "binary-value"
        },
        {
          "id": "7195",
          "type": "binary-value"
        },
        {
          "id": "7196",
          "type": "binary-value"
        },
        {
          "id": "7197",
          "type": "binary-value"
        },
        {
          "id": "7198",
          "type": "binary-value"
        },
        {
          "id": "7199",
          "type": "binary-value"
        },
        {
          "id": "7200",
          "type": "binary-value"
        },
        {
          "id": "7201",
          "type": "binary-value"
        },
        {
          "id": "7202",
          "type": "binary-value"
        },
        {
          "id": "7203",
          "type": "binary-value"
        },
        {
          "id": "7204",
          "type": "binary-value"
        },
        {
          "id": "7205",
          "type": "binary-value"
        },
        {
          "id": "7206",
          "type": "binary-value"
        },
        {
          "id": "7207",
          "type": "binary-value"
        },
        {
          "id": "7208",
          "type": "binary-value"
        },
        {
          "id": "7209",
          "type": "binary-value"
        },
        {
          "id": "7210",
          "type": "binary-value"
        },
        {
          "id": "7211",
          "type": "binary-value"
        },
        {
          "id": "7212",
          "type": "binary-value"
        },
        {
          "id": "7213",
          "type": "binary-value"
        },
        {
          "id": "7214",
          "type": "binary-value"
        },
        {
          "id": "7215",
          "type": "binary-value"
        },
        {
          "id": "7015",
          "type": "binary-value"
        },
        {
          "id": "7216",
          "type": "analog-value"
        },
        {
          "id": "7217",
          "type": "analog-value"
        },
        {
          "id": "7219",
          "type": "analog-value"
        },
        {
          "id": "7218",
          "type": "analog-value"
        },
        {
          "id": "7220",
          "type": "analog-value"
        },
        {
          "id": "7221",
          "type": "analog-value"
        },
        {
          "id": "7223",
          "type": "analog-value"
        },
        {
          "id": "7222",
          "type": "analog-value"
        },
        {
          "id": "7224",
          "type": "analog-value"
        },
        {
          "id": "7225",
          "type": "analog-value"
        },
        {
          "id": "7226",
          "type": "analog-value"
        },
        {
          "id": "7227",
          "type": "analog-value"
        },
        {
          "id": "7228",
          "type": "analog-value"
        },
        {
          "id": "7229",
          "type": "analog-value"
        },
        {
          "id": "7230",
          "type": "analog-value"
        },
        {
          "id": "7231",
          "type": "analog-value"
        },
        {
          "id": "7232",
          "type": "analog-value"
        },
        {
          "id": "7233",
          "type": "analog-value"
        },
        {
          "id": "7234",
          "type": "analog-value"
        },
        {
          "id": "7235",
          "type": "analog-value"
        },
        {
          "id": "7236",
          "type": "analog-value"
        },
        {
          "id": "7237",
          "type": "analog-value"
        },
        {
          "id": "7238",
          "type": "analog-value"
        },
        {
          "id": "7239",
          "type": "analog-value"
        },
        {
          "id": "7240",
          "type": "analog-value"
        },
        {
          "id": "7241",
          "type": "analog-value"
        },
        {
          "id": "7434",
          "type": "analog-value"
        },
        {
          "id": "7435",
          "type": "analog-value"
        },
        {
          "id": "7436",
          "type": "analog-value"
        },
        {
          "id": "7437",
          "type": "analog-value"
        },
        {
          "id": "7438",
          "type": "analog-value"
        },
        {
          "id": "7439",
          "type": "analog-value"
        },
        {
          "id": "7440",
          "type": "analog-value"
        },
        {
          "id": "7441",
          "type": "analog-value"
        },
        {
          "id": "7442",
          "type": "analog-value"
        },
        {
          "id": "7443",
          "type": "analog-value"
        },
        {
          "id": "7444",
          "type": "analog-value"
        },
        {
          "id": "7445",
          "type": "analog-value"
        },
        {
          "id": "7446",
          "type": "analog-value"
        },
        {
          "id": "7447",
          "type": "analog-value"
        },
        {
          "id": "7448",
          "type": "analog-value"
        },
        {
          "id": "7449",
          "type": "analog-value"
        },
        {
          "id": "7450",
          "type": "analog-value"
        },
        {
          "id": "7243",
          "type": "analog-value"
        },
        {
          "id": "7242",
          "type": "analog-value"
        },
        {
          "id": "7259",
          "type": "analog-value"
        },
        {
          "id": "7260",
          "type": "analog-value"
        },
        {
          "id": "7258",
          "type": "analog-value"
        },
        {
          "id": "7257",
          "type": "analog-value"
        },
        {
          "id": "7256",
          "type": "analog-value"
        },
        {
          "id": "7255",
          "type": "analog-value"
        },
        {
          "id": "7254",
          "type": "analog-value"
        },
        {
          "id": "7253",
          "type": "analog-value"
        },
        {
          "id": "7252",
          "type": "analog-value"
        },
        {
          "id": "7245",
          "type": "analog-value"
        },
        {
          "id": "7251",
          "type": "analog-value"
        },
        {
          "id": "7250",
          "type": "analog-value"
        },
        {
          "id": "7249",
          "type": "analog-value"
        },
        {
          "id": "7246",
          "type": "analog-value"
        },
        {
          "id": "7247",
          "type": "analog-value"
        },
        {
          "id": "7244",
          "type": "analog-value"
        },
        {
          "id": "7248",
          "type": "analog-value"
        },
        {
          "id": "7262",
          "type": "analog-value"
        },
        {
          "id": "7263",
          "type": "analog-value"
        },
        {
          "id": "7261",
          "type": "analog-value"
        },
        {
          "id": "7568",
          "type": "analog-value"
        },
        {
          "id": "7567",
          "type": "analog-value"
        },
        {
          "id": "7569",
          "type": "analog-value"
        },
        {
          "id": "7570",
          "type": "analog-value"
        },
        {
          "id": "7572",
          "type": "analog-value"
        },
        {
          "id": "7571",
          "type": "analog-value"
        },
        {
          "id": "7573",
          "type": "analog-value"
        },
        {
          "id": "7574",
          "type": "analog-value"
        },
        {
          "id": "7265",
          "type": "analog-value"
        },
        {
          "id": "7264",
          "type": "analog-value"
        },
        {
          "id": "7266",
          "type": "analog-value"
        },
        {
          "id": "7267",
          "type": "analog-value"
        },
        {
          "id": "7596",
          "type": "analog-value"
        },
        {
          "id": "7597",
          "type": "analog-value"
        },
        {
          "id": "7271",
          "type": "analog-value"
        },
        {
          "id": "7269",
          "type": "analog-value"
        },
        {
          "id": "7272",
          "type": "analog-value"
        },
        {
          "id": "7273",
          "type": "analog-value"
        },
        {
          "id": "7270",
          "type": "analog-value"
        },
        {
          "id": "7268",
          "type": "analog-value"
        },
        {
          "id": "7276",
          "type": "analog-value"
        },
        {
          "id": "7278",
          "type": "analog-value"
        },
        {
          "id": "7275",
          "type": "analog-value"
        },
        {
          "id": "7274",
          "type": "analog-value"
        },
        {
          "id": "7277",
          "type": "analog-value"
        },
        {
          "id": "7279",
          "type": "analog-value"
        },
        {
          "id": "7287",
          "type": "analog-value"
        },
        {
          "id": "7288",
          "type": "analog-value"
        },
        {
          "id": "7282",
          "type": "analog-value"
        },
        {
          "id": "7289",
          "type": "analog-value"
        },
        {
          "id": "7293",
          "type": "analog-value"
        },
        {
          "id": "7290",
          "type": "analog-value"
        },
        {
          "id": "7291",
          "type": "analog-value"
        },
        {
          "id": "7292",
          "type": "analog-value"
        },
        {
          "id": "7284",
          "type": "analog-value"
        },
        {
          "id": "7286",
          "type": "analog-value"
        },
        {
          "id": "7285",
          "type": "analog-value"
        },
        {
          "id": "7280",
          "type": "analog-value"
        },
        {
          "id": "7283",
          "type": "analog-value"
        },
        {
          "id": "7281",
          "type": "analog-value"
        },
        {
          "id": "7299",
          "type": "analog-value"
        },
        {
          "id": "7298",
          "type": "analog-value"
        },
        {
          "id": "7304",
          "type": "analog-value"
        },
        {
          "id": "7297",
          "type": "analog-value"
        },
        {
          "id": "7294",
          "type": "analog-value"
        },
        {
          "id": "7296",
          "type": "analog-value"
        },
        {
          "id": "7307",
          "type": "analog-value"
        },
        {
          "id": "7295",
          "type": "analog-value"
        },
        {
          "id": "7303",
          "type": "analog-value"
        },
        {
          "id": "7300",
          "type": "analog-value"
        },
        {
          "id": "7302",
          "type": "analog-value"
        },
        {
          "id": "7306",
          "type": "analog-value"
        },
        {
          "id": "7301",
          "type": "analog-value"
        },
        {
          "id": "7305",
          "type": "analog-value"
        },
        {
          "id": "7311",
          "type": "analog-value"
        },
        {
          "id": "7309",
          "type": "analog-value"
        },
        {
          "id": "7312",
          "type": "analog-value"
        },
        {
          "id": "7313",
          "type": "analog-value"
        },
        {
          "id": "7310",
          "type": "analog-value"
        },
        {
          "id": "7308",
          "type": "analog-value"
        },
        {
          "id": "7319",
          "type": "analog-value"
        },
        {
          "id": "7320",
          "type": "analog-value"
        },
        {
          "id": "7325",
          "type": "analog-value"
        },
        {
          "id": "7315",
          "type": "analog-value"
        },
        {
          "id": "7317",
          "type": "analog-value"
        },
        {
          "id": "7314",
          "type": "analog-value"
        },
        {
          "id": "7318",
          "type": "analog-value"
        },
        {
          "id": "7316",
          "type": "analog-value"
        },
        {
          "id": "7323",
          "type": "analog-value"
        },
        {
          "id": "7322",
          "type": "analog-value"
        },
        {
          "id": "7324",
          "type": "analog-value"
        },
        {
          "id": "7326",
          "type": "analog-value"
        },
        {
          "id": "7321",
          "type": "analog-value"
        },
        {
          "id": "7327",
          "type": "analog-value"
        },
        {
          "id": "7336",
          "type": "analog-value"
        },
        {
          "id": "7335",
          "type": "analog-value"
        },
        {
          "id": "7330",
          "type": "analog-value"
        },
        {
          "id": "7340",
          "type": "analog-value"
        },
        {
          "id": "7338",
          "type": "analog-value"
        },
        {
          "id": "7341",
          "type": "analog-value"
        },
        {
          "id": "7337",
          "type": "analog-value"
        },
        {
          "id": "7339",
          "type": "analog-value"
        },
        {
          "id": "7332",
          "type": "analog-value"
        },
        {
          "id": "7333",
          "type": "analog-value"
        },
        {
          "id": "7331",
          "type": "analog-value"
        },
        {
          "id": "7329",
          "type": "analog-value"
        },
        {
          "id": "7334",
          "type": "analog-value"
        },
        {
          "id": "7328",
          "type": "analog-value"
        },
        {
          "id": "7344",
          "type": "analog-value"
        },
        {
          "id": "7346",
          "type": "analog-value"
        },
        {
          "id": "7343",
          "type": "analog-value"
        },
        {
          "id": "7342",
          "type": "analog-value"
        },
        {
          "id": "7345",
          "type": "analog-value"
        },
        {
          "id": "7347",
          "type": "analog-value"
        },
        {
          "id": "7451",
          "type": "analog-value"
        },
        {
          "id": "7452",
          "type": "analog-value"
        },
        {
          "id": "7453",
          "type": "analog-value"
        },
        {
          "id": "7454",
          "type": "analog-value"
        },
        {
          "id": "7455",
          "type": "analog-value"
        },
        {
          "id": "7456",
          "type": "analog-value"
        },
        {
          "id": "7457",
          "type": "analog-value"
        },
        {
          "id": "7458",
          "type": "analog-value"
        },
        {
          "id": "7598",
          "type": "analog-value"
        },
        {
          "id": "7459",
          "type": "binary-value"
        },
        {
          "id": "7599",
          "type": "binary-value"
        },
        {
          "id": "7600",
          "type": "analog-value"
        },
        {
          "id": "7601",
          "type": "analog-value"
        },
        {
          "id": "7602",
          "type": "analog-value"
        },
        {
          "id": "7348",
          "type": "binary-value"
        },
        {
          "id": "7349",
          "type": "binary-value"
        },
        {
          "id": "7370",
          "type": "binary-value"
        },
        {
          "id": "7371",
          "type": "binary-value"
        },
        {
          "id": "7362",
          "type": "binary-value"
        },
        {
          "id": "7361",
          "type": "binary-value"
        },
        {
          "id": "7353",
          "type": "binary-value"
        },
        {
          "id": "7354",
          "type": "binary-value"
        },
        {
          "id": "7355",
          "type": "binary-value"
        },
        {
          "id": "7356",
          "type": "binary-value"
        },
        {
          "id": "7357",
          "type": "binary-value"
        },
        {
          "id": "7358",
          "type": "binary-value"
        },
        {
          "id": "7359",
          "type": "binary-value"
        },
        {
          "id": "7365",
          "type": "binary-value"
        },
        {
          "id": "7351",
          "type": "binary-value"
        },
        {
          "id": "7352",
          "type": "binary-value"
        },
        {
          "id": "7350",
          "type": "binary-value"
        },
        {
          "id": "7367",
          "type": "binary-value"
        },
        {
          "id": "7368",
          "type": "binary-value"
        },
        {
          "id": "7366",
          "type": "binary-value"
        },
        {
          "id": "7369",
          "type": "binary-value"
        },
        {
          "id": "7364",
          "type": "binary-value"
        },
        {
          "id": "7363",
          "type": "binary-value"
        },
        {
          "id": "7360",
          "type": "binary-value"
        },
        {
          "id": "7460",
          "type": "analog-value"
        },
        {
          "id": "7461",
          "type": "analog-value"
        },
        {
          "id": "7462",
          "type": "analog-value"
        },
        {
          "id": "7463",
          "type": "analog-value"
        },
        {
          "id": "7464",
          "type": "analog-value"
        },
        {
          "id": "7465",
          "type": "analog-value"
        },
        {
          "id": "7466",
          "type": "analog-value"
        },
        {
          "id": "7467",
          "type": "analog-value"
        },
        {
          "id": "7468",
          "type": "analog-value"
        },
        {
          "id": "7469",
          "type": "analog-value"
        },
        {
          "id": "7470",
          "type": "analog-value"
        },
        {
          "id": "7471",
          "type": "analog-value"
        },
        {
          "id": "7472",
          "type": "analog-value"
        },
        {
          "id": "7473",
          "type": "analog-value"
        },
        {
          "id": "7474",
          "type": "analog-value"
        },
        {
          "id": "7475",
          "type": "analog-value"
        },
        {
          "id": "7476",
          "type": "analog-value"
        },
        {
          "id": "7477",
          "type": "analog-value"
        },
        {
          "id": "7478",
          "type": "analog-value"
        },
        {
          "id": "7479",
          "type": "analog-value"
        },
        {
          "id": "7480",
          "type": "analog-value"
        },
        {
          "id": "7376",
          "type": "analog-value"
        },
        {
          "id": "7372",
          "type": "analog-value"
        },
        {
          "id": "7381",
          "type": "analog-value"
        },
        {
          "id": "7382",
          "type": "analog-value"
        },
        {
          "id": "7390",
          "type": "analog-value"
        },
        {
          "id": "7389",
          "type": "analog-value"
        },
        {
          "id": "7388",
          "type": "analog-value"
        },
        {
          "id": "7387",
          "type": "analog-value"
        },
        {
          "id": "7386",
          "type": "analog-value"
        },
        {
          "id": "7385",
          "type": "analog-value"
        },
        {
          "id": "7384",
          "type": "analog-value"
        },
        {
          "id": "7378",
          "type": "analog-value"
        },
        {
          "id": "7392",
          "type": "analog-value"
        },
        {
          "id": "7391",
          "type": "analog-value"
        },
        {
          "id": "7393",
          "type": "analog-value"
        },
        {
          "id": "7375",
          "type": "analog-value"
        },
        {
          "id": "7374",
          "type": "analog-value"
        },
        {
          "id": "7377",
          "type": "analog-value"
        },
        {
          "id": "7373",
          "type": "analog-value"
        },
        {
          "id": "7379",
          "type": "analog-value"
        },
        {
          "id": "7380",
          "type": "analog-value"
        },
        {
          "id": "7383",
          "type": "analog-value"
        },
        {
          "id": "7603",
          "type": "binary-value"
        },
        {
          "id": "7604",
          "type": "binary-value"
        },
        {
          "id": "7605",
          "type": "analog-value"
        },
        {
          "id": "7394",
          "type": "analog-value"
        },
        {
          "id": "7395",
          "type": "analog-value"
        },
        {
          "id": "7616",
          "type": "analog-value"
        },
        {
          "id": "7606",
          "type": "analog-value"
        },
        {
          "id": "7615",
          "type": "analog-value"
        },
        {
          "id": "7607",
          "type": "analog-value"
        }
      ],
      "max-apdu-length-accepted": 1476,
      "segmentation-supported": "segmented-both",
      "apdu-timeout": 3000,
      "number-of-APDU-retries": 3,
      "device-address-binding": [
        {
          "controller": {
            "id": "4138819",
            "type": "device"
          },
          "value": 1,
          "address": "C0A802D1BAC0"
        },
        {
          "controller": {
            "id": "4098468",
            "type": "device"
          },
          "value": 1,
          "address": "C0A802C8BAC0"
        },
        {
          "controller": {
            "id": "4030322",
            "type": "device"
          },
          "value": 2765,
          "address": "25"
        },
        {
          "controller": {
            "id": "4006295",
            "type": "device"
          },
          "value": 2766,
          "address": "32"
        },
        {
          "controller": {
            "id": "4009369",
            "type": "device"
          },
          "value": 2767,
          "address": "20"
        },
        {
          "controller": {
            "id": "4006341",
            "type": "device"
          },
          "value": 2765,
          "address": "16"
        },
        {
          "controller": {
            "id": "4030320",
            "type": "device"
          },
          "value": 2765,
          "address": "0E"
        },
        {
          "controller": {
            "id": "3990651",
            "type": "device"
          },
          "value": 2766,
          "address": "25"
        },
        {
          "controller": {
            "id": "4010092",
            "type": "device"
          },
          "value": 2766,
          "address": "11"
        },
        {
          "controller": {
            "id": "4010123",
            "type": "device"
          },
          "value": 2766,
          "address": "0A"
        },
        {
          "controller": {
            "id": "4009358",
            "type": "device"
          },
          "value": 2767,
          "address": "21"
        },
        {
          "controller": {
            "id": "4010151",
            "type": "device"
          },
          "value": 2767,
          "address": "19"
        },
        {
          "controller": {
            "id": "4010150",
            "type": "device"
          },
          "value": 2767,
          "address": "1A"
        },
        {
          "controller": {
            "id": "4010090",
            "type": "device"
          },
          "value": 2767,
          "address": "1B"
        },
        {
          "controller": {
            "id": "3990656",
            "type": "device"
          },
          "value": 2767,
          "address": "23"
        },
        {
          "controller": {
            "id": "4009413",
            "type": "device"
          },
          "value": 2767,
          "address": "1D"
        },
        {
          "controller": {
            "id": "3989365",
            "type": "device"
          },
          "value": 2765,
          "address": "18"
        },
        {
          "controller": {
            "id": "4009370",
            "type": "device"
          },
          "value": 2767,
          "address": "1F"
        },
        {
          "controller": {
            "id": "4009408",
            "type": "device"
          },
          "value": 2767,
          "address": "1E"
        },
        {
          "controller": {
            "id": "4009416",
            "type": "device"
          },
          "value": 2767,
          "address": "1C"
        },
        {
          "controller": {
            "id": "4010149",
            "type": "device"
          },
          "value": 2765,
          "address": "12"
        },
        {
          "controller": {
            "id": "4009366",
            "type": "device"
          },
          "value": 2765,
          "address": "13"
        },
        {
          "controller": {
            "id": "3990281",
            "type": "device"
          },
          "value": 2765,
          "address": "17"
        },
        {
          "controller": {
            "id": "4010152",
            "type": "device"
          },
          "value": 2765,
          "address": "11"
        },
        {
          "controller": {
            "id": "4009354",
            "type": "device"
          },
          "value": 2766,
          "address": "1C"
        },
        {
          "controller": {
            "id": "4019675",
            "type": "device"
          },
          "value": 2766,
          "address": "10"
        },
        {
          "controller": {
            "id": "4009357",
            "type": "device"
          },
          "value": 2766,
          "address": "1B"
        },
        {
          "controller": {
            "id": "4019681",
            "type": "device"
          },
          "value": 2765,
          "address": "0F"
        },
        {
          "controller": {
            "id": "4019633",
            "type": "device"
          },
          "value": 2765,
          "address": "10"
        },
        {
          "controller": {
            "id": "3975916",
            "type": "device"
          },
          "value": 2765,
          "address": "24"
        },
        {
          "controller": {
            "id": "3992685",
            "type": "device"
          },
          "value": 2767,
          "address": "12"
        },
        {
          "controller": {
            "id": "3976013",
            "type": "device"
          },
          "value": 2766,
          "address": "09"
        },
        {
          "controller": {
            "id": "3976000",
            "type": "device"
          },
          "value": 2767,
          "address": "0E"
        },
        {
          "controller": {
            "id": "3689119",
            "type": "device"
          },
          "value": 1,
          "address": "C0A802CFBAC0"
        },
        {
          "controller": {
            "id": "4110103",
            "type": "device"
          },
          "value": 1,
          "address": "C0A802CEBAC0"
        },
        {
          "controller": {
            "id": "3990548",
            "type": "device"
          },
          "value": 1,
          "address": "C0A802C5BAC0"
        },
        {
          "controller": {
            "id": "3992702",
            "type": "device"
          },
          "value": 2767,
          "address": "0F"
        },
        {
          "controller": {
            "id": "4006716",
            "type": "device"
          },
          "value": 2765,
          "address": "22"
        },
        {
          "controller": {
            "id": "4006348",
            "type": "device"
          },
          "value": 2767,
          "address": "22"
        },
        {
          "controller": {
            "id": "3472323",
            "type": "device"
          },
          "value": 2767,
          "address": "10"
        },
        {
          "controller": {
            "id": "4006498",
            "type": "device"
          },
          "value": 2765,
          "address": "15"
        },
        {
          "controller": {
            "id": "4006920",
            "type": "device"
          },
          "value": 2766,
          "address": "07"
        },
        {
          "controller": {
            "id": "4042875",
            "type": "device"
          },
          "value": 2765,
          "address": "19"
        },
        {
          "controller": {
            "id": "4006924",
            "type": "device"
          },
          "value": 2765,
          "address": "14"
        },
        {
          "controller": {
            "id": "4006497",
            "type": "device"
          },
          "value": 2766,
          "address": "08"
        },
        {
          "controller": {
            "id": "4011955",
            "type": "device"
          },
          "value": 2765,
          "address": "1F"
        },
        {
          "controller": {
            "id": "4012459",
            "type": "device"
          },
          "value": 2766,
          "address": "31"
        },
        {
          "controller": {
            "id": "4020858",
            "type": "device"
          },
          "value": 2766,
          "address": "30"
        },
        {
          "controller": {
            "id": "4020882",
            "type": "device"
          },
          "value": 2765,
          "address": "1E"
        },
        {
          "controller": {
            "id": "4021008",
            "type": "device"
          },
          "value": 2765,
          "address": "1D"
        },
        {
          "controller": {
            "id": "4010856",
            "type": "device"
          },
          "value": 2765,
          "address": "20"
        },
        {
          "controller": {
            "id": "4043079",
            "type": "device"
          },
          "value": 2766,
          "address": "0C"
        },
        {
          "controller": {
            "id": "4042333",
            "type": "device"
          },
          "value": 2767,
          "address": "06"
        },
        {
          "controller": {
            "id": "4040664",
            "type": "device"
          },
          "value": 2766,
          "address": "28"
        },
        {
          "controller": {
            "id": "4042326",
            "type": "device"
          },
          "value": 2766,
          "address": "0E"
        },
        {
          "controller": {
            "id": "4042338",
            "type": "device"
          },
          "value": 2765,
          "address": "06"
        },
        {
          "controller": {
            "id": "4042335",
            "type": "device"
          },
          "value": 2767,
          "address": "05"
        },
        {
          "controller": {
            "id": "4043082",
            "type": "device"
          },
          "value": 2766,
          "address": "0B"
        },
        {
          "controller": {
            "id": "4007179",
            "type": "device"
          },
          "value": 2766,
          "address": "06"
        },
        {
          "controller": {
            "id": "4007584",
            "type": "device"
          },
          "value": 2766,
          "address": "21"
        },
        {
          "controller": {
            "id": "4007197",
            "type": "device"
          },
          "value": 2766,
          "address": "22"
        },
        {
          "controller": {
            "id": "4007559",
            "type": "device"
          },
          "value": 2766,
          "address": "05"
        },
        {
          "controller": {
            "id": "4007181",
            "type": "device"
          },
          "value": 2765,
          "address": "0D"
        },
        {
          "controller": {
            "id": "4042732",
            "type": "device"
          },
          "value": 2765,
          "address": "04"
        },
        {
          "controller": {
            "id": "4042330",
            "type": "device"
          },
          "value": 2767,
          "address": "07"
        },
        {
          "controller": {
            "id": "4042339",
            "type": "device"
          },
          "value": 2765,
          "address": "05"
        },
        {
          "controller": {
            "id": "4043083",
            "type": "device"
          },
          "value": 2767,
          "address": "01"
        },
        {
          "controller": {
            "id": "3452002",
            "type": "device"
          },
          "value": 2767,
          "address": "25"
        },
        {
          "controller": {
            "id": "3976014",
            "type": "device"
          },
          "value": 2767,
          "address": "24"
        }
      ],
      "database-revision": 602
    },
    "points": [
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7138",
          "type": "analog-value"
        },
        "object-name": "CH1ReturnTemp",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 54.252281,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          54.252281,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7139",
          "type": "analog-value"
        },
        "object-name": "CH1SupplyTemp",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 42.143677,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          42.143677,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7140",
          "type": "analog-value"
        },
        "object-name": "CH2ReturnTemp",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 55.802589,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          55.802589,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7141",
          "type": "analog-value"
        },
        "object-name": "CH2SupplyTemp",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 53.700169,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          53.700169,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7142",
          "type": "analog-value"
        },
        "object-name": "CHWDiffPressC",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.76225,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.76225,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7143",
          "type": "analog-value"
        },
        "object-name": "CHWDiffPress34",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 25.789186,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          25.789186,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7144",
          "type": "analog-value"
        },
        "object-name": "CHWDiffPress9",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 25.484875,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          25.484875,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7145",
          "type": "analog-value"
        },
        "object-name": "CHWDiffPressCLev",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.76225,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.76225,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7146",
          "type": "analog-value"
        },
        "object-name": "CHWDiffPressRoof",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 13.11805,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          13.11805,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7147",
          "type": "analog-value"
        },
        "object-name": "CWReturnTemp",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 86.294121,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          86.294121,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7148",
          "type": "analog-value"
        },
        "object-name": "CWReturnTempTCT2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 79.352943,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          79.352943,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7149",
          "type": "analog-value"
        },
        "object-name": "CWReturnTempTCT1",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 80.808823,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          80.808823,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7150",
          "type": "analog-value"
        },
        "object-name": "CWSupplyTempTCT1",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 77.411766,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          77.411766,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7151",
          "type": "analog-value"
        },
        "object-name": "CWSupplyTempTCT2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 76.970589,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          76.970589,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7152",
          "type": "analog-value"
        },
        "object-name": "CWSupplyTemp",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 74.867645,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          74.867645,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7170",
          "type": "analog-value"
        },
        "object-name": "HWSupplyTempCPer",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 96.735291,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          96.735291,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7171",
          "type": "analog-value"
        },
        "object-name": "HWSupplyTemp9",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 99.691177,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          99.691177,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7172",
          "type": "analog-value"
        },
        "object-name": "HWSupplyTempC",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 99.779411,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          99.779411,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7173",
          "type": "analog-value"
        },
        "object-name": "HWSupplyTemp34",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 100.235291,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          100.235291,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7176",
          "type": "analog-value"
        },
        "object-name": "NWReturnTemp34",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 58.661766,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          58.661766,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7177",
          "type": "analog-value"
        },
        "object-name": "NWReturnTemp9",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 58.294117,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          58.294117,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7178",
          "type": "analog-value"
        },
        "object-name": "NWSupplyTemp9",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 56.205883,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          56.205883,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7179",
          "type": "analog-value"
        },
        "object-name": "NWSupplyTemp34",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 55.85294,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          55.85294,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.02,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7180",
          "type": "analog-value"
        },
        "object-name": "OAH_East",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.607032,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.607032,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.02,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7181",
          "type": "analog-value"
        },
        "object-name": "OAH_West",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.542835,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.542835,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7182",
          "type": "analog-value"
        },
        "object-name": "OAT_East",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7183",
          "type": "analog-value"
        },
        "object-name": "OAT_West",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 72.815453,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          72.815453,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7184",
          "type": "analog-value"
        },
        "object-name": "OA_CO2East",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 593.629944,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          593.629944,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7185",
          "type": "analog-value"
        },
        "object-name": "OA_Co2West",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 488.224945,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          488.224945,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7216",
          "type": "analog-value"
        },
        "object-name": "RCHTempEastS1",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 55.299999,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          55.299999,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7217",
          "type": "analog-value"
        },
        "object-name": "RCHTempEastS7",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 56.689999,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          56.689999,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7218",
          "type": "analog-value"
        },
        "object-name": "RCHTempNorthS8",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 70.43,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          70.43,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7219",
          "type": "analog-value"
        },
        "object-name": "RCHTempNorthS2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 69.739998,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          69.739998,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7220",
          "type": "analog-value"
        },
        "object-name": "RCHTempSouthS1",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 55.299999,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          55.299999,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7221",
          "type": "analog-value"
        },
        "object-name": "RCHTempSouthS7",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 57.720001,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          57.720001,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7222",
          "type": "analog-value"
        },
        "object-name": "RCHTempWestS8",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 65.279999,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          65.279999,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7223",
          "type": "analog-value"
        },
        "object-name": "RCHTempWestS2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 70.080002,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          70.080002,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7224",
          "type": "analog-value"
        },
        "object-name": "ReturnCO2.F1",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 695,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          695,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7225",
          "type": "analog-value"
        },
        "object-name": "ReturnCO2.F10",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 552.429993,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          552.429993,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7226",
          "type": "analog-value"
        },
        "object-name": "ReturnCO2.F11",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 694.609985,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          694.609985,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7227",
          "type": "analog-value"
        },
        "object-name": "ReturnCO2.F12",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 607.36499,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          607.36499,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7228",
          "type": "analog-value"
        },
        "object-name": "ReturnCO2.F17",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 622.369995,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          622.369995,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7229",
          "type": "analog-value"
        },
        "object-name": "ReturnCO2.F18",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 654.324951,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          654.324951,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7230",
          "type": "analog-value"
        },
        "object-name": "ReturnCO2.F19",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 486.689972,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          486.689972,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7231",
          "type": "analog-value"
        },
        "object-name": "ReturnCO2.F2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 580.669983,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          580.669983,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7232",
          "type": "analog-value"
        },
        "object-name": "ReturnCO2.F20",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 562.5,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          562.5,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7233",
          "type": "analog-value"
        },
        "object-name": "ReturnCO2.F21",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 572.414978,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          572.414978,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7234",
          "type": "analog-value"
        },
        "object-name": "ReturnCO2.F22",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 568.544983,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          568.544983,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7235",
          "type": "analog-value"
        },
        "object-name": "ReturnCo2.F23",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 542.289917,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          542.289917,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7236",
          "type": "analog-value"
        },
        "object-name": "ReturnCO2.F24",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 632.524963,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          632.524963,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7237",
          "type": "analog-value"
        },
        "object-name": "ReturnCO2.F25",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 616.684998,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          616.684998,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7238",
          "type": "analog-value"
        },
        "object-name": "ReturnCO2.F26",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 530.254944,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          530.254944,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7239",
          "type": "analog-value"
        },
        "object-name": "ReturnCO2.F3",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 647.407471,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          647.407471,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7240",
          "type": "analog-value"
        },
        "object-name": "ReturnCO2.F4",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 662.5,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          662.5,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7241",
          "type": "analog-value"
        },
        "object-name": "ReturnCO2.F9",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 541.404907,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          541.404907,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7242",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S10",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 74.926468,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          74.926468,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7243",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S1",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 71.779411,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          71.779411,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7244",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S5",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 73.485291,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          73.485291,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7245",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 74.5,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          74.5,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7246",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S3",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 71.882355,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          71.882355,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7247",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S4",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 72.352943,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          72.352943,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7248",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S6",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 74.191177,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          74.191177,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7249",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S22",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 75.970589,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          75.970589,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7250",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S21",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 75.338234,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          75.338234,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7251",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S20",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 76.220589,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          76.220589,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7252",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S19",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 76.911766,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          76.911766,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7253",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S18",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 73.808823,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          73.808823,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7254",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S17",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 73.544121,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          73.544121,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7255",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S16",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 73.088234,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          73.088234,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7256",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S15",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 74.441177,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          74.441177,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7257",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S14",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 74.264709,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          74.264709,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7258",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S13",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 74.161766,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          74.161766,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7259",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S11",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 74.25,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          74.25,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7260",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S12",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 74.147057,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          74.147057,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7261",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S9",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 73.852943,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          73.852943,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7262",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S7",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 74.647057,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          74.647057,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7263",
          "type": "analog-value"
        },
        "object-name": "ReturnTemp.S8",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 74.926468,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          74.926468,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7264",
          "type": "analog-value"
        },
        "object-name": "SEReturnTemp9",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 57.470589,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          57.470589,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7265",
          "type": "analog-value"
        },
        "object-name": "SEReturnTemp34",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 57.632355,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          57.632355,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7266",
          "type": "analog-value"
        },
        "object-name": "SESupplyTemp34",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 56,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          56,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7267",
          "type": "analog-value"
        },
        "object-name": "SESupplyTemp9",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 55.573528,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          55.573528,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7268",
          "type": "analog-value"
        },
        "object-name": "SpaceTempE.4",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 70.260002,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          70.260002,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7269",
          "type": "analog-value"
        },
        "object-name": "SpaceTempE.2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 72.150002,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          72.150002,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7270",
          "type": "analog-value"
        },
        "object-name": "SpaceTempE.38",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 75.440002,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          75.440002,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7271",
          "type": "analog-value"
        },
        "object-name": "SpaceTempE.13",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 73,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          73,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7272",
          "type": "analog-value"
        },
        "object-name": "SpaceTempE.20",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 77.529999,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          77.529999,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7273",
          "type": "analog-value"
        },
        "object-name": "SpaceTempE.24",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 75.790001,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          75.790001,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7274",
          "type": "analog-value"
        },
        "object-name": "SpaceTempN.24",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 72.330002,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          72.330002,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7275",
          "type": "analog-value"
        },
        "object-name": "SpaceTempN.20",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 73.709999,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          73.709999,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7276",
          "type": "analog-value"
        },
        "object-name": "SpaceTempN.13",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 73.529999,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          73.529999,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7277",
          "type": "analog-value"
        },
        "object-name": "SpaceTempN.38",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 71.120003,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          71.120003,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7278",
          "type": "analog-value"
        },
        "object-name": "SpaceTempN.2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 72.150002,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          72.150002,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7279",
          "type": "analog-value"
        },
        "object-name": "SpaceTempN.4",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 70.43,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          70.43,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7280",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNE.4",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 74.400002,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          74.400002,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7281",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNE.5",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 74.739998,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          74.739998,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7282",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNE.2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 74.050003,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          74.050003,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7283",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNE.40",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 71.980003,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          71.980003,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7284",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNE.35",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 73.709999,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          73.709999,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7285",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNE.38",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 71.809998,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          71.809998,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7286",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNE.36",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 73.529999,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          73.529999,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7287",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNE.13",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 73.529999,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          73.529999,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7288",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNE.18",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 72.150002,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          72.150002,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7289",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNE.20",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 70.599998,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          70.599998,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7290",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNE.24",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 75.260002,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          75.260002,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7291",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNE.32",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": -327.679993,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          -327.679993,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7292",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNE.33",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": -327.679993,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          -327.679993,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7293",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNE.22",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 72.839996,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          72.839996,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7294",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNW.22",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 72.150002,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          72.150002,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7295",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNW.33",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": -327.679993,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          -327.679993,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7296",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNW.24",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 70.260002,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          70.260002,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7297",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNW.20",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 72.150002,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          72.150002,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7298",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNW.18",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 72.669998,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          72.669998,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7299",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNW.13",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 71.809998,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          71.809998,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7300",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNW.36",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 70.769997,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          70.769997,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7301",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNW.40",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 71.639999,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          71.639999,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7302",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNW.38",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 71.290001,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          71.290001,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7303",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNW.35",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 75.089996,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          75.089996,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7304",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNW.2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 73.019997,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          73.019997,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7305",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNW.5",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 72.5,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          72.5,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7306",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNW.4",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 72.330002,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          72.330002,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7307",
          "type": "analog-value"
        },
        "object-name": "SpaceTempNW.32",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": -327.679993,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          -327.679993,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7308",
          "type": "analog-value"
        },
        "object-name": "SpaceTempS.4",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7309",
          "type": "analog-value"
        },
        "object-name": "SpaceTempS.2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 69.57,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          69.57,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7310",
          "type": "analog-value"
        },
        "object-name": "SpaceTempS.38",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 73.190002,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          73.190002,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7311",
          "type": "analog-value"
        },
        "object-name": "SpaceTempS.13",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 72.839996,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          72.839996,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7312",
          "type": "analog-value"
        },
        "object-name": "SpaceTempS.20",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 70.260002,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          70.260002,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7313",
          "type": "analog-value"
        },
        "object-name": "SpaceTempS.24",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 67.68,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          67.68,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7314",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSE.24",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 74.220001,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          74.220001,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7315",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSE.20",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 71.809998,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          71.809998,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7316",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSE.33",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": -327.679993,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          -327.679993,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7317",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSE.22",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 71.809998,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          71.809998,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7318",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSE.32",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 73.360001,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          73.360001,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7319",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSE.13",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 74.57,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          74.57,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7320",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSE.18",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 71.459999,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          71.459999,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7321",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSE.40",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 70.949997,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          70.949997,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7322",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSE.36",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 73.709999,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          73.709999,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7323",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSE.35",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 71.980003,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          71.980003,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7324",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSE.38",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 74.400002,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          74.400002,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7325",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSE.2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 74.050003,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          74.050003,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7326",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSE.4",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 72.5,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          72.5,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7327",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSE.5",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 72.669998,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          72.669998,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7328",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSW.5",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 71.639999,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          71.639999,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7329",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSW.4",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 72.150002,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          72.150002,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7330",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSW.2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 72.5,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          72.5,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7331",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSW.38",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 73.709999,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          73.709999,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7332",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSW.35",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 74.910004,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          74.910004,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7333",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSW.36",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 69.739998,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          69.739998,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7334",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSW.40",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 69.230003,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          69.230003,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7335",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSW.18",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 72.5,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          72.5,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7336",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSW.13",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 71.980003,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          71.980003,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7337",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSW.32",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 72.5,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          72.5,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7338",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSW.22",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 71.120003,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          71.120003,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7339",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSW.33",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": -327.679993,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          -327.679993,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7340",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSW.20",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 70.43,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          70.43,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7341",
          "type": "analog-value"
        },
        "object-name": "SpaceTempSW.24",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 71.290001,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          71.290001,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7342",
          "type": "analog-value"
        },
        "object-name": "SpaceTempW.24",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 71.120003,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          71.120003,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7343",
          "type": "analog-value"
        },
        "object-name": "SpaceTempW.20",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 68.889999,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          68.889999,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7344",
          "type": "analog-value"
        },
        "object-name": "SpaceTempW.13",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 74.050003,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          74.050003,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7345",
          "type": "analog-value"
        },
        "object-name": "SpaceTempW.38",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 67.339996,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          67.339996,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7346",
          "type": "analog-value"
        },
        "object-name": "SpaceTempW.2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 71.120003,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          71.120003,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7347",
          "type": "analog-value"
        },
        "object-name": "SpaceTempW.4",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 72.669998,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          72.669998,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7372",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S10",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 59.264706,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          59.264706,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7373",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S6",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 57.926472,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          57.926472,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7374",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S4",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60.235294,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60.235294,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7375",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S3",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 57.926472,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          57.926472,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7376",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S1",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 55.220589,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          55.220589,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7377",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S5",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 58.029411,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          58.029411,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7378",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 54.882355,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          54.882355,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7379",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S7",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 54.89706,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          54.89706,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7380",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S8",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 54.544117,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          54.544117,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7381",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S11",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 57.455883,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          57.455883,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7382",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S12",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 59.676472,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          59.676472,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7383",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S9",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 58.132355,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          58.132355,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7384",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S19",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60.882355,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60.882355,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7385",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S18",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 59.558823,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          59.558823,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7386",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S17",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 57.705883,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          57.705883,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7387",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S16",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 62.117645,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          62.117645,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7388",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S15",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 62.044117,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          62.044117,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7389",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S14",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 62.235294,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          62.235294,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7390",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S13",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 57.735294,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          57.735294,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7391",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S21",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 65.808823,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          65.808823,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7392",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S20",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 63.426472,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          63.426472,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7393",
          "type": "analog-value"
        },
        "object-name": "SupplyTemp.S22",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 63.882355,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          63.882355,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7394",
          "type": "analog-value"
        },
        "object-name": "Unit1SupTemp33",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7395",
          "type": "analog-value"
        },
        "object-name": "Unit2SupTemp33",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7396",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.730146,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.730146,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7397",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S5",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7398",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S4",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.618245,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.618245,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7399",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S3",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.538973,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.538973,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7400",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S6",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.475255,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.475255,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7401",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S1",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.604358,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.604358,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7402",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S10",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.452977,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.452977,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7403",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S11",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.476976,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.476976,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7404",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S12",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.19716,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.19716,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7405",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S9",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.908709,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.908709,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7406",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S7",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.286863,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.286863,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7407",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S8",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.525255,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.525255,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7408",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S13",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.796563,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.796563,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7409",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S14",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.613865,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.613865,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7410",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S15",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.757697,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.757697,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7411",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S16",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.643225,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.643225,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7412",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S17",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.535369,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.535369,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7413",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S18",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.908106,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.908106,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7414",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S19",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.816898,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.816898,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7415",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S20",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.816898,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.816898,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7416",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S21",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.384759,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.384759,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7417",
          "type": "analog-value"
        },
        "object-name": "CoolingValve.S22",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.512024,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.512024,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7418",
          "type": "analog-value"
        },
        "object-name": "PumpSpeed.P10",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7419",
          "type": "analog-value"
        },
        "object-name": "PumpSpeed.P11",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.576013,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.576013,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7420",
          "type": "analog-value"
        },
        "object-name": "PumpSpeed.P16",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.692491,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.692491,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7421",
          "type": "analog-value"
        },
        "object-name": "PumpSpeed.P17",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7422",
          "type": "analog-value"
        },
        "object-name": "PumpSpeed.P18",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.636828,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.636828,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7423",
          "type": "analog-value"
        },
        "object-name": "PumpSpeed.P33",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.857658,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.857658,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7424",
          "type": "analog-value"
        },
        "object-name": "PumpSpeed.P34",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.857658,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.857658,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7425",
          "type": "analog-value"
        },
        "object-name": "PumpSpeed.P35",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.858288,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.858288,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7426",
          "type": "analog-value"
        },
        "object-name": "PumpSpeed.P36",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7427",
          "type": "analog-value"
        },
        "object-name": "PumpSpeed.P37",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7428",
          "type": "analog-value"
        },
        "object-name": "PumpSpeed.P38",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7429",
          "type": "analog-value"
        },
        "object-name": "PumpSpeed.P39",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7430",
          "type": "analog-value"
        },
        "object-name": "PumpSpeed.P40",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7431",
          "type": "analog-value"
        },
        "object-name": "PumpSpeed.P5",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7432",
          "type": "analog-value"
        },
        "object-name": "PumpSpeed.P6",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7433",
          "type": "analog-value"
        },
        "object-name": "PumpSpeed.P9",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.561754,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.561754,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7434",
          "type": "analog-value"
        },
        "object-name": "ReturnSpeed.F1",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7435",
          "type": "analog-value"
        },
        "object-name": "ReturnSpeed.F10",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7436",
          "type": "analog-value"
        },
        "object-name": "ReturnSpeed.F11",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.9,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.9,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7437",
          "type": "analog-value"
        },
        "object-name": "ReturnSpeed.F12",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.9,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.9,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7438",
          "type": "analog-value"
        },
        "object-name": "ReturnSpeed.F17",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7439",
          "type": "analog-value"
        },
        "object-name": "ReturnSpeed.F18",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7440",
          "type": "analog-value"
        },
        "object-name": "ReturnSpeed.F19",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7441",
          "type": "analog-value"
        },
        "object-name": "ReturnSpeed.F2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7442",
          "type": "analog-value"
        },
        "object-name": "ReturnSpeed.F20",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7443",
          "type": "analog-value"
        },
        "object-name": "ReturnSpeed.F21",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7444",
          "type": "analog-value"
        },
        "object-name": "ReturnSpeed.F22",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7445",
          "type": "analog-value"
        },
        "object-name": "ReturnSpeed.F23",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7446",
          "type": "analog-value"
        },
        "object-name": "ReturnSpeed.F24",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7447",
          "type": "analog-value"
        },
        "object-name": "ReturnSpeed.F26",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7448",
          "type": "analog-value"
        },
        "object-name": "ReturnSpeed.F3",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7449",
          "type": "analog-value"
        },
        "object-name": "ReturnSpeed.F4",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7450",
          "type": "analog-value"
        },
        "object-name": "ReturnSpeed.F9",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7451",
          "type": "analog-value"
        },
        "object-name": "Speed.CT1",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.865861,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.865861,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7452",
          "type": "analog-value"
        },
        "object-name": "Speed.CT1.1",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.441517,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.441517,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7453",
          "type": "analog-value"
        },
        "object-name": "Speed.CT1.2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.441517,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.441517,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7454",
          "type": "analog-value"
        },
        "object-name": "Speed.CT2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.868494,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.868494,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7455",
          "type": "analog-value"
        },
        "object-name": "Speed.CT2.1",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7456",
          "type": "analog-value"
        },
        "object-name": "Speed.CT2.2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7457",
          "type": "analog-value"
        },
        "object-name": "Speed.CT3",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.872535,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.872535,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7458",
          "type": "analog-value"
        },
        "object-name": "Speed.CT4",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.865861,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.865861,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7460",
          "type": "analog-value"
        },
        "object-name": "SupplySpeed.S1",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.73,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.73,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7461",
          "type": "analog-value"
        },
        "object-name": "SupplySpeed.S10",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7462",
          "type": "analog-value"
        },
        "object-name": "SupplySpeed.S11",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7463",
          "type": "analog-value"
        },
        "object-name": "SupplySpeed.S12",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7464",
          "type": "analog-value"
        },
        "object-name": "SupplySpeed.S13",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7465",
          "type": "analog-value"
        },
        "object-name": "SupplySpeed.S14",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7466",
          "type": "analog-value"
        },
        "object-name": "SupplySpeed.S15",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7467",
          "type": "analog-value"
        },
        "object-name": "SupplySpeed.S16",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7468",
          "type": "analog-value"
        },
        "object-name": "SupplySpeed.S17",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7469",
          "type": "analog-value"
        },
        "object-name": "SupplySpeed.S18",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7470",
          "type": "analog-value"
        },
        "object-name": "SupplySpeed.S19",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7471",
          "type": "analog-value"
        },
        "object-name": "SupplySpeed.S2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.88,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.88,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7472",
          "type": "analog-value"
        },
        "object-name": "SupplySpeed.S20",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7473",
          "type": "analog-value"
        },
        "object-name": "SupplySpeed.S22",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7474",
          "type": "analog-value"
        },
        "object-name": "SupplySpeed.S3",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7475",
          "type": "analog-value"
        },
        "object-name": "SupplySpeed.S4",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7476",
          "type": "analog-value"
        },
        "object-name": "SupplySpeed.S5",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7477",
          "type": "analog-value"
        },
        "object-name": "SupplySpeed.S6",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7478",
          "type": "analog-value"
        },
        "object-name": "SupplySpeed.S7",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.75,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.75,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7479",
          "type": "analog-value"
        },
        "object-name": "SupplySpeed.S8",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7480",
          "type": "analog-value"
        },
        "object-name": "SupplySpeed.S9",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7501",
          "type": "analog-value"
        },
        "object-name": "ElecM1.Demand",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1200,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1200,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7502",
          "type": "analog-value"
        },
        "object-name": "ElecM2.Demand",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1132,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1132,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7503",
          "type": "analog-value"
        },
        "object-name": "ElecM3.Demand",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 972,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          972,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7504",
          "type": "analog-value"
        },
        "object-name": "ElecM4.Demand",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1456,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1456,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7505",
          "type": "analog-value"
        },
        "object-name": "ElecM5.Demand",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 1048,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1048,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7506",
          "type": "analog-value"
        },
        "object-name": "ElecM6.Demand",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 552,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          552,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7507",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.F10",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7508",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.F11",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 54.98,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          54.98,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7509",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.F12",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 55.27,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          55.27,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7510",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.F17",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 58.630001,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          58.630001,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7511",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.F18",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7512",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.F19",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 57.560001,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          57.560001,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7513",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.F1",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7514",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.F20",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7515",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.F21",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7516",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.F22",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 55.57,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          55.57,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7517",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.F23",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7518",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.F24",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7519",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.F26",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 50.52,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          50.52,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7520",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.F2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7521",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.F3",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7522",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.F4",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7523",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.F9",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7524",
          "type": "analog-value"
        },
        "object-name": "HWSupplyStpt34",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 120,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          120,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7529",
          "type": "analog-value"
        },
        "object-name": "LowLevelStpt",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 4,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          4,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7531",
          "type": "analog-value"
        },
        "object-name": "NWSupplyStpt34",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 56,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          56,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.02,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7532",
          "type": "analog-value"
        },
        "object-name": "OAH_Avg",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0.574934,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0.574934,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7533",
          "type": "analog-value"
        },
        "object-name": "OAT_Avg",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 72.853027,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          72.853027,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7534",
          "type": "analog-value"
        },
        "object-name": "OA_CO2_Avg",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 537.779968,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          537.779968,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7567",
          "type": "analog-value"
        },
        "object-name": "RHCStptEast.S7",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 45,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          45,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7568",
          "type": "analog-value"
        },
        "object-name": "RHCStptEast.S1",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 45,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          45,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7569",
          "type": "analog-value"
        },
        "object-name": "RHCStptNorth.S2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 70,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          70,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7570",
          "type": "analog-value"
        },
        "object-name": "RHCStptNorth.S8",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 70,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          70,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7571",
          "type": "analog-value"
        },
        "object-name": "RHCStptSouth.S7",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 45,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          45,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7572",
          "type": "analog-value"
        },
        "object-name": "RHCStptSouth.S1",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 45,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          45,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7573",
          "type": "analog-value"
        },
        "object-name": "RHCStptWest.S2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 65,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          65,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7574",
          "type": "analog-value"
        },
        "object-name": "RHCStptWest.S8",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 70,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          70,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7575",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.S10",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7576",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.S11",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7577",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.S12",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7578",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.S13",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7579",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.S14",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7580",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.S15",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 59.16,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          59.16,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7581",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.S16",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 54.43,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          54.43,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7582",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.S17",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 59.259998,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          59.259998,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7583",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.S18",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7584",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.S19",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 55.369999,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          55.369999,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7585",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.S1",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 42.830002,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          42.830002,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7586",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.S20",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7587",
          "type": "analog-value"
        },
        "object-name": "FanFdbckS22",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 52.610001,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          52.610001,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7588",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.S2",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 50.560001,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          50.560001,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7589",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.S3",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7590",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.S4",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7591",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.S5",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7592",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.S6",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7593",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.S7",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 45.880001,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          45.880001,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7594",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.S8",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7595",
          "type": "analog-value"
        },
        "object-name": "FanFdbck.S9",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 60,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          60,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7596",
          "type": "analog-value"
        },
        "object-name": "SESupStptCalc34",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 56,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          56,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.1,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7597",
          "type": "analog-value"
        },
        "object-name": "SESupStptCalc9",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 56,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          56,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7598",
          "type": "analog-value"
        },
        "object-name": "Steam.Momentary",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 45.599995,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          45.599995,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7600",
          "type": "analog-value"
        },
        "object-name": "StmHi.Momentary",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 0,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7601",
          "type": "analog-value"
        },
        "object-name": "StmLow.Momentary",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 16.199997,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          16.199997,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0.5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7602",
          "type": "analog-value"
        },
        "object-name": "StmMed.Momentary",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 29.399998,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          29.399998,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7605",
          "type": "analog-value"
        },
        "object-name": "Total.Demand",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 6456,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          6456,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7606",
          "type": "analog-value"
        },
        "object-name": "Water.TodayCFC",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 3079,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          3079,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 5,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7607",
          "type": "analog-value"
        },
        "object-name": "Water.TodayGC",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 23024.892578,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          23024.892578,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7615",
          "type": "analog-value"
        },
        "object-name": "Water.TodayGA",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 44224.542969,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          44224.542969,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7616",
          "type": "analog-value"
        },
        "object-name": "Water.TodayCFA",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 5910,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          5910,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7618",
          "type": "analog-value"
        },
        "object-name": "HWSupplyStpt9",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 120,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          120,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7619",
          "type": "analog-value"
        },
        "object-name": "HWSupplyStptC",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 120,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          120,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7620",
          "type": "analog-value"
        },
        "object-name": "HWSupplyStptCPer",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 125,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          125,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "COV-increment": 0,
        "description": "",
        "event-state": "normal",
        "object-identifier": {
          "id": "7621",
          "type": "analog-value"
        },
        "object-name": "NWSupplyStpt9",
        "object-type": "analog-value",
        "out-of-service": false,
        "present-value": 56,
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          56,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": 0,
        "status-flags": [
          false,
          false,
          false,
          false
        ],
        "units": "no-units"
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7015",
          "type": "binary-value"
        },
        "object-name": "RampDownLevel1",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7137",
          "type": "binary-value"
        },
        "object-name": "AirCompLowPress",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7153",
          "type": "binary-value"
        },
        "object-name": "DHWHighTemp1",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7154",
          "type": "binary-value"
        },
        "object-name": "DHWHighTemp2",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7155",
          "type": "binary-value"
        },
        "object-name": "DHWHighTempE34",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7156",
          "type": "binary-value"
        },
        "object-name": "DHWHighTempEast9",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7157",
          "type": "binary-value"
        },
        "object-name": "DHWHighTempNC",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7158",
          "type": "binary-value"
        },
        "object-name": "DHWHighTempSC",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7159",
          "type": "binary-value"
        },
        "object-name": "DHWHighTempW9",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7160",
          "type": "binary-value"
        },
        "object-name": "DHWHighTempW34",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7161",
          "type": "binary-value"
        },
        "object-name": "EjectorPitHigh",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7162",
          "type": "binary-value"
        },
        "object-name": "HighLev.CT1.TCT1",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7163",
          "type": "binary-value"
        },
        "object-name": "HighLev.CT2.TCT2",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7164",
          "type": "binary-value"
        },
        "object-name": "HouseTankHi34",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7165",
          "type": "binary-value"
        },
        "object-name": "HouseTankHi45",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7166",
          "type": "binary-value"
        },
        "object-name": "HouseTankHi9",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7167",
          "type": "binary-value"
        },
        "object-name": "HouseTankLo34",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7168",
          "type": "binary-value"
        },
        "object-name": "HouseTankLo45",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7169",
          "type": "binary-value"
        },
        "object-name": "HouseTankLo9",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7174",
          "type": "binary-value"
        },
        "object-name": "LowLev.CT1.TCT1",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7175",
          "type": "binary-value"
        },
        "object-name": "LowLev.CT2.TCT2",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7186",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P1",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7187",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P10",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7188",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P11",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7189",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P12",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7190",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P13",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7191",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P16",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7192",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P17",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7193",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P18",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7194",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P19",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7195",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P2",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7196",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P20",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7197",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P23",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7198",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P24",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7199",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P25",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7200",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P26",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7201",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P3",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7202",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P33",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7203",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P34",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7204",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P35",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7205",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P36",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7206",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P37",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7207",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P38",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7208",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P39",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7209",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P4",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7210",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P40",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7211",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P5",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7212",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P6",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7213",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P7",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7214",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P8",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7215",
          "type": "binary-value"
        },
        "object-name": "PumpStatus.P9",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7348",
          "type": "binary-value"
        },
        "object-name": "SummerMode",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7349",
          "type": "binary-value"
        },
        "object-name": "SumpPitHigh",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7350",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS22",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7351",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS20",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7352",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS21",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7353",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS13",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7354",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS14",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7355",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS15",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7356",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS16",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7357",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS17",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7358",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS18",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7359",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS19",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7360",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS9",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7361",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS12",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7362",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS11",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7363",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS8",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7364",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS7",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7365",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS2",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7366",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS5",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7367",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS3",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7368",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS4",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7369",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS6",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7370",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS1",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7371",
          "type": "binary-value"
        },
        "object-name": "SupplyFanStatS10",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "active",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7459",
          "type": "binary-value"
        },
        "object-name": "SteamShutoff",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7481",
          "type": "binary-value"
        },
        "object-name": "CO2Mode.S2",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7482",
          "type": "binary-value"
        },
        "object-name": "CO2Mode.S5",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7483",
          "type": "binary-value"
        },
        "object-name": "CO2Mode.S4",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7484",
          "type": "binary-value"
        },
        "object-name": "CO2Mode.S3",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7485",
          "type": "binary-value"
        },
        "object-name": "CO2Mode.S6",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7486",
          "type": "binary-value"
        },
        "object-name": "CO2Mode.S1",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7487",
          "type": "binary-value"
        },
        "object-name": "CO2Mode.S10",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7488",
          "type": "binary-value"
        },
        "object-name": "CO2Mode.S11",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7489",
          "type": "binary-value"
        },
        "object-name": "CO2Mode.S12",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7490",
          "type": "binary-value"
        },
        "object-name": "CO2Mode.S9",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7491",
          "type": "binary-value"
        },
        "object-name": "CO2Mode.S13",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7492",
          "type": "binary-value"
        },
        "object-name": "CO2Mode.S14",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7493",
          "type": "binary-value"
        },
        "object-name": "CO2Mode.S15",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7494",
          "type": "binary-value"
        },
        "object-name": "CO2Mode.S16",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7495",
          "type": "binary-value"
        },
        "object-name": "CO2Mode.S17",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7496",
          "type": "binary-value"
        },
        "object-name": "CO2Mode.S18",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7497",
          "type": "binary-value"
        },
        "object-name": "CO2Mode.S19",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7498",
          "type": "binary-value"
        },
        "object-name": "CO2Mode.S20",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7499",
          "type": "binary-value"
        },
        "object-name": "CO2Mode.S21",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7500",
          "type": "binary-value"
        },
        "object-name": "CO2Mode.S22",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7525",
          "type": "binary-value"
        },
        "object-name": "LowLevelMCT1",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7526",
          "type": "binary-value"
        },
        "object-name": "LowLevelMCT2",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7527",
          "type": "binary-value"
        },
        "object-name": "LowLevelMCT3",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7528",
          "type": "binary-value"
        },
        "object-name": "LowLevelMCT4",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7530",
          "type": "binary-value"
        },
        "object-name": "MCT.HighTemp",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7535",
          "type": "binary-value"
        },
        "object-name": "PumpFail.12",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7536",
          "type": "binary-value"
        },
        "object-name": "PumpFail.13",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7537",
          "type": "binary-value"
        },
        "object-name": "PumpFail.19",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7538",
          "type": "binary-value"
        },
        "object-name": "PumpFail.20",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7539",
          "type": "binary-value"
        },
        "object-name": "PumpFail.23",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7540",
          "type": "binary-value"
        },
        "object-name": "PumpFail.24",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7541",
          "type": "binary-value"
        },
        "object-name": "PumpFail.25",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7542",
          "type": "binary-value"
        },
        "object-name": "PumpFail.26",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7543",
          "type": "binary-value"
        },
        "object-name": "PumpFail.CHWP",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7544",
          "type": "binary-value"
        },
        "object-name": "PumpFail.CWP",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7545",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P1",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7546",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P10",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7547",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P11",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7548",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P16",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7549",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P17",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7550",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P18",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7551",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P2",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7552",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P3",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7553",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P33",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7554",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P34",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7555",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P35",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7556",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P36",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7557",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P37",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7558",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P38",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7559",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P39",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7560",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P4",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7561",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P40",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7562",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P5",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7563",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P6",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7564",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P7",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7565",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P8",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7566",
          "type": "binary-value"
        },
        "object-name": "PumpFail.P9",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7599",
          "type": "binary-value"
        },
        "object-name": "SteamTempHiBoth",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7603",
          "type": "binary-value"
        },
        "object-name": "TCT1.HighTemp",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "active-text": "ACTIVE",
        "description": "",
        "event-state": "normal",
        "inactive-text": "INACTIVE",
        "object-identifier": {
          "id": "7604",
          "type": "binary-value"
        },
        "object-name": "TCT2.HighTemp",
        "object-type": "binary-value",
        "out-of-service": false,
        "present-value": "inactive",
        "priority-array": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "relinquish-default": "inactive",
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "archive": "FALSE Writable",
        "file-access-method": 1,
        "file-size": 107762,
        "file-type": "Configuration",
        "modification-date": "2016-02-19T22:25:00.000Z",
        "object-identifier": {
          "id": "1",
          "type": "file"
        },
        "object-name": "ACCConfiguration",
        "object-type": "file",
        "read-only": true
      },
      {
        "description": "",
        "object-identifier": {
          "id": "7018",
          "type": "program"
        },
        "object-name": "SetStartandStop",
        "object-type": "program",
        "out-of-service": false,
        "program-change": "0 Writable",
        "program-state": 2,
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "description": "",
        "object-identifier": {
          "id": "7608",
          "type": "program"
        },
        "object-name": "CopyBnet1",
        "object-type": "program",
        "out-of-service": false,
        "program-change": "0 Writable",
        "program-state": 2,
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "description": "",
        "object-identifier": {
          "id": "7609",
          "type": "program"
        },
        "object-name": "CopyBnet2",
        "object-type": "program",
        "out-of-service": false,
        "program-change": "0 Writable",
        "program-state": 2,
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "description": "",
        "object-identifier": {
          "id": "7610",
          "type": "program"
        },
        "object-name": "CopyBnet3",
        "object-type": "program",
        "out-of-service": false,
        "program-change": "0 Writable",
        "program-state": 2,
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "description": "",
        "object-identifier": {
          "id": "7611",
          "type": "program"
        },
        "object-name": "CopyBnet4",
        "object-type": "program",
        "out-of-service": false,
        "program-change": "0 Writable",
        "program-state": 2,
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "description": "",
        "object-identifier": {
          "id": "7612",
          "type": "program"
        },
        "object-name": "CopyBnet5",
        "object-type": "program",
        "out-of-service": false,
        "program-change": "0 Writable",
        "program-state": 2,
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "description": "",
        "object-identifier": {
          "id": "7613",
          "type": "program"
        },
        "object-name": "CopyBnet6",
        "object-type": "program",
        "out-of-service": false,
        "program-change": "0 Writable",
        "program-state": 2,
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "description": "",
        "object-identifier": {
          "id": "7614",
          "type": "program"
        },
        "object-name": "CopyBnet7",
        "object-type": "program",
        "out-of-service": false,
        "program-change": "0 Writable",
        "program-state": 2,
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "description": "",
        "object-identifier": {
          "id": "7617",
          "type": "program"
        },
        "object-name": "CopyBnet8",
        "object-type": "program",
        "out-of-service": false,
        "program-change": "0 Writable",
        "program-state": 2,
        "status-flags": [
          false,
          false,
          false,
          false
        ]
      }
    ]
  }
};

