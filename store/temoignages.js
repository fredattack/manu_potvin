export const namespaced = true;

export const state = () => ({
  temoignage: {},
  temoignages: [],
});

export const mutations = {
  ADD_TEMOIGNAGE(state, temoignage) {
    state.temoignages.push(temoignage);
  },
  SET_TEMOIGNAGE(state, temoignage) {
    state.temoignage = temoignage;
  },
  SET_ALL_TEMOIGNAGES(state, temoignages) {
    state.temoignages = temoignages;
  },
};

export const actions = {

  async getAllTemoignages({ commit }, payload) {
    // use axios to get temoignage
    let url = 'api/v1/testimonial';
    if (payload && 'published' in payload) {
      url += '?published=true';
    }
    const response = await this.$axios.get(url);
    console.log('response', response.data);
    commit('SET_ALL_TEMOIGNAGES', response.data.temoignages);
  },
  async getTemoignageById({ commit }, payload) {
    console.log('getTemoignageById', payload);
    // use axios to get temoignage
    const response = await this.$axios.get(`api/v1/testimonial/${payload.id}`);
    commit('SET_TEMOIGNAGE', response.data.temoignage);
  },
  async getNewTemoignage({ commit }) {
    // use axios to get temoignage
    commit('SET_TEMOIGNAGE', {
      author: '',
      city: '',
      content: '',
    });
  },

  async updateTemoignage({ commit, dispatch }, { payload, nuxtContext }) {
    console.log('payload', payload);
    const response = await this.$axios.put(`api/v1/testimonial/${payload.id}`, payload);
    commit('SET_ALL_TEMOIGNAGES', response.data.temoignages);
    this.$toast.success(response.data.message, { duration: 1200 });
    if (payload.refresh !== undefined && payload.refresh === true) {
      dispatch('redirectToIndex', nuxtContext);
    }
  },

  async addTemoignage({ commit, dispatch }, { payload, nuxtContext }) {
    const response = await this.$axios.post('api/v1/testimonial', payload);
    commit('SET_ALL_TEMOIGNAGES', response.data.temoignages);
    this.$toast.success(response.data.message, { duration: 1200 });
    dispatch('redirectToIndex', nuxtContext);
  },
  async deleteTemoignage({ commit, dispatch }, { payload, nuxtContext }) {
    console.log('payload', payload);
    const response = await this.$axios.delete(`api/v1/testimonial/${payload.id}`);
    commit('SET_ALL_TEMOIGNAGES', response.data.temoignages);
    this.$toast.success(response.data.message, { duration: 1200 });
    dispatch('redirectToIndex', nuxtContext);
  },

  redirectToIndex(_, nuxtContext) {
    nuxtContext.$router.push('/temoignages');
  },
};
