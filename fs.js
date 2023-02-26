const fs=require("fs");
const a="hai"
const[, ,file]=process.argv

for(var i=0;i<file;i++){
    fs.writeFile(`./hooii-${i}.txt`,a,(err)=>{
        console.log("Error writing")
    })
}