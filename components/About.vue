<template>
  <section class="about-section">
    <div class="auto-container">
      <div class="row clearfix">
        <!--Image Column-->
        <div class="image-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
          <div class="inner">
            <div class="image-block wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms"><img
              src="/images/resource/featured-image-1.jpg" alt=""></div>
            <div class="image-block wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms"><img
              src="/images/resource/featured-image-2.jpg" alt=""></div>
          </div>
        </div>
        <!--Text Column-->
        <div class="text-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
          <div class="inner">
            <div class="sec-title">
              <h2>We’re the best agency <br>in downtown <span class="dot">.</span></h2>
              <div class="lower-text">We are committed to providing our customers with exceptional
                service while offering our employees the best training.</div>
            </div>
            <div class="text">
              <p>Lorem Ipsum is simply dummy text of free available in market the printing and
                typesetting industry has been the industry's standard dummy text ever.</p>
            </div>
            <div class="text clearfix">
              <ul>
                <li>Suspe ndisse suscipit sagittis leo.</li>
                <li>Entum estibulum dignissim posuere.</li>
                <li>If you are going to use a passage.</li>
              </ul>
              <div class="since"><span class="txt">Since <br>2008</span></div>
            </div>
            <div class="link-box">
              <nuxt-link class="theme-btn btn-style-one" to="/about">
                <i class="btn-curve"></i>
                <span class="btn-title">Discover More</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>

</style>
