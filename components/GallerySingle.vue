<template>
    <div>
      <section class="project-single">
        <div class="auto-container">
          <div class="row clearfix">
            <!-- Images COl -->
            <div class="image-col col-lg-8 col-md-12 col-sm-12">
              <div class="inner">
                <figure class="image-box">
                  <a href="/images/resource/featured-image-18.jpg" class="portfolio" data-fancybox="gallery"><img src="images/resource/featured-image-18.jpg" alt=""></a>
                </figure>

                <figure class="image-box">
                  <a href="images/resource/featured-image-19.jpg" class="portfolio" data-fancybox="gallery"><img src="/images/resource/featured-image-19.jpg" alt=""></a>
                </figure>
              </div>
            </div>

            <!-- Text COl -->
            <div class="text-col col-lg-4 col-md-12 col-sm-12">
              <div class="inner">
                <div class="text-content">
                  <h5>Fimlor Experience</h5>
                  <p>Tincidunt elit magnis nulla facilisis sagittis sapien nunc amet ultrices dolores sit
                    ipsum velit purus aliquet massa fringilla leo orci. Sapien nunc amet ultrices,
                    dolores sit ipsum velit massa fringilla leo orci dolors sit amet elit amet.</p>
                  <ul class="info">
                    <li><strong>Clients:</strong> <br>Jessica Brown</li>
                    <li><strong>Category:</strong> <br>Graphic, Illustrations</li>
                    <li><strong>Date:</strong> <br>20 May, 2020</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <div class="post-control">
        <div class="auto-container">
          <div class="inner clearfix">
            <div class="control prev"><a href="#"><span class="fa fa-angle-left"></span> &nbsp; Previous</a>
            </div>
            <div class="control next"><a href="#">Next &nbsp;<span class="fa fa-angle-right"></span></a></div>
          </div>
        </div>
      </div>

      <section class="gallery-section similar-gallery">
        <div class="auto-container">
          <div class="sec-title centered">
            <h2>Similar work<span class="dot">.</span></h2>
          </div>
          <div class="row clearfix">
            <!-- Gallery Item -->
            <div class="gallery-item col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box">
                <figure class="image"><img src="/images/gallery/4.jpg" alt=""></figure>
                <a href="/images/gallery/4.jpg" class="portfolio-gallery overlay-box" data-fancybox="gallery"></a>
                <div class="cap-box">
                  <div class="cap-inner">
                    <div class="cat"><span>Graphic</span></div>
                    <div class="title">
                      <h5><a href="/portfolio-single">Fimlor Experience</a></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Gallery Item -->
            <div class="gallery-item col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box">
                <figure class="image"><img src="/images/gallery/5.jpg" alt=""></figure>
                <a href="/images/gallery/5.jpg" class="portfolio-gallery overlay-box" data-fancybox="gallery"></a>
                <div class="cap-box">
                  <div class="cap-inner">
                    <div class="cat"><span>Graphic</span></div>
                    <div class="title">
                      <h5><a href="/portfolio-single">Fimlor Experience</a></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Gallery Item -->
            <div class="gallery-item col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box">
                <figure class="image"><img src="/images/gallery/6.jpg" alt=""></figure>
                <a href="/images/gallery/6.jpg" class="portfolio-gallery overlay-box" data-fancybox="gallery"></a>
                <div class="cap-box">
                  <div class="cap-inner">
                    <div class="cat"><span>Graphic</span></div>
                    <div class="title">
                      <h5><a href="/portfolio-single">Fimlor Experience</a></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
</template>

<script>
    export default {
      name: "GallerySingle",
      mounted() {
        new GLightbox({
          selector: '.portfolio',
        });
        new GLightbox({
          selector: '.portfolio-gallery',
        });
      }

    }
</script>

<style scoped>

</style>
