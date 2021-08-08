import { createRouter, createWebHistory } from 'vue-router'
const Home=() => import( '@/views/home/Home.vue')
const Category=() => import( '@/views/category/Category.vue')
const Shopcart=() => import( '@/views/shopcart/Shopcart.vue')
const Profile=() => import( '@/views/profile/Profile.vue')
const Details=() => import( '@/views/details/Details.vue')
const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/shopcart',
    name: 'Shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/details/:iid',
    name: 'Details',
    component: Details
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
