<template>
  <section class="app-aside">
    <section class="control-container">
      <section class="box-card" style="background-color: #141416; width: 690px">
        <!-- 小标题 -->
        <div class="clearfix">
          <span class="clearfix-content">AI 创作</span>
          <!-- 圆角按钮-->
          <div style="display: flex; justify-content: flex-end; align-items: center; gap: 20px">
            <button
              round
              style="
                background-color: #141416;
                color: rgba(240, 248, 255, 0.233);
                border: 2px solid #77a2ff3d;
                border-radius: 20px;
                width: 110px;
                height: 40px;
                margin-top: 0px;
              "
            >
              <img
                src="@/assets/img/社群.png"
                alt=""
                style="margin-left: -5px; margin-top: -2px; position: absolute; position: absolute"
              />
              <span
                style="margin-top: 10px; margin-left: 20px; position: relative; justify-content: center"
                @mouseenter="showPopup"
                @mouseleave="hidePopup"
                >加入社群</span
              >
              <!-- 三个二维码 -->
              <div style="margin-left: -230px; margin-top: 0px; position: absolute; margin-top: -16px">
                <transition name="fade" style="">
                  <div v-if="isPopupVisible" class="popup-div">
                    <span style="width: 160px; height: 160px; background-color: #d8d8d8">
                      <img
                        style="
                          width: 160px;
                          height: 160px;
                          background-color: #d8d8d8;
                          position: absolute;
                          margin-left: -260px;
                          margin-top: 1px;
                        "
                        alt=""
                        src="https://img.zcool.cn/community/014b7a580987afa84a0e282b12f472.jpg@2o.jpg"
                      />
                      <span
                        style="
                          width: 160px;
                          height: 160px;
                          position: absolute;
                          margin-left: -260px;
                          margin-top: 175px;
                          color: #cddcff;
                        "
                      >
                        扫描二维码添加小助手<br />
                        进AI创作交流群
                      </span>
                      <img
                        style="
                          width: 160px;
                          height: 160px;
                          background-color: #d8d8d8;
                          position: absolute;
                          margin-left: -78.5px;
                          margin-top: 1px;
                        "
                        alt=""
                        src="https://img.zcool.cn/community/014b7a580987afa84a0e282b12f472.jpg@2o.jpg"
                      />
                      <span
                        style="
                          width: 160px;
                          height: 160px;
                          position: absolute;
                          margin-left: -78.5px;
                          margin-top: 175px;
                          color: #cddcff;
                        "
                      >
                        扫描二维码添加小助手<br />
                        进AI创作交流群
                      </span>
                      <img
                        style="
                          width: 160px;
                          height: 160px;
                          background-color: #d8d8d8;
                          position: absolute;
                          margin-left: 100px;
                          margin-top: 1px;
                        "
                        alt=""
                        src="https://img.zcool.cn/community/014b7a580987afa84a0e282b12f472.jpg@2o.jpg"
                      />
                      <span
                        style="
                          width: 160px;
                          height: 160px;
                          position: absolute;
                          margin-left: 100px;
                          margin-top: 175px;
                          color: #cddcff;
                        "
                      >
                        扫描二维码添加小助手<br />
                        进AI创作交流群
                      </span>
                    </span>
                  </div>
                </transition>
              </div>
            </button>
            <button
              round
              style="
                background-color: #141416;
                color: rgba(240, 248, 255, 0.233);
                border: 2px solid #77a2ff3d;
                border-radius: 20px;
                width: 86px;
                height: 40px;
              "
            >
              <img src="@/assets/img/教学.png" alt="" style="margin-left: -5px; margin-top: -2px; position: absolute" />
              <span
                style="margin-top: 10px; margin-left: 20px"
                v-on:mouseenter="TeachingisHover = true"
                v-on:mouseleave="TeachingisHover = false"
                >教学</span
              >

              <div
                style="
                  position: absolute;
                  margin-left: -50px;
                  margin-top: 25px;
                  z-index: 9;
                  width: 192px;
                  height: 236px;
                "
              >
                <transition name="teaching">
                  <div
                    v-if="TeachingisHover"
                    style="
                      background-color: #2c313e;
                      width: 192px;
                      height: 236px;
                      border-radius: 6px;
                      position: absolute;
                    "
                  >
                    <!-- 悬浮二维码 -->
                    <img
                      style="
                        width: 160px;
                        height: 160px;
                        background-color: #d8d8d8;
                        position: absolute;
                        margin-left: -80px;
                        margin-top: 15px;
                      "
                      alt=""
                      src="https://img.zcool.cn/community/014b7a580987afa84a0e282b12f472.jpg@2o.jpg"
                    />
                    <span
                      style="
                        width: 160px;
                        height: 160px;
                        position: absolute;
                        margin-left: -80px;
                        margin-top: 180px;
                        position: absolute;
                        color: #cddcff;
                      "
                    >
                      扫描二维码添加小助手<br />
                      进AI创作交流群
                    </span>
                  </div>
                </transition>
              </div>
            </button>
            <button
              round
              style="
                background-color: #141416;
                margin-left: 5px;
                color: rgba(240, 248, 255, 0.233);
                border: 2px solid #77a2ff3d;
                border-radius: 20px;
                width: 114px;
                height: 40px;
                margin-top: 1px;
              "
            >
              <img src="@/assets/img/CE.png" alt="" style="margin-left: -5px; margin-top: 2px; position: absolute" />
              <span style="margin-top: 10px; margin-left: 20px">600积分</span>
            </button>
            <!-- 创作 -->
            <button
              round
              style="
                background-color: #141416;
                margin-left: 5px;
                color: rgba(240, 248, 255, 0.233);
                border: 2px solid #77a2ff3d;
                border-radius: 20px;
                width: 114px;
                height: 40px;
                margin-top: 1px;
              "
            >
              <img src="@/assets/img/创作.png" alt="" style="margin-left: -5px; margin-top: -2px; position: absolute" />
              <span style="margin-top: 10px; margin-left: 20px">我的创作</span>
            </button>
          </div>
        </div>

        <!-- 模型选择 -->
        <div class="model-choose">
          <span type="info" style="color: #cddcff; font-size: 14px; display: flex; align-items: center"
            >模型选择
            <el-tooltip
              content="通用模型的生成速度很快，逻辑性强；场景模型的生成时间较长，更擅长恢弘的色彩想象"
              placement="top"
              effect="dark"
            >
              <img src="@/assets/img/注释.png" alt="" style="margin-left: 4px" />
            </el-tooltip>
          </span>
          <!-- 模型方块 -->
          <div
            style="
              display: flex;
              justify-content: flex-start;
              align-items: flex-start;
              /* background-color: yellow; */
              /* margin-left: auto */
              height: 127px;
              width: 100%;
              margin-top: 20px;
            "
          >
            <div style="width: 100%; display: flex; justify-content: flex-start; gap: 8px">
              <div v-for="(button, index) in buttons5" :key="button.label">
                <div @click="highlightButton5(index)" class="model-choose-item">
                  <img v-if="button.highlighted" :src="modelChoose[button.imgName]" alt="" class="model-choose-img" />
                  {{ button.imgUrl }}
                  <span class="choose-item-title">{{ button.label }}</span>
                  <span class="choose-item-content"> {{ button.text }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 画面描述 -->
        <div class="picture-description">
          <div>
            <span type="info" style="color: #cddcff; font-size: 14px">画面描述 </span>
          </div>
          <div class="btn-style">
            <!-- 描述细节按钮 -->
            <div>
              <button
                v-for="(button, index) in buttons"
                :key="index"
                :class="{ highlighted: button.highlighted, dimmed: !button.highlighted }"
                @click="highlightButton(index)"
              >
                {{ button.label }}
              </button>
            </div>
            <div>
              <!-- 描述方块按钮细节2 -->
              <button
                v-for="(button, index) in buttons2"
                :key="index"
                :class="{ highlighted2: button.highlighted, dimmed2: !button.highlighted }"
                @click="highlightButton2(index)"
              >
                {{ button.label }}
              </button>
            </div>
          </div>

          <!--4 输入内容 -->
          <el-input
            type="textarea"
            :rows="2"
            placeholder="画面描述以短句、短语为佳，画面类型和高级设置内的参数会对图像生成有艺术修饰作用；支持中英文等语言输入"
            maxlength="1000"
            :autosize="{ minRows: 4, maxRows: 8 }"
            resize="none"
            clear="true"
            class="picture-description-input"
            v-model="textarea"
          >
            <!-- 显示字数 -->
            <span class="show-words">
              <span>{{ wordcount }}</span
              >/
              <span>1000字数</span>
            </span>
          </el-input>

          <div style="margin-right: 16px; width: 100%; display: flex; justify-content: flex-end">
            <!-- 清空与翻译按钮 -->
            <button
              v-for="(button, index) in buttons3"
              :key="index"
              :class="{ highlighted3: button.highlighted, dimmed3: !button.highlighted }"
              @click="highlightButton3(index)"
            >
              <img :src="modelChoose[button.imgName]" alt="" style="width: 15px; height: 15px" />
              <span style="margin-left: 15px">{{ button.label }}</span>
            </button>
          </div>
        </div>

        <!-- 画面大小 -->
        <div class="size-choose">
          <span type="info" style="color: #cddcff; font-size: 14px"
            >画面大小
            <el-tooltip
              content="人物类的图片推荐使用 1:1的方图，景观类的图片推荐使用其他比例的尺寸"
              placement="top"
              effect="dark"
            >
              <img src="@/assets/img/注释.png" alt="" />
            </el-tooltip>
          </span>

          <!-- 选择比例 -->
          <div class="size-choose-ratio">
            <button
              v-for="(button, index) in buttons4"
              :key="index"
              :class="{ highlighted4: button.highlighted, dimmed4: !button.highlighted }"
              @click="highlightButton4(index)"
            >
              <img :src="button.imgurl" alt="" />
              <span style="margin-top: 5px">{{ button.label }}</span>
              <span style="font-weight: bold; color: #9fa3b1">{{ button.text }}</span>
            </button>
          </div>

          <!-- 选择图片分辨率 -->
          <div class="size-choose-detail">
            <button
              v-for="(button, index) in buttons6"
              :key="index"
              :class="{
                highlighted6: button.highlighted && buttons6.length === 4,
                dimmed6: !button.highlighted && buttons6.length === 4,
                highlighted6_2: button.highlighted && buttons6.length === 2,
                dimmed6_2: !button.highlighted && buttons6.length === 2,
              }"
              @click="highlightButton6(index)"
            >
              {{ button.label }}
            </button>
          </div>
        </div>

        <!-- 悬浮积分按钮，长度为4 -->
        <div v-if="buttons6.length == 4">
          <img
            src="@/assets/img/CE.png"
            alt=""
            style="margin-top: -25px; margin-left: -85px; position: absolute; float: left"
          />

          <img
            src="@/assets/img/CE.png"
            alt=""
            style="margin-top: -25px; margin-left: 95px; position: absolute; float: left"
          />

          <img
            src="@/assets/img/CE.png"
            alt=""
            style="margin-top: -25px; margin-left: 280px; position: absolute; float: left"
          />
        </div>

        <!--悬浮精绘按钮 -->
        <div v-if="buttons6.length == 4">
          <div
            style="
              margin-top: -42px;
              font-size: 10px;
              border-radius: 10px;
              margin-left: 500px;
              width: 30px;
              height: 15px;
              position: absolute;
              float: left;
              background-color: palevioletred;
              color: white;
            "
          >
            精绘
          </div>

          <div
            style="
              margin-top: -42px;
              font-size: 10px;
              border-radius: 10px;
              margin-left: 680px;
              width: 30px;
              height: 15px;
              position: absolute;
              float: left;
              background-color: palevioletred;
              color: white;
            "
          >
            精绘
          </div>
        </div>

        <!-- 选择模型后，长度为2 两个按钮时 -->
        <div v-if="buttons6.length == 2">
          <img
            src="@/assets/img/CE.png"
            alt=""
            style="margin-top: -25px; margin-left: 200px; position: absolute; float: left"
          />
        </div>

        <!--悬浮精绘按钮 -->
        <div v-if="buttons6.length == 2">
          <div
            style="
              margin-top: -42px;
              font-size: 10px;
              border-radius: 10px;
              margin-left: 690px;
              width: 30px;
              height: 15px;
              position: absolute;
              float: left;
              background-color: palevioletred;
              color: white;
            "
          >
            精绘
          </div>
        </div>

        <!-- 模型主题 -->
        <div class="model-theme">
          <button
            v-for="(button, index) in buttons7"
            :key="button.label"
            :class="{ highlighted7: button.highlighted, dimmed7: !button.highlighted }"
            @click="highlightButton7(index)"
          >
            {{ button.label }}
          </button>
        </div>

        <!--我的收藏缩略图 -->
        <div class="model-theme-miniImg-container">
          <div v-for="rowIndex in 3" :key="rowIndex" style="display: flex; justify-content: center">
            <button
              v-for="(button, colIndex) in buttons8_one.slice((rowIndex - 1) * 4, rowIndex * 4)"
              :key="colIndex"
              :class="{ highlighted8: button.highlighted, dimmed8: !button.highlighted }"
              @click="highlightButton8((rowIndex - 1) * 4 + colIndex)"
            >
              <img :src="button.imgurl" alt="" style="width: 100%; margin: -10px" />
              <span
                v-if="button.content"
                style="
                  position: absolute;
                  width: 175px;
                  height: 90px;
                  background-color: rgba(0, 0, 0, 0.239);
                  margin-left: -162px;
                  border-radius: 10px;
                  margin-top: -6px;
                "
              ></span>

              <span
                v-if="button.content"
                style="
                  position: absolute;
                  margin-left: -100px;
                  font-weight: bold;
                  margin-top: 30px;
                  float: left;
                  white-space: nowrap; /* 防止文字换行 */
                "
              >
                {{ button.label }}
              </span>
              <span
                v-else
                style="
                  position: absolute;
                  margin-left: -100px;
                  font-weight: bold;
                  margin-top: 30px;
                  float: left;
                  white-space: nowrap; /* 防止文字换行 */
                "
              >
                <i class="el-icon-menu"></i>
                {{ button.label }}
              </span>
            </button>
          </div>
        </div>

        <!-- 作图数量 -->
        <div class="img-number">
          <div>
            <span type="info" style="color: #cddcff; font-size: 14px"
              >作图数量
              <el-tooltip content="每增加1张作图数量将成倍增加消耗的总积分" placement="top" effect="dark">
                <img src="@/assets/img/注释.png" alt="" style="margin-left: 5px; margin-top: 5px; position: absolute" />
              </el-tooltip>
            </span>
          </div>

          <div class="slider">
            <input
              type="range"
              v-model="value"
              :min="min"
              :max="max"
              :step="step"
              @input="handleSlide"
              :style="{ background: gradientColor }"
              style="border-radius: 10px; height: 10px; width: 615px"
            />

            <span class="show-number">
              <span style="color: #d1e9ffb1">{{ value }}</span>
            </span>
          </div>

          <div class="use-document">
            使用元绘Ai服务表示您已经同意
            <a href="" style="text-decoration: none; color: #8e50ff; font-size: 14px">《AI创作服务协议》</a>
            <a href="" style="text-decoration: none; color: #8e50ff; font-size: 14px">《二次元模型服务协议》</a>
          </div>
        </div>
        <!-- 提交绘画按钮 -->
        <div class="btn-create-container">
          <button class="btn-create">
            <span class="btn-create-now" @click="this.process_request"> 立即生成 </span>
            <span class="btn-create-detail">
              (消耗5
              <!-- 悬浮积分按钮 -->
              <img
                src="@/assets/img/CE.png"
                alt=""
                style="margin-top: 1px; margin-left: 2px; position: absolute; float: left"
              />
              <span style="margin-left: 20px">)</span>
            </span>
          </button>
        </div>
      </section>
    </section>
    <section class="show-picture-container">
      <div class="main-picture">
        <div class="big-img"></div>
        <div class="small-images">
          <div class="small-images-item" v-for="(item, index) in resultUrl">
            <img :src="item" alt="" />
          </div>
        </div>
      </div>
      <div class="picture-control">
        <el-tooltip content="再来一张" effect="dark" placement="left">
          <img src="@/assets/img/home/again.png" alt="" />
        </el-tooltip>
        <el-tooltip content="下载" effect="dark" placement="left">
          <img src="@/assets/img/home/download.png" alt="" />
        </el-tooltip>
        <el-tooltip content="分享" effect="dark" placement="left">
          <img src="@/assets/img/home/share.png" alt="" />
        </el-tooltip>
        <el-tooltip content="超分辨" effect="dark" placement="left">
          <img src="@/assets/img/home/zoomIn.png" alt="" />
        </el-tooltip>
        <el-tooltip content="删除" effect="dark" placement="left">
          <img src="@/assets/img/home/trash.png" alt="" />
        </el-tooltip>
      </div>
    </section>
  </section>
  <appfooter></appfooter>
