<template>
  <div class="sidebar-page-container">
    <div class="auto-container">
      <div class="row clearfix">
        <!--Content Side-->
        <div class="content-side col-lg-8 col-md-12 col-sm-12">
          <div class="service-details">
            <div class="main-image image">
              <img src="../../../static/images/custom/chassis_pvc_main.jpeg" alt="">
            </div>
            <div class="text-content">
              <h3>Les Chassis PVC</h3>
              <p>Il existe de nombreuses raison pour lesquelles les chassis PVC peuvent être bénéfique pour vous et votre maison. Premièrement,
                les chassis en PVC nécessitent peu d'entretien. Les chassis n'ont pas besoin de peinture ou de scellement,
                ce qui réduit considérablement l'entretien requis au cours de leur durée de vie</p><p> les chassis en PVC se nettoient facilement à l'eau savonneuse. Un avantage clé des chassis en PVC est qu'elles ne pourrissent pas et sont résistantes à la corrosion, ce qui rend les chassis en PVC extrêmement durables.
                Contrairement aux métaux, le PVC n'est pas conducteur, de sorte que vos cadres de chassis ne transféreront pas de chaleur et contribueront à une température interne plus constante pour votre maison.
                La combinaison de châssis de fenêtre en PVC et de double vitrage permet d'obtenir des chassis à haute efficacité énergétique.</p><p> Les chassis en PVC offrent une excellente isolation acoustique. Les chassis en PVC à double vitrage peuvent réduire le bruit jusqu'à 70 %.
                Grâce à leurs systèmes de verrouillage intégrés, les chassis en PVC offrent un haut niveau de sécurité pour votre maison. La plupart des systèmes de verrouillage de fenêtre en PVC se verrouillent en plusieurs points tout autour du châssis et du cadre.
                Par rapport aux alternatives en aluminium et en bois, les chassis en PVC sont peu coûteuses.</p>
               <p>Les prix peuvent varier en fonction de la qualité et des caractéristiques des chassis,
                 mais vous pouvez vous attendre à un prix beaucoup plus abordable en choisissant une fenêtre en PVC.</p>
              <div class="featured">
                <div class="row clearfix">
                  <div class="image-col col-md-6 col-sm-12">
                    <div class="image">
                      <img src="../../../static/images/custom/chassis_pvc_second.jpeg" alt="">
                    </div>
                  </div>
                  <div class="text-col col-md-6 col-sm-12">
                    <div class="inner">
                      <h4>Durable &amp; Faible entretien</h4>
                      <p>Le PVC est un choix simple offrant une haute efficacité énergétique.</p>
                      <ul>
                        <li>Esthétique</li>
                        <li>Durable</li>
                        <li>Faible entretien</li>
                        <li>Recyclable</li>
                        <li>Respectueux de l'environnement</li>
                        <li>Excellente isolation</li>
                        <li>Anticorrosion</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <pConçu pour être solide, robuste et sécurisé.
                Avec un large éventail de styles et d'options parmi lesquels choisir, il existe une option pour convenir à toutes les propriétés.</p>
              <p> Les chassis en PVC confèrent à vos espaces un look élégant et haut de gamme. Les chassis en PVC sont disponibles en plusieurs types – chassis coulissantes, à la française, à double guillotine, etc. Vous pouvez choisir un design qui s'accordera parfaitement avec vos intérieurs et vos schémas de couleurs.
                Une autre grande avantages des chassis est qu'elles ne sont pas disponibles dans des formes et des styles limités, contrairement aux chassis en bois.
                Nous personnalisons les chassis en PVC en fonction de votre propriété et de vos spécifications.</p>
              <p class="last">Ces chassis sont les plus solides et les plus durables par rapport aux autres types.
                Contrairement aux chassis en bois, les chassis en PVC ne sont pas affectées par des éléments extrêmes, tels que des conditions météorologiques fluctuantes.
                Étant donné que leur matériau est résistant, ils conservent leur structure d'origine et restent intacts sous les pressions des intempéries.
                Le revêtement PVC est également protégé des rayons UV nocifs qui peuvent provoquer la décoloration et le flétrissement des matériaux en raison d'une exposition prolongée au soleil.</p>
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
            partnersLogos :partnersInfos.filter(partner => partner.name === 'Kömmerling')
          }
      }

    }
</script>

<style scoped>

</style>
