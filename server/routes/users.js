const express = require("express");
const router= express.Router();
const User= require("../models/User");

//Create new user 

router.post("/", async (req,res)=>{
    try{
        const{name, email}= req.body;
        const user= new User({name, email});
        await user.save();
        res.status(201).json(user);
    } catch(e){
        res.status(400).json({message: e.message});
    }
});

//Access all the users 

router.get("/", async (req, res)=>{
    try{
        const users= await User.find();
      //  res.json(users);
        res.send("User API is working");
    } catch (e){
        res.status(500).json({message: e.message});
    }
});

module.exports= router;