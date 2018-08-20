<template>
     <div class="photo">
         <!--to 是指向的指定的路由-->
         <router-link  v-for="(p,index) in photoList" :to="'/photobig/'+index">
             <img :src="p.src">
         </router-link>
     </div>
</template>
<script>
    import Axios from 'axios';
    export default {
        data() {
            return {
                photoList: []
            }
        },
        created() {
            Axios.get('data/photodata.json')
                .then((res) => {
                 this.photoList = res.data.photoData;
                 this.$store.dispatch('setPhoto',this.photoList)
            })

        }
    }
</script>

<style scoped>
 .photo img{
     width: 50%;
     /*box-sizing: border-box;*/
     /*border-bottom: 4px solid #000;*/
     /*border-right: 4px solid #000;*/
 }
</style>