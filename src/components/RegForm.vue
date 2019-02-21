<template>
 <div id="reg-form">
    <div class="container">
      <div class="form">
        <div class="form-row">
          <div class="col-sm-12 col-md-6 mb-3 mt-4">
            <label for="name" >Ім'я</label>
            <input type="text" class="form-control" id="name" placeholder="Ім'я" v-model="name" required>
          </div>
          <div class="col-sm-12 col-md-6 mb-3 mt-4">
            <label for="surname">Прізвище</label>
            <input type="text" class="form-control" id="surname" placeholder="Прізвище" v-model="surname" required>
          </div>
        </div>
        <div class="form-row">
          <div class="col-sm-12 mb-3">
            <label for="username">Ім'я користувача</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend">@</span>
              </div>
              <input type="text" class="form-control" id="username" placeholder="Ім'я користувача" aria-describedby="inputGroupPrepend" v-model="username" required>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-sm-12 mb-3">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Email" v-model="email" required>
          </div>
        </div>
        <div class="form-row">
          <div class="col-sm-12 mb-3">
            <label for="password">Пароль</label>
            <input type="password" class="form-control" id="password" placeholder="Пароль" v-model="password" required>
          </div>
        </div>
        <div class="form-row">
          <div class="col-sm-12 mb-3">
            <label for="skills">Навички</label>
            <input type="text" class="form-control" id="skills" placeholder="Навички" v-model="skills">
            <small id="skillsHelp" class="form-text text-muted">Перелік технологій, якими ви володієте (через кому)</small>
          </div>
        </div>
        <a href="/" class="btn btn-primary" @click="send">Зареєструватися</a>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from "md5";

export default {
  name: "RegForm",
  data: function() {
    return {
      name: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      skills: "",
      isDone: false
    };
  },
  methods: {
    send() {
      this.$cookies.set("token", md5(md5(this.username)));
      this.$http.get(`https://help-it.herokuapp.com/adminApi?operation=insert&module=users&params=email,password,username,name,surname,skills,token&query="${this.email}",md5("${this.password}"),"${this.username}","${this.name}","${this.surname}","${this.skills}",md5(md5("${this.username}"))`)
      .then(res => {
        if (res.body === "Done") {
          this.isDone = true;
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped></style>

