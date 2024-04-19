const express = require("express")
const app = express()


const PORT = process.env.PORT | 8080;
//above "process.env.PORT" we can pass port as "key=value" pair when we run the node sever if not passed then it will run on 8080
app.listen(PORT,()=>{
    console.log(`server started on port : ${PORT}`)
})


app.get("/",(req,res)=>{
    res.json({massage:"this is my first Docker image"})
})