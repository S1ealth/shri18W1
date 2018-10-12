const fs = require('fs');
const util = require('util');
const getFile = util.promisify(fs.readFile);

function parseData(data) {
  return JSON.parse(data);
}
function sortData(data, type) {
  return data.filter((element) => {
    return element.type == type;
  });
}
function parseQuery(query) {
  let result = query.split(':');
  return result;
}
function createMetadata(data) {
  return {
    totalEvents: data.length,
  };
}
function cutData(data, end) {
  return data.slice(undefined, end);
}
async function getEvents(type, limit) {
  let rawData = await getFile('./apiServer/data/events.json', 'utf8');
  let parsedData = parseData(rawData);
  if (type !== undefined) {
    // parsedData.metadata = createMetadata(parsedData.events);
    parsedData.events = sortData(parsedData.events, type);
    if (limit !== null) {
      parsedData.events = cutData(parsedData.events, limit);
    }
    return parsedData.events;
  } else {
    throw new Error(400);
  }
}
async function getEventsType() {
  let rawData = await getFile('./apiServer/data/events.json', 'utf8');
  let parsedData = parseData(rawData);
  let eventTypes = parsedData.events.map((event) => {
    return event.type;
  });
  return eventTypes;
}
module.exports.getEvents = getEvents;
module.exports.getEventsType = getEventsType;
module.exports.parseQuery = parseQuery;
