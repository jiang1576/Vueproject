<template>
  <div class="cmt-containers">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要评论的内容" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2017-7-7</div>
        <div class="cmt-body">
          用户发表的留言内容
        </div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2017-7-7</div>
        <div class="cmt-body">
          用户发表的留言内容
        </div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2017-7-7</div>
        <div class="cmt-body">
          用户发表的留言内容
        </div>
      </div>
    </div>
    <mt-button type="primary" size="large" plain>加载更多</mt-button>
  </div>

</template>

<script>
    export default {
        name: "comment",
      data(){
          return{}
      },
      methods:{
          getComments(){
            this.$http.get('http://www.localhost:3000/getcomments');
          }
      },
    }
</script>

<style scoped>
  .cmt-containers h3{
    font-size: 18px;
    margin: 0;
  }
  .cmt-containers textarea{
    font-size: 14px;
    height: 85px;
  }
  .cmt-list{
    margin: 5px 0;
  }
  .cmt-list .cmt-item{
    font-size: 13px;
  }
  .cmt-list .cmt-item .cmt-title{
    background-color: #cccccc;
    line-height: 30px;
  }
  .cmt-list .cmt-item .cmt-body{
    line-height: 35px;
    text-indent: 2em;
  }
</style>
