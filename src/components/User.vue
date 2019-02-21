<template>
  <div id="user">
    <div class="container">
      <div class="row df">
        <div class="col-sm-12 col-md-4"><UserCard /></div>
        <div class="col-sm-12 col-md-8 mt-4"><Posts /></div>
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from "./UserCard";
import Posts from "./Posts";

export default {
  name: "User",
  components: {
    UserCard,
    Posts
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
