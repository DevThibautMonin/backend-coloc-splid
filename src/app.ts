import express from 'express'
import dotenv from 'dotenv'
import expenseRouter from './routes/expense.routes'
import connectDB from './config/db'
import cors from 'cors'
dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/expense', expenseRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})
