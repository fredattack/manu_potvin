<template>
  <div>
  <navBar/>
    <div class="container mx-auto sm:px-6 lg:px-8 bg-gray-50 ">
      <!-- Content goes here -->
      <div class="flex justify-between items-center py-5">
        <h1 class="text-4xl font-extrabold tracking-tight text-slate-900">{{id}}</h1>
        <button type="button" class="rounded-md bg-gray-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          back
        </button>

      </div>

      <template>
        <ul role="list" class="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
          <li v-for="person in people" :key="person.testimonial" class="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6">

            <div class="flex min-w-0 gap-x-4">
              <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="person.imageUrl" alt="" />
              <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">
                  <a :href="'temoignages/' + person.id">
                    <span class="absolute inset-x-0 -top-px bottom-0"></span>
                    {{ person.name }}
                  </a>
                </p>
                <p class="mt-1 flex text-xs leading-5 text-gray-500">
                  {{ person.testimonial }}
                </p>
              </div>
            </div>
            <div class="flex shrink-0 items-center gap-x-4">
              <div class="hidden sm:flex sm:flex-col sm:items-end">
                <p class="text-sm leading-6 text-gray-900">{{ person.role }}</p>
                <p v-if="person.lastSeen" class="mt-1 text-xs leading-5 text-gray-500">
                  Last seen <time :datetime="person.lastSeenDateTime">{{ person.lastSeen }}</time>
                </p>
                <div v-else class="mt-1 flex items-center gap-x-1.5">
                  <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p class="text-xs leading-5 text-gray-500">Online</p>
                </div>
              </div>

            </div>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>

  import Nav from "../../../components/Nav.vue";
  import NavBar from "../../../components/Dashboard/NavBar.vue";
  import Banner from "../../../components/Banner.vue";
  import Testimonial from "../../../components/testimonials/Testimonial.vue";
  import CallToActionThree from "../../../components/CallToActionThree.vue";
  import PartnersSection from "../../../components/generals/PartnersSection.vue";
  import Footer from "../../../components/Footer.vue";
  import ParallaxSection from "../../../components/ParallaxSection.vue";
  import { mapState, mapActions } from 'vuex';

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
        people : [
          {
            id:123,
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
            id:123,
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
            id:123,
name: 'Dries Vincent',
            email: 'dries.vincent@example.com',
            role: 'Business Relations',
            imageUrl:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
            lastSeen: null,
          },
          {
            id:123,
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
            id:123,
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
            id:123,
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
      ...mapState('temoignage', ['userInfo']),
      id() {
        console.log('id', this.$route)
        return this.$route.params.id
      }
    },
    methods: {
      ...mapActions('temoignages', ['getTemoignageById']),

    },
    mounted() {
      console.log('mounted')
      this.getTemoignageById({
        id:this.$route.params.id
      })
    },
  }


</script>
