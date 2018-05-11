import App from '../App'
//import Vue from 'vue'
//import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

const index = r => require.ensure([], () => r(require('../page/index')), 'index');


//Vue.use(Router)

export default [
  {
    path: '/',
    component: App,
    children: [
      {path: '/',
        component: index,
      },
    ]
  }
]
