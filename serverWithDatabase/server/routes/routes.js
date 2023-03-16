const express = require("express");
const app = express();
// const db = require('mongoose');
const mw = require("../middleware/middleware1");
const User = require("../model/user");

app.get("/get", (req, res) => {
  res.send("in the router file");
});
const middleware = (req, res, next) => {
  const email = req.body.email;
  const number = req.body.phone;
  console.log("number :", number);
  const emailRegex = /([A-Za-z0-9]\w+)([@])([a-z]\w+)(\.[a-z]{3})/;
  const numberRegex = /\d{10}/;
  if (!emailRegex.test(email) || !numberRegex.test(number)) {
    console.log("email or number  is not valid");
    res.send("Invalid email or phone number");
  } else {
    next();
  }
};
app.post("/user", middleware, async (req, res) => {
  const { name, phone, email, profession, password } = req.body;
  try {
    // console.log(req.new);
    console.log(
      ">serverWithDatabase | [routes.js] > #10 | req.body : ",
      req.body
    );
    const user = new User({name, email, phone, profession, password});

    await user.save();
    res.send(req.body);
    res.end();
  } catch (error) {
    console.log("print the error ", error);
  }
});

module.exports = app;
