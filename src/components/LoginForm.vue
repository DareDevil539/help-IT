<template>
  <div id="login-form">
    <form>
      <div class="form-group">
        <label for="InputEmail">Email</label>
        <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Введіть email">
        <small id="emailHelp" class="form-text text-muted">Ми не передаємо ваш email стороннім особам</small>
      </div>
      <div class="form-group">
        <label for="InputPassword">Пароль</label>
        <input type="password" class="form-control" id="InputPassword" placeholder="Введіть пароль">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="Check">
        <label class="form-check-label" for="Check">Запам'ятати мене</label>
      </div>
      <button type="submit" class="btn btn-primary">Вхід</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm"
}
</script>

<style lang="scss" scoped></style>

