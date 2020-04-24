<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    HelloWorld 收到的是：count: {{count}}---age: {{age}}---money: {{money}}
    <br>
    接受到的 say 是：{{getSay}}
    <br>
    <p>mapMutations 的使用方法:</p>
    <button @click="inc({num: 100})">mapInc</button><br>

    INC_AGE 的使用：
    <button @click="INC_AGE({num: 2})">INC_AGE</button><br>
    MONEY_ADD 的使用：
    <button @click="MONEY_ADD({num: 1000})">MONEY_ADD</button><br>

    mutations 方法: <br>
    <button @click="plus">plus</button>
    <button @click="minus">minus</button>

    <p>actions 方法</p>
    <button @click="plusAct">plusAct</button>

    <h2>age 是：{{$store.state.age}}</h2>

  </div>
</template>

<script>
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';
// import { INC_AGE } from '../state/index';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    //yyy(){
    //  this.$store.commit('INC_AGE', {num: 2})
    //},
    plus: function(){
      this.$store.commit('inc', {num: 20})
    },
    minus: function(){
      this.$store.commit('dec', {num: 20})
    },
    plusAct: function(){
      this.$store.dispatch('incAction', {num: 20})
    },
    ...mapMutations(['inc', 'INC_AGE', 'MONEY_ADD'])
  },
  computed: {
    ...mapState(['count', 'age', 'money']),
    getSay: function(){
      return this.$store.state.say
    }
    //getNum: function(){
    //  return this.$store.getters.getCount
    //}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
