<template>
    <div class="movies">
        <ul>
            <h1>西红柿专场</h1>
              <li v-for="m in movie">
                  <router-link :to="'/Movie/'+m.id">
                  {{m.name}},{{m.avg}}
                  </router-link>
              </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                movie:[
                    {id:1,name:'西红柿首富',avg:8.7},
                    {id:2,name:'西红柿首富2',avg:8.6},
                    {id:3,name:'西红柿首富3',avg:8.5},
                    {id:4,name:'西红柿首富4',avg:8.4},
                    {id:5,name:'西红柿首富5',avg:8.3},
                    {id:6,name:'西红柿首富6',avg:8.2},
                    {id:7,name:'西红柿首富7',avg:8.1},
                    {id:8,name:'西红柿首富8',avg:'8.0'},
                    {id:9,name:'西红柿首富9',avg:7.7},
                ]
            }
        }
    }
</script>

<style scoped>

</style>