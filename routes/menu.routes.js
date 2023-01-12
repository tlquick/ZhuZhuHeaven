module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.get("/menu", (req, res) => {
    res.json({ message: "Main menu." });
  });
  app.get("/menu/categories", (req, res) => {
    res.json({ message: "Categories." });
  });
  app.get("/menu/categories/:id", (req, res) => {
    res.json({ message: "Sub categories." });
  });
  app.post("/menu/search", (req, res) => {
    res.json({ message: "Search results." });
  });
};
