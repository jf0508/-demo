<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
        <router-view></router-view>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name='OrderingGuide'></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name='History'></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name='Delivery'></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  components:{
    appHeader:Header
  }
}
</script>

<style>

</style>
