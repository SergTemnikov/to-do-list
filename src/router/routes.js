const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/page-home/PageHome.vue'),
    meta: { layout: 'DefaultLayout', name: 'Главная' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/page-about/PageAbout.vue'),
    meta: { layout: 'DefaultLayout', name: 'О нас' }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/pages/page-dashboard/PageDashboard.vue'),
    meta: { layout: 'DefaultLayout', name: 'Редактор' }
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/pages/page-list/PageList.vue'),
    meta: { layout: 'DefaultLayout', name: 'Задачи и заметки' }
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('@/pages/page-sign-in/PageSignIn.vue'),
    meta: { layout: 'EmptyLayout', name: 'Вход' }
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('@/pages/page-sign-up/PageSignUp.vue'),
    meta: { layout: 'EmptyLayout', name: 'Регистрация' }
  }
]

export default routes
