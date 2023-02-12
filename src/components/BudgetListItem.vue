<template>
  <div 
    class="budget-list__item"
    v-for="(item, prop) in sortedList"
    :key="prop"
  >
    <span class="budget-list__comment">{{ item.comment }}</span>
    <el-icon>
      <Top v-if="typeOfCount(item.type) === 'success'"/>
      <Bottom v-if="typeOfCount(item.type) === 'danger'"/>
    </el-icon>
    <span class="budget-list__value" :class="typeOfCount(item.type)">{{ item.value }}</span>
    <el-button
      type="danger"
      :icon="Delete"
      plain circle
      @click="deleteCount(item.id)"
    ></el-button>
  </div>
</template>

<script setup>
  import { Bottom, Top, Delete } from '@element-plus/icons-vue';
</script>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: "BudgetListItem",
    props: {
      typeOfItem: {
        type: String,
        default: 'SHOW ALL',
      },
    },
    computed: {
      sortedList() {
        if(this.typeOfItem === 'SHOW ALL') return this.getCountings
        return Object.entries(this.getCountings)
                // eslint-disable-next-line
                .filter(([id, value]) => {
                  return value.type === this.typeOfItem;
                })
                .reduce((acc, [id, value]) => {
                  acc[id] = value;
                  return acc;
                }, {});
      },
      ...mapGetters('countings', ['getCountings']),
    },
    methods: {
      ...mapActions('countings', ['deleteCount']),
      typeOfCount(type) {
        return type === "INCOME" ? "success" : "danger";
      },
    },
    components: { Bottom }
}
</script>

<style scoped>
.budget-list__item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
}
.danger {
  color: #F56C6C;
}

.success {
  color: #67C23A;
}
.budget-list__value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 10px;
}
</style>