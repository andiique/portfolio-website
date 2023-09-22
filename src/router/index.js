import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home'
// import About from '../views/newAbout'
// import OldAbout from '../views/About'
// import Projects from '../views/Projects'
// import Contact from '../views/Contact'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     component: About
    // },
    // {
    //     path: '/projects',
    //     name: 'Projects',
    //     component: Projects
    // },
    // {
    //     path: '/contact',
    //     name: 'Contact',
    //     component: Contact
    // },
    // {
    //     path: '/oldabout',
    //     name: 'Old About',
    //     component: OldAbout
    // },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router