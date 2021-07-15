const { getSomethingFromModel } = require('../model/index.js');

module.exports = {
  getSomething(req, res) {
    getSomethingFromModel((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },

  getSomethingPost(req, res) {
    console.log(req.query.myKey);
    console.log(req.params.id);
    console.log(req.body.testKey);
  },
}