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
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
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
