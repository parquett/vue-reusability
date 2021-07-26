import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'
import localizationPlugin from './localizationPlugin'

const en ={
    app: {
        title: 'Custom plugins',
        langBtn: 'Change language'
    }
}

const ru ={
    app: {
        title: 'Кастомные плагины',
        langBtn: 'Сменить язык'
    }
}

const es ={
    app: {
        title: 'Plugins personalizados',
        langBtn: 'Cambiar idioma'
    }
}

const app = createApp(App)
app.provide('languages', [{name: 'en', ...en}, {name: 'ru', ...ru},
{name: 'es', ...es}])
app.use(localizationPlugin, {en,ru,es})
app.mount('#app')
