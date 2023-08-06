<template>

    <ContentBase>
      <!-- div.row>(div.col-3+div.col-9) -->
      <div class="row">
        <div class="col-3">
          <UserProfileInfo @follow1 = "follow" @unfollow1 = "unfollow" :user="user"/>

          <!-- 传递user常量 -->
          <UserProfileWrite @post_a_post1 = "post_a_post"/>
        </div>
        <div class="col-9">
          <UserProfilePosts  :posts ="posts"/>
        </div>
      </div>

    </ContentBase>

</template>

<script>
import { reactive } from 'vue';
import ContentBase from '../components/ContentBase.vue';
import UserProfileInfo from '../components/UserProfileInfo.vue';
import UserProfilePosts from '../components/UserProfilePosts.vue';
import UserProfileWrite from '../components/UserProfileWrite.vue';
import { useRoute } from 'vue-router';

export default {
  name: 'UserList',
  components: {
    ContentBase,
    UserProfileInfo,
    UserProfilePosts,
    UserProfileWrite,
  },
  setup(){

    const route = useRoute();

    console.log(route.params.userId);
    // 要与router里的参数相对应-userId,功能是取得链接里的userId


    const user = reactive({
      id :1,
      username: "yanxuecan",
      lastname: "yan",
      firstname: "xuecan",
      followercout: 0,
      is_followed:false,
    });
    
    const posts = reactive({
      // reactive变量值 改变时会自动修改传递的值 
      count :3,
      posts1:[
        {
          id : 1,
          userId:1,
          content:"今天开心"
        },{
          id : 2,
          userId:1,
          content:"起飞"
        },{
          id : 3,
          userId:1,
          content:"芜湖"
        }
      ]
    });

    const post_a_post = (content) => {
      posts.count ++;
      posts.posts1.unshift({
        id:posts.count,
        userId:1,
        content:content,
      })
      // 数组向前添加
    }

    const follow = () =>{
      if(user.is_followed)return ;
      user.is_followed = true;
      user.followercout ++;
    };
    const unfollow = () => {
      if(!user.is_followed)return ;
      user.is_followed = false;
      user.followercout --;
    };
    return{
      post_a_post,
      posts,
      // 名字一样可以直接省略
      user:user,
      follow,
      unfollow,
      // 可以直接用user,
    }
  }
}

</script>

<style scoped>

</style>