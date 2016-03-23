
<script>
    export default{
        data () {
            return {
                newTodo:"",
                todos:[],
            }
        },
        methods : {

            addTodo () {
                let text = this.newTodo.trim();
                if(text){
                    this.todos.push({text:text,date:new Date().toLocaleString()});
                    localStorage.setItem("loaclTodo", JSON.stringify(this.todos));
                }
            },
        },
        ready () {
            this.todos=this.todos.concat(JSON.parse(localStorage.getItem("loaclTodo")));


        }

    }
</script>

<template>
        <div class="det-list">

            <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg" v-for="todo in todos">
                <div class="weui_media_hd">
                    <img class="weui_media_appmsg_thumb" src="../assets/img/tea.png" alt="">
                </div>
                <div class="weui_media_bd">
                    <p class="weui_media_desc">{{todo.text}}</p>
                    <div class="det-list-time">{{todo.date}}</div>
                </div>
            </a>
            <div class="det-foot">
                <div class="det-input">
                    <input type="text" placeholder="写评论..." v-model="newTodo" v-on:keyup.enter="addTodo">
                </div>
                <div class="det-discuss">
                    <div>
                        <span>{{ todos.length}}</span>
                        <span class="det-icon">评</span>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="sass">
.det-foot{
    position: fixed;
    bottom:0;
}
.weui_media_box.weui_media_appmsg .weui_media_bd {
    overflow:hidden;
}
.det-list{
    .weui_media_desc{
        -webkit-line-clamp: 3;
        color:#333;
    }
    .weui_media_box.weui_media_appmsg{
        -webkit-box-align: flex-start;
        -webkit-align-items: flex-start;
        -ms-flex-align: flex-start;
        align-items: flex-start;
        position:relative;
    }
    .det-list-time{
        font-size: 13px;
        color: #CECECE;
        line-height: 1em;
        list-style: none;
        position:absolute;
        right:10px;
        bottom:10px;
    }
    .det-discuss div{
        float:right;
        font-size:0;
        width:100%;
    }
    .det-discuss span{
        display:inline-block;
        width:50%;
        text-align:center;
        height:52px;
        font-size:12px;
        line-height:52px;
    }
}

</style>
