import mongoose,{Schema,model,} from "mongoose";

const userSchema = new Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
    },
    address:{
        type:String,
    },
    confirmEmail:{
        type:String,
        default:false,
    },
    gender:{
        type: String,
        enum:['Male','Female']
    },
    status:{
        type:String,
        default:'Active',
        enum:['Active','Inactive'],
    },
    role:{
        type:String,
        default:'User',
        enum:['User','Admin']
    }
},{
    timestamps:true,
})

 const userModel = mongoose.model.User || model('User',userSchema)
 
 export default userModel