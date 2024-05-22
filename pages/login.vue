<template>
    <div class="row justify-content-center m-6">
        <div>
          <label>Username</label>
          <input type="text" v-model="login.email"/>
        </div>
        <div>
          <label>Password</label>
          <input type="text" v-model="login.password"/>
        </div>
        <div>
          <button type="button" @click="processUserLoginAction">Submit</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      login: {
        email: 'fred@hddev.be',
        password: 'password'
      }
    }
  },
  methods: {
    ...mapActions('auth', ['userLogin']),
    async processUserLoginAction() {
      try {
        const data = { email: this.login.email, password: this.login.password };
        await this.userLogin(data)
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>
