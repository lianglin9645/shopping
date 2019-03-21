import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store= new Vuex.Store({
    state:{
        goodsList: localStorage["goodsList"]?JSON.parse(localStorage["goodsList"]): []
    },
    getters:{
        sum:state=>{
            var total=0;
            state.goodsList.forEach((item)=>{
                if(item.select){
                    total+=item.price*item.number
                }             
            })
            return total
        },
        goddsNumber:state=>{
            return state.goodsList.length
        }
    },
    mutations:{
        addGoods:(state,data)=>{
            state.goodsList.push(data);
            localStorage.setItem("goodsList",JSON.stringify(state.goodsList));                      
        },
        deleteGoods(state,index){
            state.goodsList.splice(index,1);        
            localStorage.setItem("goodsList",JSON.stringify(state.goodsList));
        },
        updateGoods(state,data){
            const {index,key,value}=data;
            state.goodsList[index][key]=value;  
            localStorage.setItem("goodsList",JSON.stringify(state.goodsList));
        }
    }
})
// const state = {
//     goodsList: localStorage["goodsList"]?JSON.parse(localStorage["goodsList"]): []
//       added: [],
//       num: 0
// };

// const getters = {
    // carList:state => state.car_List,
    // cartProducts:state => {
    //     return state.car_List.map(({id,num})=> {
    //         let product = state.car_List.find(item=>item.id == id)
    //         return {
    //             ...product,
    //             num
    //         }
    //     })
    // } 
// };

// const actions = {
    // handelAddGoods ({commit}, product,price,imgUrl) {
    //     commit('add', {
    //         id: product,
    //         price: price,
    //         imgUrl: imgUrl
    //     })
    // }
// };

// const mutations = {
    // add (state, {id,title,imgUrl,price}) {
    //     let record = state.car_List.find(item=>item.id == id)
    //     if (!record) {
    //         state.car_List.push({
    //             id,
    //             num:1,
    //             imgUrl,
    //             name,
    //             price
    //         })
    //     } else {
    //         record.num++
    //     }
    //     console.info(record, state.car_List)
    // },
//     add:(state,data)=>{
//             state.goodsList.push(data);                      
//         }
// };

// export default {
//     state,
//     mutations,
//     actions,
//     getters,
// };