<template>
  <div id="app">
    <div class="header">
      <img src="./images/logo.png" alt="money" class="logo">
      <h1>Counting House</h1>
    </div>
    <CountingList/>
    <TotalValue/>
    <BudgetList class="budget-list"/>
  </div>
</template>

<script>
import BudgetList from './components/BudgetList.vue';
import TotalValue from './components/TotalValue.vue';
import CountingList from './components/CountingList.vue';

export default {
  name: 'app',
  components: {
    BudgetList,
    TotalValue,
    CountingList,
  },
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
  margin-top: 20px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5a866f;
}

.logo {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
</style>
