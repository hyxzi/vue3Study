// import { createStore } from "vuex";
import {createStore} from './minVuex'

const store = createStore({
  state () {
    return {
      count: 666
    }
  },
  mutations: {
    add (state) {
      state.count++
    }
  }
})

export default store