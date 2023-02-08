<template>
  <div class="budget-list">
    <el-card :header="title" class="box-card">
      <template v-if="isFilled">
        <BudgetListItem :list="list" @deleteItem="deleteItem"/>
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
    </el-card>
  </div>
</template>

<script>
import BudgetListItem from './BudgetListItem.vue';

export default {
  components: { 
    BudgetListItem
  },
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
</style>