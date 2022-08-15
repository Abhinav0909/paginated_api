const express = require("express");
const paginatedResult = require("./middlewares/paginedResult");
const app = express();
const mongoose = require('mongoose');
const users = require('./model/users');
const posts = require('./model/posts');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 1000;
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},async(err)=>{
    if(err){
        console.log("Couldn't connect to db");
    }else{
        console.log('Db connected successfully');
        if(await users.countDocuments().exec() > 0)return
        Promise.all([
            users.create({name:'User 1'}),
            users.create({name:'User 2'}),
            users.create({name:'User 3'}),
            users.create({name:'User 4'}),
            users.create({name:'User 5'}),
            users.create({name:'User 6'}),
            users.create({name:'User 7'}),
            users.create({name:'User 8'}),
            users.create({name:'User 9'}),
            users.create({name:'User 10'}),
            users.create({name:'User 11'}),
            users.create({name:'User 12'}),
            users.create({name:'User 13'}),
            users.create({name:'User 14'})
        ]).then(()=>console.log('Added Users'))
    }
})
app.get("/users", paginatedResult(users),(req, res) => {
  res.json(res.paginatedResult)
});
// app.get("/posts", paginatedResult(posts),(req, res) => {
//     res.json(res.paginatedResult);
//   });
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});
