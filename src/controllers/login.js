import express from 'express';


const loginController = express.Router()


//check to see if user is logged in with express sessions
loginController.get('/',(req,res)=>{
    if(req.session.user){
        res.status(200).json(req.session.user)
    }
    else{
        res.status(401).json({message:"You are not logged in"})
    }
}
)

loginController.post('/',(req,res)=>{
    console.log(req.body)
    if(req.body.username === "208" && req.body.password === "208"){
        req.session.user = {
            username: "208",
            password: "208"
        } 
        res.status(200).json(req.session.user)
     }
})







export default loginController


