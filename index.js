import exprees from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import AppRoutes from './src/routes/index.js'

dotenv.config()
const PORT = process.env.PORT
const app = exprees()
app.use(cors())
app.use(exprees.json())
// for parse the data
app.use('/', AppRoutes)

app.listen(PORT, ()=> console.log(`App is Listening ${PORT}`))