<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">Myspace</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" :to="{ name: 'home' }">首页</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'userlist' }">好友列表</router-link>
          </li>
          <!-- <li class="nav-item">
          <router-link class="nav-link" :to="{name:'extra'}">更多功能</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://miyan.notion.site/Mysql-aff411f504814be889af7b63c796dcbc?pvs=4" target="_blank">MySql学习</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.miyan.ac.cn/" target="_blank">ChatGpt</a>
        </li> -->
          <!-- <li class="nav-item">
          <router-link class="nav-link" :to="{name:'userprofile',params:{userId: 2}}">用户动态</router-link>
        </li> -->

        </ul>



        <ul class="navbar-nav" v-if="!$store.state.user.is_login">
          <!-- name为index.js中声明的名字，params为接收参数必须 -->
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'login' }">登录</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'register' }">注册</router-link>
          </li>

        </ul>
        <ul class="navbar-nav" v-else>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'userprofile', params: { userId: $store.state.user.id } }">{{
              $store.state.user.username }}</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" style="cursor: pointer" @click="logout">退出</a>
            <!-- 绑定logout事件 -->
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>
  
<script>
import { useStore } from 'vuex';

export default {
  name: "NavBar",
  setup() {
    const store = useStore();
    const logout = () => {
      store.commit("logout");
      //调用mult用dispatch
    };
    return {
      logout,
    }
  }
}
</script>