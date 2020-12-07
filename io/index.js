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
    io.on('connection', socket => {      
      socket.on('logMssage', (data) =>{
        console.log('logMssage', data)
      })
      socket.on('last-messages', fn => fn(users.getAllUsers()))
      // Add new User
      socket.on('create-user', user => {
        console.log(socket.id,user)
        user.socetId = socket.id
        if(!users.get(user.id)){
          users.add(user)
          console.log(users.getAllUsers())
          socket.broadcast.emit('new-user',user)
        }
      })
      // Add message
      socket.on('send-message', message =>{ 
        const to = message.to
        const from = message.from
        //Echo bot
        if (to === "1") {          
          users.addM(message)
          message.to =  from
          message.from = to                   
          users.addM(message)
          io.to(socket.id).emit('new-message',message)
        }
        //Reverse bot 
        else if(to === "2") {
          users.addM(message)
          message.text = message.text.split('').reverse().join('')
          message.to =  from
          message.from = to 
          setTimeout(() => {
            users.addM(message)
            io.to(socket.id).emit('new-message',message)
          }, 3000);     
        }
        else  {
          const user = users.get(message.to)
          users.addM(message)        
          io.to(user.socetId).emit('new-message',message)        
        }             
        const time = Math.floor(Math.random() * (Math.floor(120000) - Math.ceil(10000))) + Math.ceil(10000);
        setInterval(() => {         
         message.from = 1 
         message.text = "Этот пример возвращает случайное целое число в заданном интервале. Возвращаемое значение не менее min (или следующее целое число, кото"        
         socket.broadcast.emit('new-message',message)
        }, time);
      })      
    })
  })
}