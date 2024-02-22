// const http=require('http')
// const express=require('express')
// const app=express()
// const path=require('path')
// app.use(express.static(path.join(__dirname, 'project')))
// const server=http.createServer(app)
// const {Server}=require('socket.io')


// function setupsocket(server){
//     const io = new Server(server)
//     io.on('connection',(socket)=>{
//         console.log('connected',socket.id);
        
//         socket.on('messege',(messege) => {
//             console.log('message: ' + msg);
//           });    
//     })
//     app.get('/websocket',(req,res)=>{
//         res.sendFile(path.join(__dirname, 'project','index.html'))
//     })
// }

// server.listen(3000,setupsocket(server))

