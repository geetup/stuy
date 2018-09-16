<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/my">My</router-link> |
      <router-link to="/home">重定向</router-link> |
      <router-link to="/lkw">alias别名</router-link> |
      <router-link to="/MovieList">电影列表</router-link> |
      <router-link to="/redirectparam/6/list">redirectparam</router-link> |
      <router-link to="/vuex">VueX</router-link> |
    </div>
    <transition name="fade">//名字
      <router-view/>
    </transition>
  </div>
</template>
<style lang="scss">
 // 路由过度效果（效果）
  .fade-enter{//是进来开始-过程-结束
    opacity: 0;//透明度开始为0
  }

  .fade-enter-active{
    transition:opacity 1s linear;//是透明度 1 秒的过渡时间
  }

  .fade-enter-to{
    opacity: 1;//透明度的为1，就是没有啦
  }
  .fade-leave{//退出的开始-过程-结束
    transform: translate(0%);//位移
  }
  .fade-leave-active{//在一秒内移除
    transition:transform 1s linear;
  }
  .fade-leave-to{ //是完全移除
    transform: translate(100%);

  }
//展示两种效果，所以有一些不协调，
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
