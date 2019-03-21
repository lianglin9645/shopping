import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

 const store= new Vuex.Store({
    state:{
        goodsList: localStorage["goodsList"]?JSON.parse(localStorage["goodsList"]): [],
        address: localStorage["address"]?JSON.parse(localStorage["address"]): [],
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
        },
        submitAddress(state,data){
            state.address.push(data);
            console.log(state.address)
            localStorage.setItem("address",JSON.stringify(state.address));
        }
    }
})

export default store

// import Vue from 'vue'
// import Vuex from 'Vuex'

// // import cart from './modules/cart'
// Vue.use(Vuex)

// const store = new Vuex.Store({
//     state:{
//         car_List: [{
//             id: '0001',
//             name: '红米5A 轻巧长续航',
//             price: '599',
//             num: '3',
//             imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c0bd24d4f71813791c2987e4bf41696d.jpg?thumb=1&w=360&h=360'
//           }, {
//             id: '0002',
//             name: '小米MIX2 全网通版 6GB内存 黑色陶瓷 128GB',
//             price: '2799',
//             num: '2',
//             imgUrl: '//i1.mifile.cn/a1/pms_1505401551.09912910!180x1800.jpg'
//           }, {
//             id: '0003',
//             name: '小米MIX2 全网通版 6GB内存 黑色陶瓷 128GB',
//             price: '2799',
//             num: '10',
//             imgUrl: '//i1.mifile.cn/a1/pms_1505401551.09912910!180x1800.jpg'
//           }],
//           count:1
//     },
//     mutations:{
//         addGoods:(state,data)=>{
//             state.car_List.push(data);                    
//         }
//     }
// })

// export default store
// // export default new Vuex.Store({
// //  modules: {
// //   cart,
// //  }
// // })