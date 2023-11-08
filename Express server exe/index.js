import express from "express" ;
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("The server is working !");
});

app.listen(port, ()=> {
    console.log("Server running in port "+port);
})

//netstat -ano | findstr "LISTENING" --> this finds the ports that are listening for outside interecation


