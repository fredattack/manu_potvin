<template>
  <section class="testimonials-section">
    <div class="auto-container">
      <div class="sec-title">
        <h2>{{ title }}<span class="dot">...</span></h2>
      </div>
      <div class="carousel-box">
        <div class="testimonials-carousel">
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Testimonial",
      data() {
        return {
          title: 'Ce que nos clients pensent de nous',
          aTestimonials: [
            {
              customerName:'pipo',
              customerCity: 'Boussu',
              message: 'There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
              image: '/images/resource/author-3.jpg',
            },
            {
              customerName:'mario',
              customerCity: 'Montegnée',
              message: 'There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
              image: '/images/resource/author-3.jpg',
            },
            {
              customerName:'gino',
              customerCity: 'La louvière',
              message: 'There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
              image: '/images/resource/author-3.jpg',
            },
            {
              customerName:'luigi',
              customerCity: 'Jemappe',
              message: 'There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
              image: '/images/resource/author-3.jpg',
            },
            {
              customerName:'lorenzo',
              customerCity: 'Tilleur',
              message: 'There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
              image: '/images/resource/author-3.jpg',
            },
            {
              customerName:'Salva',
              customerCity: 'Liege',
              message: 'There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
              image: '/images/resource/author-3.jpg',
            }
          ],
        }
      }

    }

</script>

<style scoped>

</style>
