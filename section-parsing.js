'use strict';

function parseBasic(textArr){
  return textArr.filter(line => !line.match(/{|}|possible|supported|reported/))
  .map(line => line.replace('-- ', '').trim());
}


function parseWithColons(textArr){
	return textArr.filter(line => !line.match(/{|}/))
    .reduce((accum, line) => {
      const property = line.split(': ');
      const key = property[0].trim();
      const value = property[1].replace(/"/g, '');
      accum[key] = value;
      return accum;
  }, {});
}


module.exports = {
  parseBasic,
  parseWithColons
};