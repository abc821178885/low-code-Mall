<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { generateRandomString } from '~/util/Random-util'
import { RenderConfigList } from './config'
import MyColorPicker from './myColorPicker.vue'
import MyInput from './myInput.vue'
import MyInputNumber from './myInputNumber.vue'
import MyPositionInput from './myPositionInput.vue'
import MySelect from './mySelect.vue'
import MySwitch from './mySwitch.vue'

const props = defineProps({
  componentArgument: {
    type: Array as any,
    default: () => [],
  },
})

const forAttr = ref<any>([])
// const conformity = ref<any>({
//   formName: [],
//   props: {

//   },
// })

onMounted(() => {
//   console.log(props.componentArgument)
  //   props.componentArgument.forEach((item: any) => {
  //     console.log(item)

  //     conformity.value.formName.push(...item.formName)
  //     conformity.value.props = Object.assign({}, conformity.value.props, item.props)
  //   })

  //   console.log(conformity.value)

  forAttr.value = RenderConfigList.filter(item =>
    props.componentArgument.formName.includes(item.key),
  )

  forAttr.value.forEach((item: any) => {
    item.id = generateRandomString()
  })

  forAttr.value.forEach((item: any) => {
    item.id = generateRandomString()
    const formItem = props.componentArgument.formName.find((item1: any) => item1.key === item.key)
    if (formItem && props.componentArgument.props[formItem.key]) {
      item.value = props.componentArgument.props[formItem.key]
    }
    else {
      item.value = item.default
    }
  })
})
</script>

<template>
  <div v-for="item of forAttr" :key="item">
    <MyInput v-if="item.type === 'input'" :option="item" />
    <MyInputNumber v-else-if="item.type === 'inputNumber'" :option="item" />
    <MySwitch v-else-if="item.type === 'switch'" :option="item" />
    <MyColorPicker v-else-if="item.type === 'ColorPicker'" :option="item" />
    <MySelect v-else-if="item.type === 'select'" :option="item" />
    <MyPositionInput v-else-if="item.type === 'positionInput'" :option="item" />
  </div>
</template>

<style scoped>
</style>
