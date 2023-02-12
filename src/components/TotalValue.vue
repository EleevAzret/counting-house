<template>
  <div class="total-value">
    Balance: <span class="total-value__num" :class="chooseTheme">{{ totalBalance }}</span> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TotalValue',
  computed: {
    chooseTheme() {
      return this.totalBalance > 0 ? 'success' : this.totalBalance < 0 ? 'danger' : 'default';
    },
    ...mapGetters('countings', ['totalBalance']),
  }
}
</script>

<style scoped>
.total-value {
  padding: 10px;
  font-size: 26px;
}

.total-value__num {
  font-weight: bold;
}

.danger {
  color: #F56C6C;
}

.success {
  color: #67C23A;
}

.default {
  color: #000;
}
</style>