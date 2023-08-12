<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <NavBar />
  <router-view :key="$route.fullPath"/>
  <!-- 通过添加key参数可以在做地址跳转时会连带参数一同检测，例如点开其他人的profile再点击自己的profile无法影响，但是传递的userId不同 -->
</template>

<script>
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
export default {
  name : "App",
  components :{
    NavBar,
  }
}
</script>

<style>

</style>
<!-- 增：post
删：delete
改：put
查：get -->