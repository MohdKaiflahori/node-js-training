const Book = require("../model/book");

const middlewarePost = async  (req, res , next) => {
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
const middlewarePut = async (req,res,next) => {
    try {
        const {  bookVersion , bookName } = req.body;
        const chekIfBookExist = await Book.findOne({bookName});
        console.log('chekIfBookExist :', chekIfBookExist);
        if(!bookVersion || chekIfBookExist.bookVersion === bookVersion){
             console.log("Version is invalid or version is up to date");
             res.send("Version is invalid or version is up to date");
        }
             else {
                next();
             }
        
    } catch (error) {
        console.error(error);
    }

}
const middlewareDel = async (req,res,next) => {
    try {
        const {bookAuthor,bookName} = req.body;
        const checkIfBookExist = await Book.findOne({bookName , bookAuthor});
        console.log('checkIfBookExist :', checkIfBookExist);
        if(!bookName || !bookAuthor ){
            console.log("Please specify bookname or authorname ");
            res.send("Please specify bookname or authorname ")
        }
        else if (bookName !== checkIfBookExist.bookName || bookAuthor !== checkIfBookExist.bookAuthor){
           console.log("Didn't find a book");
           res.send("Didn't find a book");
        }
        else{
            next();
        }

    } catch (error) {
        console.error(error);
    }
}
module.exports = {
    middlewarePost , 
    middlewarePut ,
    middlewareDel ,
}  