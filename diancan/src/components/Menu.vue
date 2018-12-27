<template>
  <div id="menu" class="row">
    <!-- 商品 -->
    <div class="col-sm-12 col-md-7">
      <table class="table">
        <thead class="thead-default border">
          <th>尺寸</th>
          <th>价格</th>
          <th>描述</th>
          <th>加入</th>
        </thead>
        <tbody  class="border" v-for="(prod,index) in prods" :key="index">
          <tr>
            <td><h5>{{prod.name}}</h5></td>
          </tr>
          <tr v-for='(option,index1) in prod.options' :key="index1">
            <td>{{option.size}}寸</td>
            <td>{{option.price}}元</td>
            <td>{{prod.desc}}</td>
            <td>
              <button 
              class="btn btn-outline-success" 
              @click="addProds(prod,option)"
             >+</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 购物车 -->
    <div class="col-sm-12 col-md-5" v-if='shopProds.length>0'>
      <table class="table">
        <thead class="thead">
          <tr>
            <th>数量</th>
            <th>品种</th>
            <th>价格</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-for='(item,index) in shopProds' :key="index">
          <tr>
            <td>
              <button class="btn btn-sm border" @click="setCount(item,false)">-</button>
              <span>{{item.count}}</span>
               <button class="btn btn-sm border" @click="setCount(item,true)">+</button>
            </td>
            <td>{{item.name}}：{{item.size}}寸</td>
            <td>{{item.price*item.count}}元</td>
            <td>
              <button class="btn btn-warning" @click='delPord(index)'>删除</button>
            </td>
          </tr>
        </tbody>
      </table>
       <p class="mt-3">总价：<span style="color:red">{{totalPrice()}}</span>元</p>
       <button type="button" class="btn btn-danger btn-block" >提交</button>
    </div>
     <div class="col-sm-12 col-md-5 mt-5" v-else>
        <h2 class="col-sm-12 col-md-12 text-center">购物车为空</h2>   
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
     /* prods:[
         {name:"回锅肉",
          options:[{size:'大份',price:99},{size:'小份',price:59}],
          desc:'好吃的回锅肉'
          }, {name:"小炒肉",
          options:[{size:'大份',price:929},{size:'小份',price:49}],
          desc:'好吃的小炒肉'
          }, {name:"鱼香肉丝",
          options:[{size:'大份',price:499},{size:'小份',price:19}],
          desc:'好吃的鱼香肉丝'
          }, {name:"辣子鸡",
          options:[{size:'大份',price:559},{size:'小份',price:9.9}],
          desc:'好吃的辣子鸡'
          }, {name:"宫保鸡丁",
          options:[{size:'大份',price:949},{size:'小份',price:11.9}],
          desc:'好吃的宫保鸡丁'
          },
       ],*/
      shopProds:JSON.parse(localStorage.getItem("shopProds"))|| [] ,
    }
  },
  created() {
      /*  fetch('https://wd0532166098rifrpf.wilddogio.com/menu.json')
       .then(res=>{return res.json()})
       .then(data=>{this.prods=data}) */
       this.$axios.get('https://wd0532166098rifrpf.wilddogio.com/menu.json')
    /*    .then(res=>console.log(res)) */
       .then(res=>this.$store.commit('setMenuItems',res.data))
    
  },
  computed:{
    prods(){
     /*  return this.$store.state.Menu */
      return this.$store.getters.getMenus
    }
  },
  methods:{
    addProds(item,option){
      let shopProd = {
        name:item.name,
        size:option.size,
        price:option.price,
        count:1
      }
      if(this.shopProds.length>0){
          let res = this.shopProds.filter(currProd=>{
          return currProd.name === item.name && currProd.price === option.price
          })
          if(res!=null && res.length>0){
            res[0].count++
          }else{
            this.shopProds.push(shopProd)
          }
      }else{
        this.shopProds.push(shopProd)
      }
      localStorage.setItem('shopProds',JSON.stringify(this.shopProds))
    },
    setCount(item,status){ //加减计数
      if(status){
        item.count++
        localStorage.setItem('shopProds',JSON.stringify(this.shopProds))
      }else{
        if(item.count<=1){return}
        item.count--
        localStorage.setItem('shopProds',JSON.stringify(this.shopProds))
      }
    },
    //删除商品
    delPord(index){
       this.shopProds.splice(index, 1);
       localStorage.setItem('shopProds',JSON.stringify(this.shopProds))
    },
    /* 计算总价 */
       // 总金额
  totalPrice () {
      let sum = 0
      this.shopProds.forEach(curr => {
        sum += curr.price * curr.count
    })
      return sum.toFixed(2)
    },
    
  },
}
</script>

<style>
  h5{
    color: orangered;
  }
</style>
