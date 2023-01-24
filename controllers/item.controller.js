const db = require("../models");
const Item = db.item;

exports.search = async (req, res) => {
  let foundItems;
  try {
    const searchString = req.query.s;
    foundItems = await Item.find({ name: `${searchString}` });
  } catch {
    founditems = [];
  }
  res.send(JSON.stringify(foundItems));
};
exports.getAll = async (req, res) => {
  let foundItems;
  try {
    foundItems = await Item.find();
  } catch {
    founditems = [];
  }
  res.send(JSON.stringify(foundItems));
};
