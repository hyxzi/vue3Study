import { inject, reactive } from "vue";
const STIRE_KEY = '__store__'
function useStore() {
  return inject(STORE_KEY)
}
function createStore(options) {
  return new Store(options)
}
class Store {
  constructor () {
    this._state = reactive({
      data: options.state()
    })
    this._mutations = options.mutations
  }
}
export {createStore, useStore}