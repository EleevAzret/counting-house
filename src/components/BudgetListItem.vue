<template>
  <div class="budget-list__item" v-for="(item, prop) in list" :key="prop">
    <span class="budget-list__comment">{{ item.comment }}</span>
    <span class="budget-list__value">{{ item.value }}</span>
    <ElButton
    type="danger"
    :icon="Delete"
    plain circle
    @click="deleteItem(item.id)"
    ></ElButton>
  </div>
</template>

<script setup>
  import { Delete } from '@element-plus/icons-vue';
</script>

<script>
  export default {
    name: 'BudgetListItem',
    props: {
      list: {
        type: Object,
        default: () => ({}),
      },
    },
    methods: {
      deleteItem(id) {
        this.$emit('deleteItem', id);
      },
    },
  }
</script>

<style scoped>
.budget-list__item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
}

.budget-list__value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 10px;
}
</style>