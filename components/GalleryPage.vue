<template>
  <section class="gallery-section">
    <div class="auto-container">
      <!--MixitUp Galery-->
      <div class="mixitup-gallery">
          <!--Filter-->
          <div class="filters centered clearfix">
            <ul class="filter-tabs filter-btns clearfix">
              <li class="filter mixitup-control-active" data-role="button" data-filter=".all">Tout<sup></sup></li>
              <li class="filter" data-role="button" data-filter=".chassis">Chassis<sup></sup></li>
              <li class="filter" data-role="button" data-filter=".porte_de_garage">Porte de garage<sup></sup></li>
              <li class="filter" data-role="button" data-filter=".pergolas">Pergola<sup></sup></li>
              <li class="filter" data-role="button" data-filter=".moustiquaire">Moustiquaire<sup></sup></li>
            </ul>
        </div>
        <div class="filter-list row" v-if="portfolio_data">
          <!-- Gallery Item -->
          <div class="gallery-item mix all col-lg-4 col-md-6 col-sm-12" :class="item.category" v-for="item in portfolio_data">
            <div class="inner-box">
              <figure class="image"><img :srcset="item.picture" alt=""></figure>

              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>{{item.name}}</span></div>
                  <div class="title">
                    <h5><nuxt-link to="/portfolio-single">{{item.name}}</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

<!--          &lt;!&ndash; Gallery Item &ndash;&gt;
          <div class="gallery-item mix all chassis web-design col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <figure class="image"><img src="/images/gallery/2.jpg" alt=""></figure>
              <a href="/images/gallery/2.jpg" class="lightbox-image overlay-box"
                 data-fancybox="gallery"></a>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>Graphic</span></div>
                  <div class="title">
                    <h5><nuxt-link to="/portfolio-single">Fimlor Experience</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          &lt;!&ndash; Gallery Item &ndash;&gt;
          <div class="gallery-item mix all branding web-design col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <figure class="image"><img src="/images/gallery/3.jpg" alt=""></figure>
              <a href="/images/gallery/3.jpg" class="lightbox-image overlay-box"
                 data-fancybox="gallery"></a>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>Graphic</span></div>
                  <div class="title">
                    <h5><nuxt-link to="/portfolio-single">Fimlor Experience</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          &lt;!&ndash; Gallery Item &ndash;&gt;
          <div class="gallery-item mix all branding illustration col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <figure class="image"><img src="/images/gallery/4.jpg" alt=""></figure>
              <a href="/images/gallery/4.jpg" class="lightbox-image overlay-box"
                 data-fancybox="gallery"></a>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>Graphic</span></div>
                  <div class="title">
                    <h5><nuxt-link to="/portfolio-single">Fimlor Experience</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          &lt;!&ndash; Gallery Item &ndash;&gt;
          <div
            class="gallery-item mix all branding illustration photography web-design col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <figure class="image"><img src="/images/gallery/5.jpg" alt=""></figure>
              <a href="/images/gallery/5.jpg" class="lightbox-image overlay-box"
                 data-fancybox="gallery"></a>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>Graphic</span></div>
                  <div class="title">
                    <h5><nuxt-link to="/portfolio-single">Fimlor Experience</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          &lt;!&ndash; Gallery Item &ndash;&gt;
          <div class="gallery-item mix all illustration photography col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <figure class="image"><img src="/images/gallery/6.jpg" alt=""></figure>
              <a href="/images/gallery/6.jpg" class="lightbox-image overlay-box"
                 data-fancybox="gallery"></a>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>Graphic</span></div>
                  <div class="title">
                    <h5><nuxt-link to="/portfolio-single">Fimlor Experience</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>-->

        </div>

      </div>

    </div>
  </section>
</template>

<script>
import {portfolio_data} from "../static/data/portfolio_data";
  export default {
    name: "GalleryPage",
    data () {
      return {
        mixer: null,
        portfolio_data : portfolio_data
      }
    },
    mounted () {
      const containerEl = document.querySelector('.filter-list')
      this.mixer = new this.mixitup(containerEl, {
      });

      new GLightbox({
        selector: '.lightbox-image',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
      });
    },
  }
</script>

<style scoped>

</style>
