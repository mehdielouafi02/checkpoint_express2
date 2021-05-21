const express =require('express')
const app = express()


app.listen(5000 , (err)=>{
    err 
    ? console.log("server error!")
    : console.log("server is running on port 5000")
 })
 