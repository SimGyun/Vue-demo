<template>
  <div id="details">
	<nav class="text-center">
		<div class="pull-left big-font pd-l-m">&lt;</div>
		<div class="pd-r-m">商品详情</div>
		<div class="pull-right">
			<img src="../assets/img/cart.png" class="nav-img">
		</div>
		<div class="clear-both"></div>
	</nav>
	<div class="banner">
		<carousel></carousel>
		<div class="pd-l-m bgc-white">养生花茶  拒绝春日绵绵好睡眠花茶250g</div>
		<p class="pd-l-m danger-text bgc-white">¥100</p>
		<div class="banner-font bgc-white">
			<span class="pull-left pd-l-m">原价：¥ 120</span>
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
	
  </div>
</template>
<script >
import carousel from './carousel.vue'
export default {
	components: {
		carousel
	}
}
</script>