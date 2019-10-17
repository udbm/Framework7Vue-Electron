import Vue from 'vue'
import store from '../store/store.js'
import Framework7 from 'framework7/framework7-lite.esm.bundle.js'
import Framework7Vue from 'framework7-vue'
require('../css/framework7.bundle.css')
import App from './App.vue'
Framework7.use(Framework7Vue,Framework7) // initializing Framework7 to use vue and Framework7, second param may not be needed
Vue.config.productionTip = false;

Framework7.prototype.device.android === true; // For Demo We Are only running material theme and keeping android device as true
import routes from './routes.js';
new Vue({
  store,   // vue store for state management
  el: '#app',
  render(h) {
    return h(App)
  },

})
