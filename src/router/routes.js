const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/page-home/PageHome.vue'),
    meta: { layout: 'DefaultLayout' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/page-about/PageAbout.vue'),
    meta: { layout: 'DefaultLayout' }
  }
]

export default routes
