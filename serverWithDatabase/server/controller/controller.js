const User = require("../model/user");
const bcrypt = require("bcryptjs");
const Book = require("../model/book");
const data = require("../config/config");




const signUpFunction = async (req, res) => {
  const { name, phone, email, profession, password } = req.body;
  try {
    const user = new User({name, email, phone, profession, password});
    await user.save();
    res.send(req.body);
    res.end();
  } catch (error) {
    console.log("print the error ", error);
  }
}
const loginFunction = async (req, res) => {
    try {
      let token;
      const { email, password } = req.body;
      if (!email || !password) {
        res.json({ error: "invalid inputs provided." });
      }
  
      const checkIfEmailExist = await User.findOne({ email });
      if (!checkIfEmailExist) { // add the check for password
          // dont tell the user the exact error
          res.json({ message: "invalid credentials" });
      }
  
      // check password , it will return the boolean value
      const checkPassword = await bcrypt.compare(
        password,
        checkIfEmailExist?.password
        );
        console.log('password :', password);
      token = await checkIfEmailExist.generateAuthToken();
      // res.cookie("cookieName", token, {
      //   expires: new Date(Date.now() + 13000000000),
      //   httpOnly: true,
      // });
  
      console.log(">serverWithDatabase | [routes.js] > #41 | token : ", checkPassword);
      if (!checkPassword) { // add the check for password
        // dont tell the user the exact error
        console.log("hello");
        res.json({ message: "invalid credentials" });
      }
      res.json({ message: "user login successfully." });
    } catch (error) {
      console.error(error);
    }
}
const bookPostFunction = async (req, res) => {
  try {
    const { bookName, bookAuthor, bookPublication, bookVersion, releasedDate } =
      req.body;
    const chekIfBookExist = await Book.findOne({ bookName });
    if (chekIfBookExist) {
      if (
        bookName === chekIfBookExist.bookName &&
        bookAuthor === chekIfBookExist.bookAuthor
      ) {
        console.log(data.BOOK_EXIST);
        res.send(data.BOOK_EXIST);
      }
    } else {
      const bookData = new Book({
        bookName,
        bookAuthor,
        bookPublication,
        bookVersion,
        releasedDate,
      });
      await bookData.save();
      res.send(data.BOOK_STORE);
    }
  } catch (error) {
    console.error(error);
  }
}
const bookPutFunction = async (req, res) => {
  try {
    const { bookVersion, bookName } = req.body;
    const checkIfBookExist = await Book.findOne({ bookName });
      if (bookVersion === checkIfBookExist.bookVersion) {
        console.log(data.INVALID_VERSION);
        res.send(data.INVALID_VERSION);
      }
    else {
      const updateVersion = await Book.updateOne(
        { bookName },
        { $set: { bookVersion } }
      );
      res.send(data.BOOK_UPDATE);
    }
  } catch (error) {
    console.error(error);
  }
}
const bookDelFunction = async (req, res) => {
  try {
    const { bookName, bookAuthor } = req.body;
    const checkIfBookExist = await Book.findOne({ bookName });
      if (
        bookName !== checkIfBookExist.bookName ||
        bookAuthor !== checkIfBookExist.bookAuthor
      ) {
        console.log(data.BOOK_ISNOTEXIST);
        res.send(data.BOOK_ISNOTEXIST);
      
    } else {
      const { bookPublication, bookVersion, releasedDate } = checkIfBookExist;
      const deletedBook = await Book.deleteMany({
        bookName,
        bookAuthor,
        bookPublication,
        bookVersion,
        releasedDate,
      });
      res.send(data.BOOK_DELETE);
    }
  } catch (error) {
    console.error(error);
  }
}
const bookGetFunction = async (req, res) => {
  try {
    const { bookName, bookAuthor } = req.query;
    if (bookName || bookAuthor) {
      const bookData =
        bookName && bookAuthor
          ? await Book.find({ $and: [{ bookName }, { bookAuthor }] })
          : await Book.find({ $or: [{ bookName }, { bookAuthor }] });
      console.log("BookData : ", bookData);
      res.json(bookData);
    } else {
      const bookData = await Book.find();
      console.log("BookData : ", bookData);
      res.json(bookData);
  } 
}
  catch (error) {
    console.error(error);
  }
}
module.exports = {
  signUpFunction,
  loginFunction,
  bookPostFunction,
  bookPutFunction,
  bookDelFunction,
  bookGetFunction,
}