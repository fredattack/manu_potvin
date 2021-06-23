<template>
  <carousel v-if="aTestimonials"
            :autoplay="true"
            :margin="30"
            :responsive="{0: {items: 1},600: {items: 1},768: {items: 1},992: {items: 2},1200: {items: 2}}"
  >
  <div class="testi-block"  v-for="testimonial in aTestimonials">
    <div class="inner">
      <div class="icon"><span>“</span></div>
      <div class="info">
        <div class="image"><a href="/team"><img v-bind:src="testimonial.image"
                                                alt=""></a></div>
        <div class="name">{{ testimonial.customerName }}</div>
        <div class="designation">{{ testimonial.customerCity }}</div>
      </div>
      <div class="text">{{testimonial.message}}</div>
    </div>
  </div>
  </carousel>
</template>

<script>
    export default {
        name: "Testimonial_block",
      props: ['aTestimonials']
    }
</script>

<style scoped>

</style>
