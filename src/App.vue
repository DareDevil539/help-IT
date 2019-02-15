<template>
  <div id="app">
    <Navbar/>
    <router-view class="content"></router-view>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Features from "./components/Features";

export default {
  name: 'app',
  components: {
    Navbar,
    Footer,
    Features
  }
}
</script>

<style lang="scss">
.content {
  min-width: 100vw;
  min-height: 80vh;
}
</style>