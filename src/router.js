import VueRouter from 'vue-router'

const routes = [{
  path: '/',
  component: () => import('./components/Login.vue')
}, {
  path: '/chooser',
  component: () => import('./components/Chooser.vue')
}, {
  path: '/bookUtils',
  component: () => import('./components/BookUtils.vue')
}, {
  path: '/howToGet',
  component: () => import('./components/HowToGet.vue')
}, {
  path: '/introduce',
  component: () => import('./components/Introduce.vue')
}, {
  path: '/bookCards',
  component: () => import('./components/BookCards.vue')
}, {
  path: '/recommend',
  component: () => import('./components/Recommend.vue')
}, {
  path: '/classics',
  component: () => import('./components/Classics.vue')
}, {
  path: '/personal',
  component: () => import('./components/Personal.vue')
}]

export default new VueRouter({
  routes
})