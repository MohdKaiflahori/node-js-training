const Book = require("../model/book");
const data = require("../config/config");

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
};
