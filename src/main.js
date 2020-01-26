import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "./assets/Css/styles.css"
import "./assets/Css/bootstrap.css"


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
