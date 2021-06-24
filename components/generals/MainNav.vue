<template>
  <div class="header-upper">
    <div class="inner-container clearfix">
      <!--Logo-->
      <div class="logo-box">
        <div class="logo"><a href="/" title="Manu Potvin"><img
            src="/images/custom/logo_full_white.png" id="thm-logo" alt="Manu potvin"
            title="Manu Potvin"></a></div>
      </div>
      <div class="nav-outer clearfix">
        <!--Mobile Navigation Toggler-->
        <div class="mobile-nav-toggler">
          <span @click="mobileToggle = !mobileToggle" class="icon flaticon-menu-2"></span><span class="txt">Menu</span>
        </div>

        <!-- Main Menu -->
        <nav class="main-menu navbar-expand-md navbar-light">
          <div class="collapse navbar-collapse show clearfix">
            <ul class="navigation clearfix">
              <li class="current dropdown"><a href="/">Accueil</a>
                <!--                  <ul>-->
                <!--                    <li><nuxt-link to="/">Home Style 01</nuxt-link></li>-->
                <!--                    <li><nuxt-link to="/index-2">Home Style 02</nuxt-link></li>-->
                <!--                    <li><nuxt-link to="/index-3">Home Style 03</nuxt-link></li>-->
                <!--                  </ul>-->
              </li>
              <li class="dropdown"><nuxt-link to="/products/chassis_portes_fenetres">Portes-Fenêtres-Chassis</nuxt-link>
                <ul>
                  <li><nuxt-link to="/products/chassis_portes_fenetres/PVC">Chassis PVC</nuxt-link></li>
                  <li><nuxt-link to="/products/chassis_portes_fenetres/ALU">Chassis Alu</nuxt-link></li>
                  <!--                    <li><nuxt-link to="/faqs">FAQs</nuxt-link></li>-->
                  <!--                    <li><nuxt-link to="/not-found">404 Page</nuxt-link></li>-->
                </ul>
              </li>
              <li class="dropdown"><nuxt-link to="/products/portes_de_garage">Portes de garage</nuxt-link>
              <li class="dropdown"><nuxt-link to="/products/pergolas">Pergolas</nuxt-link>
              <li class="dropdown"><nuxt-link to="/products/moustiquaires">Moustiquaires</nuxt-link>
                <!--                  <ul>-->
                <!--                    <li><nuxt-link to="/services">All Services</nuxt-link></li>-->
                <!--                    <li><nuxt-link to="/web-development">Website Development</nuxt-link></li>-->
                <!--                    <li><nuxt-link to="/graphic-designing">Graphic Designing</nuxt-link></li>-->
                <!--                    <li><nuxt-link to="/digital-marketing">Digital Marketing</nuxt-link></li>-->
                <!--                    <li><nuxt-link to="/seo">SEO & Content Writting</nuxt-link></li>-->
                <!--                    <li><nuxt-link to="/app-development">App Development</nuxt-link></li>-->
                <!--                    <li><nuxt-link to="/ui-designing">UI/UX Designing</nuxt-link></li>-->
                <!--                  </ul>-->
              </li>
              <li class="dropdown"><nuxt-link to="/portfolio">NOS RÉALISATIONS</nuxt-link>
                <!--                  <ul>-->
                <!--                    <li><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>-->
                <!--                    <li><nuxt-link to="/portfolio-single">Portfolio Single 01</nuxt-link></li>-->
                <!--                    <li><nuxt-link to="/portfolio-single-2">Portfolio Single 02</nuxt-link></li>-->
                <!--                  </ul>-->
              </li>
              <!--                <li class="dropdown"><nuxt-link to="/blog-grid">Blog</nuxt-link>-->
              <!--                  <ul>-->
              <!--                    <li><nuxt-link to="/blog">Blog Sidebar</nuxt-link></li>-->
              <!--                    <li><nuxt-link to="/blog-grid">Blog Grid View</nuxt-link></li>-->
              <!--                    <li><nuxt-link to="/blog-single">Blog Single</nuxt-link></li>-->
              <!--                  </ul>-->
              <!--                </li>-->
              <li><nuxt-link to="/contact">Contact</nuxt-link></li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="other-links clearfix">
        <div class="link-box">
          <div class="call-us">
            <a class="link" v-bind:href="`tel:${phoneNumber}`">
              <span class="icon"></span>
              <span class="sub-text">Numéro direct</span>
              <span class="number"> {{phoneNumber}} </span>
            </a>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "MainNav"
}
</script>

<style scoped>

</style>
