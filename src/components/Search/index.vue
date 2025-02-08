<script lang="ts" setup>
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'

interface RuleForm {
  name: string
  delivery: boolean
  resource: string
}

const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: 'Hello',
  delivery: false,
  resource: '',
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
})

async function submitForm(formEl: FormInstance | undefined) {
  console.log(formEl)

  // if (!formEl)
  //   return
  // await formEl.validate((valid, fields) => {
  //   if (valid) {
  //     console.log('submit!')
  //   }
  //   else {
  //     console.log('error submit!', fields)
  //   }
  // })
}

function resetForm(formEl: FormInstance | undefined) {
  if (!formEl)
    return
  formEl.resetFields()
}
</script>

<template>
  <div class="search-class">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="auto"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
      :inline="true"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="开关" prop="delivery">
        <el-switch v-model="ruleForm.delivery" />
      </el-form-item>
      <el-form-item label="性别" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio value="男">
            男
          </el-radio>
          <el-radio value="女">
            女
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          提交
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">
          重置
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.search-class {
  border: 1px solid #ebeef5;
  padding: 20px;
  width: 500px;
  height: auto;
}
</style>
