const { ObjectID } = require('bson')
const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types;

const webPassSchema = new mongoose.Schema({
    iusername: {
        type: String
    },
    fusername: {
        type: String
    },
    ausername: {
        type: String
    },
    nusername: {
        type: String
    },
    lusername: {
        type: String
    },
    cusername: {
        type: String
    },
    rusername: {
        type: String
    },
    ipassword: {
        type: String
    },
    fpassword: {
        type: String
    },
    apassword: {
        type: String
    },
    npassword: {
        type: String
    },
    lpassword: {
        type: String
    },
    cpassword: {
        type: String
    },
    rpassword: {
        type: String
    },
    user: {
        type:ObjectId,
        ref:"User"
    }
})

mongoose.model("Web", webPassSchema)