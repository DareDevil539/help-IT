<template>
  <div id="posts">
    <div class="wrapper">
      <div class="card mb-3" v-for="post in posts" :key="post">
        <img class="card-img-top" :src="post.img" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.text }}</p>
          <p class="card-text"><small class="text-muted">{{ post.author }}</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quests from "./Quests";

export default {
  name: "Posts",
  data() {
    return {
      posts: {},
      quests: {}
    };
  },
  created() {
    if (this.$route.query.username) {
      this.$http.get(`https://help-it.herokuapp.com/api?module=posts&query=author:"${this.$route.query.username}"`)
      .then(res => {
        //console.log(res.body);
        res = res.body;
        this.posts = res;
      });
    }
  },
  components: {
    Quests
  }
};
</script>

<style lang="scss" scoped>
.card-img-top {
  width: 100%;
  height: 300px;
}
</style>

