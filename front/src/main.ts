import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { createPinia } from 'pinia'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'light'
    }
});

const pinia = createPinia()

createApp(App).use(router).use(vuetify).use(pinia).mount('#app')
