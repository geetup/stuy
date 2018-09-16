<template>
    <div>
        <h1>电影详情</h1>
        {{msg}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: this.$route.params.movieId
            }
        }
    }
</script>

<style scoped>

</style>