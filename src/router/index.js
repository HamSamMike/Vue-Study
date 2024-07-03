import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import OptionOne from '../components/OptionOne.vue'
import OptionTwo from '../components/OptionTwo.vue'
import OptionThree from '../components/OptionThree.vue'
import OptionFour from '../components/OptionFour.vue'
import LoginPage from '../components/LoginPage.vue' // 确保引用正确

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/helloWorld',
    name: 'HelloWorld',
    component: HelloWorld,
    meta: { requiresAuth: true }
  },
  {
    path: '/optionOne',
    name: 'OptionOne',
    component: OptionOne,
    meta: { requiresAuth: true }
  },
  {
    path: '/optionTwo',
    name: 'OptionTwo',
    component: OptionTwo,
    meta: { requiresAuth: true }
  },
  {
    path: '/optionThree',
    name: 'OptionThree',
    component: OptionThree,
    meta: { requiresAuth: true }
  },
  {
    path: '/optionFour',
    name: 'OptionFour',
    component: OptionFour,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('auth')
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'LoginPage' })
  } else {
    next()
  }
})

export default router
