<template>

    <ContentBase>
      首页
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
.container{
  margin-top: 20px;
}
</style>