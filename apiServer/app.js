const express = require('express');
const app = express();

const statusRoute = require('./status/statusRouter');
const eventsRoute = require('./events/eventsRouter');
const otherRoute = require('./default/defaultRouter');
app.use('/status', statusRoute);
app.use('/api/events', eventsRoute);
app.use('*', otherRoute);
module.exports = app;
