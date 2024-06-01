<template>
  <div
      class="inner-box">
    <figure
        class="image">
      <div
          v-if="item.image"
          v-html="item.image"
          @click="toggleLightbox"
          class="object-cover h-50 cursor-zoom-in"></div>

      <FsLightbox
          :toggler="toggler"
          :sources="Object.values(item.images_lightbox)"
          :custom-attributes="[{'style':  'object-fit: contain; with: 100% !important; height: 100%;!important'}]"
          type="image"
      />
    </figure>
    <div
        class="cap-box">
      <div
          class="cap-inner">
        <div
            class="cat">
          <span class="text-xl">{{
              item.title
            }}</span>
        </div>
        <p class="text-xs">{{
            item.description
          }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import FsLightbox
  from "fslightbox-vue"

export default {
  name: 'achievement-card',
  components: {FsLightbox},
  props: {
    item: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      toggler: false
    }
  },
  computed: {
    computedLightBoxImages() {
      return this.item.images_ligthbox
    }
  },
  methods: {

    toggleLightbox() {
      console.log("toggler", this.toggler)
      this.toggler = !this.toggler

    }
  },
}
</script>
