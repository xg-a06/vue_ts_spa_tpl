import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './config';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const setupRouter = (app: App<Element>) => {
  app.use(router);
};
