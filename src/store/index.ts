import { createPinia } from 'pinia';
export * from './modules/todo';
export * from './modules/user';
import type { App } from 'vue';

const pinia = createPinia();

export const setupStore = (app: App<Element>) => {
  app.use(pinia);
};
