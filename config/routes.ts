export const routes = [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/',
        name: 'home',
        component: 'Home',
      },
      {
        path: '/port',
        name: 'port',
        component: 'Port',
      },
    ],
  },
];
