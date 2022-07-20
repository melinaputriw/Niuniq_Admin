<template>
  <div>
    <CNavbar />
    <CAboutpage />
  </div>
</template>

<script>
// @ is an alias to /src
import CNavbar from "@/components/Navbar.vue";
import CAboutpage from "@/components/Tentang.vue";

export default {
  name: "TentangView",
  components: {
    CNavbar,
    CAboutpage,
  },
};
</script>
