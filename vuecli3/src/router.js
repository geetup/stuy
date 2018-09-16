import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import My from'./views/My.vue';
import Test1 from './views/Test1.vue';
import Test2 from './views/Test2.vue';
import Error from './views/Error.vue';
import MovieList from'./views/MovieList.vue';
import Movie from './views/Movie.vue';
import ComponentA from './views/ComponentA.vue';
import Vuex from './views/Vuex.vue';

Vue.use(Router);

let router =new Router ({

        mode: 'history',//history，是一个历史管理，正常的是hash，是模拟一个完整的url，当页面改变是，不会改变路径
        base: process.env.BASE_URL,
        routes: [
            {
                path: '/',
                name: 'home',
                component: Home,
            },
            {
                path: '/home',
                redirect: '/'
            },
            {
                path:'/redirectparam/:Home(\\d+)/:HomeNew'  ,
                redirect :'/my/test2/:Home(\\d+)/:HomeNew'
            },
            {
                path: '/about',
                name: 'about',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
                alias:'/lkw',
                //路由独享钩子，进入这个路由，可以进行判断
              //  beforeEach:(to, from, next)=>{
                    //...

                    // if(form.name=='my'){
                    //     next(false);
                    // }else{
                    //     next(true);
                    // }
               // }
            },
            {
                path: '/my',
                name: 'my',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component:My, /* 下面是my的两个组件 */
                children:[
                    {
                        path:'test1',
                        name:'test1',
                        component:Test1
                    },
                    {
                        path:'test2/:name/:age',
                        component:Test2
                    },
                    {
                        path:'*',
                        component:Error
                    },
                    {
                        path:'/MovieList',
                        component:MovieList
                    },
                    {
                        path:'/Movie/:MovieListId',
                        component:Movie
                    },
                    {
                        path:'/vuex',
                        component:Vuex
                    },
                    {
                        path:'/ComponentA',
                        component:ComponentA
                    }
                ]
            },
        ],

    });
//它是一个全局的路由钩子，任何路由的跳转都需要进到这里
router.beforeEach(( to, from, next )=>{ //路由钩子（！！！跳转之前执行）
    //...
    console.log( from ); //表示:跳转之前的，前一个页面
    console.log( to );//表示：跳转到哪个页面
            // if(from.name=='my'){
            //     next(false);
            // }else {
            //     next(true)
            // }
    next();//代表准不准许接着往下走（往下跑程序），有就是准许你往下跑，没有即停止
});
// router.beforeEach(( to, from )=> { //路由钩子（！！！跳转之后执行）
//     //...
//    console.log(1111);
// });
export default router;










