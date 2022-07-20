<template>
  <div>
    <CNavbarPenjual />
    <div style="background-color: #f9f9f9">
      <div class="container">
        <CPengaturan />
      </div>
    </div>
  </div>
</template>

<script>
import CNavbarPenjual from "@/components/NavbarPenjual.vue";
import CPengaturan from "@/components/Pengaturan.vue";

export default {
  name: "PengaturanView",
  components: {
    CNavbarPenjual,
    CPengaturan,
  },
};
</script>

<style></style>
