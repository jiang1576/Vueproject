<template>
    <div>
      <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/NewsList">
          <img src="../assets/menu1.png">
          <div class="mui-media-body">新闻资讯</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../assets/menu2.png">
          <div class="mui-media-body">图片分享</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../assets/menu3.png">
          <div class="mui-media-body">商品购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../assets/menu4.png">
          <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../assets/menu5.png">
          <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../assets/menu6.png">
          <div class="mui-media-body">联系我们</div></a></li>

      </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeContainter",
      data(){
          return{}
      },
      created(){
          this.getlunbotu();
      },
      methods:{
          getlunbotu(){
          //  获取轮播图的方法
            this.$http.get("/api/getlunbo").then(result=>{
              console.log(result.body);
            })
          }
      }
    }
</script>

<style  scoped>
  .mint-swipe{
    height: 200px;
  }
  .mint-swipe .mint-swipe-item:nth-child(1){
    background-color: red;
  }
  .mui-grid-view.mui-grid-9{
    background-color: white;
    border: none;

  }
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size: 13px;
  }
  .mui-grid-view.mui-grid-9 img{
    width: 60px;
    height: 60px;
  }
  .mui-table-view.mui-grid-view .mui-table-view-cell{
    border: none;
  }



</style>
