const mongoose = require("mongoose")

const flatSchema = new mongoose.Schema({

    type : {type : String , required : true},
    block : {type : String , required : true},
    house_no : {type : Number , required : true},
    resident_id : {type : mongoose.Schema.Types.ObjectId , ref:"resident" , required:true}

});

module.exports = mongoose.model("flat",flatSchema)