import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: CONTEXT_PATH,
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    component: () => import('@/components/baseInfo/index')
  }, {
    path: '/todoList',
    name: 'todoList',
    component: () => import('@/components/baseInfo/todo/List')
  }, {
    path: '/todoDetail',
    name: 'todoDetail',
    component: () => import('@/components/baseInfo/todo/Detail')
  }, {
    path: '/messageList',
    name: 'messageList',
    component: () => import('@/components/baseInfo/message/List')
  }, {
    path: '/analyze',
    name: 'analyze',
    component: () => import('@/components/baseInfo/declare/CountByProgress')
  }, {
    path: '/companyList',
    name: 'companyList',
    component: () => import('@/components/baseInfo/declare/CompanyListPage')
  },  {
    path: '/companyNumberList',
    name: 'companyNumberList',
    component: () => import('@/components/baseInfo/declare/CompanyNumberPage')
  },  {
    path: '/companyInfoDetail',
    name: 'companyInfoDetail',
    component: () => import('@/components/baseInfo/declare/CompanyInfoDetail')
  },{
    path: '/analyzeList',
    name: 'analyzeList',
    component: () => import('@/components/baseInfo/declare/List')
  }, {
    path: '/countByCountry',
    name: 'countByCountry',
    component: () => import('@/components/baseInfo/declare/CountByCountry')
  }]
})
