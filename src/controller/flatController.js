
const express = require("express")
const router = express.Router()

const Flat = require("../model/flatModel");

router.post("/flat",async(req,res)=>{
    try{

        const flat = await Flat.create(req.body);
        return res.send(flat)
    }
    catch(e){
        return res.send(e.message)
    }
})

router.get("/flat",async(req,res)=>{

    const page = req.query.page || 1;
    const sort = req.query.sort;

    console.log(sort)
    
     if(req.query.type==""&&sort==0){
        var flat = await Flat.find().limit(3).skip((page-1)*3).lean().exec()
        return res.send(flat)
     }
     else if(req.query.type==""&&sort!==0){
        flat = await Flat.find().sort({house_no:sort}).limit(3).skip((page-1)*3).lean().exec();
        return res.send(flat)
     }
     else if(req.query.type!==""&&sort==0){
        flat = await Flat.find({type:req.query.type}).limit(3).skip((page-1)*3).lean().exec()
        return res.send(flat)
     }
     else{
    try {
      flat = await Flat.find({type:req.query.type}).sort({house_no:sort}).limit(3).skip((page-1)*3).lean().exec();
        return res.send(flat)
    } catch (error) {
        res.send(error)
    }
}  
})


router.patch("/flat",async(req,res)=>{
    try{

        const flat = await Flat.findByIdAndUpdate(req.params.id ,req.body ,{new:true});
        return res.send(flat)
    }
    catch(e){
        return res.send(e.message)
    }
})

router.delete("/flat",async(req,res)=>{
    try{

        const flat = await Flat.findByIdAndDelete(req.params.id);
        return res.send(flat)
    }
    catch(e){
        return res.send(e.message)
    }
})


module.exports = router