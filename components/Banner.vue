<template>

  <div>

    <section class="banner-section banner-one">
      <div class="left-based-text">
        <div class="base-inner">
          <!--          <div class="hours">-->
          <!--&lt;!&ndash;            <ul class="clearfix">&ndash;&gt;-->
          <!--&lt;!&ndash;              <li><span>mon - fri</span></li>&ndash;&gt;-->
          <!--&lt;!&ndash;              <li><span>9am - 7pm</span></li>&ndash;&gt;-->
          <!--&lt;!&ndash;            </ul>&ndash;&gt;-->
          <!--          </div>-->
          <div class="social-links">
            <ul class="clearfix">
<!--              <li><a href="#"><span>Twitter</span></a></li>-->
              <li><a href="https://www.facebook.com/PotvinManu"><span>Facebook</span></a></li>
<!--              <li><a href="#"><span>Youtube</span></a></li>-->
            </ul>
          </div>
        </div>
      </div>

      <div class="banner-carousel">

        <no-ssr> <!-- important to add no-ssr-->
          <carousel :items="1">
<!--            &lt;!&ndash; Slide Item 1 &ndash;&gt;
            <div class="slide-item">
              <div class="image-layer" style="background-image: url(/static/images/main-slider/custom/main_home-1.jpeg);"></div>
              <div class="left-top-line"></div>
              <div class="right-bottom-curve"></div>
              <div class="right-top-curve"></div>
              <div class="auto-container">
                <div class="content-box">
                  <div class="content">
                    <div class="inner">
                      <div class="sub-title">welcome to Linoor agency</div>
                      <h1>Smart Web <br>Design Agency</h1>
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
            </div>-->

            <!-- Slide Item 2-->
            <div class="slide-item">
              <div class="image-layer"
                   style="background-image: url(/images/background/new_main_home-2.jpg);"></div>
              <div class="left-top-line"></div>
              <div class="right-bottom-curve"></div>
<!--              <div class="right-top-curve"></div>-->
              <div class="auto-container">
                <div class="content-box">
                  <div class="content">
                    <div class="inner">
<!--                      <div class="sub-title">welcome to Linoor agency</div>-->
                      <h1><small>Manu</small></h1><h1>Potvin</h1>
                      <div class="link-box">
                        <nuxt-link class="theme-btn btn-style-one" to="/portfolio">
                          <i class="btn-curve"></i>
                          <span class="btn-title">Nos Réalisations</span>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

<!--            &lt;!&ndash; Slide Item 3&ndash;&gt;-->
<!--            <div class="slide-item">-->
<!--              <div class="image-layer"-->
<!--                   style="background-image: url(/images/main-slider/custom/main_home-3.jpeg);"></div>-->
<!--              <div class="left-top-line"></div>-->
<!--              <div class="right-bottom-curve"></div>-->
<!--&lt;!&ndash;              <div class="right-top-curve"></div>&ndash;&gt;-->
<!--              <div class="auto-container">-->
<!--                <div class="content-box">-->
<!--                  <div class="content">-->
<!--                    <div class="inner">-->
<!--                      &lt;!&ndash;                      <div class="sub-title">welcome to Linoor agency</div>&ndash;&gt;-->
<!--                      <h1><small>Manu</small></h1><h1>Potvin</h1>-->
<!--                      <div class="link-box">-->
<!--                        <nuxt-link class="theme-btn btn-style-one" to="/portfolio">-->
<!--                          <i class="btn-curve"></i>-->
<!--                          <span class="btn-title">Nos Réalisations</span>-->
<!--                        </nuxt-link>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

          </carousel>
        </no-ssr>

      </div>
    </section>

  </div>

</template>

<script>

export default {
  name: "Banner",
}
</script>

<style scoped>

</style>
