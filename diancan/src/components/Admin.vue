<template>
  <div class="admin row">
    <!-- 添加商品 -->
      <div class="col-sm-12 col-md-7">
       <NewPizza></NewPizza>
      </div>

    <!-- 展示列表 -->
    <div class="col-sm-12 col-md-4 offset-md-1">
      <h3 class="text-meuted my-4">菜单</h3>
        <table class="table">
          <thead class="thead table-default">
            <tr>
              <th>品种</th>
              <th>删除</th>
            </tr>
          </thead>
          <tbody v-for="(item,index) in getMenu" :key='index'>
            <tr>
              <td>{{item.name}}</td>
              <td><button class="btn btn-danger" @click='delMenu(item)'>X</button></td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import NewPizza from './NewPizza.vue'
export default {
  components:{
    NewPizza
  },
  data(){
    return{
     /*  getMenu:{} */
    }
  },
  created() {
    fetch('https://wd0532166098rifrpf.wilddogio.com/menu.json')
    .then(res=>{
      return res.json()
    })
    .then(data=>{
      let menuArray=[]
      for(let key in data){
        data[key].id =key
        menuArray.push(data[key]) 
      }
      /* this.getMenu = menuArray; */
      //请求的数据同步到vuex中
      this.$store.commit('setMenuItems',menuArray)
    })
  },
  computed:{
    getMenu:{
      get(){
         // return this.$store.state.Menu
          return this.$store.getters.getMenus
      },
      set(){
        
      }
     
    }
  },
  methods:{
    delMenu(item){
     fetch(`https://wd0532166098rifrpf.wilddogio.com/menu/${item.id}/.json`,{
       method:'DELETE',
       headers:{
         'Content-type':'application/json'
       }
     })
     .then(res=>res.json())
     .then(data=>{this.$store.commit('removeMenu',item)})
     .catch(err=>console.log(err))
    }
  }
  //组件内守卫
  /* beforeRouteEnter: (to, from, next) => {
    next(vm => {
      console.log(`hello ${vm.name}`)
    })
  } */
  //组件后置守卫
  /* beforeRouteLeave :(to, from, next) =>{
    if(confirm('确定离开么')==true){
      next();
    }else{
      next(false)
    }
  } */
}
</script>

<style>
</style>
