<template>
  <div id="cart">
	<nav class="text-center">
		<div class="pull-left big-font pd-l-m" @click="goBack">&lt;</div>
		<div class="pd-r-m">购物车</div>
		<div class="clear-both"></div>
	</nav>
	<div></div>
  </div>
</template>
<script >
	
export default {
	data () {
		return {

		}
	},
	methods: {
		goBack() {
			window.history.back()
		}
	}
		
}
</script>