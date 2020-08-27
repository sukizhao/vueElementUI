import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import daohang from '@/view/daohang'
import myElementUI from '@/view/myElementUI/myElementUI'
Vue.use(Router)
export default new Router({
  routes: [
    // 配置默认路由
    {
    path: '/',
    redirect: 'daohang'
  }, 
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/daohang',
    name: 'daohang',
    component: daohang
  },
  {
    path: '/myElementUI',
    name: 'myElementUI',
    component: myElementUI
  },
  ]
})
