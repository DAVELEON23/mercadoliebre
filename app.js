const express = require ("express");
const app = express ();

const path = require ("path")

app.use(express.static(path.join(__dirname,"public")))

app.get ("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
});

app.listen (4000,()=> {
    console.log("servidor corriendo http://localhost:4000/")
});
