<script lang="ts" setup>
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'
import { componentList } from '../components/index'
import Search from '../components/Search/index.vue'
import Render from './right-pages/render.vue'
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
      <Render :tools-list="componentList[0].tools.default" />
    </div>
  </div>
</template>

<style scoped>
.index-class {
  display: flex;
  width: 100%;
  height: 100vh;
  .left-class {
    width: 20%;
    height: 100%;
    border: 1px solid #000000;
  }
  .center-class {
    flex: 1;
    border: 1px solid #000000;
  }
  .right-class {
    width: 20%;
    height: 100%;
    border: 1px solid #000000;
  }
}
</style>
