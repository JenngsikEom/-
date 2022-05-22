import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Join from "../views/join.vue"
import BoardList from "../views/list.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/join",
    component: Join
  }, {
    path: "/board",
    component: BoardList
  }

]

const router = new VueRouter({
  routes
})

export default router
