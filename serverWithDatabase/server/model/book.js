const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
     bookName : {
        type : String,
        required : true
     },
     bookAuthor : {
        type : String,
        required : true
     },
     bookPublication : {
        type : String,
        required : true
     },
     bookVersion : {
        type : Number,
        required : true
     },
     releasedDate : {
        type : String,
        required : true
     },
});
const Book = mongoose.model('book',bookSchema);
module.exports = Book;
