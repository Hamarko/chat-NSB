<template>   
    <b-row class="content" >
      <b-col cols="9" class="chat">    
          <b-row class='chat-header'>         
            <img :src="getImgUrl(users.find(u=> u.id===currentUserId).link)" alt="">         
            <b-col class="header-text">
              <h2>{{users.find(u=> u.id===currentUserId).name}}</h2>
              <p>{{users.find(u=> u.id===currentUserId).description}}</p>
            </b-col>        
          </b-row>
        <div class="chat-area">         
            <Message 
            v-for="m in messages.filter(m=> m.to===currentUserId || m.from===currentUserId)" 
            :key="m.messageId" :name="m.name" :text="m.text" :date="m.date" :owner="m.to===currentUserId"/>                             
        </div>
        <div class="chat-form">
          <ChatForm @message='sendMessage' />
        </div>
      </b-col>
      <b-col cols="3" class="users">
        <b-row style="margin-bottom:10px">
          <b-col  :class="online" v-on:click="switchOnline"><p>Online</p></b-col>
          <b-col  :class="all" v-on:click="switchAll"><p>All</p></b-col>
        </b-row>
        <b-row class="card-container" >
          <div  
           v-for="user in users.filter(userFilter)" 
           :key="user.id"   
           :class="{selctCart:user.id===currentUserId}"
           v-on:click="selectCart(user.id)" 
          >
            <Bar              
              :name="user.name" 
              :description="user.description" 
              :link="user.link"
              :online="!user.online"                      
              />
          </div>
        </b-row>
        <div class="form-shearch">
          <b-form-input placeholder="Search..." v-model="search"></b-form-input>
        </div>        
      </b-col>
    </b-row>
   
</template>

<script>
import Message from "@/components/Message";
import ChatForm from "@/components/ChatForm";
import Bar from "@/components/ChatForm";
import socket from '~/plugins/socket.io.js'

export default {
  data:()=> ({     
    selfAccounts:{
      id: String,
      name:'Anonymous',
      description:'Excepteur sint occaecat cupidatat non proident, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, velit esse cillum dolore eu fugiat nulla pariatur.',
      bot: false,
      online:true,
      link:'gif5.jpg',
      allMassages:[]
    },
    currentUserId:"1",
    online:{
      card: false,
      activ: true
    },
    all:{
      card: true,
      activ: false
    },
    search:''
  }),
  asyncData () {
    return new Promise(resolve =>
      socket.emit('last-messages', (users,messages) => resolve({ users,messages }))
    )
  },  
  watch: {
    users: function(newValue) {
      this.users=newValue}
    },  
  mounted(){
    this.creatUser()
    socket.on('new-user', (user) => {      
      this.users.push(user)
    })
    socket.on('new-message',(message)=>{      
      this.messages.push(message)
    })     
    socket.on('disconnect-user',(id)=>{      
      this.users[this.users.findIndex(u=>u.id===id)].online=false
    })     
  },
  computed: {},
  methods: {
    userFilter(user){           
      if (user.id === this.selfAccounts.id) return false      
      if (this.online.card && this.all.activ ) {
        return (this.search==="")? true: user.name.includes(this.search)
      }        
      if (!this.online.card && !this.all.activ && user.online) {
        return (this.search==="")? true: user.name.includes(this.search)
        }
    },    
    creatUser(){      
      if(localStorage.selfID){
        console.log(localStorage.selfID)
        this.selfAccounts.id = localStorage.selfID
        this.selfAccounts.name =  this.selfAccounts.name+"-"+localStorage.selfID     
        socket.emit('create-user',this.selfAccounts) 
      } else{
        const id = new Date ()     
        localStorage.selfID = id.getUTCMilliseconds()
        this.selfAccounts.id = String(id.getUTCMilliseconds())
        this.selfAccounts.name =  this.selfAccounts.name+"-"+localStorage.selfID
        socket.emit('create-user',this.selfAccounts)     
      }
    },    
    switchAll(){
      this.online.card = true
      this.online.activ = false
      this.all.card = false
      this.all.activ = true     
        },
    switchOnline(){
      this.online.card = false
      this.online.activ = true
      this.all.card = true
      this.all.activ = false
    },
    selectCart(id){
      this.currentChat = this.users.find(u=> u.id===id)
      this.currentUserId = id
    },
    getImgUrl(link){
      if (link) return require("../assets/"+link)
      },
    sendMessage(message){
      const {text} = message
      console.log(text)
      if (!text.trim()) { return }
      const {name,id} = this.selfAccounts
      const user = this.users.find(u => u.id === this.currentUserId) 
      const date = new Date ()
      const messageId = String(date.getUTCMilliseconds())
      const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
              };
      const time = new Intl.DateTimeFormat('en-US', options).format(date)
      const sendMessage = {text,
                           name,
                           date:time,
                           messageId,
                           from: id,
                           to: this.currentUserId}  
      console.log(sendMessage)    
      this.messages.push(sendMessage)      
      socket.emit('send-message', sendMessage)
      console.log(this.messages)      
    }    
  },
  
}
</script>

<style>
.content{
  min-height: 651px;
}
.chat{
  background-color: #d7dfe7ff;
  border-radius: 4px; 
}
.chat-header{
  height: 170px;
  background-color: #becbd9;
  overflow-y: auto;
}
.chat-header img{
  height: 170px;
  width: 170px;
}
.chat-form {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  height: 80px;
}
.chat-area {
  position: absolute;
  top: 170px;
  right: 0;
  left: 0;
  bottom: 80px;
  padding: 1rem;
  overflow-y: auto;
}
.users{  
  background-color:#fff;
  border-radius: 4px;  
}
.card-container{
  min-height: 540px;
  justify-content: flex-start;
  align-content: flex-start;
}
.card{
  height: 42px; 
  background-color: #f8f8f8; 
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0;
}
.card p{  
  color: #777777;
  text-align: center;
  margin-top: 10px;
  margin-bottom:0;
  }
.activ{
    height: 42px;
} 
.activ p{ 
  text-align: center;
  margin-top: 10px;
  margin-bottom:0;
}
.form-shearch{
  justify-self: flex-end;
}
.selctCart{
  background-color: #f8f8f8;
}
</style>
