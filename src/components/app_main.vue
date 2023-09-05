—
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div style="">
    <div style="position: absolute; margin-left: 320px">
      <!-- 小按钮部分 -->
      <img
        src="../assets/再来一张.png"
        alt=""
        style="
          position: absolute;
          margin-left: 280px;
          margin-top: 10px;
          width: 24px;
          height: 24px;
          background-color: #141416;
          color: white;
          font-size: 24px;
        "
      />

      <img
        src="../assets/下载.png"
        alt=""
        style="
          position: absolute;
          margin-left: 280px;
          margin-top: 50px;
          width: 24px;
          height: 24px;
          background-color: #141416;
          color: white;
          font-size: 24px;
        "
        @click="downloadImage()"
      />

      <img
        src="../assets/分享.png"
        alt=""
        style="
          position: absolute;
          margin-left: 280px;
          margin-top: 90px;
          width: 24px;
          height: 24px;
          background-color: #141416;
          color: white;
          font-size: 24px;
        "
      />
      <img
        src="../assets/超分辨率.png"
        alt=""
        style="
          position: absolute;
          margin-left: 280px;
          margin-top: 130px;
          width: 24px;
          height: 24px;
          background-color: #141416;
          color: white;
          font-size: 24px;
        "
      />
      <img
        src="../assets/删除.png"
        alt=""
        style="
          position: absolute;
          margin-left: 280px;
          margin-top: 170px;
          width: 24px;
          height: 24px;
          background-color: #141416;
          color: white;
          font-size: 24px;
        "
      />
    </div>

    <el-card
      :body-style="{ padding: '0px' }"
      class="mainCard"
      style="
        border: 0px solid white;
        background-color: #23262f;
        border-radius: 10px;
        margin-bottom: 10px;
        margin-top: -20px;
        width: 584px;
        height: 584px;
        display: flex;
        justify-content: center;
      "
    >
      <!-- 最大张的图片 -->
      <img v-if="showBig1" style="height: 100%" :src="bingImgsrc" alt="" class="image" />

      <div
        v-if="!showBig1"
        style="
          position: relative;
          background-color:;
          width: 585px;
          height: 586px;
          display: flex;
          margin-top: 10px;
          border-radius: 10px;
        "
      >
        <div class="container">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>

      <!-- 绘制结果下方的小图 -->
    </el-card>

    <!-- main缩略图整数部分 -->
    <div style="width: 584px; height: 184px; display: flex">
      <!-- 网格布局 -->
      <div class="grid-container">
        <div class="grid-item" v-for="(item, index) in LittlePic" :key="index">
          <img
            :src="item.url"
            alt="Image"
            :class="{ highlight: item.highlight, dimm: !item.highlight }"
            @click="selectLittlePic(index)"
          />
        </div>
      </div>
      <!-- 补余数 -->
      <!-- <div v-for="row in LittlePic.length - Math.floor(LittlePic.length/4)*4"
             :key="row" class="row">
             <span>
              <el-button style="padding: 3px 0;width: 142px;height: 150px;
                border: 2px solid #353945;background-color: #141416;
                float: left;margin: 2px;font-size: 12px;overflow: hidden;
                border-radius: 20px;
                "
                type="primary" plain>
                <img style="width: 100%;" :src='LittlePic[row].url' alt="" class="image">
              </el-button>
              </span>
            </div> -->
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line camelcase, import/extensions, import/no-unresolved
import Missionbus from '@/bus.ts';

