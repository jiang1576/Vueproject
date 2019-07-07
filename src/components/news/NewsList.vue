<template>
    <div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
          <router-link :to="'/home/NewsInfo'+item.id">
            <img class="mui-media-object mui-pull-left" :src="item.img_url">
            <div class="mui-media-body">
              {{item.title}}
              <p class='mui-ellipsis'>
                <span>发表时间：{{item.add_time}}</span>
                <span>点击：{{item.click}}</span>
              </p>
            </div>
          </router-link>
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
              url: 'http://www.localhost:3000/newslist',
              // method: 'get',
              // // 请求体重发送的数据
              // data: {
              //   type: 'top'
              // },
              // // 设置请求头
              // headers: {
              //   'Authorization': 'APPCODE bfdc628102d14dbdbc7c12fed9761b9e'
              // }
            }).then(result=>{
              this.newslist=result.body.message;
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
