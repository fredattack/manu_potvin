<template>
  <section class="gallery-section">
    <div class="auto-container">
      <!--MixitUp Gallery-->
      <h3 v-if="category && realisations.length">Nos Réalisations</h3>
      <div class="mixitup-gallery">
        {{ localCategory }}
        <!--Filter-->
        <div class="filters centered clearfix" v-if="!category">
          <ul class="filter-tabs clearfix">
            <li
                :class="['filter', { 'mixitup-control-active': !localCategory || localCategory === 'all'  }]"
                data-role="button"
                data-filter=".all"
                @click="filterRealisations('all')"
            >tout</li>
            <li
                class="filter"
                v-for="title in categoryList"
                :class="['filter', { 'mixitup-control-active': localCategory === title }]"
                :key="title"
                @click="filterRealisations(title)"
            >
              {{ title.replaceAll('_', ' ') }}
            </li>
          </ul>
        </div>
        <div class="filter-list row justify-content-center">
          <!-- Gallery Item -->
          <div
              class="gallery-item mix all col-lg-4 col-md-6 col-sm-12"
              :class="item.category"
              v-for="item in portfolio_data_filtered"
              :key="item.id"
          >
            <achievement-card :item="item" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AchievementCard from "@/components/AchievementCard.vue";
// import mixitup from "mixitup";
// import GLightbox from "glightbox";

export default {
  name: "GalleryPage",
  components: {
    AchievementCard,
  },
  props: ["category"],
  data() {
    return {
      mixer: null,
      portfolio_data_filtered: [],
      localCategory: this.category,
    };
  },
  computed: {
    ...mapState("realisations", ["realisations"]),

    categoryList() {
      const list = this.realisations.map((item) => item.category);
      return [...new Set(list)];
    },
  },
  methods: {
    ...mapActions("realisations", ["getAllRealisations"]),
    filterRealisations(value) {
      this.localCategory = value
      if (value && value !== "all") {
        this.portfolio_data_filtered = this.realisations.filter((data) => data.category === value);
      } else {
        this.portfolio_data_filtered = this.realisations;
      }
    },
  },
  async mounted() {
    await this.getAllRealisations({ published: true });
    this.portfolio_data_filtered = this.realisations;

    this.filterRealisations(this.category)
    // this.$nextTick(() => {
    //   const containerEl = document.querySelector(".filter-list");
    //   this.mixer = mixitup(containerEl);
    //
    //   GLightbox({
    //     selector: ".lightbox-image",
    //     touchNavigation: true,
    //     loop: true,
    //     autoplayVideos: true,
    //   });
    // });
  },
};
</script>
