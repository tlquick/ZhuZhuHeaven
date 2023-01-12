module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.post("/user/signup", (req, res) => {
    res.json({ message: "Signup." });
  });
  app.post("/user/signin", (req, res) => {
    res.json({ message: "Signin." });
  });
  app.post("/user/signout", (req, res) => {
    res.json({ message: "Signout." });
  });
  app.get("/user/cart", (req, res) => {
    res.json({ message: "User cart." });
  });
  app.post("/user/cart/add", (req, res) => {
    res.json({ message: "Cart - Add item." });
  });
};
