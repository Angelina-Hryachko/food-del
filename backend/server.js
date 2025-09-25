import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import path from 'path'
import { fileURLToPath } from 'url'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

connectDB()

app.use('/api/food', foodRouter)
app.use('/images', express.static(path.join(__dirname, 'uploads')))
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
    res.send("API WORKING")
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})


