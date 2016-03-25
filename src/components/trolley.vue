<template>
  <div id="cart">
	<nav class="text-center">
		<div class="pull-left big-font pd-l-m" @click="goBack">&lt;</div>
		<div class="pd-r-m">购物车</div>
		<div class="clear-both"></div>
	</nav>
	<!--购物车为空-->
	<div class="no-pro text-center" v-show="empty">
		<img src="../assets/img/big-cart.png" class="big-cart">
		<p class="gray-font">购物车还是空的</p>
		<p class="gray-font">去挑几件中意的商品吧</p>
		<p class="gray-font">---------康保姆为您精心推荐---------</p>
		<div class="sale-info" v-for="sale in saleTab" @click="goToDetails(sale.id)">
		    <div class="sale-img">
		        <img :src="sale.url">
		    </div>
		    <div class="sale-font pd-l-sm pd-r-ssm">
		        <span class="sale-font-m pd-r-sm">{{sale.name}}</span>
		        <span class="sale-font-m ">{{sale.des}}</span>
		        <span class="dis-blk font-red font-l">¥{{sale.price}}</span> 
		   </div>      
		</div>
		<navbtm></navbtm>
	</div>
  </div>
</template>
<script >
import navbtm from './navBtm.vue'	
export default {
	data () {
		return {
			empty:null,
			products:[],
			saleTab:[
				{
				  id:"04",
				  name:"宁夏枸杞",
				  des:"宁安堡中宁枸杞250g",
				  price:"22.50",
				  url:"../assets/img/gouqi.png"
				},
				{
				  id:"05",	
				  name:"忆江南",
				  des:"一级碧螺春礼盒250g",
				  price:"29",
				  url:"../assets/img/tea.png"
				}
			]
		}
	},
	ready() {
		if(sessionStorage.length>0){
			this.empty=false
			for(let i=0,len=sessionStorage.length;i<len;i++) {
				let product=JSON.parse(sessionStorag.getItem('product')
				this.products.push(product)
			}
			console.log(this.products.id)
		}else{
			this.empty=true
		}
	},
	methods: {
		goBack() {
			window.history.back()
		},
		goToDetails(id) {
		    this.$route.router.go({name:'details',params:{id:id}})
		},
	},
	components: {
	      navbtm
	},
		
}
</script>