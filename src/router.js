import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import form from './views/form.vue'
import item from './views/item.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import('./views/About.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: form
  },
  {
    path: '/item',
    name: 'item',
    component: item
  }
  ]
})
