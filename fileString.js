var fs= require('fs')

fs.readFile('dosya.txt','utf8',function(err,data){
    if(err){
        throw err
    }
    console.log(data.toString())
});
fs.writeFile('dosya2.txt','Ezgi Ekici',function(err,data){
    if(err){
        throw err
    }
    console.log("Writing")
});