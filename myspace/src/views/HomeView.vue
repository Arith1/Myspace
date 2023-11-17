<template>
  <ContentBase>
    <div class="row">
      <div class="col-sm-3 mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body" style="width: 18rem;">
            <img src="https://www.notion.so/images/page-cover/woodcuts_1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">MySql学习</h5>
              <p class="card-text">MySQL数据库服务是一个完全托管的数据库服务，可使用世界上最受欢迎的开源数据库来部署云原生应用程序。</p>
              <a href="https://miyan.notion.site/Mysql-aff411f504814be889af7b63c796dcbc?pvs=4" target="_blank"
                class="btn btn-primary">打开</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3 mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body" style="width: 18rem;">
            <img src="https://www.notion.so/images/page-cover/woodcuts_2.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">ChatGpt</h5>
              <p class="card-text">ChatGpt是OpenAI开发的人工智能聊天机器人程序，该程序使用基于GPT-3.5架构的大型语言模型并以强化学习训练。</p>
              <a href="https://www.miyan.ac.cn/" target="_blank" class="btn btn-primary">打开</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3 mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body" style="width: 18rem;">
            <img src="https://www.notion.so/images/page-cover/woodcuts_3.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">SuperCook</h5>
              <p class="card-text">SuperCook是一款免费在线食谱生成器/食谱搜索引擎，可让你根据家里现有的食材进行搜索，输入食材自动出菜谱，帮助用户找到数以千计的食谱，充分利用家里的食材，非常方便快捷的在线食谱生成器和食谱搜索引擎，而且支持全球多种语言，使用无需注册登录，还支持手机端app</p>
              <a href="https://www.miyan.ac.cn/" target="_blank" class="btn btn-primary">打开</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </ContentBase>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'不用hellowworld.vue了
import ContentBase from '../components/ContentBase.vue';
export default {
  name: 'HomeView',
  components: {
    // HelloWorld
    ContentBase,
  }
}
</script>

<style>
.card-img-top {
  width: 256px;
  height: 170px;
}
.card-text {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.container {
  margin-top: 20px;
}
</style>