</template>

<script>
import axios from 'axios';
import { modelChoose } from '@/assets/img/home/index.ts';
// 导入总线
// eslint-disable-next-line import/extensions, import/no-unresolved
// import this from '@/bus.ts';
import appfooter from '@/components/app_footer.vue';
export default {
  components: {
    appfooter,
  },
  name: 'APP',
  data() {
    return {
      resultUrl: ['@/assets/img/3d梦工厂.png', '', '', '', ''],
      // 可以提交任务
      canProcessrequest: true,

      // 当前选择模型的索引
      currentModelIndex: 0,

      // 记录当前尺寸
      currentScaleindex: 0,

      inputwordcount: 0,
      inputwordLimit: 999,

      modelPic: {
        0: import('@/assets/img/纯色.png'),

        1: import('@/assets/img/纯色.png'),

        2: import('@/assets/img/纯色.png'),

        3: import('@/assets/img/通用模型.png'),

        4: import('@/assets/img/二次元模型.png'),

        5: import('@/assets/img/风格模型.png'),
      },
      TeachingisHover: false,
      isPopupVisible: false,
      // 描述细节按钮
      buttons: [
        { label: '全部', highlighted: true },
        { label: '人物', highlighted: false },
        { label: '二次元', highlighted: false },
        { label: '风景', highlighted: false },
        { label: '科幻', highlighted: false },
        { label: '儿童', highlighted: false },
        { label: '女性漫', highlighted: false },
        { label: '中国风', highlighted: false },
      ],
      // 参数方块按钮
      buttons2: [
        { label: '全参数', highlighted: true },
        { label: '纯咒语', highlighted: false },
      ],
      buttons3: [
        { label: '中文互译', highlighted: true, imgName: 'translate' },
        { label: '清空内容', highlighted: false, imgName: 'trash' },
      ],
      // 尺寸按钮
      buttons4: [
        {
          label: '1:1',
          text: '头像图',
          highlighted: true,
          size: [100, 200],
          imgurl: import('@/assets/img/编组 6.png'),
          size1: [2048, 2048],
          size2: [1536, 1536],
        },
        {
          label: '1:2',
          text: '手机屏幕',
          highlighted: false,
          size: [100, 200],
          imgurl: import('@/assets/img/编组 64.png'),
          size1: [2048, 2048],
          size2: [1536, 1536],
        },
        {
          label: '4:3',
          text: '文章配图',
          highlighted: false,
          size: [100, 200],
          imgurl: import('@/assets/img/编组 61.png'),
          size1: [2048, 2048],
          size2: [1536, 1536],
        },
        {
          label: '3:4',
          text: '社交媒体',
          highlighted: false,
          size: [100, 200],
          imgurl: import('@/assets/img/编组 62.png'),
          size1: [2048, 2048],
          size2: [1536, 1536],
        },
        {
          label: '16:9',
          text: '电脑壁纸',
          highlighted: false,
          size: [100, 200],
          imgurl: import('@/assets/img/编组 63.png'),
          size1: [2048, 2048],
          size2: [1536, 1536],
        },
        {
          label: '9:16',
          text: '宣传海报',
          highlighted: false,
          size: [100, 200],
          imgurl: import('@/assets/img/编组 64.png'),
          size1: [2048, 2048],
          size2: [1536, 1536],
        },
      ],
      // 模型按钮
      buttons5: [
        {
          label: '风格模型',
          text: '有趣多彩，一键上手',
          highlighted: true,
          imgName: 'styleModel',
        },
        {
          label: '二次元模型',
          text: '快速生成二次元图像',
          highlighted: false,
          imgName: 'animeModel',
        },
        {
          label: '通用模型',
          text: '速度快，逻辑性强',
          highlighted: false,
          imgName: 'commonModel',
        },
      ],
      // 选择尺寸圆角按钮
      // 模型按钮
      buttons6_all: [
        // 通用模型(第一个)
        [
          {
            label: '2048*2048',
            text: '头像图',
            highlighted: false,
            style:
              'background-color: #222630;color: gray;text-align:center;padding: 3px 0;width: 165px;height: 30px;border-radius: 20px;border: 0px solid #b1b5c4;color: #FCFBFF;float: right;margin-top: 10px;font-size: 12px; margin-left: auto;margin-right: 10px;',
            // eslint-disable-next-line max-len
            size: [
              [2048, 2048],
              [1536, 3072],
              [2816, 2048],
              [2048, 2816],
              [3584, 2048],
              [2048, 3584],
            ],
          },
          {
            label: '4090*4090\u00A0 5\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0/张',
            text: '头像图',
            highlighted: false,
            style:
              'background-color: #222630;color: gray;padding: 3px;width: 165px;height: 30px;border-radius: 20px;border: 2px solid #793AEA;color: #FCFBFF;float: right;margin-top: 10px;font-size: 12px; margin-left: auto;margin-right: 10px;',
            // eslint-disable-next-line max-len
            size: [
              [4096, 4096],
              [2048, 4096],
              [2816, 2048],
              [2048, 2816],
              [3584, 2048],
              [2048, 3584],
            ],
          },
          {
            label: '1536*1536\u00A0 3\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0/张',
            text: '头像图',
            highlighted: false,
            style:
              'background-color: #222630;color: gray;border-radius: 27px;border: 2px solid #F10B68;padding: 3px;width: 165px;height: 30px;color: #FCFBFF;float: right;margin-top: 10px;font-size: 12px; margin-left: auto;margin-right: 10px;',
            // eslint-disable-next-line max-len
            size: [
              [1536, 1536],
              [1536, 3072],
              [2816, 2048],
              [2048, 2816],
              [3584, 2048],
              [2048, 3584],
            ],
          },
          {
            label: '2048*2048\u00A0 6\u00A0\u00A0\u00A0\u00A0\u00A0/张',
            text: '头像图',
            highlighted: false,
            style:
              'background-color: #222630;color: gray;padding: 3px;width: 165px;height: 30px;border-radius: 20px;border: 0px solid #b1b5c4;color: #FCFBFF;float: right;margin-top: 10px;font-size: 12px; margin-left: auto;margin-right: 10px;',
            // eslint-disable-next-line max-len
            size: [
              [2048, 2048],
              [1536, 3072],
              [2816, 2048],
              [2048, 2816],
              [3584, 2048],
              [2048, 3584],
            ],
          },
        ],

        // 第二个
        [
          {
            label: '2048*2048',
            text: '头像图',
            highlighted: true,
            style:
              'background-color: #222630;color: gray;text-align:center;padding: 3px 0;width: 165px;height: 30px;border-radius: 20px;border: 0px solid #b1b5c4;color: #FCFBFF;float: right;margin-top: 10px;font-size: 12px; margin-left: 5px;width:350px',
            // eslint-disable-next-line max-len
            size: [
              [2048, 2048],
              [1448, 2896],
              [2816, 2048],
              [2048, 2816],
              [3584, 2048],
              [2048, 3584],
            ],
          },
          {
            label: '4090*4090\u00A0 5\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0/张',
            text: '头像图',
            highlighted: false,
            style:
              'background-color: #222630;color: gray;padding: 3px;width: 165px;height: 30px;border-radius: 20px;border: 2px solid #793AEA;color: #FCFBFF;float: right;margin-top: 10px;font-size: 12px; ; margin-left: 20px;width:350px',
            // eslint-disable-next-line max-len
            size: [
              [1536, 1536],
              [1536, 3072],
              [2816, 2048],
              [2048, 2816],
              [3584, 2048],
              [2048, 3584],
            ],
          },
        ],

        // 第三个

        [
          {
            label: '2048*2048',
            text: '头像图',
            highlighted: false,
            style:
              'background-color: #222630;color: gray;text-align:center;padding: 3px 0;width: 165px;height: 30px;border-radius: 20px;border: 0px solid #b1b5c4;color: #FCFBFF;float: right;margin-top: 10px;font-size: 12px; margin-left: 5px;width:350px',
            // eslint-disable-next-line max-len
            size: [
              [2048, 2048],
              [1448, 2896],
              [2816, 2048],
              [2048, 2816],
              [3584, 2048],
              [2048, 3584],
            ],
          },
          {
            label: '4090*4090\u00A0 5\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0/张',
            text: '头像图',
            highlighted: false,
            style:
              'background-color: #222630;color: gray;padding: 3px;width: 165px;height: 30px;border-radius: 20px;border: 2px solid #793AEA;color: #FCFBFF;float: right;margin-top: 10px;font-size: 12px; ; margin-left: 20px;width:350px',
            // eslint-disable-next-line max-len
            size: [
              [1536, 1536],
              [1536, 3072],
              [2816, 2048],
              [2048, 2816],
              [3584, 2048],
              [2048, 3584],
            ],
          },
        ],
      ],
      // 当前选择按钮
      buttons6: [],
      // 我的收藏
      buttons7: [
        { label: '我的收藏', text: '头像图', highlighted: false },
        { label: 'MJ', text: '头像图', highlighted: false },
        { label: '二次元', text: '头像图', highlighted: false },
        { label: '科幻', text: '头像图', highlighted: false },
        { label: '儿童', text: '头像图', highlighted: false },
        { label: '设计', text: '头像图', highlighted: false },
        { label: '插画', text: '头像图', highlighted: false },
        { label: '中国风', text: '头像图', highlighted: false },
        { label: '风景', text: '头像图', highlighted: false },
        { label: '国风', text: '头像图', highlighted: false },
        { label: '设计', text: '头像图', highlighted: false },
      ],
      // 模型按钮
      buttons8: [
        // 第一
        [
          {
            id: 0,
            content: true,
            label: '未来建筑',
            text: '头像图',
            imgurl: import('@/assets/img/未来建筑.png'),
            highlighted: false,
            modelname: 'Vaporwave_Neon_Isometric',
          },
          {
            id: 1,
            content: true,
            label: '亚洲真人',
            text: '头像图',
            imgurl: import('@/assets/img/亚洲脸女-3.png'),
            highlighted: false,
            modelname: 'asianGirlM1228_v11.safetensors',
          },
          {
            id: 2,
            content: true,
            label: 'SD 2.0增强',
            text: '头像图',
            imgurl: import('@/assets/img/sd 2.0增强.png'),
            highlighted: false,
            modelname: 'Vaporwave_Neon_Isometric',
          },
          {
            id: 3,
            content: true,
            label: '艺术插画',
            text: '头像图',
            imgurl: import('@/assets/img/艺术插画.png'),
            highlighted: false,
            modelname: 'modill_v20.ckpt',
          },
          {
            id: 4,
            content: true,
            label: '写实插画',
            text: '头像图',
            imgurl: import('@/assets/img/写实插画.png'),
            highlighted: false,
            modelname: 'modill_v20.ckpt',
          },
          {
            id: 5,
            content: true,
            label: '游戏CG',
            text: '头像图',
            imgurl: import('@/assets/img/游戏cg.png'),
            highlighted: false,
            modelname: 'asianGirlM1228_v11.safetensors',
          },
          {
            id: 6,
            content: true,
            label: '游戏人设',
            text: '头像图',
            imgurl: import('@/assets/img/游戏人设.png'),
            highlighted: false,
            modelname: 'asianGirlM1228_v11.safetensors',
          },
          {
            id: 6,
            content: true,
            label: 'C4D',
            text: '头像图',
            imgurl: import('@/assets/img/c4d.png'),
            highlighted: false,
            modelname: 'MotionDesignV3_MotionDesignV3_80000',
          },
          {
            id: 6,
            content: true,
            label: '人物写真',
            text: '头像图',
            imgurl: import('@/assets/img/人物写真.png'),
            highlighted: false,
            modelname: 'Dimensions_ProPortrait v10',
          },
          {
            id: 6,
            content: true,
            label: '室内设计',
            text: '头像图',
            imgurl: import('@/assets/img/室内设计.png'),
            highlighted: false,
            modelname: 'xsarchitectural_v11',
          },
          {
            id: 6,
            content: true,
            label: '建筑设计',
            text: '头像图',
            imgurl: import('@/assets/img/建筑设计.png'),
            highlighted: false,
            modelname: 'Vaporwave_Neon_Isometric',
          },
          {
            id: 7,
            content: false,
            label: '更多',
            text: '头像图',
            imgurl: import('@/assets/img/纯色.png'),
            highlighted: false,
          },
        ],
        // 第二
        [
          {
            id: 0,
            content: true,
            label: '彩漫XL',
            text: '头像图',
            imgurl: import('@/assets/img/言和.png'),
            highlighted: true,
            modelname: 'epicMixV4_aniV2.safetensors',
          },
          {
            id: 1,
            content: true,
            label: '魔幻2.2D',
            text: '头像图',
            imgurl: import('@/assets/img/符文魔法.png'),
            highlighted: false,
            modelname: 'toonyouJP_alpha1.safetensors',
          },
          {
            id: 2,
            content: true,
            label: '2.5D魔幻',
            text: '头像图',
            imgurl: import('@/assets/img/森林魔法.png'),
            highlighted: false,
            modelname: 'breakdomain_M2150.safetensors',
          },
          {
            id: 3,
            content: true,
            label: '日漫2',
            text: '头像图',
            imgurl: import('@/assets/img/浊心斯卡蒂.png'),
            highlighted: false,
            modelname: 'disneyPixarCartoon_v10.safetensors',
          },
          {
            id: 4,
            content: true,
            label: '女性漫画',
            text: '头像图',
            imgurl: import('@/assets/img/夜兰.png'),
            highlighted: false,
            modelname: 'epicMixV4_aniV2.safetensors',
          },
          {
            id: 5,
            content: true,
            label: '动画电影',
            text: '头像图',
            imgurl: import('@/assets/img/原神-白术.png'),
            highlighted: false,
            modelname: 'toonyouJP_alpha1.safetensors',
          },
          {
            id: 6,
            content: true,
            label: '皮克斯卡通',
            text: '头像图',
            imgurl: import('@/assets/img/M870.png'),
            highlighted: false,
            modelname: 'disneyPixarCartoon_v10.safetensors',
          },
          {
            id: 6,
            content: true,
            label: '儿童故事',
            text: '头像图',
            imgurl: import('@/assets/img/儿童插画.png'),
            highlighted: false,
            modelname: 'breakdomain_M2150.safetensors',
          },
          {
            id: 6,
            content: true,
            label: '光效CG',
            text: '头像图',
            imgurl: import('@/assets/img/3D高光人物.png'),
            highlighted: false,
            modelname: 'disneyPixarCartoon_v10.safetensors',
          },
          {
            id: 6,
            content: true,
            label: '\u00A0\u00A0日番',
            text: '头像图',
            imgurl: import('@/assets/img/AK-阿尔法.png'),
            highlighted: false,
            modelname: 'toonyouJP_alpha1.safetensors',
          },
          {
            id: 6,
            content: true,
            label: '纹理CG',
            text: '头像图',
            imgurl: import('@/assets/img/远景立绘(1).png'),
            highlighted: false,
            modelname: 'epicMixV4_aniV2.safetensors',
          },
          {
            id: 7,
            content: false,
            label: '更多',
            text: '头像图',
            imgurl: import('@/assets/img/纯色.png'),
            highlighted: false,
          },
        ],
        // 第三
        [
          {
            id: 0,
            content: true,
            label: '达利风格',
            text: '头像图',
            imgurl: import('@/assets/img/达利风格.png'),
            highlighted: false,
            modelname: 'aZovyaPhotoreal_v2',
          },
          {
            id: 1,
            content: true,
            label: '裂纹玻璃',
            text: '头像图',
            imgurl: import('@/assets/img/玻璃工艺.png'),
            highlighted: false,
            modelname: 'anyloraCheckpoint_bakedvaeFtmseFp16NOT',
          },
          {
            id: 2,
            content: true,
            label: '欧式绘本',
            text: '头像图',
            imgurl: import('@/assets/img/中景立绘.png'),
            highlighted: false,
            modelname: 'aZovyaPhotoreal_v2',
          },
          {
            id: 3,
            content: true,
            label: 'Q版宠物',
            text: '头像图',
            imgurl: import('@/assets/img/胖胖动物.png'),
            highlighted: false,
            modelname: 'aZovyaPhotoreal_v2',
          },
          {
            id: 4,
            content: true,
            label: '国潮年兽',
            text: '头像图',
            imgurl: import('@/assets/img/国潮.png'),
            highlighted: false,
            modelname: 'aZovyaPhotoreal_v2',
          },
          {
            id: 5,
            content: true,
            label: '装饰艺术',
            text: '头像图',
            imgurl: import('@/assets/img/装饰派艺术.png'),
            highlighted: false,
            modelname: 'aZovyaPhotoreal_v2',
          },
          {
            id: 6,
            content: true,
            label: '日式插画',
            text: '头像图',
            imgurl: import('@/assets/img/平涂插画.png'),
            highlighted: false,
            modelname: 'aZovyaPhotoreal_v2',
          },
          {
            id: 6,
            content: true,
            label: '古风写意',
            text: '头像图',
            imgurl: import('@/assets/img/古风工笔.png'),
            highlighted: false,
            modelname: 'aZovyaPhotoreal_v2',
          },
          {
            id: 6,
            content: true,
            label: '卡通手办',
            text: '头像图',
            imgurl: import('@/assets/img/卡通微缩.png'),
            highlighted: false,
            modelname: 'aZovyaPhotoreal_v2',
          },
          {
            id: 6,
            content: true,
            label: '矢量插图',
            text: '头像图',
            imgurl: import('@/assets/img/矢量插画(1).png'),
            highlighted: false,
            modelname: 'aZovyaPhotoreal_v2',
          },
          {
            id: 6,
            content: true,
            label: '毛毡工艺',
            text: '头像图',
            imgurl: import('@/assets/img/少女插画.png'),
            highlighted: false,
            modelname: 'aZovyaPhotoreal_v2',
          },
          {
            id: 7,
            content: false,
            label: '更多',
            text: '头像图',
            imgurl: import('@/assets/img/纯色.png'),
            highlighted: false,
            modelname: 'aZovyaPhotoreal_v2',
          },
        ],
      ],
      // 第一
      buttons8_one: [
        {
          id: 0,
          content: true,
          label: '矢量插画',
          text: '头像图',
          imgurl: import('@/assets/img/char1.png'),
          highlighted: false,
        },
        {
          id: 1,
          content: true,
          label: '亚洲真人',
          text: '头像图',
          imgurl: import('@/assets/img/char2.png'),
          highlighted: false,
        },
        {
          id: 2,
          content: true,
          label: 'SD 2.0增强',
          text: '头像图',
          imgurl: import('@/assets/img/char3.png'),
          highlighted: false,
        },
        {
          id: 3,
          content: true,
          label: '艺术插画',
          text: '头像图',
          imgurl: import('@/assets/img/char4.png'),
          highlighted: false,
        },
        {
          id: 4,
          content: true,
          label: '写实插画',
          text: '头像图',
          imgurl: import('@/assets/img/char1.png'),
          highlighted: false,
        },
        {
          id: 5,
          content: true,
          label: '游戏CG',
          text: '头像图',
          imgurl: import('@/assets/img/char1.png'),
          highlighted: false,
        },
        {
          id: 6,
          content: true,
          label: '游戏人设',
          text: '头像图',
          imgurl: import('@/assets/img/char1.png'),
          highlighted: false,
        },
        {
          id: 6,
          content: true,
          label: 'C4D',
          text: '头像图',
          imgurl: import('@/assets/img/char1.png'),
          highlighted: false,
        },
        {
          id: 6,
          content: true,
          label: '人物写真2',
          text: '头像图',
          imgurl: import('@/assets/img/char1.png'),
          highlighted: false,
        },
        {
          id: 6,
          content: true,
          label: '室内设计',
          text: '头像图',
          imgurl: import('@/assets/img/char1.png'),
          highlighted: false,
        },
        {
          id: 6,
          content: true,
          label: '建筑设计',
          text: '头像图',
          imgurl: import('@/assets/img/char1.png'),
          highlighted: false,
        },
        {
          id: 7,
          content: false,
          label: '更多',
          text: '头像图',
          imgurl: import('@/assets/img/纯色.png'),
          highlighted: false,
        },
      ],
      button1Color: 'red',
      QRCode: 'https://img2.baidu.com/it/u=4007673202,2481607824&fm=253&fmt=auto&app=138&f=PNG?w=500&h=734',
      textarea: '',
      model: [
        { 风格模型: '有趣多彩，一键上手' },
        { 二次元模型: '快速生成二次元图像' },
        { 通用模型: '速度快，逻辑性强' },
      ],
      scale: ['1:1', '16:9', '16:25', '16:25', '16:25', '16:25'],
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      value2: 22,

      // TXT2img
      key: null,

      // eslint-disable-next-line camelcase, prefer-const
      config_create_mission: {
        method: 'post',
        url: 'https://ng.bultrail.top/yh/missions',
        headers: {
          'Hmac-Key': '3e8821cd4b9820e6dc7edababc8993d5',
          Hmac: '',
          'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
          'Content-Type': 'application/json',
        },
        data: '',
      },

      // 获取创建agic任务结果
      MissionID: '',
      // 获取存取的图片结果
      Missionimgurl: '',
      // 记录交换的图片
      changeLi: [],
      // 翻译后的prompt
      translateTextarea: '',

      // slider的长度
      value: 5, // 初始值
      min: 1, // 最小值
      max: 50, // 最大值
      step: 1, // 步长

      // 尺寸的x和y
      scalexy: [2048, 2048],

      // 当前选择模型风格
      currentModelName: 'epicMixV4_aniV2.safetensors',

      // 超时秒数
      timeout: false,
    };
  },

  methods: {
    showPopup() {
      this.isPopupVisible = true;
    },
    hidePopup() {
      this.isPopupVisible = false;
    },

    // 数量按钮
    increment() {
      this.value2 += 1;
    },
    decrement() {
      if (this.value2 > 0) {
        this.value2 -= 1;
      }
    },
    // 更换按钮颜色
    highlightButton(index) {
      this.buttons.forEach((button, i) => {
        // eslint-disable-next-line no-param-reassign
        button.highlighted = i === index;
      });
    },
    // 更换方块选中颜色
    highlightButton2(index) {
      console.log(index);
      this.buttons2.forEach((button, i) => {
        // eslint-disable-next-line no-param-reassign
        button.highlighted = i === index;
        console.log(button);
      });
    },
    // 更换方块选中颜色
    async highlightButton3(index) {
      this.buttons3.forEach((button, i) => {
        // eslint-disable-next-line no-param-reassign
        button.highlighted = i === index;
      });

      this.buttons3.forEach(async (button) => {
        if (button.highlighted) {
          if (index === 1) {
            this.textarea = '';
            this.$message.success('已经清空输入栏！');
            this.stayCss();
          } else {
            if (this.textarea.length === 0) {
              this.$message.error('输入栏不允许为空');
              this.stayCss();
              return;
            }
            await this.translatePrompt();
            this.textarea = this.translateTextarea;

            this.$message({
              message: '已经翻译成英文！',
              type: 'success',
            });

            this.stayCss();
          }
        }
      });
    },
    // 更换方块选中颜色,index为尺寸图片的索引
    highlightButton4(index) {
      // 记录当前尺寸
      this.currentScaleindex = index;
      this.buttons4.forEach((button, i) => {
        // eslint-disable-next-line no-param-reassign
        button.highlighted = i === index;
      });

      // 选择尺寸的具体数值
      const li = this.buttons6_all[this.currentModelIndex];

      li.forEach((element, i2) => {
        const x = String(element.size[index][0]);
        const y = String(element.size[index][1]);
        // 替换为真实按钮的值
        // this.buttons6_all[this.currentModelIndex][i2].label = `${x}*${y}`;

        // 更新版本的选择正确按钮
        let temp = this.buttons6_all[this.currentModelIndex][i2].label;
        const regex = /\d{4}/g; // 匹配 4 位数字的正则表达式
        temp = temp.replace(regex, 'A'); // 将匹配到的4个数字替换为XXXX
        // temp = temp.replace(regex, 'B'); // 将匹配到的4个数字替换为XXXX

        let count = 0;

        for (let i = 0; i < temp.length; i += 1) {
          if (temp[i] === 'A' && count === 0) {
            count += 1;
            temp = temp.substring(0, i) + x + temp.substring(i + 1, temp.length);
          }
          if (temp[i] === 'A' && count === 1) {
            temp = temp.substring(0, i) + y + temp.substring(i + 1, temp.length);
          }
        }
        // 替换成真实的
        this.buttons6_all[this.currentModelIndex][i2].label = temp;
      });
    },
    // 选择模型（嵌套触发二级函数）
    highlightButton5(index) {
      console.log('index is', index);

      // todo
      this.buttons5[index].highlighted = true;

      const index2 = this.modelPic[this.changeLi[0]];
      this.modelPic[this.changeLi[0]] = this.modelPic[this.changeLi[1]];
      this.modelPic[this.changeLi[1]] = index2;

      // 改变高亮和dim,模型贴图
      this.buttons5.forEach((button, i) => {
        // eslint-disable-next-line no-param-reassign
        button.highlighted = i === index;
        if (index === i) {
          const index1 = this.modelPic[index];
          this.modelPic[index] = this.modelPic[index + 3];
          this.modelPic[index + 3] = index1;
          this.changeLi[0] = index;
          this.changeLi[1] = index + 3;
        }
      });
      // 选择按钮风格矩形
      this.chooseArray(index);

      // 改变尺寸选择按钮显示类型
      let newIndex = 0;
      if (index === 0) {
        newIndex = 2;
      }
      if (index === 2) {
        newIndex = 0;
      }
      if (index === 1) {
        newIndex = 1;
      }

      // 赋值给索引
      this.currentModelIndex = newIndex;
      console.log('newindex:', newIndex);
      this.buttons6 = [];
      this.buttons6_all[newIndex].forEach((item) => {
        // todo 设置buttons6_all对应的分辨率显示
        this.buttons6.push(item);
      });
    },
    // 选择风格数组
    chooseArray(index) {
      this.buttons8_one = this.buttons8[index];
    },
    // 选择模型
    highlightButton6(index) {
      // console.log(this.scalexy[0], this.scalexy[1]);
      // this.buttons6_all[this.scalexy[1]][this.scalexy[0]] = false;
      // 存放历史按钮位置信息
      // eslint-disable-next-line prefer-destructuring
      this.scalexy[0] = this.buttons6_all[this.currentModelIndex][index].size[index][0];
      // eslint-disable-next-line prefer-destructuring
      this.scalexy[1] = this.buttons6_all[this.currentModelIndex][index].size[index][1];
      // 当只有两个按钮的时候
      console.log('index...', index);
      console.log('this.currentScaleindex...', this.currentScaleindex);

      // this.buttons6_all[this.currentModelIndex][index].highlighted = true;
      this.buttons6_all[this.currentModelIndex].forEach((item, i) => {
        if (i === index) {
          this.buttons6_all[this.currentModelIndex][i].highlighted = true;
        } else {
          this.buttons6_all[this.currentModelIndex][i].highlighted = false;
        }
      });
    },
    // 选择模型
    highlightButton7(index) {
      this.buttons7.forEach((button, i) => {
        // eslint-disable-next-line no-param-reassign
        button.highlighted = i === index;
      });
    },
    // 我的收藏
    highlightButton8(index) {
      this.buttons8_one.forEach((button, i) => {
        // eslint-disable-next-line no-param-reassign
        button.highlighted = i === index;
      });
      this.currentModelName = this.buttons8_one[index].modelname;
    },

    // slider逻辑
    handleSlide() {
      console.log(this.value); // 处理滑块滑动事件的逻辑
    },

    // 翻译输入框
    async translatePrompt() {
      const data = JSON.stringify({
        str: `${this.textarea}`,
      });
      // 加密请求体和请求路径
      const config = {
        method: 'post',
        url: 'https://ng.bultrail.top/yh/translate',
        // 伪装为浏览器
        headers: {
          'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
          'Content-Type': 'application/json',
        },
        data,
      };
      const response = await axios(config);
      this.translateTextarea = response.data.data;
      console.log(this.translateTextarea);
    },

    // 改变是否可以提交任务的状态
    changeMissionState() {
      this.canProcessrequest = !this.canProcessrequest;
    },

    // 处理请求第一个api
    async process_request() {
      // 查看是否选择主题

      // 是否允许提交任务
      if (this.canProcessrequest && this.textarea !== '') {
        // 执行异步函数，但保持同步顺序
        this.$message.success('成功提交任务');
        this.stayCss();
        // await this.changeMissionState();
        this.canProcessrequest = false;
      } else {
        if (this.textarea === '') {
          this.$message.error('输入栏不能为空！');
          this.stayCss();
          return -4;
        }
        this.$message.error('任务正在进行...请稍后重试');

        this.stayCss();
        return -2;
      }

      const sizex = this.scalexy[0] / 3;
      const sizey = this.scalexy[1] / 3;

      // 输入为空，直接跳过
      if (this.textarea === '') {
        // 弹出
        this.$message.error({
          message: '描述词不能为空',
        });

        this.stayCss();
        return -1;
      }

      console.log('model:', this.currentModelName);

      // 等待翻译
      await this.translatePrompt();
      console.log('trans:', this.translatePrompt);

      // 参数列表
      const prompt = `"prompt":"${this.translateTextarea}",`;
      const batchsize = `"batch_size":${1},`;
      const width = `"width":${sizex},`;
      const height = `"height":${sizey},`;
      // 注意，这里orderid被赋值为空
      const orderid = '"order_id":"WLpnC1686641623444",';
      // eslint-disable-next-line camelcase
      const override_settings = `"override_settings":{"sd_model_checkpoint":"${this.currentModelName}"},`;

      // 高清修复器
      // eslint-disable-next-line camelcase
      const enable_hr = '"enable_hr":true,';
      // eslint-disable-next-line camelcase
      const hr_scale = '"hr_scale":3,';
      // eslint-disable-next-line camelcase
      const hr_upscaler = '"hr_upscaler":"R-ESRGAN 4x+",';
      // eslint-disable-next-line camelcase
      const hr_upscaler2 = '"hr_upscaler":"R-ESRGAN 4x+ Anime6B",';
      // eslint-disable-next-line camelcase
      const hr_second_pass_steps = '"hr_second_pass_steps":50,';
      // eslint-disable-next-line camelcase
      const denoising_strength = '"denoising_strength":0.3';

      let bodyParam = '';
      if (this.currentModelIndex !== 1) {
        // eslint-disable-next-line camelcase
        bodyParam = `{${prompt}${batchsize}${width}${height}${orderid}${override_settings}${enable_hr}${hr_scale}${hr_upscaler}${hr_second_pass_steps}${denoising_strength}}`;
      } else {
        // eslint-disable-next-line camelcase
        bodyParam = `{${prompt}${batchsize}${width}${height}${orderid}${override_settings}${enable_hr}${hr_scale}${hr_upscaler2}${hr_second_pass_steps}${denoising_strength}}`;
      }

      // eslint-disable-next-line camelcase
      // bodyParam = `{${prompt}${batchsize}${width}${height}${orderid}${override_settings}}`;

      const data = JSON.stringify({
        type: 'txt2img',
        body: bodyParam,
        call_back_url: '',
      });

      // 加密请求体和请求路径
      const config = {
        method: 'post',
        url: 'https://ng.bultrail.top/yh/hmac_encode_test',
        headers: {
          'Hmac-Key': '3e8821cd4b9820e6dc7edababc8993d5',
          URI: '/sd/v1/missions',
          'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
          'Content-Type': 'application/json',
        },
        data,
      };
      // 尝试获取参数
      try {
        const response1 = await axios(config);

        // eslint-disable-next-line camelcase
        const api_encode_key = response1.data.data;
        // eslint-disable-next-line camelcase
        this.key = api_encode_key;

        console.log('key is', this.key);
        console.log('key is', typeof this.key);

        // 这里加载参数
        // eslint-disable-next-line camelcase
        this.config_create_mission.headers.Hmac = this.key;
        this.config_create_mission.data = data;

        console.log('config_create_mission', this.config_create_mission);

        // 从data获取数据
        const response2 = await axios(this.config_create_mission);

        this.MissionID = response2.data.data.id;
        console.log('we got mission id', this.MissionID);
        console.log('succeed to create misson and save here...');
        this.$message.success('成功创建任务！');
        this.stayCss();

        // 设置超时退出机制(2分钟超时)
        setTimeout(() => {
          this.timeout = true;
        }, 3600000);
      } catch (error) {
        // console.log('this a error ', error);
      }

      // 开始轮询
      // this.$alert('start long pooling from server...');
      this.$emit('changeToWaiting');
      await this.fetchData();

      return null;
    },

    stayCss() {
      const elements = document.querySelectorAll('.el-message');

      elements.forEach((el) => {
        // eslint-disable-next-line no-param-reassign
        el.style.cssText =
          'background-color: #333; color: #d41b1b; width: 182px; height: 40px; border-radius: 6px; border: 0px;';
      });
    },

    // 改变timeout
    changeTimeoutState() {
      this.timeout = !this.timeout;
    },

    // 轮询算法
    async fetchData() {
      // 加密请求体和请求路径
      const requestPath = `https://ng.bultrail.top/yh/missions/${this.MissionID}`;

      axios
        .get(requestPath)
        // eslint-disable-next-line consistent-return
        .then(async (response) => {
          const { data } = response.data;
          if (data && data.result === 'succeed') {
            console.log('succeed to get result...');
            // 提醒总线开启任务
            this.$emit('showBig', data.result_urls);
            this.canProcessrequest = true;

            return;
          }
          // 结果生成失败
          if (data && data.result === 'failed') {
            console.log('fail to get result');
            this.canProcessrequest = true;
            return;
          }
          if (this.timeout) {
            this.$emit('timeout');
            this.$message.error('执行任务超时...');
            this.canProcessrequest = true;
            this.stayCss();
            // this.timeout = false;
            // 等待状态转移
            await this.changeTimeoutState();
            // this.canProcessrequest = true;
            return;
          }
          console.log('waiting...');
          console.log(data);
          // 继续下一次轮询,10秒一次
          setTimeout(this.fetchData, 3000);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          // 继续下一次轮询
          setTimeout(this.fetchData, 3000);
        });
    },
  },
  computed: {
    modelChoose() {
      return modelChoose;
    },
    wordcount() {
      return this.textarea.length;
    },
    // 计算slider
    gradientColor() {
      // eslint-disable-next-line no-mixed-operators
      const percentage = ((this.value - this.min) / (this.max - this.min)) * 100;
      return `linear-gradient(to right, #8E50FF ${percentage}%, #333B4F ${percentage}%)`;
    },
  },
  created() {},
  mounted() {
    // 运行监听选择模型监听按钮
    this.highlightButton5(1);
    // console.log('model:', this.buttons5);
  },
};
</script>

