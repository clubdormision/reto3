import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Firebase from 'firebase'

createApp(App).use(router).mount('#app')

let app = null

Firebase.auth().onAuthStateChanged(() => {
    /*if(!app) {
        app = new Vue ({
            router,
            render: h => h(App)
        }).$mount('#app')
    }*/
})
