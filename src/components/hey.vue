<template>
  <div class="wrapper">
    <h2>我是 hey 组件</h2>
    <p>hey 拿到的 count 是：{{getNum}}</p>

    <h2>money 值是：{{$store.state.money}}</h2>
    
  </div>
</template>


<script>
export default {
  name: 'hey',
  computed: {
    getNum: function(){
      return this.$store.getters.getCount
    }
  }
}
</script>