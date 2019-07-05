import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '../components/HomeContainter'
import MemberContainer from '../components/MemberContainer'
import SearchContainer from '../components/SearchContainer'
import ShopContainer from '../components/ShopContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'HomeContainer',
      component:HomeContainer
    },
    {
      path: '/member',
      name: 'MemberContainer',
      component: MemberContainer
    },
    {
      path: '/shopcar',
      name: 'ShopContainer',
      component: ShopContainer
    },
    {
      path: '/search',
      name: 'SearchContainer',
      component: SearchContainer
    }
  ],
  linkActiveClass:'mui-active'
//  fugai默认的路由高亮的类，默认的类叫做router-link-active
})
