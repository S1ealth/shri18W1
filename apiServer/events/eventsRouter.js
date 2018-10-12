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
  let exq = [];
  if (req.body.hasOwnProperty('limit')) {
    limit = req.body.limit;
  }
  if (req.body.hasOwnProperty('type')) {
    const queryTypes = events.parseQuery(req.body.type);
    events.getEventsType()
        .then((types) => {
          queryTypes.forEach((qType) => {
            exq.push(types.find((jType) => {
              return qType === jType;
            }));
          });
          console.log(exq);
          let x = exq.map((type) => {
            return events.getEvents(type, limit);
          });
          Promise.all(x).then((data) => {
            console.log(data.length);
            let result = {
              events: [],
            };
            result.events = data.concat(...data);
            result.events.splice(0, data.length);
            res.status(200).json(result);
          })
              .catch((e) => {
                console.log(e);
                res.status(400).send('incorrect type');
              });
        })
        .catch((e) => {
          throw e;
        });
  }
});
module.exports = router;
