const jwt=require('jsonwebtoken')

const generateToken=(payLoad)=>{
    let token=jwt.sign(payLoad,'this_website_the_best')
    return token
}

module.exports=generateToken