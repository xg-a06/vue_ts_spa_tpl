const Login = () => import('@/views/login/index.vue');
const Layout = () => import('@/views/layout/index.vue');
const Todo = () => import('@/views/todo/index.vue');
const About = () => import('@/views/about/index.vue');

// todo 后续可以根据角色加入动态理由
const routes = [
  { path: '/login', component: Login },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/todo',
        name: 'Todo',
        meta: { title: '代办', roles: ['admin'] },
        component: Todo,
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
