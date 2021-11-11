<template>
  <section class="contact-section">
    <div class="auto-container">
      <!--      <div class="sec-title centered">
              <h2>Offices near you<span class="dot">.</span></h2>
            </div>

            <div class="upper-info">
              <div class="row clearfix">
                <div class="info-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0ms"
                     data-wow-duration="1500ms">
                  <div class="inner-box">
                    <h5>Austin</h5>
                    <div class="text">
                      <ul class="info">
                        <li>22 Texas West Hills</li>
                        <li><a href="mailto:needhelp@linoor.com">needhelp@linoor.com</a></li>
                        <li><a href="tel:666888000">666 888 000</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="info-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms"
                     data-wow-duration="1500ms">
                  <div class="inner-box">
                    <h5>Boston</h5>
                    <div class="text">
                      <ul class="info">
                        <li>5 Federal Street Boston</li>
                        <li><a href="mailto:needhelp@linoor.com">needhelp@linoor.com</a></li>
                        <li><a href="tel:666888000">666 888 000</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="info-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms"
                     data-wow-duration="1500ms">
                  <div class="inner-box">
                    <h5>New york</h5>
                    <div class="text">
                      <ul class="info">
                        <li>8th Broklyn New York</li>
                        <li><a href="mailto:needhelp@linoor.com">needhelp@linoor.com</a></li>
                        <li><a href="tel:666888000">666 888 000</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="info-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms"
                     data-wow-duration="1500ms">
                  <div class="inner-box">
                    <h5>baltimore</h5>
                    <div class="text">
                      <ul class="info">
                        <li>3 Lombabr 50 Baltimore</li>
                        <li><a href="mailto:needhelp@linoor.com">needhelp@linoor.com</a></li>
                        <li><a href="tel:666888000">666 888 000</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>-->

      <!--      <div class="map-box">-->
      <!--        <iframe class="map-iframe"-->
      <!--                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230899.1642407818!2d145.06327708904033!3d-37.792102974783376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65cd0db468a97%3A0xb61fde84306fc38a!2sMelbourne%20Zoo!5e0!3m2!1sen!2s!4v1592307685926!5m2!1sen!2s"-->
      <!--                style="border:0;" aria-hidden="false" tabindex="0"></iframe>-->
      <!--      </div>-->
      <div class="form-box" v-if="!sended">
        <div class="sec-title">
          <h2>Laissez nous un message<span class="dot">.</span></h2>
        </div>
        <div class="default-form" >
          <form method="post" action="#" id="contact-form">
            <div class="row clearfix">
              <div class="form-group col-lg-6 col-md-6 col-sm-12">
                <div class="field-inner">
                  <input type="text" v-model="name" value="" placeholder="Votre nom" required="">
                </div>
              </div>
              <div class="form-group col-lg-6 col-md-6 col-sm-12">
                <div class="field-inner">
                  <input type="email" v-model="email" value="" placeholder="Votre adresse email"
                         required="">
                </div>
              </div>
              <div class="form-group col-lg-6 col-md-6 col-sm-12">
                <div class="field-inner">
                  <input type="text" v-model="phone" value="" placeholder="Votre numéro de téléphone" required="">
                </div>
              </div>
              <div class="form-group col-lg-6 col-md-6 col-sm-12">
                <div class="field-inner">
                  <input type="text" v-model="subject" value="" placeholder="Sujet du message" required="">
                </div>
              </div>
              <div class="form-group col-lg-12 col-md-12 col-sm-12">
                <div class="field-inner">
                  <textarea v-model="message" placeholder="laisssez votre message" required=""></textarea>
                </div>
              </div>
              <div class="w-100 d-flex justify-content-center my-5">

                <recaptcha/>
              </div>
              <div class="form-group col-lg-12 col-md-12 col-sm-12 mt-3">
                <button class="theme-btn btn-style-one" @click.prevent="send">
                  <i class="btn-curve"></i>
                  <span class="btn-title">Envoyer votre message</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row" v-if="sended">

        <div class="sec-title">
          <h2><span class="dot">Merci, </span>votre message a été envoyé avec succès.</h2>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "ContactPage",
  data: () => ({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    sended: false
  }),
  methods: {
    async send() {
      try {
        const token = await this.$recaptcha.getResponse()
        console.log('ReCaptcha token:', token)
        //
        //   // send token to server alongside your form data
        this.$mail.send({
          from: this.email,
          subject: 'demande de contact site web',
          text: 'nom:' + this.name + '<br> telephone:' + this.phone + '<br> object:' + this.subject + '<br> message:' + this.message,
        })
        //   // at the end you need to reset recaptcha
        this.sended = true;
        await this.$recaptcha.reset()
      } catch (error) {
        console.log('Login error:', error)
      }

    }
  }
}
</script>

<style scoped>

</style>
