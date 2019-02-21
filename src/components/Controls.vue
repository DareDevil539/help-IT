<template>
  <div id="controls df">
    <div class="btn-group-vertical">
      <button class="btn btn-light">Мій профіль</button>
      <button class="btn btn-light">Налаштування</button>
      <button class="btn btn-light" @click="end">Вихід</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Controls",
  methods: {
    end() {
      this.$cookies.remove("token");
    }
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
