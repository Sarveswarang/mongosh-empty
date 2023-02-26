const fs=require('fs');
fs.readFile("./hooi-17.txt", "utf8",(err, data) => {
    if (err){
        console.error(err);
    }
    console.log(data);
})