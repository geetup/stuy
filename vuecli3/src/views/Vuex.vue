<template>
    <div>
        <h1>{{count}}</h1>
        <h1>{{msg}}</h1>
        <h1>{{len}}</h1>


        <!--<button @click="$store.commit++">+</button>-->
        <button @click="$store.commit('add',2)">+</button>
        <button  @click="$store.commit('sub')">-</button>
        <input type="text" v-model="str" >
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        data(){
            return{
                str:'123456789'
            }
        },
       // computed:{
       //     count(){
       //         return this.$store.state.count;
       //     }
       // }
        computed:{
            len(){
                return this.str.length;
            },
            ...mapState(['count','msg'])

        },
    }
</script>

<style scoped>

</style>