

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
            const response = await this.$axios.get('/csrf-token');

            commit('SET_CSRF_TOKEN', response.data.csrf_token);
        } catch (error) {

            console.error('Error fetching CSRF token:', error);
        }
    },
    async userLogin({commit},payload){
    console.log(payload)
    try {
        const response = await this.$axios.$post('/login', payload);

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
