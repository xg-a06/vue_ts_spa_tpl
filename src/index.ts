import { createApp } from 'vue';
import { setupRouter } from '@/routes';
import { setupStore } from '@/store';
import App from './App.vue';
import './assets/style/normalize.css';

const app = createApp(App);

setupRouter(app);

setupStore(app);

app.mount('#app');
