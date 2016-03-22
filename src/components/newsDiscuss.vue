<script>
    export default{
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

<template>
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
    <div>
        <ul>
            <li v-for="todo in todos">
                <span>{{ todo.text }}</span>
                <button v-on:click="removeTodo($index)">X</button>
            </li>
        </ul>
    </div>
</template>

<style lang="sass">

</style>
