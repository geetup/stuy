<template>
    <div class="movie-movieid">
        <h3>名称：</h3>
        <p>id:</p>
        <p>简介：</p>
    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        data(){
            return{
                Movieid:{}
            }
        },
        mounted(){
            var MovieId = this.$route.params.id;
            Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/'+movieId)
                .then(( res)=>{
                this.Movieid = res.data;
            })
        }
    }
</script>

<style scoped>

</style>