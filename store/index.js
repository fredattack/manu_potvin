import Vue from 'vue';
import Vuex from 'vuex';

import * as authModule from './authentication';
import * as temoignagesModule from './temoignages';

Vue.use(Vuex);

export const state = () => ({});

export const actions = {
    async nuxtServerInit({ dispatch }) {
        await dispatch('auth/fetchCSRF');
    }
};

export const modules = {
    auth: {
        namespaced: true,
        ...authModule
    },
    temoignages: {
        namespaced: true,
        ...temoignagesModule
    }
};
