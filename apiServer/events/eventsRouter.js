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
const queryParser = function(req, res, next) {
  if (req.body.hasOwnProperty('type')) {
    req.body.type = req.body.type.split(':');
    req.body.type = req.body.type.filter((item, pos) => {
      return req.body.type.indexOf(item) === pos;
    });
    next();
  } else {
    res.status(400).send('incorrect type');
  }
};
//  for body parsing
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.post('/', queryParser, (req, res) => {
  let limit = null;
  const {type} = req.body;
  if (req.body.hasOwnProperty('limit')) {
    limit = req.body.limit;
  }
  events.getEventsType()
      .then((typesArr) => {
        let eT = type.map(
            (bType) => {
              return typesArr.find((aType) => {
                return bType === aType;
              });
            }
        );
        let eQ = eT.map((type) => {
          return events.getEvents(type, limit);
        });
        Promise.all(eQ)
            .then((data) => {
              let result = {
                events: events.mergeEvents(data, data.length),
              };
              res.status(200).json(result);
            })
            .catch((e) => {
              res.status(400).send('incorrect type');
            });
      })
      .catch((e) => {
        throw e;
      });
});
module.exports = router;
