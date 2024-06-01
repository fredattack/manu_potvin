import Vue from 'vue';
import Vuex from 'vuex';

import * as authModule from './authentication';
import * as temoignagesModule from './temoignages';
import * as realisationsModule from './realisations';
import * as imageModule from './images';

Vue.use(Vuex);

export const state = () => ({});

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('auth/fetchCSRF');
  },
};

export const modules = {
  auth: {
    namespaced: true,
    ...authModule,
  },
  realisations: {
    namespaced: true,
    ...realisationsModule,
  },
  temoignages: {
    namespaced: true,
    ...temoignagesModule,
  },
  images: {
    namespaced: true,
    ...imageModule,
  },
};
