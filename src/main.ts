import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router";
import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import 'normalize.css';
import 'virtual:windi.css';

const app = createApp(App);

app.use(router);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

app.mount('#app');
