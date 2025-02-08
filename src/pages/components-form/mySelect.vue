<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'

const props = defineProps({
  option: {
    type: Object,
    default: () => {},
  },
})

const forAttr = reactive({
  ...props.option,
})

onMounted(() => {

})

function handleChange(key: any, value: string) {
  forAttr[key] = value
}
</script>

<template>
  <div class="item1">
    <div class="Stats-item-label">
      {{ forAttr.name }}:
    </div>
    <el-select :key="`mySelect_${option.id}`" v-model="forAttr.value" placeholder="Select" style="width: 100%">
      <el-option
        v-for="item1 in option.option"
        :key="item1.value"
        :label="item1.label"
        :value="item1.value"
        :disabled="item1.disabled ? item1.disabled : false"
        @change="handleChange(forAttr.key, $event)"
      />
    </el-select>
  </div>
</template>

<style scoped>
.item1 {
  text-align: left;
  padding: 10px;
  .Stats-item-label {
    padding-bottom: 10px;
  }
}
</style>
