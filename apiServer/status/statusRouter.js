const express = require('express');
const router = new express.Router();
const status = require('./status');
//  deal with cors requests
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
router.get('/', (req, res) => {
  const uptime = status.getUptime();
  res.status(200).type('json').send(uptime);
});
module.exports = router;
