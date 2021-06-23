<template>
  <div class="sidebar-widget call-up">
    <div class="widget-inner">
      <div class="sidebar-title">
        <h4>Une question ?</h4>
      </div>
      <div class="text">Vous préférez parler à un humain plutôt que de remplir un formulaire? Appeler nous,
        et nous vous mettrons en contact avec un membre de l'équipe qui pourra vous aider.
      </div>
      <div class="phone">
        <a v-bind:href="`tel:${phoneNumber}`">
          <span class="icon flaticon-call"></span>{{ phoneNumber }}
        </a>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "CallUsBlock",
  computed: {
    phoneNumber() {
      return process.env.phoneNumber;
    },
  },
}
</script>

<style scoped>

</style>
