import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
 
const __dirname= dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{

    let type = "weekday";
    let message = "Happy weekday!";
    const today = new Date();
    const day = today.getDay();
    if (day === 0 || day === 6){
        dayType = "Weekend";
        message = "Happy weekend!!!";
    }
    res.render("index.ejs",{
         dayType:[type],
         msg : [message]});
});





app.listen(port,()=>{
    console.log("Server is running in port :"+port);
});