<style lang="less" scoped>
.app-aside {
  margin-top: 30px;
  width: 100%;
  height: auto;
  background-color: #141416;
  .flex-mode(row, center, flex-start);
  .control-container {
    //border: red 1px solid;
    width: 692px;
    height: auto;
    //background-color: yellow;
    .box-card {
      .clearfix {
        width: 100%;
        height: 56px;
        display: flex;
        height: 56px;
        align-items: center;
        justify-content: space-between;
        .clearfix-content {
          width: 131px;
          height: 56px;
          font-size: 40px;
          font-family:
            PingFangSC-Semibold,
            PingFang SC;
          font-weight: 600;
          color: #fcfbff;
          line-height: 56px;
        }
      }
      .model-choose {
        width: 100%;
        margin-top: 30px;
        .model-choose-item {
          position: relative;
          width: 223px;
          height: 123px;
          background: #222630;
          border-radius: 6px;
          .flex-mode(column);
          .model-choose-img {
            position: absolute;
            left: 0;
            top: 0;
            border-radius: 6px;
            width: 100%;
            height: 100%;
          }
          > span {
            z-index: 5;
          }
          .choose-item-content {
            font-size: 14px;
            font-family:
              PingFangSC-Regular,
              PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.85);
            line-height: 20px;
          }
          .choose-item-title {
            font-size: 14px;
            font-family:
              PingFangSC-Semibold,
              PingFang SC;
            font-weight: 600;
            color: #ffffff;
            line-height: 20px;
          }
        }
      }
      .picture-description {
        width: 100%;
        margin-top: 30px;
        .btn-style {
          margin-top: 20px;
          margin-bottom: 10px;
          width: 100%;
          height: 24px;
          .flex-mode(row, space-between);
        }
        .picture-description-input {
          position: relative;
          background-color: #141416;
          margin-top: 10px;
          height: 100px;
          :deep(.el-textarea__inner) {
            background-color: #141416;
          }
          .show-words {
            font-size: 12px;
            font-family:
              PingFangSC-Regular,
              PingFang SC;
            font-weight: 400;
            color: rgba(205, 220, 255, 0.45);
            line-height: 17px;
            position: absolute;
            right: 0;
            bottom: 0;
          }
        }
      }
      .size-choose {
        .size-choose-ratio {
          .flex-mode(row, space-between);
        }
        .size-choose-detail {
          margin-top: 20px;
        }
      }
      .model-theme {
        margin-top: 40px;
        width: 100%;
        height: 40px;
        overflow: hidden;
      }
      .model-theme-miniImg-container {
        //border: yellow 1px solid;
        margin-top: 28px;
      }
      .img-number {
        margin-top: 30px;
        .slider {
          width: 100%;
          // margin: 20px auto;
          border-radius: 2px;
          .flex-mode(row, space-between);
          .show-number {
            width: 55px;
            height: 30px;
            border-radius: 6px;
            border: 2px solid rgba(119, 163, 255, 0.25);
            margin-left: 635px;
            .flex-mode();
          }
        }
        .use-document {
          margin-bottom: 30px;
          margin-top: 30px;
          font-size: 14px;
          font-family:
            PingFangSC-Regular,
            PingFang SC;
          font-weight: 400;
          color: rgba(205, 220, 255, 0.85);
          line-height: 20px;
          > a {
            font-size: 14px;
            font-family:
              PingFangSC-Regular,
              PingFang SC;
            font-weight: 400;
            color: #8e50ff;
            line-height: 20px;
          }
        }
      }
      .btn-create-container {
        z-index: 99;
        position: sticky;
        bottom: 0;
        padding-top: 10px;
        background-color: #141416;
        padding-bottom: 30px;
        .btn-create {
          cursor: pointer;
          width: 690px;
          height: 50px;
          background-color: #793aea;
          border-radius: 25px;
          .flex-mode(column);
          .btn-create-now {
            font-size: 16px;
            font-family:
              PingFangSC-Medium,
              PingFang SC;
            font-weight: 500;
            color: #ffffff;
            line-height: 22px;
          }
          .btn-create-detail {
            font-size: 12px;
            font-family:
              PingFangSC-Regular,
              PingFang SC;
            font-weight: 400;
            color: #ffffff;
            line-height: 17px;
          }
        }
      }
    }
  }
  .show-picture-container {
    margin-left: 21px;
    width: 710px;
    height: 845px;
    //background-color: #24262e;
    .flex-mode(row, center, flex-start);
    .main-picture {
      width: 665px;
      height: 845px;
      //background-color: red;
      .big-img {
        width: 666px;
        height: 709px;
        background: #222630;
        border-radius: 10px;
      }
      .small-images {
        margin-top: 10px;
        //background-color: blue;
        width: 666px;
        height: 125px;
        .flex-mode(row, space-between, center);
        .small-images-item {
          width: 125px;
          height: 125px;
          border-radius: 6px;
          border: 2px solid #793aea;
          > img {
            width: 125px;
            height: 125px;
          }
        }
      }
    }
    .picture-control {
      margin-left: 20px;
      width: 25px;
      height: 300px;
      .flex-mode(column, flex-start, center);
      //background-color: green;
      > img {
        &:nth-child(1) {
          margin-top: 0px;
        }
        cursor: pointer;
        width: 24px;
        height: 24px;
        margin-top: 20px;
      }
    }
  }
}
.card_model {
  width: 150px;
}

