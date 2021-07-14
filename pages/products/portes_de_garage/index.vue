<template>
  <div>
    <Nav />
    <PageHeader :title="title" />
    <ProductDetailsPortesDeGarage />
    <GalleryPage category="porte_de_garage"/>
    <CallToActionThree />
    <Footer />
  </div>
</template>
<script>
  import Nav from "../../../components/Nav";
  import PageHeader from "../../../components/PageHeader";
  import Footer from "../../../components/Footer";
  import CallToActionThree from "../../../components/CallToActionThree";
  import ProductDetailsPortesDeGarage from "../../../components/products/ProductDetails/ProductDetailsPortesDeGarage";
  import {seo_data} from "../../../static/data/seo_data";

  export default {
    mounted() {
      // console.log('this.$router', $route.params._category)
    },
    components: {
      ProductDetailsPortesDeGarage,
      CallToActionThree,
      Footer,
      PageHeader,
      Nav
    },
    data(){
      return {
        'title': 'Portes de garage'
      }
    },
    head(){
      return {
        title: `Manu Potvin | ${this.title}`,
        meta: seo_data.portes_garage
      }
    }
  }
</script>
