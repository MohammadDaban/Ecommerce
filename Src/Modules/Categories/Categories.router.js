import { Router } from "express";
import *as CategoriesController from './Categories.controller.js'
const router  = Router()

router.get('/',CategoriesController.getCaregories)


export default router