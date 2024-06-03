const express = require("express");
const app = express();
const cors = require("cors");

const {user,userprofile}=require('./model/User')
const {posts,insert}=require('./model/Posts')
const router=require('./routes/User')
const routerp=require('./routes/Posts')
const axios = require('axios');
app.use(cors());
app.use(express.json());



user()
userprofile()
posts()
insert()


app.use('/signup',router)
app.use('/posts',routerp)
port=3000

app.listen(port, () => {
	console.log(port);
});
