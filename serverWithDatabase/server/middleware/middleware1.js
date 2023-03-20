const Book = require("../model/book");

const middlewarePost = async  (req, res , next) => {
    try {
        const {bookName , bookAuthor , bookPublication , bookVersion , releasedDate } = req.body;
        if(!bookName || !bookAuthor || !bookPublication || !bookVersion  || !releasedDate){
             console.log("Invalid input");
             res.send("Invalid details");
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
        const {  bookVersion } = req.body;
        if(!bookVersion){
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
        if(!bookName || !bookAuthor ){
            console.log("Please specify bookname or authorname ");
            res.send("Please specify bookname or authorname ")
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