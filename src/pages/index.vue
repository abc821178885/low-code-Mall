<script lang="ts" setup>
import type { ComponentSize, FormInstance, FormRules, TabsPaneContext } from 'element-plus'
import { reactive, ref } from 'vue'
import { componentList } from '../components/index'
import Search from '../components/Search/index.vue'
import Render from './components-form/render.vue'

const activeName = ref('first')

function handleClick(tab: TabsPaneContext, event: Event) {
  console.log(tab, event)
}
</script>

<template>
  <div class="index-class">
    <div class="left-class">
      11
    </div>
    <div class="center-class">
      <Search />
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
    flex: 1;
    overflow-y: auto;
    border: 1px solid #000000;
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
