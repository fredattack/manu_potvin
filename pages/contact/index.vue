<template>
  <div>
    <Nav />
    <PageHeader title="Contactez-nous" />
    <ContactPage />
    <Footer />
  </div>
</template>
<script>
  import Nav from "../../components/Nav";
  import PageHeader from "../../components/PageHeader";
  import Footer from "../../components/Footer";
  import ContactPage from "../../components/ContactPage";
  export default {
    components: {
      ContactPage,
      Footer,
      PageHeader,
      Nav
    },
    head(){
      return {
        title: "Manu potvin | Contactez nous"
      }
    }
  }
</script>
