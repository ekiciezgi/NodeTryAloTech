var http = require('http')
 var log = require('./log.js')
 var sayHello=require('./exortsDemo.js')

http.createServer(function(req, res){
    if(req.url=="/admin"){
        res.write("User page")
    }else if(req.url=="/"){
        res.write("Main page")
    }else if(req.url=="/customers"){
        res.writeHead(200,{"Content-Type": "application/json"})
        res.write(JSON.stringify({name:"Ezgi",lastName:"Ekici"}))
    }
    
    res.end(" Alotech")
}).listen(8080);

log.information("Alotech started")
console.log(sayHello())