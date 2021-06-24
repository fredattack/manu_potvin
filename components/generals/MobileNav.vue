<template>
  <nav class="mobile-nav__container">
    <!-- content is loading via js -->

    <div :class="`collapse navbar-collapse ${mobileToggle ? 'show' : ''} clearfix`">
      <ul class="navigation clearfix">
        <li class="dropdown"><a href="/">Accueil<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div></a>
          <!--            <ul class="sub-menu">-->
          <!--              <li><nuxt-link to="/">Home Style 01</nuxt-link></li>-->
          <!--              <li><nuxt-link to="/index-2">Home Style 02</nuxt-link></li>-->
          <!--              <li><nuxt-link to="/index-3">Home Style 03</nuxt-link></li>-->
          <!--            </ul>-->
        </li>
        <!--          <li><nuxt-link to="/about">About Us</nuxt-link></li>-->
        <li class="dropdown"><nuxt-link to="/products/chassis_portes_fenetres">Portes-Fenêtres-Chassis<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div></nuxt-link>
          <ul class="sub-menu">
            <li><nuxt-link to="/products/chassis_portes_fenetres/PVC">Chassis PVC</nuxt-link></li>
            <li><nuxt-link to="/products/chassis_portes_fenetres/ALU">Chassis Alu</nuxt-link></li>
          </ul>
        </li>
        <li ><nuxt-link to="/products/portes_de_garage">Portes de garage</nuxt-link>
          <!--            <ul class="sub-menu">-->
          <!--              <li><nuxt-link to="/services">All Services</nuxt-link></li>-->
          <!--              <li><nuxt-link to="/web-development">Website Development</nuxt-link></li>-->
          <!--              <li><nuxt-link to="/graphic-designing">Graphic Designing</nuxt-link></li>-->
          <!--              <li><nuxt-link to="/digital-marketing">Digital Marketing</nuxt-link></li>-->
          <!--              <li><nuxt-link to="/seo">SEO & Content Writting</nuxt-link></li>-->
          <!--              <li><nuxt-link to="/app-development">App Development</nuxt-link></li>-->
          <!--              <li><nuxt-link to="/ui-designing">UI/UX Designing</nuxt-link></li>-->
          <!--            </ul>-->
        </li>
        <li ><nuxt-link to="/products/pergolas">Pergolas</nuxt-link>
          <!--            <ul class="sub-menu">-->
          <!--              <li><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>-->
          <!--              <li><nuxt-link to="/portfolio-single">Portfolio Single 01</nuxt-link></li>-->
          <!--              <li><nuxt-link to="/portfolio-single-2">Portfolio Single 02</nuxt-link></li>-->
          <!--            </ul>-->
        </li>
        <li ><nuxt-link to="/products/moustiquaires">Moustiquaires</nuxt-link>
          <!--            <ul class="sub-menu">-->
          <!--              <li><nuxt-link to="/blog">Blog Sidebar</nuxt-link></li>-->
          <!--              <li><nuxt-link to="/blog-grid">Blog Grid View</nuxt-link></li>-->
          <!--              <li><nuxt-link to="/blog-single">Blog Single</nuxt-link></li>-->
          <!--            </ul>-->
        </li>
        <li><nuxt-link to="/portfolio">Nos Réalisations</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MobileNav"
}
</script>

<style scoped>

</style>
