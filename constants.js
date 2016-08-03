'use strict';
const KEYS = {
  VENDOR : 'vendor',
  BIBBS : 'bibbs-supported',
  SERVICES : 'bacnet-standard-application-services-supported',
  TYPES : 'standard-object-types-supported',
  LINK : 'data-link-layer-option',
  CHARSET : 'character-sets-supported',
  FUNCTIONALITY : 'special-functionality',
  LIST : 'list-of-objects-in-test-device'
};

const OBJECTS_LIST = {
  CONTROLLERS : 'points',
  DEVICE : 'device'
};

module.exports = {
  KEYS,
  OBJECTS_LIST
};

