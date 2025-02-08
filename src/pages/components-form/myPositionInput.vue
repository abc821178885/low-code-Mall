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
    <el-input
      :key="`myInput_${option.id}`"
      v-model="forAttr.value.x"
      class="Stats-item-label"
      style="width: 100%"
      @change="handleChange(forAttr.key, $event)"
    />
    <el-input
      :key="`myInput_${option.id}`"
      v-model="forAttr.value.y"
      style="width: 100%"
      @change="handleChange(forAttr.key, $event)"
    />
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
