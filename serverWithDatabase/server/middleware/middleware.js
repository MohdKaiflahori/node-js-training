const validator = require('validator');
const User = require('../model/user');
const middleware = async (req, res, next) => {
    const {name , email , phone , profession , password } = req.body
    const numberRegex = /\d{10}/;
    const chekcIfUserExist = await User.findOne({email})
    console.log('chekcIfUserExist :', chekcIfUserExist.email);
    if(!email || !name || !phone || !profession || !password){
        console.log("Invalid credentials");
        res.send("Invalid credentials");
    }
    else if (!validator.isEmail(email) || !numberRegex.test(phone)) {
      console.log("email or number  is not valid");
      res.send("Invalid email or phone number");
    } 
    else if(email === chekcIfUserExist.email){
        console.log("Email already ragister");
        res.send("Email already ragister");
    }
    else {
      next();
    }
  };
  module.exports = middleware;