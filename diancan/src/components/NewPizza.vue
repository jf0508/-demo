<template>
  <form>
    <h3 class="text-muted my-4">添加新品种</h3>
    <div class="form-group row">
      <label class="col-sm-2">品种</label>
      <div class="col-sm-11">
        <input
          type="text"
          class="form-control"
          v-model="newPizza.name"
        >
      </div>
    </div>

   <!--  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-1.5 col-form-label">品种</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
    </div>
  </div> -->

    <div class="form-group row">
      <label class="col-sm-2">描述</label>
      <div class="col-sm-11">
        <textarea
          class="form-control"
          row='5'
          v-model="newPizza.desc"
        ></textarea>
      </div>
    </div>

    <div class="form-group row">
      <div class="col-sm-11">
        <p><strong>选项一</strong></p>
        <label class="col-sm-2">尺寸</label>
        <input
          type="text"
          class="form-control"
          v-model="newPizza.size1"
        >
        <label class="col-sm-2">价格</label>
        <input
          type="text"
          class="form-control"
          v-model="newPizza.price1"
        >
      </div>
    </div>

    <div class="form-group row">
      <div class="col-sm-11">
        <p><strong>选项二</strong></p>
        <label class="col-sm-3">尺寸</label>
        <input
          type="text"
          class="form-control"
          v-model="newPizza.size2"
        >
        <label class="col-sm-3">价格</label>
        <input
          type="text"
          class="form-control"
          v-model="newPizza.price2"
        >
      </div>
    </div>

    <div class="form-group">
      <button
        type="button"
        class="btn btn-success btn-block col-sm-11"
        @click="addMenuitem"
      >添加</button>
    </div>

    </div>
  </form>
</template>
<script>
export default {
  data () {
    return {
      newPizza:{}
    }
  },
  methods:{
    addMenuitem(){
      console.log(this.newPizza)
     let data={
       name:this.newPizza.name,
       desc:this.newPizza.desc,
       options:[
         {
           size:this.newPizza.size1,
           price:this.newPizza.price1
         },{
           size:this.newPizza.size2,
           price:this.newPizza.price2
         }
      ]
     }
    /*  this.$axios.post('/menu.json',data)
      .then(res=>{
        this.$store.commit('addMenu',data)
      }) */
     fetch('https://wd0532166098rifrpf.wilddogio.com/menu.json',{
       method:'POST',
       headers:{
         'Content-type':'application/json'
       },
       body:JSON.stringify(data)
     })
      .then(res=>res.json())
      .then(res=>{
        this.$store.commit('addMenu',data)
      })
      .catch(err=>console.log(err))
    } 
  }
}
</script>
