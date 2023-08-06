<template>

    <ContentBase>
      <div class="card" v-for="user in users" :key="user.id" @click="open_user_profile">
        <div class="card-body">
          <div class="row">
            <div class="col-1">
              <img class="img-fluid" :src="user.photo" alt="">
              <!-- :~v-bind 绑定变量 -->
            </div>
            <div class="col-11">
              <div class="username">{{ user.username }}</div>
              <div class="followcount">粉丝数:{{ user.followerCount }}</div>
                
            </div>
          </div>
        </div>
      </div>
    </ContentBase>

</template>

<script>
import store from '@/store';
import ContentBase from '../components/ContentBase.vue';
import $ from 'jquery';
import {ref} from 'vue';
import router from '@/router';

// jquery
export default {
  name: 'UserList',
  components: {
    ContentBase,
  },
  setup(){
    let users = ref([]);

      $.ajax({
        url: 'https://app165.acapp.acwing.com.cn/myspace/userlist/',
        type: "get",
        success(resp){
        // console.log(resp);
        users.value = resp;
        }
      });

      const open_user_profile= userId =>{
        if(store.state.user.is_login){
          router.push({
            name : "userprofile",
            params:{
              userId: userId,
            }
          })
        }else{
          router.push({
            name:"login"
          })
        }
      }

      return {
        open_user_profile,
        users
      };
    
  }
}
</script>

<style scoped>

.username{
  font-weight: bold;
  height: 50%;
  /* height占整个盒子的50% */
}
.followcount{
  font-size: 12px;
    color: gray;
    height: 50%;

}
.card{
  margin-top: 12px;
  cursor:pointer;
    /* 鼠标点击 */
    transition: 500ms;
      /* 延迟 */
}
.card:hover{
  box-shadow: 2px 2px 10px lightgrey;
  /* 阴影 */
  

}
img{
    border-radius: 50%;
}
</style>