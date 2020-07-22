const express=require("express");
const app = express();
const path= require('path');
const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({
    extend:false
}));
app.use(express.json());

// app.post("/email", (req, res)=>{
//     res.json({message: "Message received"})
//     console.log( "receieved", req.body)
// })





app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
})




app.listen(PORT, ()=>{
    console.log("server is starting on port", 8080)
})