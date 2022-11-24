import { createApp } from 'vue'
import App from './App.vue'

import 'vfonts/Lato.css'
import naive from 'naive-ui'
import axios from "axios";


const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.use(
    naive,
    )
app.mount('#app');