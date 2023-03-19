const Book = require("../model/book");

const middleware = async  (req, res , next) => {
    try {
        const {bookName , bookAuthor , bookPublication , bookVersion , releasedDate } = req.body;
        const chekIfBookExist = await Book.findOne({bookName});
        console.log('chekIfBookExist :', chekIfBookExist);
        if(!bookName || !bookAuthor || !bookPublication || !bookVersion  || !releasedDate){
             console.log("Invalid input");
             res.send("Invalid details");
           }
        else if(bookName === chekIfBookExist.bookName && bookAuthor === chekIfBookExist.bookAuthor){
                    console.log("Book already exist ");
                    res.send("Book already exist")
             }
             else {
                next();
             }
        
    } catch (error) {
        console.error(error);
    }
}
module.exports = middleware;