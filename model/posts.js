const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    posts:{
        type:String,
        required:true
    }
})
const Schema = new mongoose.model('posts',usersSchema);
module.exports = Schema;