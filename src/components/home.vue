<template >
<div id="shouye">
<!--顶部搜索-->
<div class="search-bar">
    <div class="search-list">
      <img src="../assets/img/List.png" class="nav-icon">
    </div>
    <div class="search-input">
        <div class="search-img">
            <img src="../assets/img/search01.png">
        </div>
        <div>
            <input class="weui_input" type="search" placeholder="请输入商品"/>
        </div>
        <div class="clear-both"></div>
    </div>
</div>
<!--图片轮播-->
<!-- <div class="show" @click=>
    <div>
        <img :src="slideUrl">
    </div>
    <div class=" show-icon" :style="{width: showWidth+'px'}" >
        <div style="margin:0 auto;" id="spanCnt">
            <div class="clear-both"></div>
        </div>
    </div>       
</div> -->
<carousel></carousel>
<!--小分类-->
<div class="weui_grids m-t-sm bgc-white w-full">
    <a href="javascript:;" class="weui_grid no-pd-btm ">
        <div class="weui_grid_icon cate-grid">
            <img src="../assets/img/show02.jpg" >
        </div>
        <p class="weui_grid_label">
            汤料组合
        </p>
    </a>
    <a href="javascript:;" class="weui_grid no-pd-btm ">
        <div class="weui_grid_icon cate-grid">
            <img src="../assets/img/show01.jpeg" >
        </div>
        <p class="weui_grid_label">
            家庭常用
        </p>
    </a>
    <a href="javascript:;" class="weui_grid no-pd-btm ">
        <div class="weui_grid_icon cate-grid">
            <img src="../assets/img/show03.jpeg" >
        </div>
        <p class="weui_grid_label">
            办公常用
        </p>
    </a>
</div>
<!--特约专场-->
<div class="weui_cells sale" >
    <div class="weui_cell">
        <div class="weui_cell_bd weui_cell_primary">
            <p class="sale-p">特价专场</p>
        </div>
        <div class="weui_cell_ft">
            <div class="cnt-area" v-show="showCntDown">
                <span class="pd-r-sm">距离结束还有</span>
                <span class="cnt text-center m-r-xm">{{currentHours}}</span>:
                <span class="cnt text-center m-r-xm">{{currentMinutes}}</span>:
                <span class="cnt text-center m-r-xm">{{currentSeconds}}</span>
            </div>
            <div class="cnt-area danger-text" v-else>已结束</div>
        </div>
    </div>
</div>
<!--特约专场缩略图-->
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

<!--热销推荐-->
<div class="weui_cells sale" >
    <div class="weui_cell">
        <div class="weui_cell_bd weui_cell_primary">
            <p class="sale-p">特约推荐</p>
        </div>
    </div>
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

<navbtm></navbtm>

</div>
</template>

<script>
import carousel from './carousel.vue'
import navbtm from './navBtm.vue'
  export default {

  data () {
    return {
        showImg:[],
        saleTab:[],
        slideUrl:null,
        currentIndex:0,
        count:0,
        circles:[],
        currentHours:null,
        currentMinutes:null,
        currentSeconds:null,
        cnt:0,
        leftTime:null,
        showCntDown:true
    }
  },
  components: {
        navbtm,
        carousel
  },
  ready () {
    this.getProduct()

    //特卖场倒计时
    let date = new Date()
    let y=date.getFullYear()
    let month=date.getMonth()
    let day=date.getDate()
    let h=date.getHours()
    let endH=17

      let nowTimeStamp=(date.getTime())/1000
      let endDate = new Date(y,month,day,endH,0,0)
      let endTimeStamp = (endDate.getTime())/1000
      this.leftTime = endTimeStamp - nowTimeStamp
      if(this.leftTime > 0){
        this.showCountDown()
      }else{
        this.showCntDown=false
      }
    this.$watch('currentSeconds',function(){
      if(this.leftTime <= 0) {
        this.showCntDown=false
      }
    })
  },
  methods: {
      // waitForNext() {
      //   setInterval(this.next,1000 * 3) 
      // },
      // next() {
      //   this.currentIndex+=1
      //   if(this.currentIndex >= this.count){
      //     this.currentIndex=0
      //   }
      //   this.handleImg(this.currentIndex)
      // },
      // handleImg(index) {
      //   this.slideUrl=this.showImg[index].url
      //   this.circles[index].className='active'
      //   for(let i=0;i<this.count;i++){
      //     if(i!==index){
      //       this.circles[i].className='positive'
      //     }
      //   }
      // },
      showCountDown() {
          setInterval(this.countDown,1000)
      },
      countDown() {
         let leftSeconds = this.leftTime
         let leftMinutes = leftSeconds/60
         let leftHour = Math.floor(leftSeconds/3600)
         let minutes = Math.floor(leftMinutes - leftHour*60)
         let seconds = Math.floor(leftSeconds - leftHour*3600 - minutes*60)
         this.leftTime-=1
         if(parseInt(leftHour)<10) {
          leftHour='0'+leftHour
          // parseInt(leftHour)
         }
         if(parseInt(minutes)<10){
          minutes='0'+minutes
          // parseInt(minutes)
         }
         if(parseInt(seconds)<10){
          seconds='0'+seconds
          // parseInt(seconds)
         }
         this.currentHours=leftHour
         this.currentMinutes=minutes
         this.currentSeconds=seconds
    },
    // carousel() {
    //   this.slideUrl=this.showImg[this.currentIndex].url
    //   let imgCnt=this.showImg.length
    //   this.count=imgCnt
    //   let fragmentHtml=" "
    //   let parentNode=document.getElementById('spanCnt')

    //   //动态添加幻灯片的小圆圈
    //   for(let i=0;i<imgCnt;i++){
    //     fragmentHtml+='<span>'+ '</span>'
    //   }
    //   parentNode.innerHTML=fragmentHtml
    //   //设置小圆圈的状态
    //   let spanNodes=parentNode.getElementsByTagName("span")
    //       this.circles=spanNodes
    //       spanNodes[0].className='active'

    //   for(let i=1;i<imgCnt;i++){
    //      spanNodes[i].className='positive'
    //   }
    //   this.waitForNext()
    // },
    getProduct() {
      this.$http.get('../product.json',{}, {
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        },
        emulateJSON: true

      }).then(function(res) {
         let productAry=res.data.data
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
         }
         // this.carousel()

      },function(err) {
        console.log(err)
      })

    },
    goToDetails(id) {
        this.$route.router.go({name:'details',params:{id:id}})
    },
},
  computed: {
    showWidth () {
      return this.showImg.length*25
    }
  }
}


</script>

