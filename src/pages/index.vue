<script lang="ts" setup>
import type { ComponentSize, FormInstance, FormRules, TabsPaneContext } from 'element-plus'
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { componentList } from '../components/index'
import Search from '../components/Search/index.vue'
import Render from './components-form/render.vue'

const activeName = ref('first')

let worker: Worker | null = null
function handleClick(tab: TabsPaneContext, event: Event) {
  console.log(tab, event)
}

const centerRef = ref()

const left = ref(0)
const top = ref(0)
const leftX = ref(0)
const topY = ref(0)
const moveType = ref(false)
const newleft = ref(0)
const newtop = ref(0)

function moveTo(event: MouseEvent) {
  requestAnimationFrame(() => {
    moveType.value = true
    leftX.value = event.clientX
    topY.value = event.clientY
  })
}

function moveing(event: MouseEvent) {
  if (moveType.value && worker) {
    worker.postMessage({
      left: event.clientX - leftX.value + newleft.value,
      top: event.clientY - topY.value + newtop.value,
    })
    // left.value = event.clientX - leftX.value + newleft.value
    // top.value = event.clientY - topY.value + newtop.value
  }
}

function moveDown() {
  moveType.value = false
  newleft.value = left.value
  newtop.value = top.value
}

function workerDown(event: { data: { left: number, top: number } }) {
  left.value = event.data.left
  top.value = event.data.top
}

onMounted(() => {
  centerRef.value.addEventListener('mousemove', moveing)
  centerRef.value.addEventListener('mouseup', moveDown)
  worker = new Worker(new URL('./worker.ts', import.meta.url))

  if (worker) {
    worker.addEventListener('message', workerDown)
  }
})

onUnmounted(() => {
  if (centerRef.value) {
    centerRef.value.removeEventListener('mousemove', moveTo)
    centerRef.value.removeEventListener('mouseup', moveDown)
  }
})
</script>

<template>
  <div class="index-class">
    <div class="left-class">
      <Search />
    </div>
    <div ref="centerRef" class="center-class">
      <Search class="move-search" :style="`--left:${left}px;--top:${top}px`" @mousedown="moveTo" />
    </div>
    <div class="right-class">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="基础设置" name="first">
          <Render :tools-list="componentList[0].tools.default" />
        </el-tab-pane>
        <el-tab-pane label="组件设置" name="second">
          Config
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style scoped>
.index-class {
  display: flex;
  width: 100%;
  height: calc(100vh - 5px);
  .left-class {
    width: 400px;
    height: 100%;
    overflow-y: auto;
    border: 1px solid #000000;
  }
  .center-class {
    position: relative;
    flex: 1;
    overflow-y: auto;
    border: 1px solid #000000;
    .move-search {
      position: absolute;
      left: 0;
      top: 0;

      transform: translate(var(--left), var(--top));
    }
  }
  .right-class {
    width: 300px;
    height: 100%;
    overflow-y: auto;
    border: 1px solid #000000;
  }
}

.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
