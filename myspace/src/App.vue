<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <NavBar />
  <router-view/>
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
