<template>
   <div>
       <span>你好  终于完成啦！</span>
       <router-link :to="{name:'test1',params:{name:'lisan',age:30}}"> 子路由1 </router-link>
       <router-link to="/my/test2/zhangsan/18"> 子路由2 </router-link>
       <router-view/>
   </div>
</template>

<script>
    import HelloWorld from '@/components/HelloWorld.vue';
    export default {
        name: "my",
        component:{
           HelloWorld,
        }
    }
</script>

<style scoped>


</style>