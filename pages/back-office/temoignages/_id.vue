<template>
  <div>
    <navBar/>
    <div
        class="container mx-auto sm:px-6 lg:px-8 mt-20 border rounded-md ">
      <!-- Content goes here -->
      <div
          class="flex justify-between items-center py-5">
        <h1 v-if="temoignage.id"
            class="text-4xl font-extrabold tracking-tight text-slate-900">
          Temoignage
          de
          {{
            temoignage.author
          }}
          de
          {{
            temoignage.city
          }}
        </h1>
        <h1 v-else
            class="text-4xl font-extrabold tracking-tight text-slate-900">
          Nouveau
          Témoignage
        </h1>


        <button
            type="button"
            class="rounded-md bg-gray-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          back
        </button>

      </div>

      <template>
        <form>
          <div
              class="space-y-12">
            <div
                class="border-b border-gray-300 pb-12">
              <div
                  class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


                <div
                    class="sm:col-span-4">
                  <label
                      for="username"
                      class="block text-sm font-medium leading-6 text-gray-900">Auteur</label>
                  <div
                      class="mt-2">
                    <div
                        class="flex rounded-md border-1 ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                          type="text"
                          name="author"
                          id="author"
                          v-model="localTemoignage.author"
                          autocomplete="username"
                          class="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          >
                    </div>
                  </div>
                </div>

                <div
                    class="sm:col-span-4">
                  <label
                      for="username"
                      class="block text-sm font-medium leading-6 text-gray-900">Ville</label>
                  <div
                      class="mt-2">
                    <div
                        class="flex rounded-md border-1 ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                          type="text"
                          name="author"
                          id="author"
                          v-model="localTemoignage.city"
                          autocomplete="username"
                          class="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          >
                    </div>
                  </div>
                </div>


                <div
                    class="col-span-full">
                  <label
                      for="about"
                      class="block text-sm font-medium leading-6 text-gray-900">Message</label>
                  <div
                      class="mt-2 rounded-md border-1">
                    <textarea
                        v-model="localTemoignage.content"
                        id="about"
                        name="about"
                        rows="3"
                        class="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  </div>
                </div>


                <div
                    class="col-span-full">
                  <label
                      for="cover-photo"
                      class="block text-sm font-medium leading-6 text-gray-900">Cover
                    photo</label>
                  <div
                      class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div
                        class="text-center">
                      <div
                          class="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                            for="file-upload"
                            class="relative cursor-pointer rounded-md  font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                          <span>Upload a file</span>
                          <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              class="sr-only"/>
                        </label>
                        <p class="pl-1">
                          or
                          drag
                          and
                          drop</p>
                      </div>
                      <p class="text-xs leading-5 text-gray-600">
                        PNG,
                        JPG,
                        GIF
                        up
                        to
                        10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
              class="mt-6 flex items-center justify-end gap-x-6 mb-4">
            <button
                type="button"
                class="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
                @click="saveTemoignage"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Save
            </button>
          </div>
        </form>
      </template>
    </div>
  </div>
</template>

<script>

import Nav
  from "../../../components/Nav.vue";
import NavBar
  from "../../../components/Dashboard/NavBar.vue";
import Banner
  from "../../../components/Banner.vue";
import Testimonial
  from "../../../components/testimonials/Testimonial.vue";
import CallToActionThree
  from "../../../components/CallToActionThree.vue";
import PartnersSection
  from "../../../components/generals/PartnersSection.vue";
import Footer
  from "../../../components/Footer.vue";
import ParallaxSection
  from "../../../components/ParallaxSection.vue";
import {
  mapState,
  mapActions
} from 'vuex';
import temoignages
  from "./index.vue";

export default {
  middleware: 'authenticated',
  components: {
    Footer,
    PartnersSection,
    ParallaxSection,
    Banner,
    Testimonial,
    NavBar,
    CallToActionThree
  },
  data() {
    return {
      people: [
        {
          id: 123,
          name: 'Leslie Alexander',
          testimonial: "Working with Manu Potvin has been transformative for our team. Manu's innovative strategies and insightful leadership have propelled our projects to new heights.",

          role: 'Co-Founder / CEO',
          imageUrl:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          href: '#',
          lastSeen: '3h ago',
          lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
          id: 123,
          name: 'Michael Foster',
          email: 'michael.foster@example.com',
          role: 'Co-Founder / CTO',
          imageUrl:
              'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          href: '#',
          lastSeen: '3h ago',
          lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
          id: 123,
          name: 'Dries Vincent',
          email: 'dries.vincent@example.com',
          role: 'Business Relations',
          imageUrl:
              'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          href: '#',
          lastSeen: null,
        },
        {
          id: 123,
          name: 'Lindsay Walton',
          email: 'lindsay.walton@example.com',
          role: 'Front-end Developer',
          imageUrl:
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          href: '#',
          lastSeen: '3h ago',
          lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
          id: 123,
          name: 'Courtney Henry',
          email: 'courtney.henry@example.com',
          role: 'Designer',
          imageUrl:
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          href: '#',
          lastSeen: '3h ago',
          lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
          id: 123,
          name: 'Tom Cook',
          email: 'tom.cook@example.com',
          role: 'Director of Product',
          imageUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          href: '#',
          lastSeen: null,
        }
      ]
    }
  },
  computed: {

    ...mapState('temoignages', ['temoignage']),
    id() {
      return this.$route.params.id
    },
    localTemoignage: {
      get() {
        return this.temoignage;
      },
      set(value) {
        this.updateTemoignage(value);
      }
    }
  },
  methods: {
    ...mapActions('temoignages', ['getTemoignageById', 'getNewTemoignage', 'addTemoignage', 'updateTemoignage']),
    saveTemoignage() {
      if (this.id === 'new') {
        this.addTemoignage(this.temoignage)
      } else {
        this.updateTemoignage(this.temoignage)
      }
    }
  },
  mounted() {
    console.log('mounted')
    if (this.$route.params.id === 'new') {
      this.getNewTemoignage()
    } else {
      this.getTemoignageById({
        id: this.$route.params.id
      })
    }
  },
}


</script>
