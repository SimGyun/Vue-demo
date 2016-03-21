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
<div class="sale-info" v-for="sale in saleTab" @click="goToDetails()">
    <div class="sale-img">
        <img :src="sale.url">
    </div>
    <div class="sale-font pd-l-sm pd-r-ssm">
        <span class="sale-font-m pd-r-sm">{{sale.name}}</span>
        <span class="sale-font-m ">{{sale.des}}</span>
        <span class="dis-blk font-red font-l">¥{{sale.price}}</span> 
        <a href="#" v-link="{path:'http://localhost:3000/#!/details'}">测试</a>
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

</div>
</template>

<script>
  export default {

  data () {
  	return {
  		showImg:[
            {
              name:'高级汤料',
              des:'你还不来买我吗！',
              url:'../assets/img/health02.jpg'
            },
            {
              name:'家用汤料',
              des:　'你在我心中是最美',
              url:'../assets/img/health01.jpg',
            },
            {
              name:'养生花茶',
              des:'拒绝春日绵绵好睡眠花茶250g',
              url:'../assets/img/health03.png'
            }
      ],
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
        slideUrl:'',
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
      },
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
    goToDetails(name,des,price) {

        this.$route.router.go({name:'details'})
    },
},
  computed: {
    showWidth () {
      return this.showImg.length*25
    }
  }
}


</script>

<style>
#shouye {
    background-color: #E0E0E0;
    padding-bottom: 60px;
}
#shouye .weui_navbar_item {
    padding: 5px 0;
}
.nav-icon{
    width: 20px;
    height: 20px;
}
.main-navbar span{
    font-size: 10px;
}
.search-bar{
    background-color: rgb(9,204,123);
}
.search-bar div , .search-input div{
    display: inline-block;
}
.search-list{
    margin: 10px 30px 10px 20px;
}

.search-input img {
    width: 15px;
    height: 15px;
    padding:5px 5px 0 5px;
}
.search-input {
    background-color: rgb(4,188,111);
    width: 250px;
}
::-webkit-input-placeholder {
    color:#F1EDED;
}
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
    /*margin-top: -30px;*/
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
.cate-grid.weui_grid_icon{
    width: 60px;
    height: 60px;
}
.cate-grid img {
    border-radius: 50%;
}
.no-pd-btm.weui_grid{
    padding-bottom: 0;
}
.no-pd-btm p {
    color:#6D6B6B;
}
.m-t-sm {
    margin-top: 9px;
}
.m-r-xm {
    margin-right: 5px;
}
.pd-r-sm {
    padding-right: 10px;
}
.pd-r-ssm {
    padding-right: 5px;
}
.pd-l-sm {
    padding-left: 5px;
}
.bgc-white {
    background-color: white;
}
.sale-p{
    margin:5px;
}
.cnt-area{
    line-height: 30px;
}
.cnt-area span {
    font-size: 18px;
}
.cnt {
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: red;
    color:white;
}
.sale-img img {
    width: 100%;
    height: auto;
}
.sale-info {
    background-color: #F7F6F6;
    margin: 10px 5px 10px 10px;
    width: 45%;
    display: inline-block;
}
.sale-font {
    font-size: 16px;
}
.dis-blk {
    display: block;
}
.font-red {
    color:red;
}
.font-l {
    font-size: 18px;
}
.w-full {
  width:100%;
}
.danger-text {
  color:red;
}
</style>