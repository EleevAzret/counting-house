<template>
  <div class="app">
    
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => ({
    list: {
      1: {
        type: 'INCOME',
        value: 100,
        comment: 'Some income comment',
        id: 1,
      },
      2: {
        type: 'EXPENSES',
        value: -200,
        comment: 'Some expenses comment',
        id: 2,
      },
    }
  }),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
