import Vue from 'vue';
import Router from 'vue-router';


// import Home from './views/Home.vue';
const Home = () => import("./views/home/Home.vue");
const page_1 = () => import("./views/page_1/Page_1.vue");
const page_2 = () => import("./views/page_2/Page_2.vue");

const page_2_1 = () => import("./views/page_2_1/Page_2_1.vue");
const page_2_2 = () => import("./views/page_2_2/Page_2_2.vue");

const isComponent = () => import('./views/cmsss/isComponent.vue');

Vue.use(Router);


export default new Router({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/page_1',
            component: page_1,
        },
        {
            path: '/page_2',
            component: page_2,
            children:[
                {
                    path: 'page_2_1',
                    component: page_2_1,
                },
                {
                    path: 'page_2_2',
                    component: page_2_2,
                },
                {
                    path: '/page_2', redirect: '/page_2/page_2_1',
                },
            ],
        },
        {
            path: '/isComponent',
            component: isComponent,
        },
        {
            path: '*', redirect: '/home',
        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        // },
    ],
});
