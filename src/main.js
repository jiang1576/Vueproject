// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import {Header,Swipe, SwipeItem} from 'mint-ui'
import VueRouter from 'vue-router'
import VueResource from 'Vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false;
Vue.component(Header.name,Header);




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
