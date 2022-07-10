import Vue from "vue";
import Vuetify from "vuetify";
Vue.use(Vuetify);

// import "@fortawesome/fontawesome-free/css/all.css";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/dist/vuetify.min.css";

export default new Vuetify({
    icons: {
        iconfont: "mdi" // default - only for display purposes
    },
    theme: {
        themes: {
            light: {
                primary: "#089776",
                secondary: "#16364D",
                accent: "#5CFF94",
                background: "#F2F5FA"
            },
        }
    }
});