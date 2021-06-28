<template>
  <div class="sidebar-page-container">
    <div class="auto-container">
      <div class="row clearfix">
        <!--Content Side-->
        <div class="content-side col-lg-8 col-md-12 col-sm-12">
          <div class="service-details">
            <div class="main-image image">
              <img src="../../../static/images/custom/chassis_alu_main.jpeg" alt="">
            </div>
            <div class="text-content">
              <h3>Les Chassis Alu</h3>
              <p>Avec leur aspect contemporain, leurs lignes épurées et leur indice thermique exceptionnel,
                les chassis en aluminium permettront non seulement à un maximum de lumière de filtrer dans votre maison,
                mais ils vous permettront également de profiter d'une qualité exceptionnelle, de performances et d'une esthétique époustouflante
                qui compléteront et amélioreront toute propriété.</p>
              <div class="featured">
                <div class="row clearfix">
                  <div class="image-col col-md-6 col-sm-12">
                    <div class="image">
                      <img src="../../../static/images/custom/chassis_alu_second.jpeg" alt="">
                    </div>
                  </div>
                  <div class="text-col col-md-6 col-sm-12">
                    <div class="inner">
                      <h4>Moderne &amp; écoénergétiques</h4>
                      <p>Réalisez vos rêves de design avec des fenêtres et des portes en aluminium modernes, minimales et écoénergétiques.
                       </p>
                      <ul>
                        <li>Fiable et durable</li>
                        <li>Cadres minces</li>
                        <li>Respectueux de l'environnement</li>
                        <li>Isolation phonique et climatique </li>
                        <li>Sécurité acrue</li>
                        <li>Fabrication précise et sur mesure</li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <p>Chassis en aluminium - un produit polyvalent pour chaque proje.</p>
              <p> Des vues panoramiques créées par nos grandes portes coulissantes aux espaces lumineux que nos solutions de grands vitrages peuvent réaliser,
                nos systèmes de portes et fenêtres en aluminium peuvent transformer la maison de vos rêves en une réalité étonnante.
                Et avec de nombreuses options de styles, de configurations, de couleurs et de finitions, votre vision du design peut être pleinement réalisée. </p>
              <p class="last">Nous avons des solutions astucieuses pour le vitrage de grandes surfaces afin que vous puissiez avoir du verre du mur au plafond et des vues panoramiques avec tout le confort thermique et la sécurité que vous exigez.
                Grâce à nos systèmes de fenêtres haute performance ou à nos gammes de murs-rideaux, nous avons le système en aluminium parfait pour votre grand projet de vitrage.</p>
            </div>
          </div>
        </div>

        <!--Sidebar Side-->
        <div class="sidebar-side col-lg-4 col-md-12 col-sm-12">
          <aside class="sidebar blog-sidebar">

           <ProductPartnersBlock :partners-logos="partnersLogos"/>

            <CallUsBlock />


          </aside>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
    import CallUsBlock from "../../generals/CallUsBlock";
    import ProductPartnersBlock from "../../generals/ProductPartnersBlock";
    import {partnersInfos} from "../../../static/data/partnersInfos";
    export default {
        name: "ServiceDetails",

      components: {ProductPartnersBlock, CallUsBlock},
      data(){
          return{
            partnersLogos :partnersInfos.filter(partner => partner.name === 'aliplast')
          }
      }

    }
</script>

<style scoped>

</style>
