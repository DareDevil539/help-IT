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
        <button class="btn btn-primary" @click="send">Зареєструватися</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegForm",
  data: function() {
    return {
      name: "",
      surname: "",
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    send() {
      // this.$http.post("http://localhost:3000/api", {
      //   name: this.name,
      //   surname: this.surname,
      //   username: this.username,
      //   email: this.email,
      //   password: this.password
      // });
      this.$http.get("http://localhost:3000/api?module=users&params=id").then(res => console.log(res.body));
    }
  }
}
</script>

<style lang="scss" scoped></style>

