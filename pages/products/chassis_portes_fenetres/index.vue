<template>
  <div>
    <Nav />
    <PageHeader :title="title" />
    <ChassisDuoPage />
    <ChassisCompare />
<!--    <About />
    <AboutTwo />-->
    <CallToActionThree />
    <Footer />
  </div>
</template>
<script>
  import Nav from "../../../components/Nav";
  import PageHeader from "../../../components/PageHeader";
  import ChassisDuoPage from "../../../components/products/ChassisDuoPage";
  import ChassisCompare from "../../../components/products/ChassisCompare";
  import AboutTwo from "../../../components/AboutTwo";
  import About from "../../../components/About";
  import CallToActionThree from "../../../components/CallToActionThree";
  import Footer from "../../../components/Footer";

  export default {
    mounted() {
      // console.log('this.$router', $route.params._category)
    },
    components: {
      ChassisDuoPage,
      CallToActionThree,
      ChassisCompare,
      About,
      AboutTwo,
      Footer,
      PageHeader,
      Nav
    },
    data(){
      return {
        'title': 'Portes, Fenêtres et chassis'
      }
    },
    head(){
      return {
        title: `Manu Potvin | ${this.title}`
      }
    }
  }
</script>
