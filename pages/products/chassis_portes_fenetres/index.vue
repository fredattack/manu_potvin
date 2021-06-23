<template>
  <div>
    <Nav />
    <PageHeader :title="title" />
    <ProductDetailsPortesDeGarage />
    <CallToActionThree />
    <Footer />
  </div>
</template>
<script>
  import Nav from "../../../components/Nav";
  import PageHeader from "../../../components/PageHeader";
  import Footer from "../../../components/Footer";
  import CallToActionThree from "../../../components/CallToActionThree";
  import ServiceDetails from "../../../components/ServiceDetails";

  export default {
    mounted() {
      // console.log('this.$router', $route.params._category)
    },
    components: {
      ServiceDetails,
      CallToActionThree,
      Footer,
      PageHeader,
      Nav
    },
    data(){
      return {
        'title': this.$route.params.category !== 'portes_de_garage' ? this.$route.params.category.split('_').join('-') : this.$route.params.category.split('_').join(' ')
      }
    },
    head(){
      return {
        title: `Manu Potvin | ${this.title}`
      }
    }
  }
</script>
