
<script>
    import carousel from "./carousel.vue";
    import navbtm from './navBtm.vue'


    export default {

        data () {
            return {
                newsSort:["类别1","类别2","类别3","类别4",],
                newsCell:[
                    {
                        href:"../assets/img/news-cell-img.jpg",
                        title:"这里是标题信息这里是标题信息这里是标题信息",
                        info:"这里是概要这里是概要这里是概要这里是概要这里是概要这里是概要",
                        time:"2016-03-17"

                    },{
                        href:"../assets/img/news-cell-img.jpg",
                        title:"这里是标题信息这里是标题信息这里是标题信息",
                        info:"这里是概要这里是概要这里是概要这里是概要这里是概要这里是概要",
                        time:"2016-03-17"

                    },{
                        href:"../assets/img/news-cell-img.jpg",
                        title:"这里是标题信息这里是标题信息这里是标题信息",
                        info:"这里是概要这里是概要这里是概要这里是概要这里是概要这里是概要",
                        time:"2016-03-17"

                    },
                ]
            }
        },
        methods: {
            alt: function() {
                alert('this.msg is' + this.msg)
            }
        },
        components:{
            carousel,
            navbtm
        }
    }

</script>
<template>
    <div class="news-header">资讯</div>
    <div class="weui_navbar news-navbar">
        <div class="weui_navbar_item weui_bar_item_on" v-for="sort in newsSort">
            {{sort}}
        </div>
    </div>
    <carousel></carousel>
    <div class="news-list" >
        <div class="news-list-cell" v-for="cellInfo in newsCell">
            <a class="nl-img"><img :src="cellInfo.href" alt=""></a>
            <div class="nl-info">
            <h3>{{cellInfo.title}}</h3>
            <p>{{cellInfo.info}}</p>
            <time>{{cellInfo.time}}</time>
            </div>
        </div>
    </div>
    <navbtm></navbtm>

</template>


<style>
    .news-header{
        background-color: #09CC7B;
        height: 42px;
        line-height: 42px;
        text-align: center;
        color:#fff;
        font-size: 18px;
        font-weight: 700;
        width:100%;
        position:fixed;
        z-index: 2;

    }
    .weui_navbar.news-navbar{
        color:#333;
        position: relative;
        top: auto;
        background-color: #fff;
            padding-top: 42px;
    }
    .weui_navbar.news-navbar:after{
        border:none;
    }
    .weui_navbar.news-navbar .weui_navbar_item{
        border: none;
    }
    .weui_navbar.news-navbar .weui_navbar_item:after{
        border: none;
    }
    .news-list{
        width: 95%;
        margin: 0 auto;
        padding-bottom: 61px;
    }
    /* 每一项 */
    .news-list-cell{
        border-bottom: 1px solid #E2E2E2;
        overflow:hidden;
        position:relative;
    }
    .nl-img{
        display:block;
        height:110px;
        width:110px;
        border-radius:4px;
        float: left;
        overflow: hidden;
        margin:10px 10px 10px 0;
    }
    .nl-img img{
        display: block;
        height:100%;
        width:100%;
    }
    .nl-info{
        margin-top: 10px;
        width:90%;
    }
    .nl-info h3{
        font-size: 16px;
        color:#333;
        margin-bottom: 12px;
    }
    .nl-info p{
        color:#666;
        font-size: 12px;
    }
    .nl-info time{
        position:absolute;
        color:#999;
        font-size: 12px;
        right: 6px;
        bottom:4px;
        height:12px;
        line-height: 12px;
    }
</style>
