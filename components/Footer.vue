<template>
  <div>
  <footer class="main-footer">
    <div class="auto-container">
      <!--Widgets Section-->
      <div class="widgets-section">
        <div class="row clearfix">

          <!--Column-->
          <div class="column col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="footer-widget logo-widget">
              <div class="widget-content">
                <div class="logo">
                  <nuxt-link to="/"><img id="fLogo" src="/images/custom/logo_full_white.png" alt="" /></nuxt-link>
                </div>
                <div class="text">Remplacement et réparation de châssis,porte PVC et ALU, vitrage, porte de garage, volet et pergola.</div>
                <ul class="social-links clearfix">
                  <li><a href="https://www.facebook.com/PotvinManu"><span class="fab fa-facebook-square"></span></a></li>
<!--                  <li><a href="#"><span class="fab fa-twitter"></span></a></li>-->
                  <li><a href="https://www.facebook.com/PotvinManu"><span class="fab fa-instagram"></span></a></li>
<!--                  <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li>-->
                </ul>
              </div>
            </div>
          </div>

          <!--Column-->
          <div class="column col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="footer-widget links-widget">
              <div class="widget-content">
                <h6>Explore</h6>
                <div class="row clearfix">
                  <div class="col-md-6 col-sm-12">
                    <ul>
                      <li><a href="/">Accueil</a></li>
                      <li><nuxt-link to="/products/chassis_portes_fenetres">Portes-Fenêtres-Chassis</nuxt-link></li>
                      <li><nuxt-link to="/products/chassis_portes_fenetres/PVC">Chassis PVC</nuxt-link></li>
                      <li><nuxt-link to="/products/chassis_portes_fenetres/ALU">Chassis ALU</nuxt-link></li>
                      <li><nuxt-link to="/products/portes_de_garage">Portes de garage</nuxt-link></li>
                    </ul>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <ul>
                      <li><nuxt-link to="/products/pergolas">Pergolas</nuxt-link></li>
                      <li><nuxt-link to="/products/moustiquaires">Moustiquaires</nuxt-link></li>
                      <li><nuxt-link to="/portfolio">NOS RÉALISATIONS</nuxt-link></li>
                      <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Column-->
          <div class="column col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="footer-widget info-widget">
              <div class="widget-content">
                <h6>Contact</h6>
                <ul class="contact-info">
                  <li class="address"><span class="icon flaticon-pin-1"></span> Rue Emile Permanne 4/A,<br>
                    4280 Hannut</li>
                  <li><span class="icon flaticon-call"></span><a href="tel:0475 62 64 40">0475 62 64 40</a></li>
                  <li><span class="icon flaticon-email-2"></span><a
                    href="mailto:info@manupotvin.be">info@manupotvin.be</a></li>
                </ul>
              </div>
            </div>
          </div>

          <!--Column-->
<!--          <div class="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div class="footer-widget newsletter-widget">
              <div class="widget-content">
                <h6>Newsletter</h6>
                <div class="newsletter-form">
                  <form method="post" action="#">
                    <div class="form-group clearfix">
                      <input type="email" name="email" value="" placeholder="Email Address"
                             required="">
                      <button type="submit" class="theme-btn"><span
                        class="fa fa-envelope"></span></button>
                    </div>
                  </form>
                </div>
                <div class="text">Sign up for our latest news & articles. We won’t give you spam
                  mails.</div>
              </div>
            </div>
          </div>-->

        </div>

      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="auto-container">
        <div class="inner clearfix">
          <div class="copyright">&copy; copyright {{ date }} by O.L.Dev</div>
      <small class="justify-content-center">This site is protected by reCAPTCHA and the Google
        <a href="https://policies.google.com/privacy">Privacy Policy</a> and
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </small>
        </div>
      </div>
    </div>


  </footer>

    <a @click="scrollTop" class="scroll-to-target scroll-to-top" :style="`display: ${scrollBtn ? 'inline' : 'none'}`" href="#"><i class="fa fa-angle-up"></i></a>

  </div>

</template>

<script>
  export default {
    name: "Footer",
    data(){
      return {
        scrollBtn: false,
        date: new Date().getFullYear()
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },

    methods: {

      handleScroll () {

        if (window.scrollY > 70) {
          this.scrollBtn = true
        }
        else if (window.scrollY < 70) {
          this.scrollBtn = false
        }
      },

      scrollTop () {
        window.scrollTo(0, 0);
      }


    }
  }
</script>

<style scoped>

</style>
