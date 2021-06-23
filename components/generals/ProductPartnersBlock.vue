<template>
  <div class="sidebar-widget services" v-if="partnersLogos">
    <div class="widget-inner">
      <div class="sidebar-title">
        <h4 class="mb-4">Nos partenaires</h4>
        <div style="display: flex; flex-direction:column; align-items: center" v-if="partnersLogos">
          <img  class="mb-3" width="100" :srcset="partner.logo" :alt="partner.name" v-for="partner in this.partnersLogos">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: "ProductPartnersBlock",
  props:[
    'partnersLogos',
  ],
  mounted() {
    console.log('partnersLogos',this.partnersLogos)
  },
}
</script>

<style scoped>

</style>
