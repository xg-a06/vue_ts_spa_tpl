const Login = () => import('@/views/login/index.vue');
const Layout = () => import('@/views/layout/index.vue');
const Main = () => import('@/views/main/index.vue');
const About = () => import('@/views/about/index.vue');

// todo 后续可以根据角色加入动态理由
const routes = [
  { path: '/login', component: Login },
  {
    path: '/',
    component: Layout,
    meta: { roles: ['admin'] },
    redirect: '/main',
    children: [
      {
        path: '/main',
        name: 'Main',
        meta: { title: '主页', roles: ['admin'] },
        component: Main,
      },
      {
        path: '/about',
        name: 'About',
        meta: { title: '关于', roles: [] },
        component: About,
      },
    ],
  },
];

export default routes;
