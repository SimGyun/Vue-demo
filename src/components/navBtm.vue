<script>

</script>

<template>
    <div class="weui_tab" id="navbar-btm" >
        <div class="weui_navbar" style="position:fixed;top:auto;bottom:0;">
            <div class="weui_navbar_item text-center" v-link="{name:'home'}">
                <img class="nav-icon" src="../assets/img/shop.png" /><br/>
                <span >养生商城</span>
            </div>
            <div class="weui_navbar_item text-center" v-link="{name:'news'}">
                <img class="nav-icon" src="../assets/img/news01.png"/><br/>
                <span >资讯</span>
            </div>
            <div class="weui_navbar_item text-center" v-link="{name:'newsDetail'}">
                <img class="nav-icon" src="../assets/img/ask01.png"/><br/>
                <span >评论</span>
            </div>
            <div class="weui_navbar_item text-center" v-link="{name:'register'}">
                <img class="nav-icon" src="../assets/img/mine01.png"/><br/>
                <span >我的</span>
            </div>

        </div>
    </div>
</template>
<style>

</style>
