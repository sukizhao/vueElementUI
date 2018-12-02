import Vue from 'vue';
import App from './App.vue';
//引入 ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 分3个，引用之后报错，去webpack.config.js  配置file_loader
new Vue({
  el: '#app',
  render: h => h(App)
})
