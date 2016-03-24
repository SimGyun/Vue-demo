<template>
	<div class="show">
    <div>
        <img :src="slideUrl">
    </div>
    <div class=" show-icon" :style="{width: showWidth+'px'}" >
        <div style="margin:0 auto;" id="spanCnt">
            <div class="clear-both"></div>
        </div>
    </div>
</div>
</template>

<script>
	export default {

	data () {
		return {
				showImg:[
					{
						id:"01",
						name:"养生花茶",
						price:"22.50",
						des:"拒绝春日绵绵好睡眠花茶250g",
						url:"../assets/img/health03.png"
					},
					{
						id:"02",
						name:"雨前龙井",
						price:"55.60",
						des:"一级雨前龙井礼盒250g",
						url:"../assets/img/health01.jpg"
					},
					{
						id:"03",
						name:"高汤滋补",
						price:"67.80",
						des:"家庭常用老火靓汤专用300g",
						url:"../assets/img/health02.jpg"
					},
				],
		        slideUrl:'',
		        currentIndex:0,
		        count:0,
		        circles:[]
		}
	},
	// props: {
	// 	showImg: {
	// 		type:Array,
	// 		require:true
	// 	},
	// 	msg:''
	// },
	ready () {
	  this.slideUrl=this.showImg[this.currentIndex].url
	  let imgCnt=this.showImg.length
	  this.count=imgCnt
	  let fragmentHtml=" "
	  let parentNode=document.getElementById('spanCnt')

	  //动态添加幻灯片的小圆圈
	  for(let i=0;i<imgCnt;i++){
	    fragmentHtml+='<span>'+ '</span>'
	  }
	  parentNode.innerHTML=fragmentHtml
	  //设置小圆圈的状态
	  let spanNodes=parentNode.getElementsByTagName("span")
	      this.circles=spanNodes
	      spanNodes[0].className='active'

	  for(let i=1;i<imgCnt;i++){
	     spanNodes[i].className='positive'
	  }
	  this.waitForNext()
	},
	methods: {
		  waitForNext() {
		    setInterval(this.next,1000 * 3)
		  },
		  next() {
		    this.currentIndex+=1
		    if(this.currentIndex >= this.count){
		      this.currentIndex=0
		    }
		    this.handleImg(this.currentIndex)
		  },
		  handleImg(index) {
		    this.slideUrl=this.showImg[index].url
		    this.circles[index].className='active'
		    for(let i=0;i<this.count;i++){
		      if(i!==index){
		        this.circles[i].className='positive'
		      }
		    }
		  }
		},
		computed: {
			showWidth () {
			  return this.showImg.length*25
			},
		}
	}
</script>

<style >
.show span{
    display: block;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    float: left;
    margin:4px;
    z-index: 2;
}
.show img{
    width: 100%;
    height: 200px;
}
.show-icon {
    height: 30px;
    position: relative;
    width: 75px;
    margin: -30px auto 0 auto;
}
.active{
    background-color: #F7F7F7;
}
.positive{
    background-color: rgba(255,255,255,.5);
}
.clear-both {
	clear: both;
}
</style>
