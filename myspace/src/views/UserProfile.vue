<template>
  <ContentBase>
    <!-- div.row>(div.col-3+div.col-9) -->
    <div class="row">
      <div class="col-3">
        <UserProfileInfo @follow="follow" @unfollow="unfollow" v-bind:user="user" />

        <!-- 传递user常量 -->
        <UserProfileWrite v-if="is_me" :content="content" @post_a_post="post_a_post" />
      </div>
      <div class="col-9">
        <UserProfilePosts :posts="posts" :user="user" @delete_a_post="delete_a_post" @post_a_post="post_a_post"
          @get_content="get_content" />
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
import { useStore } from 'vuex';
import { computed,ref } from 'vue';
// 动态计算

import $ from 'jquery';

export default {
  name: 'UserList',
  components: {
    ContentBase,
    UserProfileInfo,
    UserProfilePosts,
    UserProfileWrite,
  },
  setup() {

    const route = useRoute();
    const userId = parseInt(route.params.userId);
    // 强转int
    // console.log(route.params.userId);
    // 要与router里的参数相对应-userId,功能是取得链接里的userId


    const user = reactive({
    });

    const posts = reactive({
      // reactive变量值 改变时会自动修改传递的值 
    });
    const store = useStore();
    // 获取获取某个用户的信息
    $.ajax({
      url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
      type: "GET",
      data: {
        user_id: userId,
      },
      // 需要验证一定要写headers
      headers: {
        'Authorization': "Bearer " + store.state.user.access,
      },
      success(resp) {
        user.id = resp.id;
        user.username = resp.username;
        user.photo = resp.photo;
        user.followerCount = resp.followerCount;
        user.is_followed = resp.is_followed;
      }, error() {
        console.log("error");
      }
    });

    $.ajax({
      url: "https://app165.acapp.acwing.com.cn/myspace/post/",
      type: "GET",
      data: {
        user_id: userId,
      }, headers: {
        'Authorization': "Bearer " + store.state.user.access,
      }, success(resp) {
        posts.posts = resp;
        // 获取帖子
        posts.count = resp.length;
        // 获取帖子数
      }
    })

    let content1 = ref("");
    const get_content = (content) => {
      content1 = content;
    }

    const post_a_post = (content) => {
      posts.count++;
      posts.posts.unshift({
        id: posts.count,
        userId: 1,
        content: content,
      })
      // 数组向前添加
    }

    const delete_a_post = post_id => {
      posts.posts = posts.posts.filter(post => post.id !== post_id);
      posts.count = posts.posts.length;
    }

    // console.log(userId,store.state.user.id);
    const is_me = computed(() => userId === store.state.user.id);

    const follow = () => {
      // if (user.is_followed) return;
      user.is_followed = true;
      user.followerCount++;
    };
    const unfollow = () => {
      if (!user.is_followed) return;
      user.is_followed = false;
      user.followerCount--;
    };
    return {
      content1,
      get_content,
      is_me,
      post_a_post,
      posts,
      // 名字一样可以直接省略
      user: user,
      follow,
      delete_a_post,
      unfollow,
      // 可以直接用user,
    }
  }
}

</script>

<style scoped></style>