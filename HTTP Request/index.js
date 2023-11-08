import express from "express" ;

const app = express();
const port = 3000;



app.get("/",(req,res)=>{

    res.send("Server is working!");
    
});
app.get("/about",(req,res)=>{

    res.send("<h1>About me </h1>");
    
});
app.get("/Contact",(req,res)=>{

    res.send("<h1>Contact Me</h1>");
    
});

app.listen(port,()=>{
    console.log("Server is working in port"+port);
});