<template>
  <el-card class="form-card" >
    <el-form :model="form" :rules="rules" ref="addCount">
      <div class="form-card__count">
        <el-form-item label="Type" prop="type">
          <el-select v-model="form.type" placeholder="Choose your type">
            <el-option label="Income" value="INCOME"/>
            <el-option label="Expenses" value="EXPENSES"/>
          </el-select>
        </el-form-item>
        <el-form-item label="Value" prop="value">
          <el-input-number :min="0" v-model.number="form.value"></el-input-number>
        </el-form-item>
      </div>
      <el-form-item label="Comment" prop="comment">
        <el-input v-model="form.comment"></el-input>
      </el-form-item>
      <el-button
        type="success"
        :icon="Plus"
        circle
        plain
        size="large"
        @click="onSubmit"
      ></el-button>
    </el-form>
  </el-card>
</template>

<script setup>
import { Plus } from '@element-plus/icons-vue';
</script>

<script>
import { mapActions } from 'vuex';

export default {
  name: "CountingList",
  data: () => ({
    form: {
      type: "INCOME",
      comment: "",
      value: 0,
    },
    rules: {
      type: [{ required: true, message: 'Please choose type', trigger: 'blur' }],
      comment: [{ required: true, message: 'Please enter your comment', trigger: 'blur' }],
      value: [
        { required: true, message: 'Please enter your number', trigger: 'blur' },
        { type: 'number', min: 1, message: 'Add correct number' },
      ],
    }
  }),
  methods: {
    ...mapActions('countings', ['addNewCount']),
    onSubmit() {
      this.$refs.addCount.validate((valid) => {
        if (valid) {
          if (this.form.type === 'EXPENSES') this.form.value = 0 - this.form.value;
          this.addNewCount({...this.form});
          this.$refs.addCount.resetFields();
        }
      })
    },
  }
}
</script>

<style>
.form-card {
  max-width: 500px;
  margin: 20px auto 20px auto;
}

.form-card__count {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 500px) {
  .form-card__count {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>