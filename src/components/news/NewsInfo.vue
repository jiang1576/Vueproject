<template>
    <div class="newsinfo-containers">
      <h3 class="title">{{newsinfo.title}}</h3>
      <p class="sub-title">
        <span>发表时间：{{newsinfo.add_time}}</span>
        <span>点击：{{newsinfo.click}}</span>
      </p>
      <hr>
      <div class="content" v-html="newsinfo.content"></div>

      <comment></comment>
    </div>
</template>

<script>
  import comment from '../subcomponents/comment'
    export default {
        name: "NewsInfo",
      data(){
          return{
            id:this.$route.params.id,
            newsinfo:{},
          }
      },
      created(){
          this.getNewsInfo();
      },
      methods:{
          getNewsInfo(){
            this.$http.get('http://www.localhost:3000/getnew/'+this.id).then(result=>{
              console.log(result.body)
              this.newsinfo=result.body.message[0];}
            );
          }
      },
      components:{
          comment,
      },
    }
</script>

<style scoped>
  .newsinfo-containers{
    padding: 0 5px;
  }
  .title{
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .sub-title{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;

  }
  .content{

  }

</style>
