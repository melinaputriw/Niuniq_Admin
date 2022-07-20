<template>
  <div>
    <CNavbar />
    <Qrcodeid />
    <div class="container">
      <CStorepreview />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CNavbar from "@/components/Navbar.vue";
import Qrcodeid from "@/components/Qrcodeid.vue";
import CStorepreview from "@/components/StorePreview.vue";

export default {
  name: "HomeView",
  components: {
    CNavbar,
    Qrcodeid,
    CStorepreview,
  },
};
</script>
