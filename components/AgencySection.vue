<template>
  <section class="agency-section">
    <div class="auto-container">
      <div class="row clearfix">
        <!--Left Column-->
        <div class="left-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
          <div class="inner">
            <div class="sec-title">
              <h2>Best design Agency <br>solutions <span class="dot">.</span></h2>
            </div>

            <!--Default Tabs-->
            <div class="default-tabs tabs-box">

              <div class="agency-tabs">

                <!--Tab-->
                <input type="radio" name="tabs" id="tab-one" checked="checked">
                <label for="tab-one" class="tab-btn">Our Mission</label>
                <div class="tab">
                  <div class="active-tab">
                    <div class="content">
                      <div class="text">There are many variations of passages of avaialable but
                        the majority have in some form, by injected humou or words which don't
                        look even slightly believable. There are many variations of but the
                        majority have suffered.</div>
                    </div>
                  </div>
                </div>

                <!--Tab-->
                <input type="radio" name="tabs" id="tab-two" checked="checked">
                <label for="tab-two" class="tab-btn">Our Vision</label>
                <div class="tab">
                  <div class="active-tab">
                    <div class="content">
                      <div class="text">There are many variations of passages of avaialable but
                        the majority have in some form, by injected humou or words which don't
                        look even slightly believable. There are many variations of but the
                        majority have suffered.</div>
                    </div>
                  </div>
                </div>

                <!--Tab-->
                <input type="radio" name="tabs" id="tab-three" checked="checked">
                <label for="tab-three" class="tab-btn">Our History</label>
                <div class="tab">
                  <div class="active-tab">
                    <div class="content">
                      <div class="text">There are many variations of passages of avaialable but
                        the majority have in some form, by injected humou or words which don't
                        look even slightly believable. There are many variations of but the
                        majority have suffered.</div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        <!--Right Column-->
        <div class="right-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
          <div class="inner">
            <div class="text">There are many variations of passages of available but the majority have
              suffered alteration in some form, by injected humou or randomised words which don't look
              even slightly believable.</div>
            <div class="featured-block-two clearfix">
              <div class="image"><img src="/images/resource/featured-image-6.jpg" alt=""></div>
              <div class="text">
                <ul>
                  <li>Nsectetur cing elit.</li>
                  <li>Suspe ndisse suscipit sagittis leo.</li>
                  <li>Entum estibulum dignissim posuere.</li>
                  <li>If you are going to use a passage.</li>
                  <li>Lorem Ipsum on the tend to repeat.</li>
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
      name: "AgencySection"
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
    background: #FFAA17;
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
    background: #F4F5F8;
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
    background: #F4F5F8;
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
