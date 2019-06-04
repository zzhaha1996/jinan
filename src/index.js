import '@babel/polyfill'
import Vue from 'vue'
import FastClick from 'fastclick'

import router from './config/router'
import App from './App'
import store from './vuex'
import './config/http'

import ECharts from 'vue-echarts'
import 'echarts'
import {
  XTable
  ,XHeader
  ,Card
  ,Flexbox
  ,FlexboxItem
  ,XInput
  ,XButton
  ,Cell
  ,Toast
  ,Group
} from 'vux'
Vue.component('x-table', XTable)
Vue.component('x-header', XHeader)
Vue.component('card', Card)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('x-input', XInput)
Vue.component('x-button', XButton)
Vue.component('cell', Cell)
Vue.component('toast', Toast)
Vue.component('group', Group)
console.log('Create by ldwqh0@outlook.com')
FastClick.attach(document.body)
Vue.component('echarts', ECharts)
Vue.config.productionTip = false
Vue.prototype.rootUrl = '/psms'

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
