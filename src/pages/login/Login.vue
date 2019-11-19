<template>
    <div class="register">
        <div class="login-box">
            <field class="input-margin" v-model="username"  placeholder="请输入用户名" />
            <field class="input-margin" v-model="password" type="password" placeholder="请输入密码" />
        </div>
        <div class="btn" @click="handleClickLogin">
            登录
        </div>
    </div>
</template>
<script>
import { Field, CellGroup, Toast } from 'vant';
import axios from 'axios'
export default {
    name: "Login",
    components: {
        Field,
        CellGroup,
        Toast
    },
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        handleClickLogin() {
            if(this.username == '' || this.password == '') {
                Toast('用户名或密码为空')
                return 
            }
            axios.post('/user/login', {
                username: this.username,
                password: this.password
            }).then((res)=>{
               if(res.data.err_code == 1) {
                    Toast(res.data.message)
                } else {
                    // console.log(res)
                    sessionStorage.setItem('token', res.data.token);
                    sessionStorage.setItem('name', res.data.username);
                    this.$router.push({
                        path: "/"
                    })
                }
            })
        }
    }
}
</script>
<style scoped>
.register {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #F6F6F6;
}
.login-box {
    padding: 40px 20px;
}
.input-margin {
    margin: 10px 0;
}
.btn {
    width: 80%;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    border-radius: 6px;
    text-align: center;
    color: #fff;
    background: #ff6700
}
</style>