<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <CWelcomeimg />
      </div>
      <div class="col-md-6" style="align-self: center">
        <CRegister />
      </div>
    </div>
  </div>
</template>

<script>
import CWelcomeimg from "@/components/Welcomeimg.vue";
import CRegister from "@/components/Register.vue";

export default {
  name: "RegisterView",
  components: {
    CWelcomeimg,
    CRegister,
  },
};
</script>

<style></style>
