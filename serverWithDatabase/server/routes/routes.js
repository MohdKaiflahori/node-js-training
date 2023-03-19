const express = require("express");
const Book = require("../model/book");
const app = express();
const mw = require('../middleware/middleware1');
// const User = require("../model/user");
// const bcrypt = require("bcryptjs");

app.get("/get", (req, res) => {
  res.send("in the router file");
});

// app.post("/user", async (req, res) => {
//   try {
//     const { name, email, phone, profession, password } = req.body;
    
//     if (!name || !email || !phone || !profession || !password) {
//       return res.json({ error: "invalid input" });
//     }

//     // in this same query you have to pass the check of email or phone number 
//     const checkIfUserExist = await User.findOne({ email });
//     console.log(
//       ">serverWithDatabase | [routes.js] > #16 | checkIfUserExist : ",
//       checkIfUserExist
//     );
//     console.log(checkIfUserExist);
//     if (checkIfUserExist) {
//       return res.json({ error: "user with this email already exists." });
//     }
//     const userData = new User({ name, email, phone, profession, password });
//     // in between please hash the password
//     await userData.save();
//     res.send("data stored successfully.");
//   } catch (error) {
//     console.error(error);
//   } 
// });
app.post("/book",  async (req, res)=>{
  try {
    const {bookName , bookAuthor , bookPublication , bookVersion , releasedDate } = req.body;
    console.log('req.body :', req.body);
    const bookData = new Book({bookName,bookAuthor,bookPublication,bookVersion,releasedDate})
    await bookData.sava();
    res.send("data stored successfully.")
  } catch (error) {
    console.error(error);
  }
})

// app.post("/login", async (req, res) => {
//   try {
//     let token;
//     const { email, password } = req.body;
//     if (!email || !password) {
//       res.json({ error: "invalid inputs provided." });
//     }

//     const checkIfEmailExist = await User.findOne({ email });
//     if (!checkIfEmailExist) { // add the check for password
//         // dont tell the user the exact error
//         res.json({ message: "invalid credentials" });
//     }

//     // check password , it will return the boolean value
//     const checkPassword = await bcrypt.compare(
//       password,
//       checkIfEmailExist?.password
//     );
//     token = await checkIfEmailExist.generateAuthToken();
//     // res.cookie("cookieName", token, {
//     //   expires: new Date(Date.now() + 13000000000),
//     //   httpOnly: true,
//     // });

//     console.log(">serverWithDatabase | [routes.js] > #41 | token : ", token);
//     if (!checkPassword) { // add the check for password
//       // dont tell the user the exact error
//       res.json({ message: "invalid credentials" });
//     }
//     res.json({ message: "user login successfully." });
//   } catch (error) {
//     console.error(error);
//   }
// });

module.exports = app;

// generate jwt token and store it in the db
// cookies storation
// get token from the cookie and check it
