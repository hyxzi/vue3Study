<template>
    <!-- <h1>关于我们</h1>
    <h3>{{double}}</h3>
    <button @click="asyncAdd">{{count}}</button> -->
    <Heading :level="3">关于我们</Heading>
</template>
<script setup>
import Heading from '../components/Heading.jsx'
// import {useStore} from 'vuex'
import {useStore} from '../store/minVuex'
import {computed} from 'vue'
components: {
    Heading
}
let store = useStore()
let count = computed(() => store.state.count)
let double = computed(() => store.state.count * 2)
function add () {
    store.commit('add')
}
function asyncAdd() {
    store.dispatch('asyncAdd')
}
</script>