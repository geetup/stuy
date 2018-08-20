<template>
    <div class="book">
        <swipe class="my-swipe">
        <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
        </swipe>
    </div>
</template>

<script>
    import { Swipe, SwipeItem } from 'vue-swipe';
    export default {

       components:{
           'swipe':Swipe,
           'swipe-item':SwipeItem
       }
    }
</script>

<style scoped>
    .my-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }

    .slide1 {
        background:url('/img/1.jpg')no-repeat center;//居中不平铺
        background-size:contain;
        color: #fff;
    }

    .slide2 {
        background:url('/img/2.jpg')no-repeat center;
        background-size:contain;
        color: #000;
    }

    .slide3 {
        background:url('/img/3.jpg')no-repeat center;
        background-size:contain;
        color: #fff;
    }
</style>