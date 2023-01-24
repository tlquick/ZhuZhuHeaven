const { verifySignUp } = require("../middleware");
const controller = require("../controllers/user.controller");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.post(
    "/user/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    controller.signup
  );
  app.post("/user/signin", controller.signin);
  app.post("/user/signout", controller.signout);

  app.get("/cart", (req, res) => {
    res.json({ message: "User cart." });
  });
  app.post("/cart/add", (req, res) => {
    res.json({ message: "Cart - Add item." });
  });
};
