<template>
  <section class="testimonials-section">
    <div class="auto-container">
      <div class="sec-title">
        <h2>{{ title }}<span class="dot">...</span></h2>
      </div>
      <div class="carousel-box">
        <div class="testimonials-carousel">
          <carousel v-if="temoignages"
                    :autoplay="true"
                    :margin="30"
                    :responsive="{0: {items: 1},600: {items: 1},768: {items: 1},992: {items: 2},1200: {items: 2}}"
                   >

            <div class="testi-block"  v-for="temoignage in temoignages">
              <div class="inner">
                <div class="icon"><span>“</span></div>
                <div class="info">
                  <div class="image">
                    <div
                      v-if="temoignage.image"
                      v-html="temoignage.image">

                    </div>
                  </div>
                  <div class="name">{{ temoignage.author }}</div>
                  <div class="designation">{{ temoignage.city }}</div>
                </div>
                <div class="text">{{temoignage.content}}</div>
              </div>
            </div>

          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {testimonials_data} from "../../static/data/testimonials_data";
import {
  mapActions,
  mapGetters,
  mapState
} from "vuex";
import temoignages
  from "@/pages/back-office/temoignages/index.vue";
    export default {
        name: "Testimonial",
      data() {
        return {
          title: 'Ce que nos clients pensent de nous',
          aTestimonials:  testimonials_data,

        }
      },
      computed: {
        ...mapState('temoignages', ['temoignages'])
      },
      methods: {
      ...mapActions('temoignages', ['getAllTemoignages'])
      },
      mounted() {
        this.getAllTemoignages();
      },

    }

</script>

<style scoped>

</style>
