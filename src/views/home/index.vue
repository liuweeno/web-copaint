<template>
  <section class="main-frame">
    <el-container>
      <!-- 头部 -->
      <el-header style="border-radius: 10px; margin-bottom: 10px">
        <appheader></appheader>
      </el-header>

      <el-container style="height: 80%; margin-top: 1px">
        <!-- 侧边 -->
        <!-- <el-aside width="5%">
        </el-aside> -->
        <el-aside style="margin-left: 45px; width: 790px; height: 1348px">
          <appaside></appaside>
        </el-aside>

        <el-container style="width: 100%; margin-top: 10px; margin-left: 0px">
          <!-- 右边 -->
          <el-main style="width: 100%; margin-left: -20px">
            <appmain></appmain>
          </el-main>
        </el-container>

        <!-- 底部 -->
      </el-container>

      <el-container style="height: 150%; width: 100.7%">
        <el-footer class="foot" height="200px">
          <appfooter></appfooter>
        </el-footer>
      </el-container>
    </el-container>
  </section>
</template>

<script setup>
import appheader from '@/components/app_header.vue';
import appaside from '@/components/app_aside.vue';
import appmain from '@/components/app_main.vue';
import appfooter from '@/components/app_footer.vue';
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.main-frame {
  margin: -10px;
  height: 100%;
  width: 100%;
}

.foot {
  // margin-top: 10px;
  // margin: -10px;
  height: 100%;
}
.littleTip {
  margin-right: 50px;
}
</style>
