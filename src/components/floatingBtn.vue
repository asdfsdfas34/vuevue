
<template>
  <v-card id="create">
      <v-speed-dial
       v-model="fab"
       :top="top"
       :bottom="bottom"
       :right="right"
       :left="left"
       :direction="direction"
       :open-on-hover="hover"
       :transition="transition"
     >
       <v-btn
         slot="activator"
         v-model="fab"
         color="light blue"
         dark
         fab
       >
         <v-icon>account_circle</v-icon>
         <v-icon>close</v-icon>
       </v-btn>

       <!--sub button  -->
       <v-btn
         fab
         dark
         small
         color="green"
       >
         <v-icon>edit</v-icon>
       </v-btn>
       <v-btn
         fab
         dark
         small
         color="indigo"
       >
         <v-icon>add</v-icon>
       </v-btn>
       <v-btn
         fab
         dark
         small
         color="red"
       >
         <v-icon>delete</v-icon>
       </v-btn>
     </v-speed-dial>
   </v-card>
</template>

<script>

export default {



  data(){

    return{
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition'
    }
  },

  methods:{

  }

}

</script>

<style>
#create .v-speed-dial {
   position: absolute;
 }

 #create .v-btn--floating {
   position: relative;
 }
</style>
