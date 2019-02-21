<template>
  <div id="usercard">
    <div class="card" style="width: 18rem;">
      <img :src="img" class="card-img-top" alt="1">
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text">Рейтинг: {{ rating }}</p>
        <p class="card-text"><span class="badge badge-pill badge-primary" v-for="skill in skills" :key="skill">{{ skill }}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  data() {
    return {
      img: "",
      name: "",
      rating: "",
      skills: [],
      isMy: false,
      ret: "posts",
      curHref: ""
    };
  },
  created() {
    //console.log(this.$route.query.username);
    this.curHref = this.$route.path;
    if (this.$route.query.username) {
      this.$http.get(`https://help-it.herokuapp.com/api?module=users&params=img+name+surname+rating+skills&query=username:"${this.$route.query.username}"`)
      .then(res => {
        res = res.body[0];
        this.img = res.img;
        this.name = `${res.name} ${res.surname}`;
        this.rating = res.rating;
        this.skills = res.skills.split(", ");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.badge-pill {
  margin: 5px;
}

.card-img-top {
  height: 250px;
}

.card {
  margin-left: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>

