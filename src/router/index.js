import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue')
  },

  {
    path: '/search',
    name: 'Search',
    component: () => import('@/pages/Search.vue')
  },

  {
    path: '/booking',
    name: 'Booking',
    component: () => import('@/pages/Booking.vue')
  },

  {
    path: '/booking-management',
    name: 'BookingManagement',
    component: () => import('@/pages/BookingManagement.vue')
  },

  {
    path: '/seat',
    name: 'Seat',
    component: () => import('@/pages/Seat.vue')
  },

  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import('@/pages/SignIn.vue')
  },

  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('@/pages/SignUp.vue')
  },

  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/pages/Profile.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
