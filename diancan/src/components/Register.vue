<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">

        <div class="card col-5 mx-auto mt-4 mb-4">
          <div class="card-body ">
            <img class="mx-auto d-block col-10" src="../assets/login.jpg" >
            <form @submit.prevent="onSubmit">
              <div class="form-group">
                <label for="email">邮箱</label>
                <input type="email" class="form-control mb-1" v-model="email">
              </div>
               <div class="form-group flex">
                <label for="password">密码</label>
                <input type="password" class="form-control mb-1" v-model="password">
              </div>
              <div class="form-group">
                <label for="confirm-password">确认密码</label>
                <input type="confirm-password" class="form-control mb-1" v-model="confirmPassword">
              </div>
              <button class="btn btn-block btn-success mt-3" type="submit">注册</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data(){
    return{
      email:'',
      password:'',
      confirmPassword:''
    }
  },
  methods:{
    onSubmit(){
        if(this.password === this.confirmPassword){
        const formData={
          email:this.email,
          password:this.password,
          confirmPassword:this.confirmPassword
        }
        this.$axios.post('/users.json',formData).then(res=>this.$router.push({name:'Login'}))
      }else{
        alert('两次输入的密码不一致')
      }
    },
  }
}
</script>

<style>
 
</style>
