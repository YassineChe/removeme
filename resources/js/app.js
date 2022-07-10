
require('./bootstrap');

window.Vue = require('vue').default;

//? Vuetify
import vuetify from "./plugins/vuetify"; // path to vuetify export

Vue.component('InCollections', require('./components/Collections.vue').default);


const app = new Vue({
    el: '#app',
    vuetify
});
