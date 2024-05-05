<template>
  <!-- Example for including Google Fonts -->

  <div class="page-wrapper">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <nuxt />
  </div>
</template>


<script>

  export default {
    components: {
    },
    head(){
      return {
        title: "Manu Potvin"
      }
    },
    mounted(){
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }
</script>


