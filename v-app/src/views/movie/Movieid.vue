<template>
    <div class="movie-movieid" v-if="show">
        <h3>名称：{{Movieid.title}}</h3>
        <img :src="Movieid.images.small" alt="">
        <p>id:{{Movieid.id}}</p>
        <p>简介：{{Movieid.summary}}</p>
    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        data(){
            return{
                Movieid:{},
                show:false
            }
        },
        mounted(){
                var movieId = this.$route.params.id;
                Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/'+movieId)
                    .then((res)=>{
                        console.log(res.data);
                        this.Movieid = res.data;
                        this.show = true;

                    })
        }
    }
</script>

<style scoped>

</style>