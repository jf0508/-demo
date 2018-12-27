<template>
<div class="row" id="Home">
  <div class="col-sm-12 text-center">
    <div class="background col-md-8 mx-auto">
      <h1>欢迎来到Pizza智能点餐系统</h1>
      <h2>这里有你需要的各种美味</h2>
    </div>
  </div>
</div>
 
</template>

<script>
export default {
  name:"Home"
}
</script>

<style>
#Home{
  background: url('../assets/pizzabg.jpg') no-repeat center center;
  background-size:100%; 
  height: 65vh;
  padding: 10%;
}
h1,h2{
  margin: 3%;
}
.background{
  height: 30vh;
  background: #eeeeee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
