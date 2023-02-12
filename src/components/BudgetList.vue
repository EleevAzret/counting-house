<template>
  <div class="budget-list">
    <el-card :header="title" class="box-card">
      <div>
        <el-radio-group @change="onRadioChange" v-model="radio" size="large" ref="radio">
          <el-radio-button label="Income" />
          <el-radio-button label="Expenses" />
          <el-radio-button label="Show All" />
        </el-radio-group>
      </div>
      <template v-if="isFilled">
        <BudgetListItem :typeOfItem="typeOfItem" @deleteItem="deleteItem"/>
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
import { mapGetters } from 'vuex';

export default {
  components: { 
    BudgetListItem
  },
  name: 'BudgetList',
  data: () => ({
    title: 'Budget List',
    emptyTitle: 'No income or expensis',
    emptyDescription: 'Create new posts below',
    radio: 'Show All',
    typeOfItem: 'SHOW ALL',
  }),
  computed: {
    isFilled() {
      return Boolean(Object.keys(this.getCountings).length);
    },
    ...mapGetters('countings', ['getCountings']),
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
    onRadioChange(e) {
      this.typeOfItem = String(e).toUpperCase();
    },
  }
}
</script>

<style lang="css" scoped>
.budget-list {
  max-width: 500px;
  margin: auto;
}
</style>