const express= require("express");
const cors= require ("cors");

const app= express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Express Backend");
});

app.listen(5170,()=>{
    console.log("Server active on http://localhost:5170");
})