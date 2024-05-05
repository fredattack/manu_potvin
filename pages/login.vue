<template>
    <div class="row justify-content-center m-6">
      <form @submit.prevent="userLogin" class=" border border-primary p-6">
        <div>
          <label>Username</label>
          <input type="text" v-model="login.email"/>
        </div>
        <div>
          <label>Password</label>
          <input type="text" v-model="login.password"/>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
</template>

<script>
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
    async userLogin() {
      const data = { email: this.login.email, password: this.login.password };
      console.log("data", data)
      try {
        const response = await this.$axios.$post('/login', data);

        this.$cookies.set('token', response.token, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7 // 1 week
        });
        this.$router.push('/dashboard');
      } catch (error) {
        console.error('Invalid login', error);
      }
    },
   /* async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', {data: this.login})
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }*/
  }
}
</script>
