import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// axios
// import axios from 'axios';

// element-plus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
const app = createApp(App)


// 配置axios
// axios.defaults.baseURL = '/api';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// // 将axios添加到Vue实例
// app.config.globalProperties.$axios = axios;

// app.use(ElementPlus)
app.mount('#app')
