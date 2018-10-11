const fs = require('fs');
const util = require('util');
const getFile = util.promisify(fs.readFile);

function parseData(data) {
  data = JSON.parse(data);
  return data;
}
function sortData(data, type) {
  // console.log(data);
  return data.filter((element) => {
    return element.type == type;
  });
}
function createMetadata(data) {
  console.log(data.length);
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
  if (type) {
    parsedData.events = sortData(parsedData.events, type);
    if (limit !== null) {
      parsedData.events = cutData(parsedData.events, limit);
    }
    parsedData.metadata = createMetadata(parsedData.events);
    return parsedData;
  } else {
    if (limit !== null) {
      parsedData.events = cutData(parsedData.events, limit);
    }
    parsedData.metadata = createMetadata(parsedData.events);
    return parsedData;
  }
}
module.exports.getEvents = getEvents;
