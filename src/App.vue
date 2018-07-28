<template>
<v-container>
  <header-page></header-page>
  <router-view>
    <adsPage></adsPage>
  </router-view>
  <footer-page>
  </footer-page>
  <f-btn></f-btn>

</v-container>

</template>

<script>
import headerPage from './components/Header.vue';
import footerPage from './components/Footer.vue';
import bodyPage from './components/Body.vue';
import adsPage from './components/ShowAds.vue';
import floatingBtn from '@/components/floatingBtn.vue';


export default {
  name: 'App',

  components:{

    'header-page':headerPage,
    'footer-page':footerPage,
    'body-page':bodyPage,
    'adsPage': adsPage,
    'f-btn':floatingBtn

  },


  data(){
  return{

  }
}

}
</script>

<style>

</style>
