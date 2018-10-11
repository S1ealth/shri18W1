const fs = require('fs');
const util = require('util');
const getFile = util.promisify(fs.readFile);

async function getEvents(type) {
  let data = await getFile('./apiServer/data/events.json', 'utf8');
  data = JSON.parse(data);
  if (type === 'info' || type === 'critical') {
    data = data.events;
    let sortedArr = data.filter((element) => {
      return element.type == type;
    });
    return sortedArr;
  } else {
    return data;
  }
}
module.exports.getEvents = getEvents;
