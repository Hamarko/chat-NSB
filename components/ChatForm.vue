<template>
  <b-form @submit.prevent="send"  @keydown.enter.prevent="send" class="form">
    <b-row class="row justify-content-center">
      <p class="sys-mes" :class="{typing}">Reverse bot is typing... </p>    
    </b-row>
    <b-row>      
      <b-col class='col-12 col-md-9' >
        <b-form-input class="form-control h36" placeholder="Start chating!" v-model="text"></b-form-input>
      </b-col>
      <b-col class='col-sm col-md-3' >
        <b-button class="btn btn-primary btn-block h36" 
          variant="primary"
          v-on:click="send"          
        >Send message</b-button>
      </b-col>  
    </b-row>
    </b-form>    
</template>

<script>
export default {
  props:{      
    typing: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    text: ""
  }),
  methods: {
    send() {
     this.$emit("message",{
       text: this.text
     })
     this.text=''
    }
  }
};
</script>
<style>
.h36{
  height: 36;
}
.form{
  height: 100%;
  margin-top:-28px;
}
.sys-mes{  
  color: #3a87ae;
  display: inline;
  visibility: hidden;
  }
.typing{
  visibility: visible;
}

  
</style>
