<template>
  <div>
    <Nav />
    <PageHeader :title="title" />
    <ProductDetailsPergolas />
    <GalleryPage category="pergola"/>
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
  import {seo_data} from "../../../static/data/seo_data";

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
        title: `Manu Potvin | ${this.title}`,
        meta: seo_data.pergolas
      }
    }
  }
</script>
