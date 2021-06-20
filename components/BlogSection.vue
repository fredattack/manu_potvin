<template>
  <section class="news-section">
    <div class="auto-container">
      <div class="sec-title centered">
        <h2>Latest news & articles<span class="dot">.</span></h2>
      </div>

      <div class="row clearfix">
        <!--News Block-->
        <div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0ms"
             data-wow-duration="1500ms">
          <div class="inner-box">
            <div class="image-box">
              <a href="#"><img src="/images/resource/news-1.jpg" alt=""></a>
            </div>
            <div class="lower-box">
              <div class="post-meta">
                <ul class="clearfix">
                  <li><span class="far fa-clock"></span> 20 Mar</li>
                  <li><span class="far fa-user-circle"></span> Admin</li>
                  <li><span class="far fa-comments"></span> 2 Comments</li>
                </ul>
              </div>
              <h5><nuxt-link to="/blog-single">basic rules of running web agency business</nuxt-link></h5>
              <div class="text">Lorem ipsum is simply free text used by copytyping refreshing.</div>
              <div class="link-box"><a class="theme-btn" href="#"><span
                class="flaticon-next-1"></span></a></div>
            </div>
          </div>
        </div>
        <!--News Block-->
        <div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms"
             data-wow-duration="1500ms">
          <div class="inner-box">
            <div class="image-box">
              <a href="#"><img src="/images/resource/news-2.jpg" alt=""></a>
            </div>
            <div class="lower-box">
              <div class="post-meta">
                <ul class="clearfix">
                  <li><span class="far fa-clock"></span> 20 Mar</li>
                  <li><span class="far fa-user-circle"></span> Admin</li>
                  <li><span class="far fa-comments"></span> 2 Comments</li>
                </ul>
              </div>
              <h5><nuxt-link to="/blog-single">Delivering the best digital marketing</nuxt-link></h5>
              <div class="text">Lorem ipsum is simply free text used by copytyping refreshing.</div>
              <div class="link-box"><a class="theme-btn" href="#"><span
                class="flaticon-next-1"></span></a></div>
            </div>
          </div>
        </div>
        <!--News Block-->
        <div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms"
             data-wow-duration="1500ms">
          <div class="inner-box">
            <div class="image-box">
              <a href="#"><img src="/images/resource/news-3.jpg" alt=""></a>
            </div>
            <div class="lower-box">
              <div class="post-meta">
                <ul class="clearfix">
                  <li><span class="far fa-clock"></span> 20 Mar</li>
                  <li><span class="far fa-user-circle"></span> Admin</li>
                  <li><span class="far fa-comments"></span> 2 Comments</li>
                </ul>
              </div>
              <h5><nuxt-link to="/blog-single">Introducing the latest linoor features</nuxt-link></h5>
              <div class="text">Lorem ipsum is simply free text used by copytyping refreshing.</div>
              <div class="link-box"><a class="theme-btn" href="#"><span
                class="flaticon-next-1"></span></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "BlogSection"
    }
</script>

<style scoped>

</style>
