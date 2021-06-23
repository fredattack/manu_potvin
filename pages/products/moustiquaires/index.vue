<template>
  <div>
    <Nav />
    <PageHeader :title="title" />
    <ServiceDetailsMoustiquaire />
    <CallToActionThree />
    <Footer />
  </div>
</template>
<script>
  import Nav from "../../../components/Nav";
  import PageHeader from "../../../components/PageHeader";
  import Footer from "../../../components/Footer";
  import CallToActionThree from "../../../components/CallToActionThree";
  import ServiceDetailsMoustiquaire from "../../../components/products/ProductDetails/ProductDetailsMoustiquaire";

  export default {
    mounted() {
      // console.log('this.$router', $route.params._category)
    },
    components: {
      ServiceDetailsMoustiquaire,
      CallToActionThree,
      Footer,
      PageHeader,
      Nav
    },
    data(){
      return {
        'title': 'Moustiquaires'
      }
    },
    head(){
      return {
        title: `Manu Potvin | ${this.title}`
      }
    }
  }
</script>
