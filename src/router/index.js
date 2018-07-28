// import Vue from 'vue'
// import Router from 'vue-router'
// //import HelloWorld from '@/components/HelloWorld'
//
// Vue.use(Router)
//
// export default new Router({
//   routes: [
//     // {
//     //   path: '/',
//     //   name: 'HelloWorld',
//     //   component: HelloWorld
//     // }
//   ]
// })


import chatter from '@/components/chatpage.vue';
import body1 from '@/components/Body.vue';
import body2 from '@/components/Body2.vue';
import foot from '@/components/Footer.vue';
import head from '@/components/Header.vue';


export default [
  {path:'/' , component: body1},
  {path:'/b2',component: body2},
  {path:'/chatpage',component: chatter}
//   {path:'/' , component: head},
//   {path:'/',component: foot}
]
