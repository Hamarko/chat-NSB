<template>   
    <b-row class="content" >
      <b-col cols="9" class="chat">
      <h1>Work</h1>
      </b-col>
      <b-col cols="3" class="users">
        <b-row>
          <b-col class="card-activ"><p>Onlin</p></b-col>
          <b-col class="card"><p>All</p></b-col>
        </b-row>
        <b-row>
          
        </b-row>
      </b-col>      
    </b-row>
   
</template>

<script>
export default {}
</script>

<style>
.content{
  min-height: 651px;;
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
