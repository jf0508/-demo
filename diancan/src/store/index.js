import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    Menu:{},
    users: null,
    isLogin:false
  },
  getters:{
    //获取数据
    getMenus:state=>state.Menu,
    //获取登录数据
    getUsers:state=>state.users,
    //判断是否登录
    isLoginState:state=>state.isLogin
  },
  mutations:{
    setMenuItems(state,data){  //同步请求到的数据
      state.Menu = data
    },
    removeMenu(state,data){  //删除数据
      state.Menu.forEach((item,index)=>{
        if(item == data){
          state.Menu.splice(index,1)
        }
      })
    },
    addMenu(state,data){ //添加新商品
      state.Menu.push(data)
    },
    userStates(state,user){ //更改用户状态信息
      if(user!=null){
        state.users = user
        state.isLogin=true
      }else{
        state.users = null
        state.isLogin=false
      }
    }
  },
  actions:{
    setUser({commit},user){
      commit('userStates',user)
    }
  }
})

export default store