<template>
  <section class="app-header">
    <div class="container-introduce">
      <div class="logo">
        <div class="logos">
          <img class="img-icon" src="@/assets/img/logo.png" alt="" />
          <div class="content">
            <span>元绘 CoPaint</span>
            <img src="@/assets/img/home/slogan.png" alt="" />
          </div>
        </div>
      </div>
      <el-button class="btn-login" type="primary">登陆/注册</el-button>
    </div>
  </section>
</template>
<script setup></script>
<style lang="less" scoped>
.app-header {
  background-color: #141416;
  height: 80px;
  padding: 0 250px 0 250px;
  border-bottom: #2d2d2f 1px solid;
  .container-introduce {
    height: 100%;
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
    .btn-login {
      width: 110px;
      height: 40px;
      border-radius: 20px;
      border: 2px solid rgba(119, 163, 255, 0.25);
      background-color: transparent;
      font-size: 14px;
      font-family:
        PingFangSC-Regular,
        PingFang SC;
      font-weight: 400;
      color: rgba(205, 220, 255, 0.65);
      line-height: 20px;
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
