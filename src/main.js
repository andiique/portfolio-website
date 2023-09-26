import { createApp, VueElement } from 'vue'
import App from './App.vue'
import VueMq from 'vue-mq'
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.css' 
import '../styles/styles.css'

createApp(App).use(router).mount('#app')
// VueElement.use(VueMq, {
// 	breakpoints: {
// 		mobile: 450,
// 		tablet: 900,
// 		laptop: 1250,
// 		desktop: Infinity,
// 	}
// })