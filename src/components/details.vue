<template>
  <div id="details">
	<nav class="text-center">
		<div class="pull-left big-font pd-l-m" @click="goBack">&lt;</div>
		<div class="pd-r-m">商品详情</div>
		<div class="pull-right">
			<img src="../assets/img/cart.png" class="nav-img">
		</div>
		<span class="danger-text cart-cnt" v-show="cartCnt!==0">{{cartCnt}}</span>
		<div class="clear-both"></div>
	</nav>
	<div class="banner">
		<carousel></carousel>
		<div class="pd-l-m bgc-white">{{name}} 拒绝春日绵绵好睡眠花茶250g</div>
		<p class="pd-l-m danger-text bgc-white">¥{{price}}</p>
		<div class="banner-font bgc-white">
			<span class="pull-left pd-l-m gray-font ps-r">原价：¥ 120
				<hr class="ps-a del-line"/>
			</span>
			<span class="pull-right pd-r-m">运费： ¥ 12</span>
			<div class="clear-both"></div>
		</div>
		<div class="bgc-white m-t-sm">
			<p class="pd-l-m">属性： 寒性</p>
			<p class="pd-l-m">产地： 珠穆朗玛峰</p>
			<p class="pd-l-m pd-r-m">功效： 二羟丙茶碱注射液（又叫喘定）：适用于治疗支气管哮喘、喘息型支气管炎、阻塞性肺气肿等以缓解喘息症状。也用于心源性肺水肿引起的哮喘</p>
			<p class="pd-l-m pd-r-m">用法： 二羟丙茶碱注射液（又叫喘定）：适用于治疗支气管哮喘、喘息型支气管炎、阻塞性肺气肿等以缓解喘息症状。也用于心源性肺水肿引起的哮喘</p>
		</div>
	</div>

	<div class="weui_cells sale text-center gray-font" >
    		---- 其他热销同款 ----
	</div>
	<div class="sale-info" v-for="sale in saleTab">
	    <div class="sale-img">
	        <img :src="sale.url">
	    </div>
	    <div class="sale-font pd-l-sm pd-r-ssm">
	        <span class="sale-font-m pd-r-sm">{{sale.name}}</span>
	        <span class="sale-font-m ">{{sale.des}}</span>
	        <span class="dis-blk font-red font-l">¥{{sale.price}}</span>
	   </div>
	</div>

  </div>
</template>
<script >
import carousel from './carousel.vue'
export default {
	data () {
		return {
			saleTab:[
			      {
			        name:'宁夏枸杞',
			        des:'宁安堡中宁枸杞250g',
			        price:22.50,
			        url:'../assets/img/gouqi.png'
			      },
			      {
			        name:'忆江南',
			        des:'一级碧螺春礼盒250g',
			        price:29.6,
			        url: '../assets/img/tea.png'
			      }
			],
			name:null,
			price:null,
			imgUrl:null
		}
	},
	ready () {
		this.name=this.$route.params.name
		this.price=this.$route.params.price
		this.imgUrl=this.$route.params.imgUrl
		console.log(this.name)
	},
	methods: {
		goBack() {
			window.history.back()
		}
	},
	components: {
		carousel
	},
	computed: {
		cartCnt () {
			return sessionStorage.length
		}
	}
}
</script>