export default {
  components: {},
  name: 'APP',
  data() {
    return {
      showBig1: true,

      // eslint-disable-next-line global-require
      bingImgsrc: require('@/assets/main.jpg'),
      bigPic: {
        // eslint-disable-next-line global-require
        imgurl: require('@/assets/binghead.png'),
      },
      testPicUrl: 'sd/test.jpg',
      downloadimagePath: '',
    };
  },

  // 监听变量
  watch: {
    async LittlePic() {
      // console.log(oldValue);
      // await this.saveToStorage();
      // await this.loadImageFromCache();
      console.log('changing-----------------------------0000000000000000000000000000000000000000');
    },
  },
  methods: {
    stayCss() {
      const elements = document.querySelectorAll('.el-message');

      elements.forEach((el) => {
        // eslint-disable-next-line no-param-reassign
        el.style.cssText =
          'background-color: #333; color: #d41b1b; width: 182px; height: 40px; border-radius: 2px; border: 0px;';
      });
    },

    // 保存到缓存
    saveToStorage() {
      // 覆盖掉generatedImageUrls
      localStorage.setItem('generatedImageUrls', JSON.stringify(this.LittlePic));
    },

    // 加载缓存里面的url
    loadImageFromCache() {
      const generatedImageUrls = localStorage.getItem('generatedImageUrls');
      if (generatedImageUrls) {
        this.LittlePic = generatedImageUrls; // 假设你的数据列表是名为 imageList 的数组
      }
    },

    // 下载图片
    downloadImage() {
      if (this.downloadimagePath === '') {
        this.$message.error('先选择下方缩略图再进行下载！');
        this.stayCss();

        return -1;
      }
      // 遍历图片列表进行下载
      // 创建隐藏的 <a> 标签
      const link = document.createElement('a');
      link.href = this.downloadimagePath;
      link.download = 'yuanhui.jpg'; // 下载的文件名

      // 触发点击事件进行下载
      link.dispatchEvent(new MouseEvent('click'));

      this.$message.success('图片下载成功！');

      this.stayCss();
      return 0;
    },

    // 选择图片
    selectLittlePic(index) {
      this.LittlePic.forEach((item, i) => {
        if (index === i) {
          this.LittlePic[i].highlight = true;
          this.downloadimagePath = this.LittlePic[index].url;
        } else {
          this.LittlePic[i].highlight = false;
        }
      });
      // const downloadUrl = this.LittlePic[index].url
    },

    // ----------------------------------------------------------------------
    // 获取任务
    accessVariable() {},
    // 展示大图
    showBig(payload) {
      // eslint-disable-next-line prefer-destructuring
      this.bingImgsrc = payload[0];
      // 将结果存入缩略图
      this.LittlePic.push({ url: this.bingImgsrc, highlight: false });
      this.showBig1 = true;
    },
    // 切换成动画
    changeToWaiting() {
      // this.bingImgsrc = 'https://img.zcool.cn/community/012e5a5b99d79ba8012099c81012fc.gif';
      this.showBig1 = false;
    },
    // 切换成超时
    changetotimeout() {
      // this.bingImgsrc = 'https://img2.baidu.com/it/u=650810538,1164929395&fm=253&fmt=auto&app=138&f=PNG?w=735&h=400';
      // this.bingImgsrc = 'https://static.iwanshang.cn/Public/uploads/2022-06-17/1655433107575538.png';
      this.showBig1 = true;
    },
  },
  created() {},
  // 监听总线任务
  mounted() {
    // 监听到任务
    Missionbus.$on('showBig', this.showBig);
    Missionbus.$on('changeToWaiting', this.changeToWaiting);
    // 监听是否超时
    Missionbus.$on('timeout', this.changetotimeout);
  },
};
</script>
<style lang="scss" scoped>
.image {
  width: 100%;
  // margin-left: -30%;
}
.littleCard {
  width: 90%;
  height: 90%;
}
.mainCard {
  width: 60%;
  height: 90%;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px; /* 可选项，设置网格之间的间距 */
  // overflow-y:scroll;
}

.grid-item {
  /* 定义网格项的样式，如边框、背景色等 */
  width: 109px;
  height: 109px;
  overflow: hidden;
  border-radius: 10px;
  // background-color: yellow;
}

// 缩略图被选中
.highlight {
  width: 100%;
  border-radius: 10px;
  border: 2px solid #793aea;
}

.dimm {
  width: 100%;
  border-radius: 10px;
}

