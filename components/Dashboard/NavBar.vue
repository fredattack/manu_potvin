<!--https://github.com/serresebastien/Nuxt-Tailwind-Responsive-Navbar-->
<template>
  <header class="bg-gray-100">
  <nav
      class="w-full p-6 bg-transparent">
    <div
        class="flex items-center justify-between">

      <!-- Header logo -->
      <div
          class="logo-box">
        <div
            class="logo">
          <a href="/"
             title="Manu Potvin">
            <img
                src="/images/custom/logo_full_white.png"
                id="thm-logo"
                alt="Manu potvin"
                width="200"
                title="Manu Potvin"></a>
        </div>
      </div>

      <!-- Mobile toggle -->
      <div
          class="md:hidden">
        <button
            @click="drawer">
          <svg
              class="h-8 w-8 fill-current text-black"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor">
            <path
                d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <div
          class="hidden md:block mr-7">
        <ul class="flex space-x-8 text-sm font-sans">
          <template
              v-for="element in navigationElements">
            <li :key="element.name">
              <a :href="element.link"
                 @click="isOpen = false"
                 class="my-4 inline-block">{{
                  element.name
                }}</a>
            </li>
          </template>

        </ul>
      </div>

      <!-- Dark Background Transition -->
      <transition
          enter-class="opacity-0"
          enter-active-class="ease-out transition-medium"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="ease-out transition-medium"
          leave-to-class="opacity-0"
      >
        <div
            @keydown.esc="isOpen = false"
            v-show="isOpen"
            class="z-10 fixed inset-0 transition-opacity">
          <div
              @click="isOpen = false"
              class="absolute inset-0 bg-black opacity-50"
              tabindex="0"></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside
          class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'">

        <div
            class="close">
          <button
              class="absolute top-0 right-0 mt-4 mr-4"
              @click=" isOpen = false">
            <svg
                class="w-6 h-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
              <path
                  d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span
            @click="isOpen = false"
            class="flex w-full items-center p-4 border-b">
          <div
              class="logo-box">
        <div
            class="logo">
          <a href="/"
             title="Manu Potvin">
            <img
                src="/images/custom/logo_full_white.png"
                id="thm-logo"
                alt="Manu potvin"
                width="200"
                title="Manu Potvin"></a>
        </div>
      </div>
        </span>

        <ul class="divide-y font-sans">
          <template
              v-for="element in navigationElements">
            <li :key="element.name">
              <a :href="element.link"
                 @click="isOpen = false"
                 class="my-4 inline-block">{{
                  element.name
                }}</a>
            </li>
          </template>
        </ul>
      </aside>

    </div>
  </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      navigationElements: [
        {
          name: "Home",
          link: "/dashboard"
        },
        {
          name: "Temoignages",
          link: "/temoignages"
        },
        {
          name: "Réalisations",
          link: "/realisations"
        },

      ]
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  }
};
</script>
