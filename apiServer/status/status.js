function getUptime() {
  const rawUptime = process.uptime();
  const uptime = Math.floor(rawUptime);
  return convertUptimeToDate(uptime);
}
function convertUptimeToDate(totalSeconds) {
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  minutes = String(minutes).padStart(2, '0');
  hours = String(hours).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');
  let uptime = hours + ':' + minutes + ':' + seconds;
  return uptime;
}
module.exports.getUptime = getUptime;
