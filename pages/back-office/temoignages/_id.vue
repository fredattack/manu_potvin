<template>
  <div>
    <navBar/>
    <div
        class="container mx-auto sm:mx-12 sm:mt-10 md:px-8 md:mt-20 md:border rounded-md">
      <!-- Content goes here -->
      <div
          class="flex justify-between items-center py-5">
        <h1 v-if="temoignage.id"
            class="text-3xl font-extrabold text-gray-900">
          Temoignage
          de {{
            temoignage.author
          }}
          <span
              class="ml-1 text-2xl text-gray-400">({{
              temoignage.city
            }})</span>
        </h1>
        <h1 v-else
            class="text-4xl font-extrabold tracking-tight text-slate-900">
          Nouveau
          Témoignage
        </h1>

        <a href="/temoignages"
           type="button"
           class="rounded-md bg-gray-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          back
        </a>
      </div>
      <div
          class="flex justify-between items-center">
        <div></div>
        <span
            class="isolate inline-flex rounded-md shadow-sm ">
  <button
      @click="localDeleteTemoignage"
      type="button"
      class="relative inline-flex items-center rounded-l-md bg-red-400 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 hover:text-red-600">Supprimer</button>

  <button
      @click="publishTestimonial"
      type="button"
      :class="publishedClass">{{
      localTemoignage.published ? 'Publier' : 'Non publié'
    }}</button>
</span>
      </div>

      <form>
        <div
            class="space-y-12">
          <!--          <div v-html="testimonial.media[0].url.srcset" class="object-cover rounded-lg shadow-lg"></div>-->
          <div
              class="border-b border-gray-300 pb-12">
            <div
                class="md:mt-10 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 ">
              <div id="info" class="flex flex-col justify-center">
                <div class="sm:col-span-4">
                  <label for="author" class="block text-sm font-medium leading-6 text-gray-900">Auteur</label>
                  <div class="mt-2">
                    <div
                        class="flex rounded-md border-1 ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                          type="text"
                          name="author"
                          id="author"
                          v-model="localTemoignage.author"
                          autocomplete="username"
                          class="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
                    </div>
                  </div>
                </div>

                <div class="sm:col-span-4">
                  <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Ville</label>
                  <div class="mt-2">
                    <div
                        class="flex rounded-md border-1 ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                          type="text"
                          name="city"
                          id="city"
                          v-model="localTemoignage.city"
                          autocomplete="city"
                          class="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-content-center">
                <div
                    v-if="temoignage.image"
                    v-html="temoignage.image"
                    class="object-cover rounded-full shadow-lg w-1/3"></div>
              </div>

              <div class="col-span-full">
                <label for="content" class="block text-sm font-medium leading-6 text-gray-900">Message</label>
                <div class="mt-2 rounded-md border-1">
      <textarea
          v-model="localTemoignage.content"
          id="content"
          name="content"
          rows="3"
          class="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                </div>
              </div>
              <div class="col-span-full">
                <image-manager
                    model="Testimonial"
                    :model_id="id"
                    image-collection="illustration"
                    :callback="()=>{ this.getTemoignageById({id: this.$route.params.id})}"
                    :reset="true"
                    :style="{ratio:'portrait'}"
                />
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
              @click.prevent="saveTemoignage"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import NavBar
  from "../../../components/Dashboard/NavBar.vue";
import {
  mapState,
  mapActions
} from 'vuex';
import testimonial
  from "../../../components/testimonials/Testimonial.vue";
import imageManager
  from "../../../components/images/image-manager.vue";

export default {
  middleware: 'authenticated',
  components: {
    NavBar,
    imageManager
  },
  data() {
    return {
      localTemoignage: {
        author: '',
        city: '',
        content: ''
      }
    };
  },
  computed: {
    testimonial() {
      return testimonial
    },
    ...mapState('temoignages', ['temoignage']),
    id() {
      return this.$route.params.id;
    },
    publishedClass() {
      return {
        'relative -ml-px inline-flex items-center rounded-r-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 hover:bg-green-500 hover:text-gray-900': true,
        'bg-green-500 text-gray-900': this.localTemoignage.published
      }
    }
  },
  watch: {
    temoignage: {
      handler(newValue) {
        this.localTemoignage = {...newValue};
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    ...mapActions('temoignages', ['getTemoignageById', 'getNewTemoignage', 'addTemoignage', 'updateTemoignage', 'deleteTemoignage']),
    saveTemoignage() {
      let payload = {
        ...this.localTemoignage,
        id: this.id
      };
      if (this.id === 'new') {
        this.addTemoignage({
          payload,
          nuxtContext: this.$nuxt
        });
      } else {
        this.updateTemoignage({
          payload,
          nuxtContext: this.$nuxt
        });
      }
    },
    publishTestimonial() {
      this.localTemoignage.published = !this.localTemoignage.published;
      let payload = {
        ...this.localTemoignage,
        id: this.id,
        refresh: false
      };
      this.updateTemoignage({
        payload,
        nuxtContext: this.$nuxt
      });
    },
    localDeleteTemoignage() {
      let payload = {
        ...this.localTemoignage,
        id: this.id
      };
      this.deleteTemoignage({
        payload,
        nuxtContext: this.$nuxt
      });
    }
  },
  mounted() {
    if (this.$route.params.id === 'new') {
      this.getNewTemoignage();
    } else {
      this.getTemoignageById({id: this.$route.params.id});
    }
    console.log("temoignage.illustration", this.temoignage.image)
  }
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>
