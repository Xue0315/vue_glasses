import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import bootstrapjs from '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import PageLoading from '@/components/PageLoading.vue'
import { currency, date } from './methods/filter'
import pushMessage from './methods/pushMessage'

import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'

import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
setLocale('zh_TW')

router.afterEach(() => {
  window.scrollTo(0, 0)
})
const app = createApp(App)

app.component('TheForm', Form)
app.component('TheField', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('PageLoading', PageLoading)
app.config.globalProperties.$filter = {
  currency, date
}
app.config.globalProperties.$pushMessage = pushMessage
app.use(VueAxios, axios)
app.use(bootstrapjs)
app.use(router)
app.mount('#app')
