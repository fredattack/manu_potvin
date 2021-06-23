<template>
  <div>
    <Nav />
    <Banner />
    <Testimonial />
    <CallToActionThree />
    <ParallaxSection />
    <PartnersSection />
    <Footer />
<!--    <About />-->
<!--    <LiveSection />-->
<!--    <WedoSection />-->
<!--    <GallerySection />-->
<!--    <FactSection />-->
<!--    <TrustedSection />-->
<!--    <TeamSection />-->
<!--    <BrandsSection />-->
<!--    <AgencySection />-->
<!--    <BlogSection />-->
<!--    <CallToAction />-->
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import Banner from "../components/Banner";
  import Testimonial from "../components/testimonials/Testimonial";
  import CallToActionThree from "../components/CallToActionThree";
  import PartnersSection from "../components/generals/PartnersSection";
  import Footer from "../components/Footer";
  // import Services from "../components/Services";
  // import About from "../components/About";
  // import LiveSection from "../components/LiveSection";
  // import WedoSection from "../components/WedoSection";
  // import GallerySection from "../components/GallerySection";
  // import FactSection from "../components/FactSection";
  // import TrustedSection from "../components/TrustedSection";
  // import TeamSection from "../components/TeamSection";
  import ParallaxSection from "../components/ParallaxSection";
  // import BrandsSection from "../components/BrandsSection";
  // import AgencySection from "../components/AgencySection";
  // import BlogSection from "../components/BlogSection";
  // import CallToAction from "../components/CallToAction";

  export default {
    components: {
      Footer,
      PartnersSection,
      /*CallToAction,
      BlogSection,
      AgencySection,
      BrandsSection,*/
      ParallaxSection,
      /*TeamSection,
      TrustedSection,
      FactSection,
      GallerySection,
      WedoSection,
      LiveSection,
      About,
      Services,*/
      Banner,
      Testimonial,
      Nav,
      CallToActionThree

    }
  }
</script>
