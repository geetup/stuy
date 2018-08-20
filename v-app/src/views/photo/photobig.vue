<template>
   <router-link to="/photo">
        <v-touch class="photo-detail" :style="{'background-image':'url('+photoList[index].src+')'}"
              @swipeleft="left"   @swiperight="right"  >
        </v-touch>
   </router-link>
</template>
<script>
    import { mapState } from 'vuex';
    export default {
        data(){
            return{
                index:this.$route.params.index
            }
        },
        methods:{
            left(){
                if(this.index == 24){
                    this.index = 0
                }else{
                    this.index++;
                }


            },
            right(){
                if(this.index == 0){
                    this.index = 24
                }else {
                    this.index--;

                }
            }
        },
        computed:mapState(['photoList'])
    }
</script>

<style  lang="scss">
    .photo-detail{
        background-repeat: no-repeat;
        background-size: contain;
        background-color: #000;
        background-position: center;
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;


    }

</style>