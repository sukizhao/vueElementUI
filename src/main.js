import Vue from 'vue'
import App from './App'
import router from './router'
// import iView from 'iview'
// Vue.use(iView)
// import vuecoms from 'vuecoms2'
// Vue.use(vuecoms)
new Vue({
  el: '#app',
  router,
    components: {
    App
  },
  template: '<App/>'
})
