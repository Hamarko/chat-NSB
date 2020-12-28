import http from 'http'
import socketIO from 'socket.io'
import Users from './user'

export default function () {   
  this.nuxt.hook('render:before', (renderer) => {
    const server = http.createServer(this.nuxt.renderer.app)
    const io = socketIO(server)   
    // overwrite nuxt.server.listen()
    this.nuxt.server.listen = (port, host) => new Promise(resolve => server.listen(port || 3000, host || 'localhost', resolve))
    // close this server on 'close' event
    this.nuxt.hook('close', () => new Promise(server.close))    
    // Add socket.io events
    const users = Users()
    const messages = []           
    io.on('connection', socket => {       
      socket.on('logMssage', (data) =>{
        console.log('logMssage', data)        
      })      
      socket.on('disconnect', function() {
        console.log('Got disconnect!',socket.id)
        const disconnectUser = users.getAllUsers().find(u=>u.socetId === socket.id)
        if (disconnectUser){
          disconnectUser.online = false
          users.uppdateUser(disconnectUser)
          console.log('disconnect',disconnectUser.id)
          io.emit('disconnect-user', disconnectUser.id)
        }
      })      
      socket.on('last-messages', (fn) => {         
        return fn(users.getAllUsers(),messages)
      })
      // Add new User
      socket.on('create-user', user => {       
        user.socetId = socket.id
        console.log(user)
        if(!users.get(user.id)){
          users.add(user)
          console.log("Uppdate user-")
          socket.broadcast.emit('new-user',user)
        }else{
          console.log("Uppdate user id = ",user.id)
          users.uppdateUser(user)
          socket.broadcast.emit('new-user',user)
        }
      })
      // Add message
      socket.on('send-message', message =>{ 
        const to = message.to
        const from = message.from
        const date = new Date ()
        const options = {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
            };
        const time = new Intl.DateTimeFormat('en-US', options).format(date)
        const messageId = String(date.getUTCMilliseconds())
        //Echo bot
        console.log(message)
        if (to === "1") {          
          messages.push(message)
          const echoMessage= {
            text:message.text,
            name:"Echo bot",
            date:time,
            messageId,
            to:from,
            from:to}                   
          messages.push(echoMessage)
          io.to(socket.id).emit('new-message',echoMessage)
        }
        //Reverse bot 
        else if(to === "2") {
          messages.push(message)
          const reversMessage= {
                                text:message.text.split('').reverse().join(''),
                                name:"Reverse bot",
                                date:time,
                                messageId,
                                to:from,
                                from:to}      
          setTimeout(() => {
            messages.push(reversMessage)
            io.to(socket.id).emit('new-message',reversMessage)
          }, 3000);     
        }
        // User new message 
        else  {
          const user = users.get(message.to)
          messages.push(message)        
          io.to(user.socetId).emit('new-message',message)        
        } 
        //Spam bot            
        const timeFrame = Math.floor(Math.random() * (Math.floor(1200000) - Math.ceil(100000))) + Math.ceil(100000);
        const spam = {text:"Этот пример возвращает случайное целое число в заданном интервале. Возвращаемое значение не менее min",
                      name:"Spam bot",
                      date:time,
                      messageId,
                      from: "3",
                      to: "all"}   
        setInterval(() => {
         io.emit('new-message',spam)
        }, timeFrame);
      })
      
    })
    
  })
}