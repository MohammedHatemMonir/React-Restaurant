import express from 'express'
import * as control from'../controllers/resturant.controller.js'
export const router =express.Router()
router.get('/',control.getAllresturant)
router.post('/Addresturant',control.addNewresturant)
router.delete('/deleteresturant/:id',control.deleteresturant)