
<template>
<!-- <div id ="chat">
  <h2 id="cww">Chat with Watson</h2>
  <input type="text" v-model.lazy="sMsg" required/>
  <h2 v-for="x in rMsg">{{x}}</h2>
  <button @click="Aa">Sendmsg</button>
  <button @click="Bb">changemsg</button> -->

  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs6>
        <v-textarea v-model.lazy="sMsg"
          name="input-7-1"
          label="User"
          value = ""
        ></v-textarea>
      </v-flex>
      <v-flex xs6>
        <v-textarea v-model.lazy="rMsg"
          name="input-7-4"
          label="Watson"
          value=""
        ></v-textarea>
      </v-flex>
    </v-layout>
  </v-container>


<!-- </div> -->
</template>

<script>
import axios from "axios";
var str ="";
var flag =false;

function aaa(sMsg,rMsg,callbackFunc){
 //sMsg = this.sMsg;
 console.log("start");
 axios.post('http://localhost:3000/chatbot',{
     text : sMsg
 }
 )
 .then(function(serRes){
    //console.log("inner aaa" + serRes);
    // let  JSONString = JSON.stringify(serRes.data.output.text);
     console.log("inner 1 " + serRes);

     callbackFunc(serRes);

     console.log("here " + str);
 })
 .catch(error => {
if (error.response) {
console.log(" 3 ");
dispatch(authError(error.data.data.error));
}
});

console.log("before callback");
}


export default {



  data(){

    return{
      sMsg:"send msg",
      rMsg:[],
      flag:false
    }
  },
  watch:{
    let w = this;
    sMsg:function(newmsg){
      this.sMsg = newmsg;

      if(w.flag == true){
      this.Aa();
      w.flag = false;
      }
    },
    rMsg:function(newmsg){
      this.rMsg = newmsg;
      console.log(this.rMsg);
    }
  },

  methods:{

    Aa:function(){
      /////////////////////
      let self = this;//aaa 함수 외부의 this 값 접근이 필요했기 떄문임!
      //////////////////////
      aaa(this.sMsg,this.rMsg,function(serRes)
      {

        console.log("after callback " + serRes.data.output.text);
        //str = serRes.data.output.text;
        self.rMsg =  serRes.data.output.text;
        //this.rMsg=str;
        console.log("before function end : "+str);
      });

      console.log("in Aa function");
      },

      Bb:function(){
        this.rMsg = str;
        alert(this.sMsg);
      },




    sendmsg:function(smsg,callbackFunc){
      let JSONString = "";
      //alert('zzz....');
      //return
      this.$http.post('http://localhost:3000/chatbot',{
          text : smsg
      }
      )
      .then(function(serRes){
          //  console.log(JSON.stringify(serRes.data.output.text));
          let  JSONString = JSON.stringify(serRes.data.output.text);
          //let mg = JSONString;
          Aa(JSONString);
      })
      .catch(error => {
  if (error.response) {
    console.log(" 3 ");
    dispatch(authError(error.data.data.error));
  }
});

  console.log("2nd JSONString : " + JSONString);
  //this.rMsg = "111"+JSONString;
}


  }

  }

</script>

<style>
#chat *{
  box-sizing: border-box;
}
#chat{
  margin: 20px auto;
  max-width: 500px;
}
input[type="text"], textarea{
  display: block;
  width: 100%;
  padding: 8px;
}
</style>
