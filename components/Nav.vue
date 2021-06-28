<template>
  <header :class="`main-header header-style-one ${sticky ? 'fixed-header' : ''}`">

    <!-- Header Upper -->
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
            <span @click="mobileToggle = !mobileToggle" class="icon flaticon-menu-2"></span><span
              class="txt">Menu</span>
          </div>

          <!-- Main Menu -->
          <nav class="main-menu navbar-expand-md navbar-light">
            <div class="collapse navbar-collapse show clearfix">
              <ul class="navigation clearfix">
                <li class="dropdown" :class="[{ current: this.$route.name === 'index' }]"><a href="/">Accueil</a></li>
                <li class="dropdown" :class="[{ current: ['products-chassis_portes_fenetres','products-chassis_portes_fenetres-type'].includes(this.$route.name) }]">
                  <nuxt-link to="/products/chassis_portes_fenetres">Portes-Fenêtres-Chassis</nuxt-link>
                  <ul>
                    <li>
                      <nuxt-link to="/products/chassis_portes_fenetres/PVC">Chassis PVC</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/products/chassis_portes_fenetres/ALU">Chassis Alu</nuxt-link>
                    </li>
                  </ul>
                </li>
                <li class="dropdown" :class="[{ current: this.$route.name === 'products-portes_de_garage' }]">
                  <nuxt-link to="/products/portes_de_garage">Portes de garage</nuxt-link>
                </li>
                <li class="dropdown" :class="[{ current: this.$route.name === 'products-pergolas' }]">
                  <nuxt-link to="/products/pergolas">Pergolas</nuxt-link>
                </li>
                <li class="dropdown" :class="[{ current: this.$route.name === 'products-moustiquaires' }]">
                  <nuxt-link to="/products/moustiquaires">Moustiquaires</nuxt-link>
                </li>
                <li class="dropdown" :class="[{ current: this.$route.name === 'portfolio' }]">
                  <nuxt-link to="/portfolio">NOS RÉALISATIONS</nuxt-link>
                </li>


                <li class="dropdown" :class="[{ current: this.$route.name === 'contact' }]">
                  <nuxt-link to="/contact">Contact</nuxt-link>
                </li>
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
                <span class="number"> {{ phoneNumber }} </span>
              </a>
            </div>
          </div>
        </div>


      </div>
    </div>
    <!--End Header Upper-->

    <nav class="mobile-nav__container">
      <!-- content is loading via js -->

      <div :class="`collapse navbar-collapse ${mobileToggle ? 'show' : ''} clearfix`">
        <ul class="navigation clearfix">
          <li class="dropdown"><a href="/">Accueil
            <div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>
          </a>
          </li>
          <li class="dropdown">
            <nuxt-link to="/products/chassis_portes_fenetres">Portes-Fenêtres-Chassis
              <div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>
            </nuxt-link>
            <ul class="sub-menu">
              <li>
                <nuxt-link to="/products/chassis_portes_fenetres/PVC">Chassis PVC</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/products/chassis_portes_fenetres/ALU">Chassis Alu</nuxt-link>
              </li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/products/portes_de_garage">Portes de garage</nuxt-link>

          </li>
          <li>
            <nuxt-link to="/products/pergolas">Pergolas</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/products/moustiquaires">Moustiquaires</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/portfolio">Nos Réalisations</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>

  </header>
</template>

<script>
export default {
  name: "Nav",
  computed: {
    phoneNumber() {
      return process.env.phoneNumber;
    },
  },
  data() {
    return {
      sticky: false,
      mobileToggle: false
    }
  },
  mounted() {
    console.log('name', this.$route.name)
    window.addEventListener('scroll', this.handleScroll);

    const mobileNav = document.querySelector('.mobile-nav__container');

    const mobileDropdownMenu = mobileNav.querySelectorAll('.dropdown');


    for (let i = 0; i < mobileDropdownMenu.length; i++) {
      mobileDropdownMenu[i].addEventListener("click", function () {
        this.classList.toggle('open');
        this.classList.toggle('current');
      });
    }
  },
  methods: {

    handleScroll() {
      if (window.scrollY > 70) {
        this.sticky = true
      } else if (window.scrollY < 70) {
        this.sticky = false
      }
    },

  }
}
</script>

<style scoped>

</style>
