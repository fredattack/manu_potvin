<template>
  <div>
    <navBar/>
    <div
        class="container mx-auto sm:px-6 lg:px-8 bg-gray-50 ">
      <!-- Content goes here -->
      <div
          class="flex justify-between items-center py-5">
        <h1 class="text-4xl font-extrabold tracking-tight text-slate-900">
          Réalisation</h1>
        <a
            :href="'realisations/new'"
            class="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Ajouter
          une
          realisation
        </a>
      </div>

      <template>
        <div
            v-if="realisations"
            class="grid grid-cols-1 gap-y-3">

          <div
              v-for="realisation in realisations"
              class="grid grid-cols-1 md:grid-cols-3  hover:bg-gray-300 relative space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
              :key="realisation.testimonial">

            <div
                class="flex-1 md:col-span-2">
              <a :href="'realisations/' + realisation.id"
                 class="focus:outline-none ">
                <span
                    class="absolute inset-0"
                    aria-hidden="true"></span>
                <div class="flex flex-row w-full  place-content-between">

                <p class="font-bold text-3xl text-gray-900 capitalize">
                  {{
                    realisation.title
                  }}

                  <span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{{ realisation.category }}</span>


                </p>
                </div>
                <p class="text-sm text-gray-500">
                  {{ realisation.description }}</p>
              </a>
            </div>

            <div
                class="flex justify-center">
              <div
                  v-if="realisation.image"
                  v-html="realisation.image"
                  class="object-fit  w-40"></div>
            </div>
          </div>

        </div>
      </template>
    </div>
  </div>
</template>

<script>

import Nav
  from "../../../components/Nav.vue";
import NavBar
  from "../../../components/Dashboard/NavBar.vue";

import {
  mapActions,
  mapState
} from "vuex";

export default {
  middleware: 'authenticated',
  components: {
    NavBar,
  },

  computed: {
    ...mapState('realisations', ['realisations'])
  },
  methods: {
    ...mapActions('realisations', ['getAllRealisations']),

  },
  mounted() {
    this.getAllRealisations({})
  },
}


</script>
