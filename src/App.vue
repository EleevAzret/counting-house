<template>
  <div id="app">
    <div class="header">
      <img src="logo.png" alt="money" class="logo">
      <h1>Counting House</h1>
    </div>
    <CountingList @addCount="addCount"/>
    <TotalValue :total="totalBalance"/>
    <BudgetList :list="list" @deleteItem="onDelete" class="budget-list"/>
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
  },
  methods: {
    onDelete(id) {
      delete this.list[id];
    },
    addCount(data) {
      const newObj = {
        ...data,
        id: String(Math.random())
      };

      this.list[newObj.id] = newObj;
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
