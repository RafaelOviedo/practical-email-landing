import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLocalizationStore = defineStore('localization', () => {
  const locale = ref('en');
  
  function setLocale(payload) {
    locale.value = payload;
  }

  return { locale, setLocale };
});
