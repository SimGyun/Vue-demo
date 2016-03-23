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
		<div class="pd-l-m bgc-white">{{product.name}} {{product.des}}</div>
		<p class="pd-l-m danger-text bgc-white font-m">¥{{product.price}}</p>
		<div class="font-sm bgc-white">
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

	<div class="cartBtn">
		<span class="big-font cart text-center" @click="showCart">加入购物车</span>
		<span class="big-font buy text-center" @click="orderNow">立即购买</span>
	</div>

	<div id="actionSheet_wrap" >
	    <div class="weui_mask_transition " id="mask" ></div>
	    <div class="weui_actionsheet " id="weui_actionsheet" >
	        <div class="weui_actionsheet_menu">
	            <div class="weui_actionsheet_cell">
	            	<div  class="pull-left pd-l-m m-r-m">
	            		<img :src="product.url" class="cart-img">
	            	</div>
	            	<span class="dis-blk text-left danger-text pd-full">¥ {{product.price}}</span>
	            	<span class="dis-blk text-left font-sm pd-full">库存149件</span>
	            	<span class="dis-blk text-left font-sm pd-full">请选择数量</span>
	            	<div class="clear-both"></div>
	            </div>
	            <div class="weui_actionsheet_cell">
	            	<span class="pd-l-m pull-left">购买数量</span>
	            	<div class="pull-right m-r-xl border">
	            		<span class="operate dis-in-blk border-right pd-lr" @click="reducePro">一</span>
	            		<span class="dis-in-blk pd-lr">{{count}}</span>
	            		<span class="operate dis-in-blk border-left pd-lr" @click="addPro">十</span>
	            	</div>
	            	<div class="clear-both"></div>
	            </div>
	        </div>
	        <div class="weui_actionsheet_action font-no no-m-t">
	        	<span class="big-font cart text-center" @click="hideCart">取消</span>
	        	<span class="big-font buy text-center" @click="addCart">确定</span>
	        </div>
	    </div>
	</div>

	<div class="weui_dialog_alert" v-show="warn">
	    <div class="weui_mask"></div>
	    <div class="weui_dialog">
	        <div class="weui_dialog_hd">{{errMsg}}</div>
	        <div class="weui_dialog_ft">
	            <a  class="weui_btn_dialog primary" @click="cancel">确定</a>
	        </div>
	    </div>
	</div>

  </div>

</template>
<script >
import carousel from './carousel.vue'
export default {
	data () {
		return {
			id:null,
			product:null,
			showImg:[],
			saleTab:[],
			count:1,
			warn:false,
			errMsg:null

		}
	},
	ready () {
		this.getProduct()
	},
	methods: {
		//获取指定商品
		getProduct() {
			this.$http.get('../product.json',{}, {
				headers: {
				    "X-Requested-With": "XMLHttpRequest"
				},
				emulateJSON: true
			}).then(function(res) {
				 let productAry=res.data.data
				 this.id=this.$route.params.id
				 for(let i =0,len=productAry.length;i<len;i++) {
				    switch(productAry[i].id)
				    {
				      case "01":
				      case "02":
				      case "03":
				          this.showImg.push(productAry[i])
				          break
				      default:
				          this.saleTab.push(productAry[i])
				    }
				    if(this.id===productAry[i].id){
				    	this.product=productAry[i]
				    	console.log(this.product.name)
				    }
				 }
			},function(err) {
				console.log(err)
			})
			


		},

		goBack() {
			window.history.back()
		},

		showCart(id) {
			//显示购物sheet
			let mask=document.getElementById('mask')
			let actionsheet=document.getElementById('weui_actionsheet')
			mask.style.display='block'
			mask.className+='weui_fade_toggle'
			actionsheet.className+='weui_actionsheet_toggle'
			
		},
		hideCart() {
			let mask=document.getElementById('mask')
			let actionsheet=document.getElementById('weui_actionsheet')
			mask.style.display='none'
			mask.className='weui_mask_transition '
			actionsheet.className='weui_actionsheet '
		},
		addPro() {
			this.count+=1
		},
		reducePro() {
			if(this.count===1){
				this.warn=true;
				this.errMsg="商品的最小购买数量为1"
			}else{
				this.count-=1
			}
		},
		cancel() {
			this.warn=false
		},
		addCart() {
			this.product.count=this.count
			console.log(this.product)
			sessionStorage.setItem(id,this.product)
		},
		orderNow(id) {
			this.$route.router.go()
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