import express from 'express'
import 'dotenv/config'
import { Server } from 'socket.io'
import cors from 'cors'
import http from 'http'

const port = process.env.PORT || 4000
const app = express();
const server = http.createServer(app);

app.use(cors({
    origin:process.env.FRONTEND_PRODUCTION_URL
}))

const io = new Server(server,{
    cors:{
       origin:process.env.FRONTEND_PRODUCTION_URL
    }
})

app.get('/',(req,res)=>{
    res.json({
        message:"hello from server"
    })
})

const rooms = {

}

io.on('connection',(socket)=>{

    const updateParticipants =async (socket,len)=>{
        const roomIds = Array.from(socket.rooms).filter(room=>room!==socket.id)
        for(const roomId of roomIds){
            const numberOfParticipants = await io.in(roomId).fetchSockets();
            console.log(numberOfParticipants.length,len);
            if(numberOfParticipants.length-len==0){
                delete rooms[roomId]
            }
            io.to(roomId).emit('current-participant',{
                roomid:roomId,
                participant:numberOfParticipants.length-len
            })
        }
    } 

    socket.on('create-room',({
        roomId,
        roomName,
        userName
       })=>{
        if(!rooms[roomId]){
            rooms[roomId]={}
            rooms[roomId]['roomName']=roomName;
        }
        socket.join(roomId);
    })

    socket.on('join-room', async({roomId,userName})=>{
        if(rooms[roomId]){
            socket.join(roomId);
            await updateParticipants(socket,0);
            socket.to(roomId).emit('join-notification',`${userName} joined the group`)
            socket.emit('room-detail',{
                roomId,
                roomName:rooms[roomId]['roomName']
            })
        }  
        console.log(rooms,"during joining room")     
    })

    socket.on('send-message',({ userName,
        message,
        roomid,
        time})=>{
            socket.to(roomid).emit('receive-message',{roomid,userName,message,time})
    })

    socket.on('disconnecting',async()=>{
        await updateParticipants(socket,1)
         console.log(rooms,"during disconnection")
    })
})
server.listen(port,()=>{
    console.log("server is running at the port number "+port);
})

