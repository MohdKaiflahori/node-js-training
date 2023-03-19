const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required: true
    },
    email :{
        type : String,
        required: true
    },
    phone :{
        type : Number,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [
        {
            token : {
                type: String,
                required: true
            }
        }
    ] 
})

userSchema.pre('save', async function(next) {
    console.log('>serverWithDatabase | [user.js] > #28 |  : ', );
    // const salt = bcrypt.genSalt();
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
})

userSchema.methods.generateAuthToken = async function () {
    try {
       let tokenData = jwt.sign({_id: this._id}, process.env.KEY);
                                    // database field : function field
       this.tokens = this.tokens.concat({ token : tokenData });
       await this.save();
       return tokenData;
    } catch (error) {
        console.error(error)
    }
}
 
const User = mongoose.model('USER',userSchema);

module.exports = User;