<template>
  <div id="user">
    <div class="card" style="width: 18rem;">
      <img src="/images/js.png" class="card-img-top" alt="1">
      <div class="card-body">
        <h5 class="card-title">Vasyl Sadovy</h5>
        <p class="card-text"><span class="badge badge-pill badge-primary">HTML</span><span class="badge badge-pill badge-success">CSS</span><span class="badge badge-pill badge-danger">JS</span></p>
        <a href="#" class="btn btn-primary">Відвідати профіль</a>
      </div>
    </div>

    <div class="card" style="width: 18rem;">
      <img src="/images/js.png" class="card-img-top" alt="1">
      <div class="card-body">
        <h5 class="card-title">Михайло Звійнянський</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User"
};
</script>

<style lang="scss" scoped>
.badge-pill {
  margin: 5px;
}

.card-img-top {
  height: 300px;
}

.card {
  margin-left: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>

