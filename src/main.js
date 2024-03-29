import Vue from 'vue';
import axios from './router/axios';
import VueAxios from 'vue-axios';
import App from './App';
import './permission' // 权限
import './errorLog' // 错误日志
import router from './router/router';
import store from './store';
import ELEMENT from 'element-ui';
import i18n from './i18n/i18n';
Vue.use(ELEMENT, {
  i18n: (key, value) => i18n.t(key, value)
})
import AVUE from 'avue-cli/packages/index.js';
import {
  loadStyle
} from './util/util'
import * as urls from '@/config/env';
import {
  iconfontUrl,
  iconfontVersion
} from '@/config/env';
import * as filters from './filters' // 全局filter
import './styles/common.scss';
Vue.use(VueAxios, axios)

Object.keys(urls).forEach(key => {
  Vue.prototype[key] = urls[key];
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
iconfontVersion.forEach(ele => {
  loadStyle(iconfontUrl.replace('$key', ele));
})


Vue.config.productionTip = false;


export function createApp() {
  const app = new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
  })
  return {
    app,
    router,
    store
  }
}
