<template>
    <div class="row justify-content-center m-6">
      <form @submit.prevent="userLogin" class=" border border-primary p-6">
        <div>
          <label>Username</label>
          <input type="text" v-model="login.username"/>
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
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', {data: this.login})
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
