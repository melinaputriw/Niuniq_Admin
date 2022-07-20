<template>
  <div>
    <CNavbarPenjual />
    <div style="background-color: #f9f9f9">
      <div class="container">
        <h4>Pemberitahuan Status Produk</h4>
        <CNotifSuccess />
        <br />
        <CNotifFail />
      </div>
    </div>
  </div>
</template>

<script>
import CNavbarPenjual from "@/components/NavbarPenjual.vue";
import CNotifSuccess from "@/components/NotifSuccess.vue";
import CNotifFail from "@/components/NotifFail.vue";

export default {
  name: "NotificationView",
  components: {
    CNavbarPenjual,
    CNotifSuccess,
    CNotifFail,
  },
};
</script>

<style></style>
