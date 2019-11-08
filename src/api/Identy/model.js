import mongoose from "mongoose"

const identySchema = new mongoose.Schema({
    login:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    signedIn:{
        type:Boolean,
        default:false
    }
});

const Identy = mongoose.model("Identy", identySchema);

export default Identy;