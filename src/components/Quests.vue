<template>
  <div id="quests">
    <div class="wrapper">
      <div class="card mb-3" v-for="quest in quests" :key="quest">
        <div class="card-body">
          <h5 class="card-title">{{ quest.title }}</h5>
          <p class="card-text">{{ quest.text }}</p>
          <p class="card-text">{{ quest.answer }}</p>
          <p class="card-text"><small class="text-muted">{{ quest.fromUser }}</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quests",
  data() {
    return {
      quests: {}
    };
  },
  created() {
    if (this.$route.query.username) {
      this.$http.get(`https://help-it.herokuapp.com/api?module=questions&query=toUser:"daredevil539"`)
        .then(res => {
          console.log(res.body);
          res = res.body;
          this.quests = res;
        });
      }
  }
};
</script>
