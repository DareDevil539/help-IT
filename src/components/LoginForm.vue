<template>
  <div id="login-form">
    <div class="form">
      <div class="form-group">
        <label for="username">Ім'я користувача</label>
        <input type="text" class="form-control" id="username" placeholder="Ім'я користувача" v-model="username">
      </div>
      <div class="form-group">
        <label for="InputPassword">Пароль</label>
        <input type="password" class="form-control" id="InputPassword" placeholder="Введіть пароль" v-model="password">
      </div>
      <button @click="auth" class="btn btn-primary mb-4">Перевірити</button>
    </div>
    <div id="successAuth" v-if="isLoggedIn">
        <div class="row">
          <div class="col-sm-12">
            <div class="alert alert-success" role="alert">
              Успішно авторизовано!
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <a href="/" class="btn btn-primary mb-4">Вхід</a>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import md5 from "md5";

export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
      isLoggedIn: false
    };
  },
  methods: {
    auth() {
      this.$http.get(`https://help-it.herokuapp.com/adminApi?operation=select&module=users&params=username+password&query=username:"${this.username}"+password:md5("${this.password}")`)
      .then(res => {
        console.log(res.body);
        if (res.body.length === 0) {
          console.log("error");
        } else {
          this.$cookies.set("token", md5(md5(this.username)));
          this.isLoggedIn = true;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>

