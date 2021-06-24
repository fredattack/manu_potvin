<template>
  <section class="agency-section">
    <div class="auto-container">
      <div class="row clearfix">
        <!--Left Column-->
        <div class="left-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
          <div class="inner">
            <div class="sec-title">
              <h2>Chassis en aluminium vs Chassis en PVC : <br> <span class="dot">quel est le meilleure ?</span></h2>
            </div>

            <!--Default Tabs-->
            <div class="default-tabs tabs-box">

              <div class="agency-tabs">

                <!--Tab-->
                <input type="radio" name="tabs" id="tab-one" checked="checked" value="ALU" v-on:click="chassisTabClick">
                <label for="tab-one" class="tab-btn">Chassis Alu</label>
                <div class="tab">
                  <div class="active-tab">
                    <div class="content">
                      <div class="text">Un peu plus chères, mais elles durent longtemps et constituent un bon investissement à long terme.
                        Du point de vue du design, ils sont modernes et élégants avec des profils et des lignes de vue élégants.
                        Peut-être mieux adapté aux maisons modernes.</div>
                    </div>
                  </div>
                </div>

                <!--Tab-->
                <input type="radio" name="tabs" id="tab-two" value="PVC" v-on:click="chassisTabClick">
                <label for="tab-two" class="tab-btn">Chassis Pvc</label>
                <div class="tab">
                  <div class="active-tab">
                    <div class="content">
                      <div class="text">Abordables à installer, les cadres de fenêtre PVC sont très élégants et, grâce aux progrès de la technologie,
                        ils sont désormais disponibles dans une grande variété de couleurs.
                        Leur aspect subtil est idéal pour les propriétés anciennes et les maisons classées.</div>
                    </div>
                  </div>
                </div>

              </div>


            </div>
          </div>
        </div>
        <!--Right Column-->
        <div class="right-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
          <div class="inner" v-if="visibleType === 'ALU' " >
            <div class="text">En ce qui concerne les fenêtres en aluminium par rapport aux fenêtres en PVC, les deux
              matériaux présentent de grands avantages.
              De toute évidence, ceux-ci plairont à différents types de propriétaires, mais il n'y a
              pas de «bonne» réponse pour savoir laquelle est la meilleure.
              En fin de compte, le bon choix pour vous et votre propriété dépendra de nombreux facteurs
              différents...
            </div>
            <div class="featured-block-two clearfix">
              <div class="image"><img src="/images/custom/chassis_detail_alu.jpg" alt="" style="width: 300px"></div>
              <div class="text">
                <ul>
                  <li>Conçu pour être durable.</li>
                  <li>Toujours l'air neuf.</li>
                  <li>Large choix de couleurs.</li>
                  <li>Moderne & élégant.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="inner" v-if="visibleType === 'PVC' ">
            <div class="text">En ce qui concerne les fenêtres en aluminium par rapport aux fenêtres en PVC, les deux
              matériaux présentent de grands avantages.
              De toute évidence, ceux-ci plairont à différents types de propriétaires, mais la réalité est qu'il n'y a
              pas de «bonne» réponse pour savoir laquelle est la meilleure.
              En fin de compte, qu'ils soient le bon choix pour vous et votre propriété dépendra de nombreux facteurs
              différents...
            </div>
            <div class="featured-block-two clearfix">
              <div class="image">
                <img src="/images/custom/chassis_detail_pvc.jpg" alt="" style="width: 300px">
              </div>
              <div class="text">
                <ul>
                  <li>Faible entretien.</li>
                  <li>Choix de couleurs.</li>
                  <li>Très bonne isolation.</li>
                  <li>Faible coût.</li>
                </ul>
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
  name: "AgencySection",
  data() {
    return {
      visibleType: 'ALU'
    }
  },
  methods: {
    chassisTabClick: function (event) {
      this.visibleType= event.target.value
    },


  }
}
</script>

<style>

.agency-tabs {
  display: flex;
  flex-wrap: wrap;
}

.agency-tabs label {
  order: 1;
  display: block;
  padding: 4px 31px;
  margin-right: 0.2rem;
  cursor: pointer;
  background: #F4F5F8;
  font-weight: 500;
  transition: background ease 0.2s;
  font-size: 18px;
  text-transform: uppercase;
  color: #222;
}

.agency-tabs .tab {
  order: 99;
  flex-grow: 1;
  width: 100%;
  display: none;
  padding: 1rem;
}

.default-tabs .agency-tabs .text {
  position: relative;
  font-size: 20px;
  font-weight: 300;
  color: var(--thm-text);
  line-height: 1.7em;
  letter-spacing: 2px;
}

.agency-tabs input[type="radio"] {
  display: none;
}

.agency-tabs input[type="radio"]:checked + label {
  background: #95D5DC;

}

.agency-tabs input[type="radio"]:checked + label + .tab {
  display: block;
}

@media (max-width: 45em) {
  .agency-tabs .tab,
  .agency-tabs label {
    order: initial;
  }

  .agency-tabs label {
    width: 100%;
    margin-right: 0;
    margin-top: 0.2rem;
  }
}

</style>
