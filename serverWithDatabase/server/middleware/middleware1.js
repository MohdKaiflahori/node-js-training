const Book = require("../model/book");
const User = require('../model/user');
const data = require("../config/config");
const validator = require('validator');


const middlewareUser = async (req, res, next) => {
  const {name , email , phone , profession , password } = req.body
  const numberRegex = /\d{10}/;
  const chekcIfUserExist = await User.findOne({email})
  if(!email || !name || !phone || !profession || !password){
      console.log("Invalid credentials");
      res.send("Invalid credentials");
  }
  else if (!validator.isEmail(email) || !numberRegex.test(phone)) {
    console.log("email or number  is not valid");
    res.send("Invalid email or phone number");
  } 
  else if(chekcIfUserExist){
      console.log("User with this email already ragister");
      res.send("User already ragister with this email");
  }
  else {
    next();
  }
};
const middlewarePost = async (req, res, next) => {
  try {
    const { bookName, bookAuthor, bookPublication, bookVersion, releasedDate } =
      req.body;
    if (
      !bookName ||
      !bookAuthor ||
      !bookPublication ||
      !bookVersion ||
      !releasedDate
    ) {
      console.log(data.INVALID_DATA);
      res.send(data.INVALID_DATA);
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
  }
};

const middlewarePut = async (req, res, next) => {
  try {
    const { bookVersion } = req.body;
    if (!bookVersion) {
      console.log(data.INVALID_VERSION);
      res.send(data.INVALID_VERSION);
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
  }
};
const middlewareDel = async (req, res, next) => {
  try {
    const { bookAuthor, bookName } = req.body;
    if (!bookName || !bookAuthor) {
      console.log(data.INVALID_BOOKDETAIL);
      res.send(data.INVALID_BOOKDETAIL);
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  middlewarePost,
  middlewarePut,
  middlewareDel,
  middlewareUser,
};
