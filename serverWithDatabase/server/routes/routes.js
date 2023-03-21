const express = require("express");
const app = express();
const middleware = require("../middleware/middleware");
const User = require("../model/user");

app.get("/get", (req, res) => {
  res.send("in the router file");
});

app.post("/user", middleware, async (req, res) => {
  const { name, phone, email, profession, password } = req.body;
  try {
    const user = new User({name, email, phone, profession, password});
    await user.save();
    res.send(req.body);
    res.end();
  } catch (error) {
    console.log("print the error ", error);
  }
});

module.exports = app;
