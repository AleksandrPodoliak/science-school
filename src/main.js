import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import vClickOutside from "click-outside-vue3"



const app = createApp(App)

app.use(i18n);
app.use(store)
app.use(router)
app.use(vClickOutside)

app.mount('#app')


setTimeout(() => {
  if (router.currentRoute._value.path.match(/\/en/)) app.config.globalProperties.$i18n.locale = 'en';
  if (router.currentRoute._value.path.match(/\/ru/)) app.config.globalProperties.$i18n.locale = 'ru';
  if (router.currentRoute._value.path.match(/\/uk/)) app.config.globalProperties.$i18n.locale = 'uk';
}, 0);