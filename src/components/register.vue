<script>
    // module.export={
    export default{
        data : function(){
            return {};
        },
        methods: {
            alert : function(){
                alert("module.export!!!!!");
            }
        }
    };
    // export default{
    //     data () {

    //     },
    //     methods : {

    //     }
    // }
</script>
<template>
    <div class="register">
        <h1 class="page_title" @click="alert()">注册</h1>
        <div class="weui_cells weui_cells_form">
        <div class="weui_cells_title">输入验证</div>
            <div class="weui_cell">
                <div class="weui_cell_hd"><label class="weui_label">手机号</label></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="tel" pattern="[0-9]*" placeholder="请输入手机号码">
                </div>
            </div>
            <div class="weui_cell weui_vcode weui_cell_warn">
                <div class="weui_cell_hd"><label class="weui_label">验证码</label></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="tel" placeholder="请输入验证码">
                </div>
                <div class="weui_cell_ft">
                    <i class="weui_icon_warn"></i>
                    <img src="../assets/img/tea.png">
                </div>
            </div>
            <div class="weui_cells_title">设定密码</div>
            <div class="weui_cell">
                <div class="weui_cell_hd"><label class="weui_label">密码</label></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="password" placeholder="请输入密码">
                </div>
            </div>
            <div class="weui_cell">
                <div class="weui_cell_hd"><label class="weui_label">密码</label></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="password"  placeholder="请再次输入密码">
                </div>
            </div>

        </div>
        <a href="javascript:;" class="weui_btn weui_btn_primary">提交</a>
    </div>
</template>
<style lang="sass">
    $r-bgc :#FBF9FE;

    .register{
        background-color:$r-bgc;
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
    }
    .register{

        .page_title{
            text-align: center;
            font-size: 34px;
            color: #3cc51f;
            font-weight: 400;
            margin: 0 15%;
        }
        .weui_cells{
            margin-top:0;
        }
        .weui_btn{
            width: 90%;
            margin-top: 20px;
        }
        .weui_cells_title{
            background-color:$r-bgc;
            padding-top: .77em;
            padding-bottom: .3em;
            margin:0;
        }
    }
</style>

