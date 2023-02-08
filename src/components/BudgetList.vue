<template>
  <div class="budget-list">
    <ElCard :header="title" class="box-card">
      <template v-if="isFilled">
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
      <template v-else>
        <ElAlert
          :title="emptyTitle"
          type="info"
          :description="emptyDescription"
          show-icon
          :closable="false"
        />
      </template>
    </ElCard>
  </div>
</template>

<script setup>
  import { Delete } from '@element-plus/icons-vue';
</script>

<script>
export default {
  name: 'BudgetList',
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    title: 'Budget List',
    emptyTitle: 'No income or expensis',
    emptyDescription: 'Create new posts below',
  }),
  computed: {
    isFilled() {
      return Boolean(Object.keys(this.list).length);
    }
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    }
  }
}
</script>

<style lang="css" scoped>
.budget-list {
  max-width: 500px;
  margin: auto;
}

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