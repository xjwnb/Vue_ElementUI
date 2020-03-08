import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'element-ui/lib/theme-chalk/index.css';
import element from './plugins/element';
import { Notification } from 'element-ui'
import clipboard from 'clipboard'

require('./mock.js')

Vue.use(element)
Vue.prototype.clipboard = clipboard
Vue.prototype.$notify = Notification
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


// axios.get('/getData').then(res => console.log(res))