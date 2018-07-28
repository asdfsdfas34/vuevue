// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
///////////////////////////////////////////////
import VueRouter from 'vue-router'
import Router from './router/index'
//import VueResource from 'vue-resource'
import axios from 'axios'
//////////////////////////////////////////////////////
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
///////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
Vue.use(Vuetify);
Vue.use(VueRouter);
//Vue.use(VueResource);
Vue.prototype.$http = axios;

axios.interceptors.response.use((response) => {
    return response;
}, function (error) {
    // Do something with response error
    if (error.response.status === 401) {
        console.log('unauthorized, logging out ...');
        auth.logout();
        router.replace('/auth/login');
    }
    return Promise.reject(error.response);
});
//Vue.use(Notifications);
//////////////////////////////////////////////
const router = new VueRouter({
  routes: Router,
  //mode :'history' or 'hash' => default is hash
  mode: 'history'
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //router,
  components: { App },
  template: '<App/>',
  router:router
})
