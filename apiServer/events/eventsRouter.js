const express = require('express');
const router = new express.Router();
const bodyParser = require('body-parser');
const events = require('./events');
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
  let limit = null;
  if (req.body.hasOwnProperty('limit')) {
    limit = req.body.limit;
  }
  if (req.body.hasOwnProperty('type')) {
    if (req.body.type === 'info' || req.body.type === 'critical') {
      events.getEvents(req.body.type, limit)
          .then((data) => {
            res.status(200).json(data);
          })
          .catch((e) => {
            throw e;
          });
    } else {
      res.status(400).send('incorrect type');
    }
  } else {
    events.getEvents(false, limit)
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((e) => {
          throw e;
        });
  }
});
module.exports = router;
