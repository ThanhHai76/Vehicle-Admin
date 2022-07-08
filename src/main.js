import Vue from 'vue'

import AppLayout from './layout/index.vue'
import router from './router'
import store from './store'
import './mixins'
import './plugins'
import './thirdParty'
import './vue-component'
import './vue-filter'

import 'bootstrap'
// import '@/assets/css/fonts.css'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/font-awesome.min.css'

import '@/assets/css/style.css'

import '@/assets/css/style_2.css'

import "bootstrap-vue/dist/bootstrap-vue.css"

import "@/assets/auth-css/css/dashlite.css"
import "@/assets/auth-css/css/theme.css"

new Vue({
  name: 'Root',
  router,
  store,
  render: h => h(AppLayout)
}).$mount('#app')
