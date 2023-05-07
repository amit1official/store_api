const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    product_name:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    phone_Number:{
        type:Number,
        required:true,
        min:10,
    },
    address:{
        type:String,
        required:true
    }

})

const Store = mongoose.model('store',storeSchema)

module.exports = Store;