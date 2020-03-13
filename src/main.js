import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'element-ui/lib/theme-chalk/index.css';
import element from './plugins/element';
import { Notification } from 'element-ui'
import clipboard from 'clipboard'
import vcolorpicker from 'vcolorpicker'
import BaiduMap from 'vue-baidu-map'

require('./mock.js')

Vue.use(element)
Vue.prototype.clipboard = clipboard
Vue.prototype.$notify = Notification
Vue.use(vcolorpicker)
Vue.use(BaiduMap, {
  ak: 'ijnB4fgfnGPADidSdV0yVgTEFVVmpUoE'
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


// axios.get('/getData').then(res => console.log(res))