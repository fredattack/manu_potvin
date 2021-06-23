<template>
  <div class="sidebar-page-container">
    <div class="auto-container">
      <div class="row clearfix">
        <!--Content Side-->
        <div class="content-side col-lg-8 col-md-12 col-sm-12">
          <div class="service-details">
            <div class="main-image image">
              <img src="../../../static/images/custom/porte_garage_main.jpeg" alt="">
            </div>
            <div class="text-content">
              <h3>Les portes de garage</h3>
              <p>Dans la plupart des ménages de nos jours, la porte de garage est le principal point d'entrée de votre maison et occupe un quart à un tiers de la façade.
                Nous pouvons vous aider à améliorer l'attrait de votre maison en adaptant votre porte de garage à celle ci. </p>
               <p> Avec un style et un prix adaptés à tous les budgets, demandez comment nous pouvons vous aider...</p>
              <div class="featured">
                <div class="row clearfix">
                  <div class="image-col col-md-6 col-sm-12">
                    <div class="image">
                      <img src="../../../static/images/custom/porte_garage_second.jpeg" alt="">
                    </div>
                  </div>
                  <div class="text-col col-md-6 col-sm-12">
                    <div class="inner">
                      <h4>Instalation &amp; automation</h4>
                      <p>Nous pensons que les choses doivent être faciles, notre gamme d'ouvre-portes de garage automatiques facilite les allées et venues de votre maison.
                       </p>
                      <ul>
                        <li>Portes à enroulement</li>
                        <li>Portes séquentielles</li>
                        <li>Ouverture automatique</li>
                        <li>Isolation thermique et accoustique</li>
                        <li>Télécommande à distance</li>
                        <li>Système de fermeture robuste et sécurisé</li>
                        <li>Systèmes d'étanchéité</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <p>Nous savons que tous les travaux ne sont pas les mêmes, et pourquoi devrait-il l'être ?</p>
              <p> Si vous voulez quelque chose avec ce facteur <span style="font-size: xx-large">wow</span> supplémentaire ou si vous voulez que votre porte de garage soit distinctive, nous avons une gamme personnalisée qui vous convient.
                Du bois naturel aux métaux précieux, nous pouvons travailler avec vous pour créer quelque chose d'unique..</p>
              <p class="last">Nous pouvons vous fournir un système d'étanchéité complet pour empêcher les parasites, la poussière et les courants d'air d'entrer.
                Bloquez les éléments en comblant les espaces autour de la porte et du sol avec un système d'étanchéité. Le joint étanche gardera l'intérieur de votre garage propre malgré le temps extérieur..</p>
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
            partnersLogos :partnersInfos.filter(partner => partner.name === 'Hormann')
          }
      }

    }
</script>

<style scoped>

</style>
