<template>
  <div>
    <CNavbarPenjual />
    <CAboutpage />
    <CPagination />
  </div>
</template>

<script>
// @ is an alias to /src
import CNavbarPenjual from "@/components/NavbarPenjual.vue";
import CAboutpage from "@/components/Tentang.vue";
import CPagination from "@/components/Pagination.vue";

export default {
  name: "TentangViewPenjual",
  components: {
    CNavbarPenjual,
    CAboutpage,
    CPagination
  },
};
</script>
