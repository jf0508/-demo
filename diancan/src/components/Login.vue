<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">

        <div class="card col-5 mx-auto mt-4 mb-4">
          <div class="card-body ">
            <img class="mx-auto d-block col-10" src="../assets/login.jpg" >
            <form @submit.prevent="onSubmit">
              <div class="form-group">
                <label for="email">账号</label>
                <input type="email" class="form-control mb-1" v-model="email">
              </div>
               <div class="form-group flex">
                <label for="password">密码</label>
                <input type="password" class="form-control mb-1" v-model="password">
              </div>
              <button class="btn btn-block btn-success mt-3" type="submit">登录</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return{
      email:'',
      password:'',
      confirmPassword:''
    }
  },
  //组件守卫
  beforeRouteEnter (to, from, next) {
    next(vm=>vm.dispatch('setUser',null))
  },
  methods:{
    onSubmit(){
      this.$axios.get('/users.json').then(res=>{
          const users = [];
          for (let key in res.data){
            const user = res.data[key]
            users.push(user)
          }
          let result = users.filter((user)=>{
            return user.email == this.email && user.password == this.password;
          })
          if(result !=null && result.length >0){
            localStorage.setItem('user',JSON.stringify(result[0].email))
            
            this.$store.dispatch('setUser',result[0].email)
            this.$router.push('home') 
          }else{
            alert('账号或者密码错误')
            this.$store.dispatch('setUser',null)
          }
          console.log(result)
        })
    },
  }
}
</script>

<style>
 
</style>

