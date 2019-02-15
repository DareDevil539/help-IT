<template>
  <div id="main">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8">
          <Features/>
        </div>
        <div class="col-12 col-md-4 login-container m-auto">
          <LoginForm class="login"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Features from "./Features";
import LoginForm from "./LoginForm";

export default {
  name: "Main",
  components: {
    Features,
    LoginForm
  }
}
</script>

<style lang="scss" scoped></style>

