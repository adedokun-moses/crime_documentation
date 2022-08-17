import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Homepage from '../views/homepage.vue'
import Dashboard from '../views/dashboard.vue'
import CriminalCase from '../views/criminalcase.vue'
import ConvictedCase from '../views/convictedcase.vue'
import Tracking from '../views/tracking.vue'
import Trackingdet from '../views/trackingdet.vue'
import About from '../views/about.vue'
import Reset from '../views/reset.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/reset',
    name: 'reset',
    component: Reset
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: Homepage
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/criminalcase',
    name: 'criminalcase',
    component: CriminalCase
  },
  {
    path: '/convictedcase',
    name: 'convictedcase',
    component: ConvictedCase
  },
  {
    path: '/tracking',
    name: 'tracking',
    component: Tracking
  },
  {
    path: '/trackingdet/:id',
    name: 'trackingdet',
    component: Trackingdet
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(){
    //Always scroll to top
    return {top: 0}
  }
})

export default router
