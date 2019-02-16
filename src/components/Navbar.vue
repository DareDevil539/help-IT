<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary"><a class="navbar-brand" href="#"><img class="d-inline-block align-top" src="/images/logo.png" width="30" height="30" alt="" />&nbsp;&nbsp;HelpIT</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-for="header in headers" :key="header.id"><a class="nav-link" href="#">{{ header.text }}</a></li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Пошук" />
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Пошук</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    headers: [
      {
        id: 1,
        text: "Головна"
      },
      {
        id: 2,
        text: "Про нас"
      },
      {
        id: 3,
        text: "Зворотній зв'язок"
      }
    ]
  })
}
</script>

<style lang="scss" scoped></style>
