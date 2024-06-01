<template>
  <div>
    <navBar/>
    <div class="container mx-auto sm:mx-12 sm:mt-10 md:px-8 md:mt-20 md:border rounded-md">
      <div class="flex justify-between items-center py-5">
        <h1 v-if="realisation.id" class="text-3xl font-extrabold text-gray-900">
          {{ realisation.title }}
        </h1>
        <h1 v-else class="text-4xl font-extrabold tracking-tight text-slate-900">
          Nouvelle Réalisation
        </h1>
        <a href="/realisations" type="button" class="rounded-md bg-gray-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">back</a>
      </div>
      <div class="flex justify-between items-center">
        <div></div>
        <span class="isolate inline-flex rounded-md shadow-sm">
          <button @click="localDeleteRealisation" type="button" class="relative inline-flex items-center rounded-l-md bg-red-400 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 hover:text-red-600">Supprimer</button>
          <button @click="publishRealisation" type="button" :class="publishedClass">{{ localRealisation.published ? 'Publier' : 'Non publié' }}</button>
        </span>
      </div>
      <form>
        <div class="space-y-12">
          <div class="border-b border-gray-300 pb-12">
            <div class="md:mt-10 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
              <div id="info" class="flex flex-col justify-center">
                <div class="sm:col-span-4">
                  <label for="author" class="block text-sm font-medium leading-6 text-gray-900">Titre</label>
                  <div class="mt-2">
                    <div class="flex rounded-md border-1 ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input type="text" name="author" id="author" v-model="localRealisation.title" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
                    </div>
                  </div>
                </div>
                <div class="sm:col-span-4">
                  <label for="category" class="block text-sm font-medium leading-6 text-gray-900">categorie</label>
                  <select id="category" name="category" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      <option
                          v-for="category in categories"
                          :key="category.key"
                          :value="category.key"
                          :selected="category.key === realisation.category"
                      >
                        {{ category.value }}
                      </option>
                  </select>
                </div>
              </div>
              <div class="flex justify-content-center">
                <div v-if="realisation.image" v-html="realisation.image" class="object-cover shadow-lg w-1/3"></div>
              </div>
              <div class="col-span-full">
                <label for="content" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
                <div class="mt-2 rounded-md border-1">
                  <textarea v-model="localRealisation.description" id="description" name="description" rows="3" class="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                </div>
              </div>
              <div class="col-span-full">
                <image-manager key="illustration{{realisation.id}}" model="Achievement" :model_id="id" image-collection="illustration" :callback="handleImageManagerCallback" :reset="true" :style="{ratio:'portrait'}" />
              </div>
              <div class="col-span-full">
                <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                  <li v-for="image in realisation.gallery_images" :key="image.id" class="relative">
                    <div class="group aspect-h-7 aspect-w-10 w-full overflow-hidden rounded-lg border border-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 relative flex flex-col justify-between">
                      <div v-html="image.html" class="object-cover"></div>
                      <button @click="localDeleteImage(image.id)" class="inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-3 py-2 m-1 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 self-end">
                        <font-awesome-icon :icon="['fas', 'trash']" />
                      </button>
                    </div>
                  </li>
                </ul>
                <image-manager key="gallery{{realisation.id}}" model="Achievement" :model_id="id" image-collection="gallery" :callback="handleImageManagerCallback" :reset="true" :style="{ratio:'portrait'}" title="Galerie" />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-end gap-x-6 mb-4">
          <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
          <button @click.prevent="saveRealisation" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import NavBar from "../../../components/Dashboard/NavBar.vue";
import { mapState, mapActions } from 'vuex';
import imageManager from "../../../components/images/image-manager.vue";

export default {
  middleware: 'authenticated',
  components: {
    NavBar,
    imageManager
  },
  data() {
    return {
      localRealisation: {
        author: '',
        city: '',
        content: ''
      },
      categories:[
        {key:'chassis',value:'Chassis'},
        {key:'moustiquaire',value:'Moustiquaire'},
        {key:'porte_de_garage',value:'Porte de garage'},
        {key:'pergola',value:'Pergola'},
      ]
    };
  },
  computed: {
    ...mapState('realisations', ['realisation']),
    id() {
      return this.$route.params.id;
    },
    publishedClass() {
      return {
        'relative -ml-px inline-flex items-center rounded-r-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 hover:bg-green-500 hover:text-gray-900': true,
        'bg-green-500 text-gray-900': this.localRealisation.published
      }
    }
  },
  watch: {
    '$route.params.id': {
      handler(newVal) {
        if (newVal === 'new') {
          this.getNewRealisation();
        } else {
          this.getRealisationById({ id: newVal });
        }
      },
      immediate: true
    },
    realisation: {
      handler(newVal) {
        if (JSON.stringify(this.localRealisation) !== JSON.stringify(newVal)) {
          this.localRealisation = { ...newVal };
        }
      },
      deep: true
    }
  },
  methods: {
    ...mapActions('realisations', [
      'getRealisationById',
      'getNewRealisation',
      'addRealisation',
      'updateRealisation',
      'deleteRealisation'
    ]),
    ...mapActions('images', [
      'deleteImage'
    ]),
    saveRealisation() {
      let payload = {
        ...this.localRealisation,
        id: this.id
      };
      if (this.id === 'new') {
        this.addRealisation({ payload, nuxtContext: this.$nuxt });
      } else {
        this.updateRealisation({ payload, nuxtContext: this.$nuxt });
      }
    },
    publishRealisation() {
      this.localRealisation.published = !this.localRealisation.published;
      let payload = {
        ...this.localRealisation,
        id: this.id,
        refresh: false
      };
      this.updateRealisation({ payload, nuxtContext: this.$nuxt });
    },
    localDeleteRealisation() {
      let payload = {
        ...this.localRealisation,
        id: this.id
      };
      console.log('payload',payload)
      this.deleteRealisation({ payload, nuxtContext: this.$nuxt });
    },
     localDeleteImage(imageId) {
      let payload = {
        id: imageId,
        successCallback: () => {
          this.getRealisationById({ id: this.$route.params.id });
        },
      };
      this.deleteImage(payload);
    },
    handleImageManagerCallback() {
      this.getRealisationById({ id: this.$route.params.id });
    }
  },
  mounted() {
    if (this.$route.params.id === 'new') {
      this.getNewRealisation();
    } else {
      this.getRealisationById({ id: this.$route.params.id });
    }
  }
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>
