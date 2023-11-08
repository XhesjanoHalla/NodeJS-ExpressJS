

const fs = require("fs"); // po perdorim file system nga node js 

// fs.writeFile("message.txt","Hello node js here",(err)=>{
//     if (err) throw err ; 
//     console.log("The file has been saved !");
// });
fs.readFile('\message.txt',"utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });