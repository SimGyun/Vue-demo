import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home.vue'
import details from './components/details.vue'

//install router
Vue.use(Router)

var App = Vue.extend({})
//routing
var router = new Router()

router.map({
	'/home':{
		name:'home',
		component:home
	},
	'/details':{
		name:'details',
		component:details
	}
})

router.redirect({
	'*':'/home'
})

router.start(App,'#app')