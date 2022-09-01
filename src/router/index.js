import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
   // component: HomeView
    component: () =>
    import(/* webpackChunkName: "home" */ "../views/HomeView.vue")
    
  },
  {
    path: '/reset',
    name: 'reset',
    component: () =>
    import(/* webpackChunkName: "reset" */ "../views/reset.vue")
   
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: () =>
    import(/* webpackChunkName: "homepage" */ "../views/homepage.vue")
   
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () =>
    import(/* webpackChunkName: "dashboard" */ "../views/dashboard.vue")
  },
  {
    path: '/criminalcase',
    name: 'criminalcase',
    component: () =>
    import(/* webpackChunkName: "criminalcase" */ "../views/criminalcase.vue")
  },
  {
    path: '/convictedcase',
    name: 'convictedcase',
    component: () =>
    import(/* webpackChunkName: "convictedcase" */ "../views/convictedcase.vue")
  },
  {
    path: '/tracking',
    name: 'tracking',
    component: () =>
    import(/* webpackChunkName: "tracking" */ "../views/tracking.vue")
  },
  {
    path: '/trackingdet/:id',
    name: 'trackingdet',
    component: () =>
    import(/* webpackChunkName: "trackingdet" */ "../views/trackingdet.vue")
 
  },

  {
    path: '/about',
    name: 'about',
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/about.vue")
 
   
  }
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
