import { useI18n } from 'vue-i18n';

export function useLocalization() {
  const { t } = useI18n();

  function translate(toTranslate) {
    return t(toTranslate);
  }

  return { translate };
}