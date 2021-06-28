<template>
  <div>
    <Nav />
    <PageHeader :title="title" />
    <ProductDetailsChassisAlu v-if=" type === 'ALU' "/>
    <ProductDetailsChassisPVC v-if=" type === 'PVC' "/>
    <CallToActionThree />
    <Footer />
  </div>
</template>
<script>
  import Nav from "../../../../components/Nav";
  import PageHeader from "../../../../components/PageHeader";
  import ProductDetailsChassisAlu from "../../../../components/products/ProductDetails/ProductDetailsChassisAlu";
  import ProductDetailsChassisPVC from "../../../../components/products/ProductDetails/ProductDetailsChassisPVC";
  import CallToActionThree from "../../../../components/CallToActionThree";

  import Footer from "../../../../components/Footer";

  export default {
    mounted() {
      console.log('this.$router', this.$route.params.type)
    },
    components: {
      Nav,
      PageHeader,
      ProductDetailsChassisAlu,
      ProductDetailsChassisPVC,
      CallToActionThree,
      Footer,
    },
    computed:{
      title() {
        return `Chassis ${this.type}`
      }
    },
    data(){
      return {
        'type' : this.$route.params.type

      }
    },
    head(){
      return {
        title: `Manu Potvin | ${this.title}`
      }
    }
  }
</script>
