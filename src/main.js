import Vue from 'vue'
import App from './App.vue'
import "./assets/Css/styles.css"
import "./assets/Css/bootstrap.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
