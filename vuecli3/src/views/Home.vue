<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },//    组建守卫（先输出的是组建里面，后是全局的）
    // beforeRouteEnter(to,from,next){
    //   //在渲染该组件的对路由被 confirm 前调用
    //     //不！能！获取该组建实例
    //     //因为守卫执行前，组建实例还不能被创建
    //     next();
    //     console.log(1111);
    // }
};
</script>
