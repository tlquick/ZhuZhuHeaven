module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.get("/info/privacy", (req, res) => {
    res.json({ message: "Privacy Policy." });
  });
  app.get("/info/terms", (req, res) => {
    res.json({ message: "Terms and conditions." });
  });
  app.get("/info/agreement", (req, res) => {
    res.json({ message: "Customer Agreement." });
  });
  app.get("/info/sitemap", (req, res) => {
    res.json({ message: "Sitemap." });
  });
};
