import Vue from 'vue';
import Router from 'vue-router';
import home from './components/home.vue';

//install router
Vue.use(Router);
Vue.use(require('vue-resource'));
Vue.http.options.emulateJSON = true;

//install router

var App = Vue.extend({});
//routing
var router = new Router();

router.map({
    '/home': {
        name: 'home',
        component: home
    }
});

router.redirect({
    '*': '/home'
});

router.start(App, '#app');
