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
function mergeEvents(events, ammount) {
  return events.concat(...events).splice(ammount);
}
async function fetchAndParseData() {
  try {
    let rawData = await getFile('./apiServer/data/events.json', 'utf8');
    let parsedData = parseData(rawData);
    return parsedData;
  } catch (e) {
    throw new Error(e);
  }
}
function cutData(data, end) {
  return data.slice(undefined, end);
}
async function getEvents(type, limit) {
  try {
    let data = await fetchAndParseData();
    if (type !== undefined && type !== 'all') {
      data.events = sortData(data.events, type);
      if (limit !== null) {
        data.events = cutData(data.events, limit);
      }
      return data.events;
    } else if (type === 'all') {
      return data.events;
    } else {
      throw new Error(400);
    }
  } catch (e) {
    throw new Error(e);
  }
}
async function getEventsType() {
  try {
    let data = await fetchAndParseData();
    let eventTypes = data.events.map((event) => {
      return event.type;
    });
    return eventTypes.filter(function(item, pos) {
      return eventTypes.indexOf(item) === pos;
    });
  } catch (e) {
    throw new Error(e);
  }
}
module.exports.getEvents = getEvents;
module.exports.getEventsType = getEventsType;
module.exports.mergeEvents = mergeEvents;
