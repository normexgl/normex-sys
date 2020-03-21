import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import awsconfig from './aws-exports'

Vue.config.productionTip = false

Amplify.configure(awsconfig)
Vue.use(BootstrapVue)
Vue.use(AmplifyPlugin, AmplifyModules)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
