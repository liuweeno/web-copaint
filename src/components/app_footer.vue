<template>
  <div>
    <!-- <el-menu
          style="height: 230px;width: 102%;margin: -10px;
          border-top: 1px solid #282b33;margin-top: 10px;"
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#141416"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1" style="margin-left: 3%;">
            <img src="../assets/logo1.png"
              style="width: 40px;height: 40px;"
              alt='' width="200">
              元绘 CoPaint
          </el-menu-item>
          <br>
          <br>
          <br>
          logo版权
              <el-menu-item style="margin-left: -150px;">
                <span style="color: #979aa7;">
                  <a href="https://www.example.com"
                  style="text-decoration: none;color: #757c8e;">用户协议</a>
                  <a href="https://www.example.com"
                  style="text-decoration: none;color: #757c8e;
                  margin-left: 10px;">隐私政策</a>
                </span>
              </el-menu-item>

          <br>

          <span v-for="col in 3" :key="col" class="col"
              style="padding: 2px;height: 90px;width: 80px;
              ">
              <img :src="QRCode" alt="" style="width: 100px;
              margin-right: 10px;"
              >
          </span>
          <br>
          <br>

          <div style="width: 100%;border-top: 1px solid #282b33;
          ">
            <span style="color: white;float: left;margin-left: 80px;
            color: #606574;">
              Copyright © 2023 元绘AI 版权所有 深ICP备2023000434号-5
            </span>
          </div>

      </el-menu> -->

      <div style="width: 100%;border-top: 1px solid #282b33;
      margin-bottom: 30px;padding-top: 15px;
      margin-left: -40px;
          ">
            <span style="color: white;float: left;margin-left: 80px;
            margin-top: 10px;flex-direction: column;display: flex;
            color: #606574;">
              <img src="../assets/logo1.png"
              style="width: 40px;height: 40px;
              "
              alt='' width="200">
              <span style="margin-left: 30px;margin-top: -40px;
              font-size: 20px;font-weight: 100;
              color: white;">元绘 CoPaint</span>
              <span style="margin-left: 50px;margin-top: 1px;color: white;
              font-family: 'Pacifico', cursive;">让创作变得更加简单</span>
            </span>
            <br>
            <br>
            <br>
            <br>

            <div style="margin-left: 0px;">
              <a style="color: white;float: left;margin-left: 80px;
              margin-top: 10px;text-decoration: none;font-size: 14px;
              color: #8E50FF;" href="https://www.example.com">
                隐私政策
              </a>
              <a style="color: white;float: left;margin-left: 10px;
              margin-top: 10px;text-decoration: none;font-size: 14px;
              color: #8E50FF;" href="https://www.example.com">
                用户协议
              </a>
              <span style="color: white;float: left;margin-left: 20px;
              margin-top: 10px;font-size: 14px;
              color: #606574;">
                版权所有
              </span>
              <span style="color: white;float: left;margin-left: 20px;
              margin-top: 10px;font-size: 14px;
              color: #606574;">
                品牌素材
            </span>
            </div>

      </div>

      <!-- 二维码 -->
      <div style="margin-left: 1000px;position: absolute;
      margin-top: -100px;">
        <span v-for="col in 3" :key="col" class="col"
              style="padding: 2px;height: 90px;width: 80px;
              position: absolute;display: flex;
              " :style="marginLi[col]">
              <img :src="QRCode" alt="" style="width: 100px;
              margin-right: 10px;"
              >
              <span style="position: absolute;margin-left: 10px;
              font-size: 10px;width: 80px;
              color: #606574;margin-top: 100px;">{{Group[col-1]}}</span>
        </span>
      </div>

      <br>
      <br>
      <br>

      <!-- 版权号码 -->
      <div style="width: 100%;border-top: 1px solid #282b33;
      height: 100px;margin-left: -40px;
          ">
            <span style="color: white;float: left;margin-left: 80px;
            color: #606574;padding-top: 10px;">
              Copyright © 2023 元绘AI 版权所有 深ICP备2023000434号-5
            </span>
      </div>
  </div>
</template>
<script>
export default {
  name: 'APP',
  data() {
    return {
      marginLi: ['margin-left: 100px', 'margin-left: 120px', 'margin-left: 240px'],
      QRCode: 'https://img.zcool.cn/community/0182045c7f6366a801217ce6d2237e.jpg@3000w_1l_2o_100sh.jpg',
      Group: ['AI创作交流微信群', '创作魔法QQ群', 'AI创作技术微信群'],

    };
  },
  methods: {

  },
  created() {
  },
  mounted() {
  },
};
</script>
<style lang="scss" scoped>
.footer{
  background-color: #a2a29b;
}
</style>
