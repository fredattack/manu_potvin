export const namespaced = true;


export const state = () => ({
    realisation: {},
    realisations: [],
});

export const mutations = {
    ADD_REALISATIONS(state, realisation) {
        state.realisations.push(realisation);
    },
    SET_REALISATIONS(state, realisation) {
        state.realisation = realisation;
    },
    SET_ALL_REALISATIONS(state, realisations) {
        state.realisations = realisations;
    }
};

export const actions = {

    async getAllRealisations({commit},payload) {

        //use axios to get Realisation
        let url = 'api/v1/achievement';
        if(payload  && 'published' in payload ){
            url += '?published=true';
        }
        const response = await this.$axios.get(url);
        console.log("response", response.data)
        commit('SET_ALL_REALISATIONS', response.data.achievements);

    },
    async getRealisationById({commit}, payload) {
        console.log("getRealisationById", payload)
        //use axios to get Realisation
        const response = await this.$axios.get('api/v1/achievement/' + payload.id);
        commit('SET_REALISATIONS', response.data.achievement);

    },
    async getNewRealisation({commit}) {

        //use axios to get Realisation
        commit('SET_REALISATIONS', {
            author: '',
            city: '',
            content: '',
        });

    },

    async updateRealisation({ commit, dispatch}, {payload,nuxtContext}) {
        console.log("payload", payload)
        const response = await this.$axios.put('api/v1/achievement/' + payload.id, payload);
        commit('SET_ALL_REALISATIONS', response.data.achievements);
        this.$toast.success(response.data.message, {duration: 1200});
        if(payload.refresh !== undefined && payload.refresh === true){
            dispatch('redirectToIndex',nuxtContext);
        }
    },


    async addRealisation({ commit, dispatch}, {payload,nuxtContext}) {

        const response = await this.$axios.post('api/v1/achievement' , payload);
        commit('SET_ALL_REALISATIONS', response.data.achievements);
        this.$toast.success(response.data.message, {duration: 1200});
        dispatch('redirectToIndex',nuxtContext);
    },
    async deleteRealisation({ commit, dispatch}, {payload,nuxtContext}) {
        console.log("payload", payload)
        const response = await this.$axios.delete('api/v1/achievement/' + payload.id);
        commit('SET_ALL_REALISATIONS', response.data.achievements);
        this.$toast.success(response.data.message, {duration: 1200});
        dispatch('redirectToIndex',nuxtContext);
    },

    redirectToIndex(_, nuxtContext) {
        nuxtContext.$router.push('/realisations');
    }
}
