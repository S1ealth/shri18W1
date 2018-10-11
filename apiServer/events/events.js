const fs = require('fs');
const util = require('util');
const getFile = util.promisify(fs.readFile);

function parseData(data) {
  data = JSON.parse(data);
  return data.events;
}
function sortData(data, type) {
  return data.filter((element) => {
    return element.type == type;
  });
}
async function getEvents(type) {
  let rawData = await getFile('./apiServer/data/events.json', 'utf8');
  let parsedData = parseData(rawData);
  if (type) {
    return sortData(parsedData, type);
  } else {
    return parsedData;
  }
}
module.exports.getEvents = getEvents;
