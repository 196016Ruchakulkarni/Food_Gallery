import { Router } from 'express';
import React from 'react';


Router.post('contact-f',async (req,res)=>{
    const {fullname,phone,email,message} = req.body;

    if(!fullname||!phone||!email||!message)
    {
        return res.status(422).json({error:'Plz filled the field properly'});
    }

    try{
        const emailExist = await User.findOne({email:email});
    }
    catch(err){
        console.log(err);
    }
})