:deep(.readonly .el-textarea__inner) {
  background-color: #141416;
  border-radius: 6px;
  border: 2px solid #77a2ff37;
  padding: 20px;
  font-size: 12px;
  font-family: 'heiti';
  color: #d1e9ff;
  width: 734px;
}

// 圆形样式
.highlighted {
  background-color: #793aea; /* 设置高亮样式 */
  color: black;
  padding: 3px 0;
  width: 44px;
  height: 24px;
  border-radius: 40px;
  border: 0px solid #353945;
  color: #fcfbff;
  float: left;
  margin-bottom: 5px;
  font-size: 10px;
  margin-right: 5px;
}
.dimmed {
  background-color: #222630; /* 设置暗淡样式 */
  color: gray;
  padding: 3px 0;
  width: 44px;
  height: 24px;
  border-radius: 40px;
  border: 0px solid #353945;
  color: #fcfbff;
  float: left;
  margin-bottom: 5px;
  font-size: 10px;
  margin-right: 5px;
}

.highlighted2 {
  background-color: #793aea; /* 设置高亮样式 */
  color: black;
  padding: 3px 0;
  width: 55px;
  height: 25px;
  border-radius: 4px;
  border: 0px solid #353945;
  color: #fcfbff;
  float: left;
  margin-bottom: 10px;
  font-size: 12px;
  margin-left: 1px;
}

