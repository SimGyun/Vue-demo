<template>
    <div class="det-container">
        <div class="det-header">
            <span class="det-icon det-head-left">回</span>
            <span class="det-icon det-head-right">享</span>
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
                    啊速度加啊四的理解阿什的啦开始觉得 啦时刻都将阿什来得及阿散井的理解啊速度啊数量单价阿斯顿
                </p>
            </article>

        </div>
        <div class="det-foot">
            <div class="det-input">
                <input type="text" placeholder="写评论..." v-model="newTodo" v-on:keyup.enter="addTodo">
            </div>
            <div class="det-discuss">
                <div>
                    <span>{{ todos.length }}</span>
                    <span class="det-icon">评</span>
                </div>
                <div>
                    <span>0</span>
                    <span class="det-icon">赞</span>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {

        data () {
            return {
                newTodo:"",
                todos:[{text:"还没有一条评论呢!快来添加吧！"}],

            }
        },
        methods : {
            addTodo () {
                let text = this.newTodo.trim();
                if(text){
                    this.todos.push({text:text});
                    this.newTodo="";
                    sessionStorage.setItem("loaclTodo", this.todos);
                    var aaa = sessionStorage.getItem("loaclTodo");
                    console.log(JSON.stringify(aaa));
                }
            },
            removeTodo (index) {
                this.todos.splice(index,1);
            }
        }
    }
</script>
<style>
    *{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .det-container{
        background-color:#eee;
        position: absolute;
        left: 0;
        right: 0;
        top:0;
        bottom: 0;
        z-index: -1;

    }
    .det-header{
        background-color: #fff;
        height: 42px;
        line-height: 42px;
        font-weight: 700;
        overflow:hidden;
    }
    .det-icon{
        display: block;
        height: 22px;
        line-height: 22px;
        margin:10px 0;
    }
    .det-head-left{
        float: left;
    }
    .det-head-left,.det-head-right{
        width:30px;
    }
    .det-head-right{
        float: right;
    }
    .det-main{
        padding: 20px;
    }
    .det-title{
        margin-bottom: 40px;
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
