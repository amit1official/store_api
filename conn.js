const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/STORE",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection is Successfully");
}).catch((e)=>{
    console.log(e);
})