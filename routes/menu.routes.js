const controller = require("../controllers/item.controller");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.get("/search", controller.search);
  app.get("/category", controller.getAll);
};
