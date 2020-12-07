<template>  
  <div>
    <div class="header">
      <h1>Chat bots 2.0 </h1>
    </div>
    <b-container fluid class="app">
      <Nuxt /> 
    </b-container >       
  </div>
</template>

<style>
html {
  font-family:"Open Sans";    
  font-size: 14px;  
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;  
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
p {
  font-family:"Open Sans";    
  font-size: 14px;  
  font-weight: 400;
  }
.app{
  background-color: #586670;
  min-height: 100vh;
  padding-top:20px;
  padding-bottom:50px;
  padding-left:80px;
  padding-right: 80px;
}
.header{  
  margin: 0 auto; 
  display: flex;
  flex-direction:column;
  height: 80px;
  justify-content: flex-end;
  align-items: flex-start;
  text-align: center;
  padding-left: 65px;
  background-color: #fff; 
}
.header h1{ 
  font-size: 32px;
  line-height: 67px;
  color: #333333;
  font-weight: 600;
  font-family: "Open Sans";
  margin-bottom: 0px;
}
</style>
