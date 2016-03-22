
<script>
    export default {

        data () {
            return {
                newTodo:"",
                todos:[],
                laud:0

            }
        },
        methods : {
            addTodo () {
                let text = this.newTodo.trim();
                if(text){
                    this.todos.push({text:text,date:new Date().toLocaleString()});
                    this.newTodo="";
                    if(localStorage.getItem("loaclTodo")){
                        localStorage.setItem("loaclTodo",JSON.stringify(this.todos.concat(JSON.parse(localStorage.getItem("loaclTodo")))));
                    }else{
                        localStorage.setItem("loaclTodo",JSON.stringify(this.todos));
                    }
                }
                this.$route.router.go({name:"newsDiscuss"});
            },
            goNews () {
                this.$route.router.go({name:"news"});
            }
        },
        ready () {
            if(JSON.parse(localStorage.getItem("loaclTodo"))){
                this.todos=this.todos.concat(JSON.parse(localStorage.getItem("loaclTodo")));
            }
        }
    }
</script>
<template>
    <div class="det-container">
        <div class="det-header">
            <span class="det-icon det-head-left" @click="goNews()">&lt;</span >
            <span class="det-icon det-head-right">&epsilon;</span>
        </div>
        <div class="det-main">
            <h2 class="det-title">
                这里是标题这里是标题这里是标题fg
            </h2>
            <article class="det-article">
                <p>
                    啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将afg阿什来得及阿散井的理解啊速度dsf啊数量单价阿斯顿
                </p>
                <p>
                    啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将阿什来得及阿散井的理解啊速度啊数量单价阿斯顿啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将阿什来得及阿散井的理解啊速度啊数量单价阿斯顿啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将阿什来得及阿散井的理解啊速度啊数量单价阿斯顿啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将阿什来得及阿散井的理解啊速度啊数量单价阿斯顿啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将阿什来得及阿散井的理解啊速度啊数量单价阿斯顿
                </p>
                <p>
                    啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将阿什来得及阿散井的理解啊速度啊数量单价阿斯顿结束了
                </p>
            </article>

        </div>
        <div class="det-foot">
            <div class="det-input">
                <input type="text" placeholder="写评论..." v-model="newTodo" v-on:keyup.enter="addTodo()">
            </div>
            <div class="det-discuss">
                <div @click="this.$route.router.go({name:'newsDiscuss'});">
                    <span>{{ todos.length }}</span>
                    <span class="det-icon">评</span>
                </div>
                <div @click="laud++">
                    <span>{{ laud }}</span>
                    <span class="det-icon">赞</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

    .det-container{
        position:absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom:0;
        background-color: #eee;

    }
    .det-header{
        background-color: #fff;
        height: 42px;
        line-height: 42px;
        font-weight: 700;
        overflow:hidden;
        position: fixed;
        width: 100%;
    }
    .det-icon{
        display: block;
        height: 22px;
        line-height: 22px;
    }
    .det-head-left{
        float: left;

    }
    .det-head-left,.det-head-right{
        width:30px;
        text-align: center;
        padding:10px 0;
    }
    .det-head-right{
        float: right;
    }
    .det-main{
        padding: 42px 20px 50px;
        background-color: #eee;
    }
    .det-title{
        margin-bottom: 20px;
    }
    .det-article{
        text-indent:2em;

    }
    .det-foot{
        position: absolute;
        bottom: 85px;
        left: 0;
        right: 0;
        background-color:#fff;
    }
    .det-input{
        float: left;
        width: 70%;

    }
    .det-input input{
        display: block;
        width: 90%;
        padding-left: 5%;
        margin: 10px auto;
        height: 30px;
        line-height: 30px;
        border: 1px solid #666;
        border-radius: 5px;
        outline: none;
    }
    .det-discuss{
        float: left;
        width: 30%;
    }
    .det-discuss div{
        width: 50%;
        float: left;
        text-align: center;
    }
    .det-discuss span {
        display: block;
        height: 25px;
        line-height: 25px;
    }
    .det-discuss span.det-icon {
        margin: 0;
    }
</style>
