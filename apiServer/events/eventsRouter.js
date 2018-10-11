const express = require('express');
const router = new express.Router();
const bodyParser = require('body-parser');

//  deal with cors requests
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
//  for body parsing
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.post('/', (req, res) => {
  if (req.body.type !== 'info'&& req.body.type !== 'critical') {
    res.status(400).send('incorrect type');
  } else {
    res.status(200).send('ok');
  }
});
module.exports = router;
