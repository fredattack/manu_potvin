<template>
  <div class="sidebar-page-container">
    <div class="auto-container">
      <div class="row clearfix">

        <!--Content Side-->
        <div class="content-side col-lg-8 col-md-12 col-sm-12">
          <div class="service-details">
            <div class="main-image image">
              <img src="/images/resource/featured-image-16.jpg" alt="">
            </div>
            <div class="text-content">
              <h3>Website Development</h3>
              <p>Need something changed or is there something not quite working the way you envisaged?
                Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining essentially
                unchanged.</p>
              <div class="featured">
                <div class="row clearfix">
                  <div class="image-col col-md-6 col-sm-12">
                    <div class="image">
                      <img src="/images/resource/featured-image-17.jpg" alt="">
                    </div>
                  </div>
                  <div class="text-col col-md-6 col-sm-12">
                    <div class="inner">
                      <h4>planning &amp; strategy</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.</p>
                      <ul>
                        <li>Research beyond the business plan</li>
                        <li>Marketing options and rates</li>
                        <li>The ability to turnaround consulting</li>
                        <li>Customer engagement matters</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <p>Need something changed or is there something not quite working the way you envisaged?
                Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining essentially
                unchanged.</p>
              <p class="last">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>
        </div>

        <!--Sidebar Side-->
        <div class="sidebar-side col-lg-4 col-md-12 col-sm-12">
          <aside class="sidebar blog-sidebar">

            <div class="sidebar-widget services">
              <div class="widget-inner">
                <div class="sidebar-title">
                  <h4>Nos partenaires</h4>
                </div>
                <ul v-if="partners_logo">
                  <img :src="logo" alt="" v-for="logo in partners_logo">
                </ul>
              </div>
            </div>

            <div class="sidebar-widget call-up">
              <div class="widget-inner">
                <div class="sidebar-title">
                  <h4>Une question ?</h4>
                </div>
                <div class="text">Vous préférez parler à un humain plutôt que de remplir un formulaire? Appeler nous,
                  et nous vous mettrons en contact avec un membre de l'équipe qui pourra vous aider.</div>
                <div class="phone"><a v-bind:href="`tel:${$config.phoneNumber}`"><span class="icon flaticon-call"></span>{{ $config.phoneNumber}}</a></div>
              </div>
            </div>


          </aside>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ServiceDetails",
      data(){
          return [

          ]
      }
    }
</script>

<style scoped>

</style>
