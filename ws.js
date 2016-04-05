var http = require('http');
http.createServer(function(req,res){
    res.writeHeader(200);
    res.write('success\n')
    res.end();

}).listen(8080);
console.log('success');
var EventEmitter = require('./index');
