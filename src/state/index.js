import Vue from 'vue'
import Vuex from 'vuex'

import {INC_AGE} from './mutations_type'
import {MONEY_ADD} from './mutations_type'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 99,
    age: 18,
    money: 1000,
    say: 'Hello' 
  },
  mutations: {
    [MONEY_ADD](state, payload){
      state.money += payload.num
    },
    [INC_AGE](state, payload){
      state.age += payload.num
    },
    inc: function(state, payload){
      state.count += payload.num 
    },
    dec: function(state, payload){
      state.count -= payload 
    }
  },
  actions: {
    incAction: function(context, payload){
      context.commit('inc', payload.num)
    },
    decAction: function(context, payload){
      context.commit('dec', payload)
    }
  },
  getters: {
    getCount: function(state){
      return state.count
    }
  }
})