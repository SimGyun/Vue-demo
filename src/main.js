import Vue from 'vue';
import Router from 'vue-router';
import home from './components/home.vue';
import details from './components/details.vue';
import news from './components/news.vue';
import newsDetail from './components/newsDatail.vue';
//install router
Vue.use(Router);

var App = Vue.extend({});
    //routing
var router = new Router();

router.map({
    '/home': {
        name: 'home',
        component: home
    },
    '/details': {
        name: 'details',
        component: details
    },
    '/news':{
        name:"news",
        component:news
    },
    '/newsDetail': {
        newsDetail: 'newsDetail',
        component: newsDetail
    }
});

router.redirect({
    '*': '/news'
});

router.start(App, '#app');
