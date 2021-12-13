let Phone = require("../models/Phones");

exports.getPhones = function (req, res) {
    
    Phone.find({}, function (err, result) {
      if (err) {
        return res.send(err);
      }
    //   res.setHeader("Content-Range", `${result.length}`);
      res.json(result);
    })
  };