.dimmed2 {
  background-color: #222630; /* 设置暗淡样式 */
  color: gray;
  padding: 3px 0;
  width: 55px;
  height: 25px;
  border-radius: 4px;
  border: 0px solid #353945;
  color: #fcfbff;
  float: left;
  margin-bottom: 10px;
  font-size: 12px;
  margin-left: 1px;
}

.highlighted3 {
  background-color: #793aea; /* 设置高亮样式 */
  color: black;
  padding: 3px 0;
  width: 90px;
  height: 25px;
  border-radius: 15px;
  border: 0px solid #353945;
  color: #fcfbff;
  margin-top: 10px;
  font-size: 12px;
  margin-left: 10px;
}

.dimmed3 {
  background-color: #222630; /* 设置暗淡样式 */
  color: gray;
  padding: 3px 0;
  width: 90px;
  height: 25px;
  border-radius: 15px;
  border: 0px solid #353945;
  color: #fcfbff;
  margin-top: 10px;
  font-size: 12px;
  margin-left: 10px;
}

// 尺寸样式
.highlighted4 {
  margin-top: 20px;
  background-color: #793aea; /* 设置高亮样式 */
  color: black;
  width: 107px;
  height: 107px;
  border-radius: 10px;
  border: 1px solid #b1b5c4;
  color: #fcfbff;
  font-size: 12px;
  background: linear-gradient(to right, #23273e, #313965, #23273e); /* 使用线性渐变，从红色到蓝色 */
  .flex-mode(column);
  gap: 5px;
}

.dimmed4 {
  margin-top: 20px;
  background-color: #222630; /* 设置暗淡样式 */
  color: gray;
  padding: 3px 0;
  width: 107px;
  height: 107px;
  border-radius: 10px;
  border: 0px solid #b1b5c4;
  color: #fcfbff;
  font-size: 12px;
  .flex-mode(column);
  gap: 5px;
}

// 模型选择
.highlighted5 {
  // background-color: #793AEA; /* 设置高亮样式 */
  // color: black;
  width: 223px;
  height: 123px;
  border-radius: 6px;
  border: 0px solid #8d56f0;
  color: #fcfbff;
  font-size: 12px;
  background: linear-gradient(to right, #23273e, #313965, #23273e); /* 使用线性渐变，从红色到蓝色 */
  .flex-mode(row, center, center);
}
.dimmed5 {
  background-color: #222630; /* 设置暗淡样式 */
  color: gray;
  width: 223px;
  height: 123px;
  border-radius: 6px;
  border: 0px solid #b1b5c4;
  color: #fcfbff;
  font-size: 12px;
  .flex-mode(row, center, center);
}
// 尺寸圆角按钮
.highlighted6 {
  background-color: #793aea; /* 设置高亮样式 */
  color: black;
  padding: 3px 0;
  width: 172px;
  height: 36px;
  border-radius: 20px;
  border: 1px solid #b1b5c4;
  color: #fcfbff;
  float: right;
  margin-top: 10px;
  font-size: 12px;
  margin-right: 10px;

  background: linear-gradient(to right, #23273e, #313965, #23273e); /* 使用线性渐变，从红色到蓝色 */
}
.dimmed6 {
  background-color: #222630; /* 设置暗淡样式 */
  color: gray;
  padding: 3px 0;
  width: 172px;
  height: 36px;
  border-radius: 20px;
  border: 0px solid #b1b5c4;
  color: #fcfbff;
  float: right;
  margin-top: 10px;
  font-size: 12px;
  margin-right: 10px;
}

// 两个按钮的样式
.highlighted6_2 {
  background-color: #793aea; /* 设置高亮样式 */
  color: black;
  width: 165px;
  height: 36px;
  border-radius: 20px;
  border: 1px solid #b1b5c4;
  color: #fcfbff;
  font-size: 12px;
  background: linear-gradient(to right, #23273e, #313965, #23273e); /* 使用线性渐变，从红色到蓝色 */
}
.dimmed6_2 {
  background-color: #222630; /* 设置暗淡样式 */
  color: gray;
  width: 165px;
  height: 36px;
  border-radius: 20px;
  border: 0px solid #b1b5c4;
  color: #fcfbff;
  font-size: 12px;
}

// 我的收藏
.highlighted7 {
  background-color: #141416; /* 设置高亮样式 */
  color: #cddcff;
  width: 66px;
  height: 40px;
  border-radius: 0px;
  border: 0px solid #b1b5c4;
  font-size: 13px;
  border-bottom: 2px solid #7851ec;
  // background: linear-gradient(to right, #23273e, #313965,#23273e); /* 使用线性渐变，从红色到蓝色 */
}
.dimmed7 {
  background-color: #141416; /* 设置暗淡样式 */
  color: #cddcff;
  overflow: hidden;
  width: 66px;
  height: 40px;
  border-radius: 0px;
  border: 0px solid #b1b5c4;
  font-size: 13px;
  border-bottom: 2px solid #24262d;
  // margin-left: auto;
}
// 我的收藏
.highlighted8 {
  background-color: #141416; /* 设置高亮样式 */
  color: black;
  overflow: hidden;
  // display: flex;
  position: relative;
  padding: 3px 0;
  width: 175px;
  height: 90px;
  border-radius: 10px;
  border: 0px solid #b1b5c4;
  color: #fcfbff;
  float: right;
  margin-left: 6px;
  font-size: 13px;
  border: 2px solid #fcfcfd;
  margin-top: 10px;
  // background: linear-gradient(to right, #23273e, #313965,#23273e); /* 使用线性渐变，从红色到蓝色 */
}
.dimmed8 {
  background-color: #191a1e; /* 设置暗淡样式 */
  color: gray;
  overflow: hidden;
  // display: flex;
  position: relative;
  padding: 3px 0;
  width: 175px;
  height: 90px;
  border-radius: 10px;
  border: 0px solid #b1b5c4;
  color: #fcfbff;
  float: right;
  font-size: 13px;
  margin-left: 6px;
  border: 2px solid #24262d;
  margin-top: 10px;
  // margin-left: auto;
}
// 悬浮按钮变色
/* 按钮样式 */
.hover-button {
  background-color: #23262f;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  float: left;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

/* 悬浮时变色效果 */
.hover-button:hover {
  background-color: #323a68;
  border: 1px solid #b1b5c4;
}

.hover-div {
  width: 200px;
  height: 50px;
  background-color: gray;
  color: white;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}

// 二维码框
.popup-div {
  position: absolute;
  z-index: 99;
  padding: 20px;
  background-color: #2c313e;
  color: #cddcff;
  margin-top: 40px;
  margin-right: 400px;
  width: 520px;
  height: 210px;
  border-radius: 6px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.teaching-enter-active,
.teaching-leave-active {
  transition: opacity 0.5s;
}

.teaching-enter,
.teaching-leave-to {
  opacity: 0;
  transition: opacity 0.5s;
}

input[type='range'] {
  width: 80%;
  height: 8px;
  appearance: none;
  background: transparent;
  outline: none;
  position: absolute;
}

// input[type="range"]::-webkit-slider-thumb {
//   // appearance: none;
//   width: 20px;
//   height: 20px;
//   // border-radius: 50%;
//   background: #333;
//   border: 13px solid yellow;
//   cursor: pointer;
// }

// /* Mozilla 浏览器 */
// input[type="range"]::-webkit-slider-thumb {
//   width: 15px;
//   height: 15px;
//   background-color: #8E50FF;
//   border: 2px solid white;
//   border-radius: 50%;
//   cursor: pointer;
// }

/* Google Chrome */
input[type='range']::-webkit-slider-thumb {
  width: 15px;
  height: 15px;
  background-color: #8e50ff;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  -webkit-appearance: none; /* 关键属性，用于移除默认的外观 */
}

/* Mozilla 浏览器 */
input[type='range']::-moz-range-thumb {
  width: 15px;
  height: 15px;
  background-color: #8e50ff;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
}

.dark-message {
  background-color: #333; /* 修改为你想要的深色背景色 */
  color: #d41b1b; /* 修改为你想要的深色文字颜色 */
  width: 182px;
  height: 40px;
  border-radius: 2px;
  border: 0px;
}

/* 在您的样式文件中定义消息框的自定义样式 */
.custom-message {
  background-color: #333;
  color: #d41b1b;
  width: 182px;
  height: 40px;
  border-radius: 2px;
  border: 0px;
}
</style>
