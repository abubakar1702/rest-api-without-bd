const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const usersRouter = require("./routes/users.route")
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use("/users", usersRouter)

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

app.use((req,res,next)=>{
    res.status(404).json({message:"404 error!"})
})


app.use((err,req,res,next)=>{
    res.status(500).json({message:"something went wrong"})
})



module.exports = app