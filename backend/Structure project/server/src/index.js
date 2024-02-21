import express from 'express'
import { conn } from './database/dbconnection.js'
import { router } from './modules/routes/resturant.router.js'
const app=express()
app.use(express.json())
app.use(router)
app.listen(5001,()=>{
    console.log('server running')
})
