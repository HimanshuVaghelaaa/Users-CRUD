import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from "../core/components/layout/DefaultLayout";
import Users from "../modules/Users/Users";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DefaultLayout,
      redirect: '/users',
      meta: {requiresAuth: true},
      children: [
        {
          path: 'users',
          name: 'users',
          component: Users,
        },
      ]
    }
  ]
})

export default router;