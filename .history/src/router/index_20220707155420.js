// import {createRouter, createWebHashHistory, } from './grouter/index'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Login from '@page/login.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]

const router = createRouter({ history: createWebHashHistory(), routes })

export default router