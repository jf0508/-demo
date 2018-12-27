<template>
  <div>
    <div class="row mb-5">
      <div class="col-4">
          <!-- 导航 -->
          <div class="list-group">
            <router-link tag='li' class="nav-link" :to="{name:'History'}">
              <a class="list-group-item list-group-item-action">历史订单</a>
            </router-link>
            <router-link tag='li' class="nav-link" :to="{name:'Contact'}">
              <a class="list-group-item list-group-item-action">联系我们</a>
            </router-link>
            <router-link tag='li' class="nav-link" :to="{name:'OrderingGuide'}">
              <a class="list-group-item list-group-item-action">点餐文档</a>
            </router-link>
            <router-link tag='li' class="nav-link" :to="{name:'Delivery'}">
              <a class="list-group-item list-group-item-action">快递信息</a>
            </router-link>

          </div>
      </div>
      <div class="col-8">
          <!-- 导航内容 -->
          <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
