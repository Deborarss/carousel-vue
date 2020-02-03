import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
import store from './store/store'

window.$ = jQuery;
window.jQuery = jQuery;

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
