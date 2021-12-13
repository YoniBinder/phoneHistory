let Phone = require("../models/Phones");


exports.addPhone = function (req, res) {
    const phone = {
        id:"",
        phone:req.body.phone,
        date:req.body.date
    };
    Phone.create(phone, function (err, result) {
      if (err) {
        return res.send(err);
      } else {
        result.id = String(result._id);
        Phone.findByIdAndUpdate(
          { _id: result.id },
          result,
          function (err, result) {
            if (err) {
              return res.send(err);
            } else {
              return res.json(result);
            }
          }
        );
      }
    });
  };