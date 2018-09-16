import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/movie/Movie';
import Book from './views/book/Book';
import Photo from './views/photo/Photo';
import Music from './views/music/Music';
import Movieid from './views/movie/Movieid';
import photobig from './views/photo/photobig';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Movie',
      component: Movie,
    },
    {
        path: '/Book',
        component: Book,
     },
     {
         path: '/Photo',
         component: Photo,
      },
      {
          path: '/Music',
          component: Music,
      },
      {
          path: '/Movieid/:id',
          component: Movieid,
      },
      {
          path:'/photobig/:index',
          component:photobig
      }

  ],
});
