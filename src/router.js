import Vue from 'vue'
import Router from 'vue-router'
import Skills from './components/Skills.vue'
import About from './components/About.vue'
import AboutName from './components/AboutName.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skills',
      component: Skills
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/about/:name',
      name: 'aname',
      component: AboutName
    }
  ]
})