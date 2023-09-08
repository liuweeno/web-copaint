<template>
  <section class="app-footer">
    <div class="container-introduce">
      <div class="logo">
        <div class="logos">
          <img class="img-icon" src="@/assets/img/logo.png" alt="" />
          <div class="content">
            <span>元绘 CoPaint</span>
            <img src="@/assets/img/home/slogan.png" alt="" />
          </div>
        </div>
        <div class="document"><span>用户协议</span> <span>隐私政策</span></div>
      </div>
      <div class="qrs">
        <div class="qrs-item" v-for="item in qrDetail">
          <img src="" alt="" />
          <span>{{ item.content }}</span>
        </div>
      </div>
    </div>
    <!-- 版权号码 -->
    <div class="copyright">
      <span> Copyright © 2023 元绘AI 版权所有 深ICP备2023000434号-5 </span>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';

const qrDetail = ref([
  {
    content: 'AI 创作交流群',
    imgurl: '',
  },
  {
    content: 'AI 魔法学院',
    imgurl: '',
  },
  {
    content: 'AI 活动交流群',
    imgurl: '',
  },
]);
</script>
<style lang="less" scoped>
.app-footer {
  border-top: #353537 1px solid;
  width: 100vw;
  background-color: #141416;
  height: 237px;
  padding: 0 250px 0 250px;
  .container-introduce {
    height: 156px;
    width: 100%;
    .flex-mode(row, space-between, center);
    .logo {
      height: 100%;
      width: 186px;
      //border: red solid 1px;
      .flex-mode(column, space-around, center);
      .logos {
        .flex-mode(row, flex-start);
        //background-color: red;
        height: 50px;
        width: 100%;
        .img-icon {
          width: 40px;
          height: 40px;
        }
        .content {
          margin-left: 12px;
          > span {
            font-size: 21px;
            font-family:
              PingFangSC-Medium,
              PingFang SC;
            font-weight: 500;
            color: #ffffff;
            line-height: 29px;
          }
          > img {
            width: 135px;
            //height: 25px;
          }
        }
      }
      .document {
        > span {
          font-size: 14px;
          font-family:
            PingFangSC-Regular,
            PingFang SC;
          font-weight: 400;
          color: rgba(205, 220, 255, 0.85);
          line-height: 20px;
          margin-right: 30px;
          cursor: pointer;
          &:hover {
            color: #8e50ff;
          }
        }
      }
    }
    .qrs {
      .flex-mode(row, space-around, center);
      width: 315px;
      height: 100%;
      //border: red solid 1px;
      .qrs-item {
        //background-color: #5d0fe4;
        .flex-mode(column);
        > img {
          height: 72px;
          width: 72px;
          background-color: gray;
        }
        > span {
          margin-top: 4px;
          font-size: 14px;
          font-family:
            PingFangSC-Regular,
            PingFang SC;
          font-weight: 400;
          color: rgba(205, 220, 255, 0.85);
          line-height: 20px;
        }
        width: 88px;
        height: 96px;
      }
    }
  }
  .copyright {
    height: 80px;
    width: 100%;
    border-top: #353537 solid 1px;
    .flex-mode(column, center ,flex-start);
    > span {
      font-size: 14px;
      font-family:
        PingFangSC-Regular,
        PingFang SC;
      font-weight: 400;
      color: rgba(205, 220, 255, 0.85);
      line-height: 20px;
      color: #cddcff;
    }
  }
}
</style>
