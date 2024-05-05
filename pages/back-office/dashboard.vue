<template>
  <navBar/>
</template>

<script>

  import Nav from "../../components/Nav.vue";
  import NavBar from "../../components/Dashboard/NavBar.vue";
  import Banner from "../../components/Banner.vue";
  import Testimonial from "../../components/testimonials/Testimonial.vue";
  import CallToActionThree from "../../components/CallToActionThree.vue";
  import PartnersSection from "../../components/generals/PartnersSection.vue";
  import Footer from "../../components/Footer.vue";
  import ParallaxSection from "../../components/ParallaxSection.vue";

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
        navigationElements : [
          { name: 'Product', href: '#' },
          { name: 'Features', href: '#' },
          { name: 'Marketplace', href: '#' },
          { name: 'Company', href: '#' },
        ],
        isMobileMenuOpen: false
      }
    },
    methods: {
      toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
      }
    },
  }


</script>
