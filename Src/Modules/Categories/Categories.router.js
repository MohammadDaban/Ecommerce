import { Router } from "express";
import *as CategoriesController from './Categories.controller.js'
import fileUpload, { fileValidation } from "../../Services/Multer.js";
const router  = Router()

router.get('/',CategoriesController.getCaregories)
router.post('/',fileUpload(fileValidation.image).single('image'), CategoriesController.createCaregory)

export default router