import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'
import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

// store.registerModule('c', {
//   state: {
//     text: 3
//   }
// })
// store.unregisterModule('c')
// store.watch(state => state.count * 10, (value) => {
//   console.log(`store watch ${value}`)
// })
// store.subscribe((mutation, state) => {
//   console.log('store subscribe', mutation.type, mutation.payload)
// })
store.subscribeAction((action, state) => {
  console.log('store subscribeAction', action.type, action.payload)
})

router.beforeEach((to, from, next) => {
  console.log(`beforeEach 。。。`)
  // if (to.fullPath === '/app') {
  //   next('/login')
  // } else {
  //   next()
  // }
  next()
})

router.beforeResolve((to, from, next) => {
  console.log(`beforeResolve 。。。`)
  next()
})

router.afterEach((to, from) => {
  console.log(`afterEach 。。。`)
})

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#root')
