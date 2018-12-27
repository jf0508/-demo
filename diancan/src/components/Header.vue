<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="py-2" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
        </a>
        <a href="/" class="navbar-brand">Pizza点餐系统</a>
        <ul class="navbar-nav">
          <li><router-Link  :to='homeLink' class="nav-link">首页</router-Link></li>
          <li><a @click="$router.push('/menu')" class="nav-link">菜单</a></li>
          <li><a @click="$router.push('/admin')"  class="nav-link">管理</a></li>
          <li><a @click="$router.push('/about')" class="nav-link">关于我们</a></li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li><router-Link tag='div' to='/login' v-show='isLogin' class="nav-link">{{username}}</router-Link></li>
          <li><router-Link :to="{name:'Login'}" v-show='isLogin' class="nav-link">退出</router-Link></li>
          <li><router-Link tag='div' to='/login' v-show='!isLogin' class="nav-link">登录</router-Link></li>
          <li><router-Link :to="{name:'Register'}" v-show='!isLogin' class="nav-link">注册</router-Link></li>
        </ul>
        
    </nav>
  </header>
</template>

<script>
export default {
  data(){
    return{
      homeLink:'/',
      username:JSON.parse(localStorage.getItem("user")) || this.$store.getters.getUsers
    }
  },
  computed:{
    users(){
      return this.$store.getters.getUsers
    },
    isLogin(){
      return this.$store.getters.isLoginState
    }
  },
  methods:{
  }
}
</script>

<style>
  .nav-link{
    cursor: pointer;
  }
</style>
