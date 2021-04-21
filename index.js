// import {large} from './script.js';


// console.log(large);
// function hello(){
//     console.log("Hello World");
// }
// hello();


var express = require('express');

var server=express();

server.get('/getfun',function(request,response){
    response.send("Hello World");
});
server.listen(4000,function(){
    console.log('Callback: server started.')
});