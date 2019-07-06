<template>
    <div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.date">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" :src="item.thumbnail_pic_s">
            <div class="mui-media-body">
              {{item.title}}
              <p class='mui-ellipsis'>
                <span>发表时间：{{item.date}}</span>
                <span>来源：{{item.author_name}}</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "NewsList",
      data(){
          return{
            newslist:[],
      }},
      created(){
        this.getNewsList();
      },
      methods:{
          getNewsList(){
            this.$http({
              url: '/api',
              method: 'get',
              // 请求体重发送的数据
              data: {
                type: 'top'
              },
              // 设置请求头
              headers: {
                'Authorization': 'APPCODE bfdc628102d14dbdbc7c12fed9761b9e'
              }
            }).then(result=>{
              this.newslist=result.body.result.data;
              console.log(this.newslist)
            })
          }
      }
    }
</script>

<style scoped>
.mui-ellipsis{
  font-size: 12px;
  color: #226aff;
  display: flex;
  justify-content: space-between;
}
</style>
