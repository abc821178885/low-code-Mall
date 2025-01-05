<script setup>
import { defineProps, onMounted, reactive, ref, watch } from 'vue'

const { toolsList } = defineProps({
  toolsList: {
    type: Array,
    default: [],
  },
})

const test = ref()

watch(
  test,
  () => {
    console.log('test:', test)
  },
  { deep: true },
)

function updateVal(res) {
  test.value = res
}

onMounted(() => {
  console.log('toolsList:', toolsList)
})
</script>

<template>
  <div class="render-tools">
    <component
      :is="toolItem.formType"
      v-for="toolItem in toolsList"
      :key="toolItem.formKey"
      @change="updateVal"
    />
  </div>
</template>

<style lang="less" scoped>
</style>
