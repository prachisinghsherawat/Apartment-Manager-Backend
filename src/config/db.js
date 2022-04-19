
const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {

    return mongoose.connect(
        process.env.MONGODB_URL
    )
}

module.exports = connect