

const express = require("express")
const router = express.Router()

const Resident = require("../model/residentModel");

router.post("",async(req,res)=>{
    try{

        const resident = await Resident.create(req.body);
        return res.send(resident)
    }
    catch(e){
        return res.send(e.message)
    }
})

router.get("/",async(req,res)=>{
    try{

        const resident = await Resident.find().lean().exec();
        return res.send(resident)
    }
    catch(e){
        return res.send(e.message)
    }
})


router.get("/:id",async(req,res)=>{
    try{

        const resident = await Resident.findById(req.params.id).lean().exec();
        return res.send(resident)
    }
    catch(e){
        return res.send(e.message)
    }
})

router.patch("",async(req,res)=>{
    try{

        const resident = await Resident.findByIdAndUpdate(req.params.id ,req.body ,{new:true});
        return res.send(resident)
    }
    catch(e){
        return res.send(e.message)
    }
})

router.delete("",async(req,res)=>{
    try{

        const resident = await Resident.findByIdAndDelete(req.params.id);
        return res.send(resident)
    }
    catch(e){
        return res.send(e.message)
    }
})


module.exports = router