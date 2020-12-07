<template>
  <div class="user-cart">
    <div class="img-wrapper">
      <div class="img-box">
        <img :src="getImgUrl(link)" alt="">
      </div>
      <svg class='circle-svg' viewBox="0 0 80 80" width="15" height="15">
        <circle class="circle" cx="40" cy="40" r="38"/>
      </svg>              
    </div>
    <div class="text-content">
      <h6>{{name}}</h6>
      <p>{{description}}</p>
    </div>            
  </div>    
</template>

<script>
  export default {
    props:{
      name:String,
      description:String,
      link:String,        
    },
    data: () => ({
      selected:false
    }),
    methods:{
      getImgUrl(link){        
        if (link) return require("../assets/"+link)
      },
    }         
  }  
</script>

<style>

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
.user-cart img{
  width: 60px;
  height: 60px;
  border-radius: 3px;
  background-color: #ededed;
}
.circle-svg{
    margin-left: 50px;
    margin-top: -38px;
}
.circle {  
  fill: #1fd63d;   
}
.user-cart{  
  display: flex;    
  height: 70px;
  padding: 5px;  
  }
</style>