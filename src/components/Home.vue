<template>
<div>
  <!-- 注意代码必须放在div根节点里面 -->
  <h1>我是home组建</h1>
  <!-- <el-row>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </el-row>-->

   <swiper :options="swiperOption">
      <swiper-slide><img src="../assets/images/xingtong1.jpg" class="lunbotu"></swiper-slide>
      <swiper-slide><img src="../assets/images/xingtong2.jpg" class="lunbotu"></swiper-slide>
      <swiper-slide><img src="../assets/images/xingtong3.jpg" class="lunbotu"></swiper-slide>
    </swiper>
    <!--以下看需要添加-->
    <div class="swiper-scrollbar"></div> //滚动条
    <div class="swiper-button-next"></div> //下一项
    <div class="swiper-button-prev"></div> //上一项
    <div class="swiper-pagination"></div> //标页码
</div>
</template>
<script>
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

</script>

 <style lang="scss" scoped>
//  scoped 表示局部作用域
    h1{color:red;}
    .lunbotu{height:300px;}
</style>


