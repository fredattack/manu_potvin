// store/index.js

export const state = () => ({
    csrfToken: 'pipo'
});

export const mutations = {
    SET_CSRF_TOKEN(state, token) {
        state.csrfToken = token;
    }
};

export const actions = {
    async nuxtServerInit({ commit }, { app }) {
        try {
            const response = await app.$axios.get('/csrf-token');
            commit('SET_CSRF_TOKEN', response.data.csrf_token);
        } catch (error) {
            console.error('Error fetching CSRF token:', error);
        }
    }
};
