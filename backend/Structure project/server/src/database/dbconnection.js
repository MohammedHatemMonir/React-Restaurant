import mongoose from "mongoose";

mongoose.set('strictQuery',false)
export const conn=mongoose.connect('mongodb://127.0.0.1:27017/dineme')
.then(() => console.log('Connected!'));

