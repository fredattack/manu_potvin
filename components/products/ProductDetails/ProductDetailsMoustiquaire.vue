<template>
  <div class="sidebar-page-container">
    <div class="auto-container">
      <div class="row clearfix">

        <!--Content Side-->
        <div class="content-side col-lg-8 col-md-12 col-sm-12">
          <div class="service-details">
            <div class="main-image image">
              <img src="../../../static/images/custom/moustiquaire_main.jpeg" alt="">
            </div>
            <div class="text-content">
              <h3>Nos Moustiquaires</h3>
              <p>Les moustiquaires constituent un complément essentiel pour un meilleur confort de vie. Grâce à une moustiquaire, vous faites entrer le beau temps dans la maison, mais vous laissez les mouches, moustiques et autres insectes dehors!
                Toutes nos moustiquaires sont toujours fabriquées sur mesure et peuvent être adaptées intégralement aux structures de châssis les plus courantes, quelles que soient les dimensions, la forme ou la couleur.
                C'est pourquoi elles peuvent être placées aussi bien sur des châssis en aluminium qu'en bois ou PVC.
                Vous avez le choix parmi plus de 1000 coloris pour leur finition si bien qu'elles sont pratiquement invisibles.
                Le système de clips en inox ingénieux permet de les placer aisément, mais aussi de les enlever tout aussi facilement.
              </p>
              <div class="featured">
                <div class="row clearfix">
                  <div class="image-col col-md-6 col-sm-12">
                    <div class="image">
                      <img src="../../../static/images/custom/moustiquaire_second.jpeg" alt="">
                    </div>
                  </div>

                  <div class="text-col col-md-6 col-sm-12">
                    <div class="inner">
                      <h4>Caractéristiques</h4>
                      <p><span style="font-size: xx-large">La toile</span> qui protège contre les insectes est fabriquée en fibre de verre avec deux points d’ancrage pour les fils verticaux et horizontaux.
                        La maille (1,29mm x 1,13mm) garantit une protection optimale contre tous les insectes.</p>
                      <ul>
                        <li>Fabrication belge</li>
                        <li>Inoxydable et auto-extinguible</li>
                        <li>Résiste aux grandes différences de température</li>
                        <li>Stabilité dimensionnelle</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <p><span style="font-size: xx-large">Notre joint en PVC</span> sert à fixer la toile de la moustiquaire au profil. Sa qualité exceptionnelle, combinée à la pose par notre personnel qualifié, garantit une tension parfaite de la toile dès la livraison et quelles que soient les conditions météorologiques.
                Le joint PVC est disponible en gris et noir.
              </p>
              <p class="last"><span style="font-size: xx-large">Le profilé</span> est toujours placé au centre de la moustiquaire. D'autres hauteurs ou plusieurs profilés sont également possibles. A partir d’une hauteur de 1600mm, deux profilés sont automatiquement prévus..</p>
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
        name: "ProductDetailsMoustiquaire",
      components: {CallUsBlock,ProductPartnersBlock},
      data(){
        return{
          partnersLogos :partnersInfos.filter(partner => partner.name === 'Feneko')
        }
      }

    }
</script>

<style scoped>

</style>
