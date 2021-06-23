<template>
  <section class="sponsors-section-two">
    <div class="auto-container">
      <!--Sponsors Carousel-->
      <div class="row clearfix" >
        <div class="title-col col-xl-5 col-lg-12 col-md-12">
          <div class="sec-title wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
            <h2>nos principaux partenaires <span class="dot">.</span></h2>
          </div>
        </div>

        <div class="logo-col col-xl-7 col-lg-12 col-md-12" >
          <div class="row clearfix" v-if="partnersInfos" style="
    display: flex;
    flex-direction: row;
    align-items: center;
">
            <div class="logo-block col-xl-4 col-lg-3 col-md-4 col-sm-6 col-xs-12" v-for="partner in partnersInfos">
              <div class="image-box d-flex flex-column justify-content-center" :key="partner.id" style="height: 100%"><a href="#"><img
                  class=" img-fluid" :srcset="partner.logo" :alt="partner.name"></a></div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import {partnersInfos} from "../../static/data/partnersInfos";

export default {
  name: "PartnersSection",
  data() {
    return {
      partnersInfos
    }
  }
}
</script>

<style scoped>

</style>
