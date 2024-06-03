const express=require('express')
const sql=require('../dbconnect/dbconnect')
const routerp=express.Router()
const validatePassword=require('../utils/passwordvalid')
const asyncHandler = require("express-async-handler");

const bcrypt = require('bcrypt');
const generateToken=require('../utils/generateToken')
const authMiddleware = require("../utils/Verfiy");

const emailvalid=require('../utils/emailvalidation')


routerp.get('/',asyncHandler(async(req,res)=>



{
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit) ;
    const offset = (page - 1) * limit;
const posts = await sql`SELECT * FROM posts LIMIT ${limit} OFFSET ${offset}`

res.status(200).json({posts:posts})
  
}))

module.exports=routerp