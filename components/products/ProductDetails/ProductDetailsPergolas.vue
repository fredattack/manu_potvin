<template>
  <div class="sidebar-page-container">
    <div class="auto-container">
      <div class="row clearfix">

        <!--Content Side-->
        <div class="content-side col-lg-8 col-md-12 col-sm-12">
          <div class="service-details">
            <div class="main-image image">
              <img src="../../../static/images/custom/pergolas_main.jpeg" alt="pergolas hannut">
            </div>
            <div class="text-content">
              <h3>Nos Pergolas</h3>
              <p>Vous aussi, vous aimez le plein air et vous souhaitez profiter à tout moment de votre jardin et de votre terrasse ?
                Nous avons sans aucun doute une solution sur mesure pour vous créer une terrasse couverte attenante à la maison ou comme espace extérieur supplémentaire, détaché dans le jardin.
                Vous pouvez également personnaliser votre toit à lames dans les moindres détails.
              </p>
              <div class="featured">
                <div class="row clearfix">
                  <div class="image-col col-md-6 col-sm-12">
                    <div class="image">
                      <img src="../../../static/images/custom/pergolas_second.jpeg" alt="pergolas hannut">
                    </div>
                  </div>

                  <div class="text-col col-md-6 col-sm-12">
                    <div class="inner">
                      <h4>Caractéristiques</h4>
                      <p><span style="font-size: xx-large"></span>Profitez pleinement du plein air</p>
                      <ul>
                        <li>Grand choix de matériaux et coloris</li>
                        <li>100% sur mesure</li>
                        <li>Construction attenante ou indépendante</li>
                        <li>Protection solaire</li>
                        <li>Coupe-vent</li>
                        <li>Eclairage</li>
                        <li>Chauffage</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <p>Créer une pergola belle et pratique qui s'intègre bien au reste de votre propriété est un excellent moyen d'améliorer votre style de vie. Avec le bon design, vos surfaces utilisables s'étendront,
                vous aurez accès à plus d'espace ouvert et l'ensemble de votre propriété semblera plus grand.
                En fait, le design de la pergola partage un certain nombre de similitudes avec le design d'intérieur moderne,
                qui soulève les plafonds et ouvre des espaces depuis des décennies afin de procurer un sentiment de paix et de tranquillité.
              </p>
              <p class="last">L'installation d'une pergola vous permet de créer une transition en douceur de votre maison à votre jardin.
                Dans un sens, il s'agit d'un moyen abordable et créatif d'étendre votre espace de vie intérieur.
                Dans l'autre sens, c'est un moyen fantastique et très pratique de rendre votre espace extérieur existant plus vivable et confortable.
                Alors que de nombreux foyers australiens disposent de grands espaces extérieurs, ils sont trop souvent sous-utilisés.
                <br><span style="font-size: xx-large">Une pergola est le moyen idéal pour animer les espaces existants sans avoir à repartir de zéro.</span></p>
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
    export default {
        name: "ServiceDetailsMoustiquaire",
      components: {CallUsBlock,ProductPartnersBlock},
      data(){
        return{
          partnersLogos :[
            {logo:'/images/custom/SkyLux.png',name:'SkyLux'},
          ]
        }
      }

    }
</script>

<style scoped>

</style>
