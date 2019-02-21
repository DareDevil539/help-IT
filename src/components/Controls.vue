<template>
  <div id="controls df">
    <div class="btn-group-vertical">
      <router-link to="/user?" class="btn btn-light">Мій профіль</router-link>
      <button class="btn btn-light">Налаштування</button>
      <button class="btn btn-light">Вихід</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Controls",
  created() {
    this.$http.get(`https://help-it.herokuapp.com/api?module=users&params=username&query=token:"${this.$cookies.get("token")}"`)
    .then(res => {
      console.log(res);
    });
  }
};
</script>

<style lang="scss" scoped>
.df {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
