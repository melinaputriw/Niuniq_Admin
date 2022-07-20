<template>
  <div>
    <CNavbarPenjual />
    <div style="background-color: #f9f9f9">
      <div class="container">
        <CInputInfoDetail />
        <CInputDokProduk />
      </div>
    </div>
  </div>
</template>

<script>
import CNavbarPenjual from "@/components/NavbarPenjual.vue";
import CInputInfoDetail from "@/components/InputInfoDetail.vue";
import CInputDokProduk from "@/components/InputDokProduk.vue";

export default {
  name: "InputProdukView",
  components: {
    CNavbarPenjual,
    CInputInfoDetail,
    CInputDokProduk,
  },
};
</script>

<style></style>
