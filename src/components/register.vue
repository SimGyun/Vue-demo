<script>
    // module.export={
    export default{
        data : function(){
            return {
                formData:{
                    "tel":"",
                    "codes":"",
                    "pass1":"",
                    "pass2":""
                },
                formAlert:{
                    "tel":"",
                    "codes":"",
                    "passInfo":true
                },
                "submit":true
            };
        },
        methods: {
            "telblur":function(){
                // va
                if(typeof this.formData.tel ==="string"){
                    this.formAlert.tel="error-show";
                }else if(this.formData.tel.toString().length===11){
                    this.formAlert.tel="succ-show";
                }else{
                    this.formAlert.tel="error-show";
                }

            },
            "codesBlur":function(){
                if(typeof this.formData.codes ==="string"){
                    this.formAlert.codes="weui_cell_warn";
                }else if(this.formData.codes.toString().length===4){
                    this.formAlert.codes=true;
                }else{
                    this.formAlert.codes="weui_cell_warn";
                }
            },
            "passBlur":function(){
                if(this.formData.pass2.length < 8 || this.formData.pass1!=this.formData.pass2){
                    this.formAlert.passInfo= false;
                }else{
                    this.formAlert.passInfo=true;
                }
            },
        },
        ready:function(){
            this.$watch("formData.pass2",function(){
                if(this.formData.pass2==this.formData.pass1){
                    this.submit =  false;
                }else{
                    this.submit = true;
                }

            })
        },
    }
</script>
<template>
    <div class="register"  >
        <h1 class="page_title">注册</h1>
        <div class="weui_cells weui_cells_form">
        <div class="weui_cells_title">输入验证</div>
            <div class="weui_cell" :class="formAlert.tel">
                <div class="weui_cell_hd"><label class="weui_label">手机号</label></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="tel" pattern="[0-9]*" placeholder="请输入手机号码"required v-model="formData.tel" minlength="11" maxlength="11" number @blur="telblur()">
                </div>
            </div>
            <div class="weui_cell weui_vcode " :class="formAlert.codes">
                <div class="weui_cell_hd"><label class="weui_label">验证码</label></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="tel" placeholder="请输入验证码" v-model="formData.codes" number required  minlength="4" maxlength="4" @blur="codesBlur()">
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
                    <input class="weui_input" type="password" placeholder="请输入密码"v-model="formData.pass1" >
                </div>
            </div>
            <div class="weui_cell">
                <div class="weui_cell_hd"><label class="weui_label">密码</label></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="password"  placeholder="请再次输入密码"v-model="formData.pass2" @blur="passBlur()">
                </div>
            </div>
        </div>
        <p v-if="!formAlert.passInfo" style="color:red;">密码必须大于8位，且两次密码输入一致</p>
        <button class="weui_btn  weui_btn_default" type="submit" disabled="{{submit}}" :class="{'weui_btn_disabled':submit,'weui_btn_primary':!submit}">提交</button>
    </div>
</template>
<style lang="sass" >
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
        .error-show{
            box-shadow: inset 0px 0px 1px 1px #F13535;
        }
        .succ-show{
            box-shadow: inset 0px 0px 1px 1px green;
        }
    }
</style>

