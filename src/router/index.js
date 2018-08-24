import Vue from 'vue'
import VueRouter from 'vue-router'
import TriviaApp from '../pages/TriviaApp.vue'
import ChuckApp from '../pages/ChuckApp.vue'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component: TriviaApp,
        name: 'trivia'
    },
    {
        path:'/chuck',
        component: ChuckApp,
        name: 'chuck'
    }
    
]

export const router = new VueRouter({
    routes
})

export default router