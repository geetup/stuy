<template>
    <div>
        <h1>显示msg/B{{$store.state.count}} </h1>
    </div>
</template>

<script>
    export default {
        name:'ComponentB',
      prop:['msg']
    }
</script>

<style scoped>

</style>