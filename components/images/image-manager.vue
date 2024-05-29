<template>
  <div
      class="w-full">
    <hr/>

    <input
        :ref="`input${imageCollection}`"
        :id="`input${imageCollection}`"
        type="file"
        name="image"
        accept="image/*"
        @change="setImage"
    />

    <div
        class="content">
      <section
          class="cropper-area">
        <div
            class="img-cropper">
          <label
              for="cover-photo"
              class="block text-sm font-medium leading-6 text-gray-900">
            <font-awesome-icon
                :icon="['fas', 'image']"/>
            {{ title }}</label>
          <vue-cropper
              v-if="imgSrc"
              ref="cropper"
              :aspect-ratio="ratio"
              :src="imgSrc"
              preview=".preview"
              :autoCropArea="0.5"
          />
          <div
              v-else
              class="col-span-full">

            <div
                class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div
                  class="text-center">
                <div
                    class="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <input
                        @click.prevent="showFileChooser"
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"/>
                  </label>
                  <p class="pl-1">
                    or
                    drag
                    and
                    drop</p>
                </div>
                <p class="text-xs leading-5 text-gray-600">
                  PNG,
                  JPG,
                  GIF
                  up
                  to
                  10MB</p>
              </div>
            </div>
          </div>


          <div
              v-if="imgSrc"
              class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div
                class="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
              <div
                  class="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                <div
                    class="flex items-center space-x-1 sm:pr-4">
                  <button
                      @click.prevent="zoom(0.2)"
                      type="button"
                      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <font-awesome-icon
                        :icon="['fas', 'magnifying-glass-plus']"/>
                  </button>
                  <button
                      @click.prevent="zoom(-0.2)"
                      type="button"
                      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <font-awesome-icon
                        :icon="['fas', 'magnifying-glass-minus']"/>
                  </button>
                </div>
                <div
                    class="flex items-center space-x-1 sm:pr-4">
                  <button
                      @click.prevent="move(-10, 0)"
                      type="button"
                      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <font-awesome-icon
                        :icon="['fas', 'left-long']"/>
                  </button>
                  <button
                      @click.prevent="move(10, 0)"
                      type="button"
                      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <font-awesome-icon
                        :icon="['fas', 'right-long']"/>
                  </button>
                  <button
                      @click.prevent="move(0, -10)"
                      type="button"
                      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <font-awesome-icon
                        :icon="['fas', 'up-long']"/>
                  </button>
                  <button
                      @click.prevent="move(0, 10)"
                      type="button"
                      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <font-awesome-icon
                        :icon="['fas', 'down-long']"/>
                  </button>
                </div>
                <div
                    class="flex flex-wrap items-center space-x-1 sm:pl-4">
                  <button
                      @click.prevent="rotate(-90)"
                      type="button"
                      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <font-awesome-icon
                        :icon="['fas', 'rotate-left']"/>
                  </button>
                  <button
                      @click.prevent="rotate(90)"
                      type="button"
                      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <font-awesome-icon
                        :icon="['fas', 'rotate-right']"/>
                  </button>
                </div>
                <div
                    class="flex flex-wrap items-center space-x-1 sm:pl-4">
                  <button
                      type="button"
                      data-tooltip-target="tooltip-fullscreen"
                      class="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                      <path
                          fill-rule="evenodd"
                          d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                          clip-rule="evenodd"></path>
                    </svg>
                  </button>
                  <button
                      @click.prevent="showFileChooser"
                      type="button"
                      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <font-awesome-icon
                        :icon="['fas', 'upload']"/>
                  </button>
                </div>
              </div>
              <button
                  @click.prevent="cropImage"
                  type="button"
                  class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                <font-awesome-icon
                    :icon="['fas', 'check']"/>
              </button>
              <div
                  id="tooltip-fullscreen"
                  role="tooltip"
                  class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                Show
                full
                screen
                <div
                    class="tooltip-arrow"
                    data-popper-arrow></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
          class="preview-area">
        <p v-if="imgSrc && !cropImg">
          Ajusté
          l'image et
          clicquez
          sur <span><font-awesome-icon
            :icon="['fas', 'check']"/></span>
          pour
          confirmer.
        </p>
        <p v-else-if="imgSrc && cropImg">
          Image
          ajustée</p>
        <div
            v-if="cropImg"
            class="cropped-image">
          <img
              v-if="cropImg"
              :src="cropImg"
              alt="Cropped Image"/>
          <div
              v-else
              class="crop-placeholder"/>

          <div
              class="mt-6 flex items-center justify-end gap-x-6 mb-4">

            <button
                @click.prevent="saveImage"
                type="button"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <font-awesome-icon
                  :icon="['fas', 'image']"/>
              Save
              Image
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import VueCropper
  from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
