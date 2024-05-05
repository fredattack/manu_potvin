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
    }
};

export const actions = {
 async getTemoignageById({commit}, payload) {
        console.log("payload", payload)
        //use axios to get temoignage
        const response = await this.$axios.get('/v1/testimonial/' + payload.id);
        commit('SET_TEMOIGNAGE', response.data.temoignage);

    },
    addTemoignage({commit}, temoignage) {
        commit('ADD_TEMOIGNAGE', temoignage);
    }
}
