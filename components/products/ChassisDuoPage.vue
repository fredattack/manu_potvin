<template>
  <section class="discover-section">
    <div class="auto-container">
      <div class="row clearfix">
        <!--left Block-->
        <div class="discover-block col-lg-6 col-md-12 col-sm-12">
          <div class="inner-box">
            <div class="image-box"><img src="/images/custom/fenetre_alu_first-.jpg" alt=""></div>
            <div class="cap-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div class="cap-inner">
                <h5>Plus d'infos sur les chassis aluminium</h5>
                <div class="more-link"><nuxt-link to="/products/chassis_portes_fenetres/ALU"><span
                  class="fa fa-angle-right"></span></nuxt-link></div>
              </div>
            </div>
          </div>

        </div>
        <!--right Block-->
        <div class="discover-block col-lg-6 col-md-12 col-sm-12">
          <div class="inner-box">
            <div class="image-box"><img src="/images/custom/fenetre_pvc_first%20.jpeg" alt=""></div>
            <div class="cap-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div class="cap-inner">
                <h5>Plus d'infos sur les chassis PVC</h5>
                <div class="more-link"> <nuxt-link to="/products/chassis_portes_fenetres/PVC"><span
                    class="fa fa-angle-right"></span></nuxt-link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    name: "DiscoverSection"
  }
</script>

<style scoped>

</style>
