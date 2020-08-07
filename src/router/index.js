import Vue from 'vue'
import VueRouter from 'vue-router'
import IndividualStats from '../views/IndividualStats.vue'
import TeamStats from '@/views/TeamStats.vue'
import Schedule from '@/views/Schedule.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IndividualStats',
    component: IndividualStats
  },
  {
    path: '/TeamStats',
    name: 'TeamStats',
    component: TeamStats
  },
  {
    path: '/Schedule',
    name: 'Schedule',
    component: Schedule
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
