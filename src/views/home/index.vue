<template>
  <section class="main-frame">
    <el-container>
      <el-header class="header">
        <appheader></appheader>
      </el-header>

      <el-main class="main">
        <appaside></appaside>
      </el-main>
    </el-container>
  </section>
</template>

<script setup>
import appheader from '@/components/app_header.vue';
import appaside from '@/components/app_aside.vue';
</script>

<style scoped lang="less">
.main-frame {
  background-color: #141416;
  .flex-mode(column, flex-start, flex-start);
  //height: 100vh;
  width: 100vw;
  .header {
    z-index: 99;
    position: sticky;
    top: 0;
    padding: 0;
    height: 80px;
    width: 100vw;
  }
  .main {
    padding: 0;
    //flex: 1;
    width: 100vw;
    //.flex-mode(column, flex-start, felx-start);
    overflow: unset;
  }
  .footer {
    padding: 0;
    height: 237px;
    width: 100vw;
  }
}
</style>
