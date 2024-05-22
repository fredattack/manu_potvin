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
    }
};

export const actions = {
 async getAllTemoignages({commit}) {
        //use axios to get temoignage
        const response = await this.$axios.get('/v1/testimonial');
        console.log("response", response.data)
        commit('SET_ALL_TEMOIGNAGES', response.data.temoignages );

    },
    async getTemoignageById({commit}, payload) {
        console.log("payload", payload)
        //use axios to get temoignage
        const response = await this.$axios.get('/v1/testimonial/' + payload.id);
        commit('SET_TEMOIGNAGE', response.data.temoignage);

    },
    async getNewTemoignage({commit}) {

        //use axios to get temoignage
        commit('SET_TEMOIGNAGE', {
            author: '',
            city: '',
            content: '',
        });

    },

    async updateTemoignage({commit}, payload) {
        const response = await this.$axios.put('/v1/testimonial/' + payload.id, payload);
        commit('SET_ALL_TEMOIGNAGES', response.data.temoignages);
    },

    async deleteTemoignage({commit}, payload) {
        const response = await this.$axios.delete('/v1/testimonial/' + payload.id);
        commit('SET_ALL_TEMOIGNAGES', response.data.temoignages);
    },
    async addTemoignage({commit}, payload) {
        const response = await this.$axios.post('/v1/testimonial/', payload);
        commit('SET_ALL_TEMOIGNAGES', response.data.temoignages);
    }
}
