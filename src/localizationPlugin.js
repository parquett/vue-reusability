export default {
    install(app, options) {
        //options = en (из main.js)
        let currentLang = 'en'
        const changeLang = lang => {
            currentLang = lang
        }
        const getLang = () => currentLang
        app.provide('translate', changeLang)
        app.provide('getLang', getLang)
        app.config.globalProperties.$localization = localizationKey => {
    //'app.title' => localizationKey.split('.') => ['app', 'title']
    //reduce находить сначала по ключу app потом по title (из en)
            return localizationKey.split('.').reduce((collection, key) => {
                return collection[key] || 'key is unknown'
            }, options[currentLang])
        }
    }
}