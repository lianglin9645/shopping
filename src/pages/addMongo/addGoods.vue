<template>
    <div class="register">
        <div class="login-box">
            <field class="input-margin" v-model="productId"  placeholder="请输入id" />
            <field class="input-margin" v-model="productName"  placeholder="请输入标题" />
            <field class="input-margin" v-model="productNameSmoll" placeholder="请输入副标题" />
            <field class="input-margin" v-model="productText" placeholder="请输入详细" />
            <field class="input-margin" v-model="productPrice" placeholder="请输入价格" />
            <field class="input-margin" v-model="productPic" placeholder="请输入图片地址" />
            <!-- <field class="input-margin" v-model="proudctIndex1" placeholder="请输入图片轮播1地址" />
            <field class="input-margin" v-model="proudctIndex2" placeholder="请输入图片轮播2地址" />
            <field class="input-margin" v-model="proudctIndex3" placeholder="请输入图片轮播3地址" /> -->
        </div>
        <img :src="imgUrl" alt="">
        <div class="btn" @click="handleClickAdd">
            添加
        </div>
    </div>
</template>
<script>
import { Field, CellGroup, Toast } from 'vant';
import axios from 'axios'
export default {
    name: "addGoods",
    components: {
        Field,
        CellGroup,
        Toast
    },
    data() {
        return {
            productId: '',
            productName: '',
            productPrice: '',
            productNameSmoll: '',
            productPic: '',
            productText: '',
            imgUrl: '',
            // proudctIndex1: '',
            // proudctIndex2: '',
            // proudctIndex3: '',
        }
    },
    methods: {
        handleClickAdd() {
            axios.post('/good/add', {
                productId: this.productId,
                productName: this.productName,
                productPrice: this.productPrice,
                productNameSmoll: this.productNameSmoll,
                productPic: this.productPic,
                productText: this.productText,
                // productBanner: [this.proudctIndex1, this.proudctIndex2, this.proudctIndex3],
            }).then((res)=>{
                console.log(res)
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