<template>
  <div>
    <CNavbar />
    <div class="container">
      <CInfoproduksi />
      <CCarousel />
      <CCard />
      <CVideo />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CNavbar from "@/components/Navbar.vue";
import CInfoproduksi from "@/components/InfoProduksi.vue";
import CCarousel from "@/components/Carousel.vue";
import CCard from "@/components/Card.vue";
import CVideo from "@/components/Video.vue";

export default {
  name: "HomeView",
  components: {
    CNavbar,
    CInfoproduksi,
    CCarousel,
    CCard,
    CVideo,
  },
};
</script>
