
function processSuccessCallback(payload) {
    if (payload.successCallback) {
        payload.successCallback()
    }
}

export const state = () => ({
    images: []
});

export const mutations = {
    SET_IMAGES(state, images) {
        state.images = images;
    }
};

export const actions = {

    async imageUpload({commit},payload){

    try {
        console.log("payload", payload)
        const response = await this.$axios.post('api/v1/image-upload/', payload);
        if(payload.callback){
            commit('callback', response.data.callbackImage);
        }
        if(payload.successCallback){
            processSuccessCallback(payload)
        }
        this.$toast.success(response.data.message, {duration: 1200});

       /* if(payload.refresh !== undefined && payload.refresh === true){
            dispatch('redirectToIndex',nuxtContext);
        }*/
        } catch (error) {

            console.error('Error fetching CSRF token:', error);
        }
    },
    async deleteImage({commit}, payload) {
        console.log("deleteImage", payload)
        const response = await this.$axios.delete('api/v1/image-upload/' + payload.id);
        commit('SET_IMAGES', response.data.images);
        if(payload.callback){
            commit('callback', response.data.callbackImage);
        }
        if(payload.successCallback){
            processSuccessCallback(payload)
        }

        this.$toast.success(response.data.message, {duration: 1200});
    }
};
