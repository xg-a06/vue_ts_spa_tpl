import { createRouter, createWebHistory } from 'vue-router';
import routes from './config';
import type { App } from 'vue';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const setupRouter = (app: App<Element>) => {
  app.use(router);
};
