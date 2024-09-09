import express from 'express'
import 'dotenv/config'
import { Server } from 'socket.io'
import cors from 'cors'
import http from 'http'

const port = process.env.PORT || 4000
const app = express();
const server = http.createServer(app);

app.use(cors({
    origin:'http://localhost:5173'
}))

const io = new Server(server,{
    cors:{
        origin:'http://localhost:5173'
    }
})

app.get('/',(req,res)=>{
    res.json({
        message:"hello from server"
    })
})

const rooms = {

}
const socketIds ={

}

io.on('connection',(socket)=>{

    console.log('socker id :'+socket.id)

    const updateParticipants =async (socket)=>{
        const roomIds = Array.from(socket.rooms).filter(room=>room!==socket.id)
        for(const roomId of roomIds){
            const numberOfParticipants = await io.in(roomId).fetchSockets();
            if(numberOfParticipants.length==0){
                delete rooms[roomId]
            }
            io.to(roomId).emit('current-participant',{
                roomid:roomId,
                participant:numberOfParticipants.length
            })
        }
    } 

    socket.on('create-room',({
        roomId,
        roomName,
        roomAvatar,
        userName
       })=>{
        if(!rooms[roomId]){
            rooms[roomId]={}
            rooms[roomId]['roomName']=roomName;
            rooms[roomId]['roomAvatar']=roomAvatar;
        }
        socket.join(roomId);
        if(!socketIds[socket.id]){
            socketIds[socket.id]=[]
        }
        socketIds[socket.id].push(roomId)
        
        console.log(roomId)
    })

    socket.on('join-room',({roomId,userName})=>{
        if(rooms[roomId]){
            socket.join(roomId);
            updateParticipants(socket);
            socket.to(roomId).emit('join-notification',`${userName} joined the group`)
            socket.emit('room-detail',{
                roomId,
                roomAvatar:rooms[roomId]['roomAvatar'],
                roomName:rooms[roomId]['roomName']
            })
        }
        if(!socketIds[socket.id]){
            socketIds[socket.id]=[]
        }
        socketIds[socket.id].push(roomId)
        
    })

    socket.on('send-message',({ userName,
        message,
        roomid,
        time})=>{
            socket.to(roomid).emit('receive-message',{roomid,userName,message,time})
    })

    socket.on('disconnect',async()=>{
         const roomIds = socketIds[socket.id]
         for(let room of roomIds){
           const numberOfParticipants =await io.in(room).fetchSockets();
           console.log(numberOfParticipants,numberOfParticipants.length)
           if(numberOfParticipants.length==0){
                delete rooms[room];
           }
           io.to(room).emit('current-participant',{
            participant:numberOfParticipants.length,
            roomid:room
           })
         }
         delete socketIds[socket.id];
    })
})
server.listen(port,()=>{
    console.log("server is running at the port number "+port);
})