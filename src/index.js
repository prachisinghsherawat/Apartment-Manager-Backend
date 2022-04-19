const express = require("express")
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors())

const connect = require("./config/db")

const flatCrud = require("./controller/flatController")
app.use("/",flatCrud)

const residentCrud = require("./controller/residentController")
app.use("/resident",residentCrud)

const userController = require("./controller/userController")
app.use("/",userController);


app.listen(8080,async(req,res) =>{

    try {
        await connect();
        console.log("listening port 8080")

    } catch (e) {
        console.log(e.message)
    }
})