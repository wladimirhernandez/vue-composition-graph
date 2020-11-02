import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Jobs',
    component: () => import('../views/Jobs.vue')
  },
  {
    path: '/job/:slug/:companySlug',
    name: 'Job',
    component: () => import('../views/Job.vue')
  },
  {
    path: '/Countries',
    name: 'Countries',
    component: () => import('../views/Countries.vue')
  },
  {
    path: '/Country/:slug',
    name: 'Country',
    component: () => import('../views/Country.vue')
  },
  {
    path: '/Companies',
    name: 'Companies',
    component: () => import('../views/Companies.vue')
  },
  {
    path: '/Company/:slug',
    name: 'Company',
    component: () => import('../views/Company.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router