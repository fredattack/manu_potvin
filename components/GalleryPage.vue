<template>
  <section class="gallery-section">
    <div class="auto-container">
      <!--MixitUp Galery-->
      <h3 v-if="category">Nos Réalisations</h3>
      <div class="mixitup-gallery">
        <!--Filter-->

        <div class="filters centered clearfix" v-if="!category">
          <ul class="filter-tabs filter-btns clearfix">
            <li class="filter mixitup-control-active" data-role="button" data-filter=".all">tout</li>
            <li class="filter" data-role="button" :data-filter="`.${title}`" v-for="title in categoryList">
              {{ title.replaceAll('_', ' ') }}
            </li>
          </ul>
        </div>
        <div class="filter-list row" v-if="portfolio_data_filtered">
          <!-- Gallery Item -->
          <div class="gallery-item mix all col-lg-4 col-md-6 col-sm-12" :class="item.category"
               v-for="item in portfolio_data_filtered">
            <div class="inner-box">
              <figure class="image"><img :srcset="item.picture" alt="" loading="lazy" height="150"></figure>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>{{ item.name }}</span></div>
<!--                  <div class="title">
                    <h5>
                      <nuxt-link to="#">{{ item.name }}</nuxt-link>
                    </h5>
                  </div>-->
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>

    </div>
  </section>
</template>

<script>
import {portfolio_data} from "../static/data/portfolio_data";

export default {
  name: "GalleryPage",
  props: ['category'],
  data() {
    return {
      mixer: null,
      portfolio_data: portfolio_data
    }
  },
  mounted() {

    const containerEl = document.querySelector('.filter-list')
    this.mixer = new this.mixitup(containerEl, {});

    new GLightbox({
      selector: '.lightbox-image',
      touchNavigation: true,
      loop: true,
      autoplayVideos: true
    });
    console.log('category_list', this.categoryList)
  },
  computed: {
    portfolio_data_filtered: function () {
      console.log('this.category',this.category)
      if (this.category) {
        console.log('in if')
        const _category = this.category
        return portfolio_data.filter(function (data) {
          return data.category === _category;
        });
      }
      return portfolio_data
    },

    categoryList: function () {
      const list = this.portfolio_data_filtered.map(item => item.category)
      return [...new Set(list)]
    }

  }
}
</script>

<style scoped>

</style>
