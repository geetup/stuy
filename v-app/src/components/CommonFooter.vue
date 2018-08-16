<template>
        <ul class="footer" :style="{background:bgColor}">
            <li v-for="menu in menuList" @click="changeBg(menu)">
                <router-link :to="menu.path">{{menu.name}}</router-link>
            </li>
        </ul>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        props: ['menuList'],
        data() {
            return {}
        },
        methods: {
            changeBg(menu) {
                this.$store.dispatch('changeBg', menu);
            }
        },
        computed:mapState(['bgColor']),
    }
</script>
<style lang="scss">
    .footer {
        height: 1rem;
        width: 100%;
        background: rgb(33, 150, 243);
        color: #fff;
        position: fixed;
        bottom: 0;
        line-height: 1rem;
        display: flex;//将列的排列，变行
        li{
            flex-grow:1;
            text-align: center;
            a{
                color:#ccc;
                outline:none;
                &.router-link-active{
                    color: #fff;
                }
            }
        }
    }
</style>
