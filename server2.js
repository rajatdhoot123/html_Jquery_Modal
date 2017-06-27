var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = 3000;


var server = http.createServer(function(req,res){
    if(req == 'GET'){
        var fileUrl;
        if(req.url == '/') fileUrl = './index.html';
        else fileUrl = req.url();
        var filePath = path.resolve(./frogger)
    }

});
