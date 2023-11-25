import { Router } from "express";
import * as productController from "./Products.controller.js"
const router  = Router()

router.get('/',productController.getProducts)


export default router