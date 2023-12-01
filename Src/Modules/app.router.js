import connectDB from "../../DB/Connection.js"
import categoriesRouter from "./Categories/Categories.router.js"
import productsRouter from "./Products/Products.router.js"

const initApp = (app,express) => {
    app.use(express.json())
    connectDB()
    app.get('/',(req,res)=>{
        return res.status(200).json({message:'welcome'})
    })
    app.use('/categories',categoriesRouter)
    app.use('/products',productsRouter)
    app.get('*',(req,res)=>{
        return res.status(500).json({message:'Page Not Found'})
    })
}

export default initApp