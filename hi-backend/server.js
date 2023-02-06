const { log } = require('console');

var app =require('express')();
const http =require('http').createServer(app);

var io=require('socket.io')(http);

app.get('/',(req,res)=>res.send('Hi'));

io.on('connection',(socket)=>{
    console.log('Some user is Connected');
})


http.listen(3000,()=>{
    console.log('Listening On *:3000');
})