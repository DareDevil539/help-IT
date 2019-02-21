<template>
  <div id="feed">
    <div class="container mt-4">
      <div class="row">
        <div class="col-sm-12 col-md-4"><Controls class="mt-4" /></div>
        <div class="col-sm-12 col-md-8 mb-4" v-for="item in feed" :key="item">
          <div class="card">
            <img class="card-img-top" :src="item.img" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.text }}</p>
              <p class="card-text"><small class="text-muted">{{ item.author }}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Controls from "./Controls";

export default {
  name: "Feed",
  data() {
    return {
      feed: {}
    };
  },
  created() {
    this.$http.get(`https://help-it.herokuapp.com/api?module=posts`)
      .then(res => {
        res = res.body;
        this.feed = res;
      });
  },
  components: {
    Controls
  }
};
</script>
