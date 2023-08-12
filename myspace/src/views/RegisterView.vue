<template>
  <ContentBase>
    <div class="row justify-content-md-center">
      <div class="col-3">
        <form @submit.prevent="register">
          <!-- 这是一个在表单提交前的事件，一点提交就清空，所以需要加入prevent -->
          <div class="mb-3">
            <label for="username" class="form-label">用户名</label>
            <input v-model="username" type="text" class="form-control" id="username">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">密码</label>
            <input v-model="password" type="password" class="form-control" id="password">
          </div>
          <div class="mb-3">
            <label for="password_confirm" class="form-label">确认密码</label>
            <input v-model="password_confirm" type="password" class="form-control" id="password">
          </div>
          <div class="error-message">
            {{ error_message }}
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

  </ContentBase>
</template>

<script>
// import store from '@/store';
import ContentBase from '../components/ContentBase.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
// 使用store中的函数
import router from "@/router/index";
import $ from 'jquery';

export default {
  name: 'RegisterView',
  components: {
    ContentBase,
  },
  setup() {
    const store = useStore();
    let username = ref('');
    let password = ref('');
    let password_confirm = ref('');
    let error_message = ref('');

    const register = () => {
      error_message.value = "";

      $.ajax({
        url: "https://app165.acapp.acwing.com.cn/myspace/user/",
        type: "POST",
        data: {
          username: username.value,
          password: password.value,
          password_confirm: password_confirm.value,
        }, success(resp) {
          if (resp.result === "success") {
            store.dispatch("login", {
              username: username.value,
              password: password.value,
              success() {
                // console.log("success");
                // 输入在后端 
                router.push({ name: 'userlist' })
                // 如果成功跳转到用户列表页面
              },
              error() {
                // console.log("failed");
                
                error_message.value = '用户名或密码错误';
              }
            });
          }else{
            // console.log(password,password_confirm);
            error_message.value = resp.result;
          }

        }

      })

    };

    return {
      store,
      password_confirm,
      register,
      error_message,
      username,
      password,
    }
  },

}
</script>

<style scoped>
.error-message {
  color: red;
}

button {
  width: 100%;
}
</style>