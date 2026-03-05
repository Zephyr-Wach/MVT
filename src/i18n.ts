import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import zh from './locales/zh.json'

type Locale = 'zh' | 'en'

const DEFAULT_LOCALE: Locale = 'zh'

const getLocale = (): Locale => {
  const saved = localStorage.getItem('locale')
  return saved === 'en' || saved === 'zh' ? saved : DEFAULT_LOCALE
}

const i18n = createI18n({
  legacy: false,
  locale: getLocale(),
  fallbackLocale: 'en',
  messages: { en, zh },
})

export default i18n
