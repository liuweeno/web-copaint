<template>
  <div>

    <!-- logo和头部 -->
    <div style="width: 100%;height: 56px;
      margin-bottom: 0px;padding-top: 0px;
      border-bottom: 1px solid #30343f;
      padding-bottom: 10px;position: relative;
          ">
            <span style="color: white;float: left;margin-left: 40px;
            margin-top: 10px;flex-direction: column;display: flex;
            ">
              <img src="../assets/logo1.png"
              style="width: 40px;height: 40px;
              margin-top: 5px;"
              alt='' width="200">

              <span style="margin-left: 50px;margin-top: 0px;
              font-size: 21.03px;position: absolute;
              /* font-weight: 100; */
              color: rgba(255, 255, 255, 0.812);">元绘 CoPaint</span>
              <span style="margin-left: 46px;margin-top: -17px;color: white;
              /* font-family:'Courier New', Courier, monospace */
              font-size: 10px;font-style: italic;font-family: 'Pacifico', cursive;
              ">让创作变得更加简单</span>
            </span>
            <br>

            <span style="color: white;float: left;margin-left: 1350px;
            margin-top: 1px;flex-direction: column;display: flex;width: 90px;
            position: absolute;
            height: 40px;
            ">
              <button
              style="background-color: #141416;border: 1px solid #77a2ff42;
              color: #CDDCFF;padding: 5px;border-radius: 20px;  font-size: 14px;
              padding: 5px            "
              >登录/注册</button>
            </span>

      </div>

  </div>
</template>
<script>
export default {
  name: 'APP',
  data() {
    return {
      LogoUrl: '',
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
.vertical-container {
  display: flex;
  flex-direction: column;
  // font-size: 10px;
  inset-block: 0px;
  margin-top: -60px;
  margin-left: 100px;
}

// .upper-span, .lower-span {
//   display: inline-block;
//   padding: 1px;
// }

</style>
