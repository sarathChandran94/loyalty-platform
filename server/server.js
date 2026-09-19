import express from "express"
import cors from "cors"
import mongoose from 'mongoose'
import dotenv from "dotenv"
import customerRoutes from "./routes/customerRoutes.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT 

//middleware

app.use(cors())
app.use(express.json())

app.use('/api/customers', customerRoutes)
app.get('/api/health', (req,res) => {
    res.json({
        message: 'Loyalty Api is running',
    })
})



mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDb connected successfully');
    }).catch((e) => {
        console.log(`MongoDB connection Error: ${e}`)
    })

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
})