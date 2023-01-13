if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const app = express();

var corsOptions = {
  origin: `${process.env.CLIENT_URL}`,
};

app.use(cors(corsOptions));
app.use(express.json());

// content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "app-session",
    // keys: ['key1', 'key2'],
    secret: `${process.env.COOKIE_SECRET}`,
    httpOnly: true,
  })
);
const db = require("./models");
const mongoose = db.mongoose;
mongoose.set("strictQuery", true);
mongoose
  .connect(`${process.env.DATABASE_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Zhu Zhu Heaven." });
});
require("./routes/user.routes")(app);
require("./routes/info.routes")(app);
require("./routes/menu.routes")(app);

module.exports = app;
