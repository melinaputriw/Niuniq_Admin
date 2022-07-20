<template>
  <div>
    <CNavbarPenjual />
    <section class="bginputtoko">
      <div class="container">
        <CInputToko />
      </div>
    </section>
  </div>
</template>

<script>
import CInputToko from "@/components/InputToko.vue";
import CNavbarPenjual from "@/components/NavbarPenjual.vue";

export default {
  name: "InputTokoView",
  components: {
    CInputToko,
    CNavbarPenjual,
  },
};
</script>

<style></style>
