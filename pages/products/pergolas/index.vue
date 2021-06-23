<template>
  <div>
    <Nav />
    <PageHeader :title="title" />
    <ProductDetailsPergolas />
    <CallToActionThree />
    <Footer />
  </div>
</template>
<script>
  import Nav from "../../../components/Nav";
  import PageHeader from "../../../components/PageHeader";
  import Footer from "../../../components/Footer";
  import CallToActionThree from "../../../components/CallToActionThree";
  import ProductDetailsPergolas from "../../../components/products/ProductDetails/ProductDetailsPergolas";

  export default {
    mounted() {
      // console.log('this.$router', $route.params._category)
    },
    components: {
      ProductDetailsPergolas,
      CallToActionThree,
      Footer,
      PageHeader,
      Nav
    },
    data(){
      return {
        'title': 'Pergolas'
      }
    },
    head(){
      return {
        title: `Manu Potvin | ${this.title}`
      }
    }
  }
</script>
