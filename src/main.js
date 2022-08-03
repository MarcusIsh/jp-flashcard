/* eslint-disable vue/no-unused-components */
import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/css/app.css'
import store from "./store/store.js";

createApp(App).use(store).mount('#app')
