<template>
  <div class="total-value">
    Balance: <span class="total-value__num" :class="chooseTheme">{{ total }}</span> 
  </div>
</template>

<script>
export default {
  name: 'TotalValue',
  props: {
    total: {
      type: Number,
      default: 0,
    }
  },
  computed: {
    chooseTheme() {
      return this.total > 0 ? 'success' : this.total < 0 ? 'danger' : 'default';
    },
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