import { createApp } from 'vue';
import { setupRouter } from '@/routes';
import App from './App.vue';
import './assets/style/normalize.css';

const app = createApp(App);

setupRouter(app);

app.mount('#app');
