import slugify from "slugify"
import categoryModel from "../../../DB/Model/category.model.js"
import Cloudinary from "../../Services/Cloudinary.js"

export const getCaregories = (req,res)=>{

    return res.json({message:'Caregories....'})
    
}


export const createCaregory = async (req,res)=>{
    const name = req.body.name.toLowerCase()
    if(await categoryModel.findOne({name})){
        return res.json({message:'category name already exists'})
    }
    const {secure_url,public_id} = await Cloudinary.uploader.upload(req.file.path,{
        folder:`${process.env.APP_NAME}/category`})
        const cat = await categoryModel.create({name,slug:slugify(name),image:{secure_url,public_id}})
    return res.json({message:'success',cat})
}
