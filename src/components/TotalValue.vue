<template>
  <div class="total-value">
    Balance: <span class="total-value__num">{{ total }}</span> 
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
</style>