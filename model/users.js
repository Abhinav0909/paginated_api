const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})
const Schema = new mongoose.model('users',usersSchema);
module.exports = Schema;