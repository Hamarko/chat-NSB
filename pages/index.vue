<template>   
    <b-row class="content" >
      <b-col cols="9" class="chat">
        <b-row class='chat-header'>         
          <img src="../static/gif2.jpg" alt="">         
          <b-col class="header-text">
            <h2>Reverse bot</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
               pariatur. </p>
          </b-col>        
        </b-row>
        <div class="chat-area">

        </div>
        <div class="chat-form">

        </div>
      </b-col>
      <b-col cols="3" class="users">
        <b-row style="margin-bottom:10px">
          <b-col class="card-activ"><p>Onlin</p></b-col>
          <b-col class="card"><p>All</p></b-col>
        </b-row>
        <b-row class="card-container">
          <div class="user-cart">
            <div class="img-wrapper">
              <div class="img-box">
                <img src="../static/gif1.jpg" alt="">
              </div>
              <svg class='circle-svg' viewBox="0 0 80 80" width="20" height="20">
                <circle class="circle" cx="40" cy="40" r="38"/>
              </svg>              
            </div>
            <div class="text-content">
              <h6>Echo bot</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>            
          </div>          
          <div class="user-cart">
            <div class="img-wrapper">
              <div class="img-box">
                <img src="../static/gif1.jpg" alt="">
              </div>
              <svg class='circle-svg' viewBox="0 0 80 80" width="20" height="20">
                <circle class="circle" cx="40" cy="40" r="38"/>
              </svg>              
            </div>
            <div class="text-content">
              <h6>Echo bot</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>            
          </div>          
        </b-row>
        <div class="form-shearch">
          <b-form-input placeholder="Search..." ></b-form-input>
        </div>        
      </b-col>      
    </b-row>
   
</template>

<script>
import Message from "@/components/Message";
export default {
  data:()=> ({   
    messages:[],
  }),
}
</script>

<style>
.content{
  min-height: 651px;
}

.chat-header{
  height: 170px;
  background-color: #becbd9;
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
  background: #212121;
}
.chat-area {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 80px;
  padding: 1rem;
  overflow-y: auto;
}
.card-container{
  min-height: 540px;
  justify-content: flex-start;
  align-content: flex-start;
}
.user-cart{  
  display: flex;    
  height: 70px;
  padding: 5px;
  }
.text-content{    
  flex-direction: column;
  overflow: hidden;
  margin-left: 16px;
}
.text-content p{   
  overflow: hidden;
  text-overflow: ellipsis; 
  color: #777777;
}
.text-content h6{ 
  margin-bottom:0;
}
.form-shearch{
  justify-self: flex-end;
}
.user-cart img{
  width: 60px;
  height: 60px;
  border-radius: 3px;
  background-color: #ededed;
}
.circle-svg{
    margin-left: 45px;
    margin-top: -30px;
}
.circle {  
  fill: #1fd63d;   
}
.users{  
  background-color:#fff;
  border-radius: 4px;
  
}
.chat{
  background-color: #d7dfe7ff;
  border-radius: 4px; 
}
.card-activ{
  height: 42px;}
.card{
  height: 42px; 
  background-color: #f8f8f8; 
  border-radius: 0px;
}
.card p{
  font-size: 14px;
  line-height: 26px;
  color: #777777;
  font-weight: 400;
  font-family: "Open Sans";
  text-align: center;
  margin-top: 10px;
  margin-bottom:0;
  }
  
.card-activ p{  
  font-size: 14px;
  line-height: 26px;
  color: #555555;
  font-weight: 400;
  font-family: "Open Sans";
  text-align: center;
  margin-top: 10px;
  margin-bottom:0;
}


</style>
