import Vue from 'vue';
import Router from 'vue-router';
import home from './components/home.vue';
import details from './components/details.vue';
import news from './components/news.vue';
import newsDetail from './components/newsDatail.vue';
import newsDiscuss from './components/newsDiscuss.vue';
import register from './components/register.vue';
import trolley from './components/trolley.vue'

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
    },
    '/details/:id': {
        name: 'details',
        component: details
    },
    '/news': {
        name: "news",
        component: news
    },
    '/newsDetail': {
        name: 'newsDetail',
        component: newsDetail
    },
    "/newsDiscuss": {
        name: "newsDiscuss",
        component: newsDiscuss
    },
    "register":{
        name:"register",
        component:register
    },
    'trolley':{
        name:'trolley',
        component:trolley
    }
});

router.redirect({
    '*': '/home'
});

router.start(App, '#app');
