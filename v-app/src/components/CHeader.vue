<template>
   <div class="header" :style="{background:bgColor}">
       <span class="header-home">首页</span>
       <h1 class="header-title">{{title}}</h1>
   </div>
</template>
<script>
    import{ mapState } from 'vuex';

    export default {
        computed: mapState(['bgColor', 'title']),
    }
</script>

<style lang="scss">
.header{
    height: 1rem;
    width: 100%;
    background:rgb(33, 150, 243);
    color:#fff;
    position: fixed;
    top:0;
    line-height: 1rem;
    &-home{
        font-size:16px;
    }
    &-title{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }


}
</style>