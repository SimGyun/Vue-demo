import Vue from 'vue';
import Router from 'vue-router';
import home from './components/home.vue';
import details from './components/details.vue';
import news from './components/news.vue';
import newsDetail from './components/newsDatail.vue';
import newsDiscuss from './components/newsDiscuss.vue'
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
    '/news': {
        name: "news",
        component: news
    },
    '/newsDetail': {
        newsDetail: 'newsDetail',
        component: newsDetail
    },
    "/newsDiscuss": {
        newsDiscuss: "newsDiscuss",
        component: newsDiscuss
    }
});

router.redirect({
    '*': '/newsDiscuss'
});

router.start(App, '#app');