import {
  mapActions
} from "vuex";


export default {
  components: {
    VueCropper,
  },
  props: {
    title: {
      type: String,
      required: false,
      default: "Illustation",
    },
    model: {
      type: String,
      required: true,
    },
    model_id: {
      type: String,
      required: true,
    },
    imageCollection: {
      type: String,
      required: true,
    },
    style: {
      type: Object,
      required: false,
      default: () => {
        return {
          width: "100%",
          height: "60px",
          ratio: "16/9",
        };
      },
    },
    callback: {
      type: null | String | Object,
      required: false,
      default: null,
    },
    reset: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      imgSrc: "",
      cropImg: "",
      data: null,
      file: null,
    };
  },
  computed: {
    computedStyle() {
      return {
        ratio: this.style.ratio || "16/9",
        width: this.style.width || "100%",
        height: this.style.height || "60px",
      }
    },
    ratio() {
      switch (this.computedStyle.ratio) {
        case "paysage":
          return "16 / 9";
        case "portait":
          return "9 / 16";
        case "square":
          return "1/1";
        default:
          return "16/9";
      }
    },
  },
  methods: {
    ...mapActions('images', ["imageUpload"]),
    cropImage() {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas(
          { maxWidth: 1920,
            maxHeight: 1920},
      ).toDataURL();
    },
    flipX() {
      const dom = this.$refs.flipX;
      let scale = dom.getAttribute("data-scale");
      scale = scale ? -scale : -1;
      this.$refs.cropper.scaleX(scale);
      dom.setAttribute("data-scale", scale);
    },
    flipY() {
      const dom = this.$refs.flipY;
      let scale = dom.getAttribute("data-scale");
      scale = scale ? -scale : -1;
      this.$refs.cropper.scaleY(scale);
      dom.setAttribute("data-scale", scale);
    },
    getCropBoxData() {
      this.data = JSON.stringify(this.$refs.cropper.getCropBoxData(), null, 4);
    },
    getData() {
      this.data = JSON.stringify(this.$refs.cropper.getData(), null, 4);
    },
    move(offsetX, offsetY) {
      this.$refs.cropper.move(offsetX, offsetY);
    },
    reset() {
      this.$refs.cropper.reset();
    },
    rotate(deg) {
      this.$refs.cropper.rotate(deg);
    },
    setCropBoxData() {
      if (!this.data) return;

      this.$refs.cropper.setCropBoxData(JSON.parse(this.data));
    },
    setData() {
      if (!this.data) return;

      this.$refs.cropper.setData(JSON.parse(this.data));
    },
    setImage(e) {
      const file = e.target.files[0];
      this.file = file;

      if (file.type.indexOf("image/") === -1) {
        alert("Please select an image file");
        return;
      }

      if (typeof FileReader === "function") {
        const reader = new FileReader();

        reader.onload = (event) => {
          this.imgSrc = event.target.result;
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);
        };

        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    showFileChooser() {
      let input = this.$refs[`input${this.imageCollection}`];
      console.log('input',input)
      input.click();
    },
    zoom(percent) {
      this.$refs.cropper.relativeZoom(percent);
    },
    async saveImage() {

      await this.imageUpload({
        image: this.cropImg,
        mimeType: this.file.type,
        imageName: this.file.name,
        model: this.model,
        model_id: this.model_id,
        imageCollection: this.imageCollection,
        successCallback: this.callback,
      });

      if (this.reset) {
        this.imgSrc = ''
        this.cropImg = ''
        this.data = null
        this.file = null
      }
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cropper-crop-box, .cropper-view-box {
  border-radius: 50%;
}

input[type="file"] {
  display: none;
}


.header h2 {
  margin: 0;
}

.header a {
  text-decoration: none;
  color: black;
}

.content {
  display: flex;
  justify-content: space-between;
}

.cropper-area {
  width: 614px;
}


.crop-placeholder {
  width: 100%;
  height: 200px;
  background: #ccc;
}

.cropped-image img {
  max-width: 100%;
}
</style>
