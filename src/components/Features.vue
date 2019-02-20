<template>
  <div id="features">
    <div class="jumbotron">
      <h1 class="display-3">{{ helloArticle.title }}</h1>
      <p class="lead">{{ helloArticle.subtitle }}</p>
      <hr class="my-4">
      <p>{{ helloArticle.text }}</p>
      <p class="lead">
        <router-link to="/reg.view" class="btn btn-primary btn-lg" role="button">Приєднатися!</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Features",
  data: function() {
    return {
      helloArticle: {
        title: "Привіт, друже!",
        subtitle: "Ти знаходишся на порталі HelpIT — навчальній соціальній мережі для всіх, хто цікавиться програмуванням!",
        text: "Тут ти можеш отримати нові знання, знайти друзів зі спільними інтересами, цікавий матеріал, чи відповідь на питання, яке не дає тобі заснути"
      }
    };
  }
}
</script>

<style lang="scss" scoped></style>

