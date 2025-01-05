<script lang="ts" setup>
import type { PropType } from 'vue'
import { onMounted, reactive, ref } from 'vue'

const props = defineProps({
  formName: {
    type: Array as PropType<string[]>,
    default: () => ['width', 'height'],
  },
})

const forAttr = reactive<Record<string, string>>({
  width: '',
  height: '',
})

onMounted(() => {
  for (const item of props.formName) {
    forAttr[item] = ''
  }
})

function handleChange(key: string, value: string) {
  console.log(key, value)

  forAttr[key] = value
}
</script>

<template>
  <div class="item1">
    <div v-for="item of formName" :key="item" class="Stats-item">
      <div class="Stats-item-label">
        {{ item }}：
      </div>
      <el-input
        :key="`nuberFromItem_${item}`"
        :value="forAttr[item]"
        @input="handleChange(item, $event)"
      />
    </div>
  </div>
</template>

<style scoped>
.item1 {
  padding: 10px;
  .Stats-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
    .Stats-item-label {
      width: 100px;
    }
  }
}
</style>
