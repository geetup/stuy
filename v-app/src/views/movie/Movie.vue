<template>
    <div class="movie">
 <ul>
     <movieList v-for="movie in movieList " :movie="movie" @click.native="Movieid"></movieList>
 </ul>
        <div class="loading" v-show="isShow">
            <img src="../../assets/img/loading.gif" alt="">
        </div>
        <div v-show="isEnd">
            敬请期待！
        </div>
    </div>
</template>

<script>
    import Axios from 'axios';
    import MovieList from '@/views/movie/MovieList';
    export default {
        data() {
            return {
                movieList: [],
                isShow: false,
                isEnd:false
            }
        },
        created() {
            //https://www.cnblogs.com/trackingmore/p/7156877.html
            //https://developers.douban.com/wiki/?title=movie_v2
            this.getData();
            // Axios.get('/movie.json')
            //     .then((res) => {
            //         this.movieList = res.data.subjects;
            //         console.log(this.movieList);
            //     });
            window.onscroll = () => {
                var scrollTop = document.documentElement.scrollTop;
                var scrollHeight = document.documentElement.scrollHeight;
                var clientHeight = document.documentElement.clientHeight;
                if (scrollTop + clientHeight == scrollHeight && !this.isEnd) {
                    this.isShow = true;
                    this.getData();
                }
            }
        },
        methods: {
            getData()
            {
                Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?start=' + this.movieList.length + '&count=5')
                    .then((res) => {
                        this.movieList = [...this.movieList, ...res.data.subjects];
                        this.isShow = false;
                        if (res.data.subjects.length < 5) {
                            this.isEnd = true;
                        }
                    });

            } ,
            getMovieid(movie){
                this.$router.push('/Movieid/'+movie.id);
            }
        },
        components:{
            MovieList
        }
    }
</script>
<style lang="scss" >
    .loading{
        text-align: center ;
    }
</style>