<template>
  <div id="app">
    <TotalValue :total="totalBalance"/>
    <BudgetList :list="list"/>
  </div>
</template>

<script>
import BudgetList from './components/BudgetList.vue';
import TotalValue from './components/TotalValue.vue';

export default {
  name: 'app',
  components: {
    BudgetList,
    TotalValue,
  },
  data: () => ({
    list: {
      1: {
        type: 'INCOME',
        value: 200,
        comment: 'Some comment',
        id: 1,
      },
      2: {
        type: 'EXPENSES',
        value: -50,
        comment: 'Some expenses comment',
        id: 2,
      },
    },
  }),
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce((acc, item) => acc + item.value, 0)
    }
  }
}
</script>

<style>
* {
 box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
