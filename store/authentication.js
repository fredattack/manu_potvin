

export const state = () => ({
    csrfToken: ''
});

export const mutations = {
    SET_CSRF_TOKEN(state, token) {
        state.csrfToken = token;
    }
};

export const actions = {
    async fetchCSRF({ commit }) {
        try {
            console.log('fetchCSRF')
            const response = await this.$axios.get('/sanctum/csrf-cookie');
            console.log('response', response.data);
            commit('SET_CSRF_TOKEN', response.data.csrf_token);
        } catch (error) {

            console.error('Error fetching CSRF token:', error);
        }
    },
    async userLogin({commit},payload){
        console.log('this.csrfToken',this.csrfToken)
    try {
        if(!this.csrfToken){
            console.log('fetchCSRF')
            const csrfCookieResponse = await this.$axios.get('/sanctum/csrf-cookie');
            console.log('response', csrfCookieResponse.data);
            commit('SET_CSRF_TOKEN', csrfCookieResponse.data.csrf_token);
        }
        const response = await this.$axios.$post('/api/login', payload);
       if(commit('GET'))
        try {
            console.log('fetchCSRF')
            const response = await this.$axios.get('/sanctum/csrf-cookie');
            console.log('response', response.data);
            commit('SET_CSRF_TOKEN', response.data.csrf_token);
        } catch (error) {

            console.error('Error fetching CSRF token:', error);
        }

        this.$cookies.set('token', response.token, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7 // 1 week
        });
        this.$router.push('/dashboard');
      } catch (error) {
        console.error('Invalid login', error);
      }
    },
};
