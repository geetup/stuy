<template>
    <div class="movie">
 <ul>
     <li v-for="movie in movieList">
         <div class="movie-img">
             <img :src="movie.images.small" alt="">
         </div>
         <div class="movie-desc">
             <h3>{{movie.title}}</h3>
             <p>观众评分：<span>{{movie.rating.avgage}}</span></p>
             主演：<span v-for="actor in movie.casts">{{actor.name}}</span>
         </div>
     </li>
 </ul>
    </div>
</template>

<script>
    import Axios from 'axios';
    export default{
        data(){
            return{
                movieList:[]
            }
        },
        created(){
            //https://www.cnblogs.com/trackingmore/p/7156877.html
            //https://developers.douban.com/wiki/?title=movie_v2
            Axios.get('/movie.json')
                .then((res)=>{
                    this.movieList = res.data.subjects;
                    console.log(this.movieList);
                });
        }
    }
</script>

<style lang="scss">

    .movie li {
        display: flex;
        padding: 10px;
        .movie-img {
            flex-grow: 1;
            width: 0;
        }
        .movie-desc {
            flex-grow: 3;
            width: 0;
            margin-left: 20px;
            .aver {
                color: orange;
            }
        }
    }
</style>