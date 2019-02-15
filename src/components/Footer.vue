<template>
  <div id="footer">
    <div class="container">
      <div class="row">
        <h5 class="col-10">HelpIT &copy;2019. All rights reserved</h5>
        <div class="social col-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
#footer {
  width: 100vw;
  height: 10vh;
  background-color: #2c3e50;
}

#footer, .col-10, .col-2 {
  display: flex;
  flex-direction: row;
  align-items: center;
}

h5 {
  padding-left: 15px;
  color: #efefef;
}
</style>

