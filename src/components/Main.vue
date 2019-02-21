<template>
  <div id="main">
    <Welcome v-if="!isLoginned" />
    <Feed v-if="isLoginned" />
  </div>
</template>

<script>
import Welcome from "./Welcome";
import Feed from "./Feed";

export default {
  name: "Main",
  data: function() {
    return {
      isLoginned: false
    };
  },
  components: {
    Welcome,
    Feed
  },
  created() {
    let token = this.$http.get(`https://help-it.herokuapp.com/adminApi?operation=select&module=users&params=token&query=token:"${this.$cookies.get("token")}"`)
    .then(res => {
      if (res.body.length === 0) {
        this.isLoginned = false;
      } else {
        this.isLoginned = true;
        //TODO
      }
    });
  }
};
</script>
