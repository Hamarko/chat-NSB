<template>
  <div>    
    <div class="wrap">
      <div class="mes" :class="{owner}">
        <b-col class="name">
         <p>{{name}}</p>
         <p class="data">{{date}}</p>
        </b-col>
        <b-col class="text">
          <p>{{text}}</p>          
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    text: String,
    date: String,
    owner: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style >


.wrap {
  display: flex;
  flex-direction: column;
}

.mes {  
  width: 60%;
  margin: 0 1rem;
  filter: drop-shadow(2.5px 4.33px 4px rgba(0,1,1,0.21));
  border-radius: 7px;
  background:#becbd9;
  position: relative;
  margin-bottom: 1rem;

}
.mes::before {
    content: ''; 
    position: absolute;    
    left: -20px; top: 40px;
    border: 10px solid transparent;
    border-right: 10px solid white;
   }
.mes p {
    margin-bottom: 0;
  }

.owner {
  background: #f0cbb3;
  color: #000000;
  align-self: flex-end;
}
.owner::before {
     display: none;
   }
.owner::after{
  content: ''; 
  position: absolute;    
  right: -20px; top: 40px;
  border: 10px solid transparent;
  border-left: 10px solid white;
}
.name{
 height: 36px; 
 padding: 5px; 
 padding-left: 15px;
 padding-right: 15px; 
 opacity: 0.9;
}
.data{
  float: right;
  margin-top: -20px;
  color: #999999;
}
.text{
  background-color: #ffff;
  border-radius: 0 0 7px 7px;
  padding-top: 10px;
  padding-bottom: 10px;
}

</style>

