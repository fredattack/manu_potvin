<template>
  <div>
    <Nav />
    <Banner />
    <Testimonial />
    <CallToActionThree />
    <ParallaxSection />
    <PartnersSection />
    <Footer />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import Banner from "../components/Banner";
  import Testimonial from "../components/testimonials/Testimonial";
  import CallToActionThree from "../components/CallToActionThree";
  import PartnersSection from "../components/generals/PartnersSection";
  import Footer from "../components/Footer";
  import ParallaxSection from "../components/ParallaxSection";

  export default {
    auth: false,
    components: {
      Footer,
      PartnersSection,
      ParallaxSection,
      Banner,
      Testimonial,
      Nav,
      CallToActionThree

    }
  }
</script>