//
.container {
  position: absolute;
  display: block;
  width: 70vh;
  height: 70vh;
  margin-left: 50px;
  margin-top: 30px;
  transform-style: preserve-3d;
  transform: perspective(1000px) rotateY(45deg) rotateX(45deg);
}
.circle:nth-child(0) {
  position: absolute;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50%;
  left: 0vh;
  top: 0vh;
  width: 70vh;
  height: 70vh;
  -webkit-animation: spin Infinitys infinite linear;
  animation: spin Infinitys infinite linear;
}
.circle:nth-child(1) {
  position: absolute;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50%;
  left: 2.1875vh;
  top: 2.1875vh;
  width: 65.625vh;
  height: 65.625vh;
  -webkit-animation: spin 12s infinite linear;
  animation: spin 12s infinite linear;
}
.circle:nth-child(2) {
  position: absolute;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50%;
  left: 4.375vh;
  top: 4.375vh;
  width: 61.25vh;
  height: 61.25vh;
  -webkit-animation: spin 6s infinite linear;
  animation: spin 6s infinite linear;
}
.circle:nth-child(3) {
  position: absolute;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50%;
  left: 6.5625vh;
  top: 6.5625vh;
  width: 56.875vh;
  height: 56.875vh;
  -webkit-animation: spin 4s infinite linear;
  animation: spin 4s infinite linear;
}
.circle:nth-child(4) {
  position: absolute;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50%;
  left: 8.75vh;
  top: 8.75vh;
  width: 52.5vh;
  height: 52.5vh;
  -webkit-animation: spin 3s infinite linear;
  animation: spin 3s infinite linear;
}
.circle:nth-child(5) {
  position: absolute;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50%;
  left: 10.9375vh;
  top: 10.9375vh;
  width: 48.125vh;
  height: 48.125vh;
  -webkit-animation: spin 2.4s infinite linear;
  animation: spin 2.4s infinite linear;
}
.circle:nth-child(6) {
  position: absolute;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50%;
  left: 13.125vh;
  top: 13.125vh;
  width: 43.75vh;
  height: 43.75vh;
  -webkit-animation: spin 2s infinite linear;
  animation: spin 2s infinite linear;
}
.circle:nth-child(7) {
  position: absolute;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50%;
  left: 15.3125vh;
  top: 15.3125vh;
  width: 39.375vh;
  height: 39.375vh;
  -webkit-animation: spin 1.714285714285714s infinite linear;
  animation: spin 1.714285714285714s infinite linear;
}
.circle:nth-child(8) {
  position: absolute;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50%;
  left: 17.5vh;
  top: 17.5vh;
  width: 35vh;
  height: 35vh;
  -webkit-animation: spin 1.5s infinite linear;
  animation: spin 1.5s infinite linear;
}
.circle:nth-child(9) {
  position: absolute;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50%;
  left: 19.6875vh;
  top: 19.6875vh;
  width: 30.625vh;
  height: 30.625vh;
  -webkit-animation: spin 1.333333333333333s infinite linear;
  animation: spin 1.333333333333333s infinite linear;
}
.circle:nth-child(10) {
  position: absolute;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50%;
  left: 21.875vh;
  top: 21.875vh;
  width: 26.25vh;
  height: 26.25vh;
  -webkit-animation: spin 1.2s infinite linear;
  animation: spin 1.2s infinite linear;
}
.circle:nth-child(11) {
  position: absolute;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50%;
  left: 24.0625vh;
  top: 24.0625vh;
  width: 21.875vh;
  height: 21.875vh;
  -webkit-animation: spin 1.090909090909091s infinite linear;
  animation: spin 1.090909090909091s infinite linear;
}
.circle:nth-child(12) {
  position: absolute;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50%;
  left: 26.25vh;
  top: 26.25vh;
  width: 17.5vh;
  height: 17.5vh;
  -webkit-animation: spin 1s infinite linear;
  animation: spin 1s infinite linear;
}
.circle:nth-child(13) {
  position: absolute;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50%;
  left: 28.4375vh;
  top: 28.4375vh;
  width: 13.125vh;
  height: 13.125vh;
  -webkit-animation: spin 0.923076923076923s infinite linear;
  animation: spin 0.923076923076923s infinite linear;
}
.circle:nth-child(14) {
  position: absolute;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50%;
  left: 30.625vh;
  top: 30.625vh;
  width: 8.75vh;
  height: 8.75vh;
  -webkit-animation: spin 0.857142857142857s infinite linear;
  animation: spin 0.857142857142857s infinite linear;
}
.circle:nth-child(15) {
  position: absolute;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50%;
  left: 32.8125vh;
  top: 32.8125vh;
  width: 4.375vh;
  height: 4.375vh;
  -webkit-animation: spin 0.8s infinite linear;
  animation: spin 0.8s infinite linear;
}
.circle:nth-child(16) {
  position: absolute;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50%;
  left: 35vh;
  top: 35vh;
  width: 0vh;
  height: 0vh;
  -webkit-animation: spin 0.75s infinite linear;
  animation: spin 0.75s infinite linear;
}
.circle:nth-child(2n) {
  border: 2px dashed rgba(255, 255, 255, 0.5);
}
.circle:last-child {
  display: none;
}
@-webkit-keyframes spin {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}
@keyframes spin {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}
</style>
