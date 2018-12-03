vue-awesome-swiper的使用
1、cd到项目里面npm install vue-awesome-swiper --save  安装依赖package.json里面有vue-awesome-swiper即可
  "dependencies": {
      "element-ui": "^2.4.11",
      "vue": "^2.5.11",
      "vue-awesome-swiper": "^3.1.3"
    },
2、去应用轮播图的vue文件引用
  /*组件方式引用*/
      import 'swiper/dist/css/swiper.css'////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
      import { swiper, swiperSlide } from 'vue-awesome-swiper'
      export default {
        data() {
          return {
              swiperOption: {
                notNextTick: true,
                autoplay: true,
                speed: 500,
                loop: true
              },
            };
          },
      components: {
        swiper,
        swiperSlide
      }
  }
3、引用轮播的vue写轮播图代码即可
     <swiper :options="swiperOption">
      <swiper-slide><img src="../assets/images/xingtong1.jpg" class="lunbotu"></swiper-slide>
      <swiper-slide><img src="../assets/images/xingtong2.jpg" class="lunbotu"></swiper-slide>
      <swiper-slide><img src="../assets/images/xingtong3.jpg" class="lunbotu"></swiper-slide>
    </swiper>
