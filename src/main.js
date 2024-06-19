// Main imports
import { createApp, watch } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import App from './App.vue';

// Router and store imports
import router from './router';
import { useLocalizationStore } from './stores/locale';

// Common files
import './common/imports.css';
import './assets/main.css';

// Locale imports
import es from './locale/es.json';
import en from './locale/en.json';

// PrimeVue library imports
import 'primeicons/primeicons.css';

const app = createApp(App);

// Initialize Pinia
const pinia = createPinia();

app.use(pinia);

// Initialize the localization store
const store = useLocalizationStore();

watch(store, () => {
  i18n.global.locale.value = store.locale;
});

// i18n Config
const i18n = createI18n({
  legacy: false,
  locale: store.locale ?? 'en',
  fallbackLocale: 'en',
  messages: {
    'es': es,
    'en': en,
  }
});

// Use i18n and router
app.use(i18n);

app.use(router);

app.mount('#app');
