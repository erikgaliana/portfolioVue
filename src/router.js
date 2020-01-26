import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import ProjectCard from './components/ProjectCard'

Vue.use(VueRouter)

const router = new VueRouter({

    mode : 'history',
    routes : [{
                path: '/',
                component : Home

                },
                {
                    path: '/project',
                    
                    component : ProjectCard
    
                    }
                    
            
            ]


})

export default router