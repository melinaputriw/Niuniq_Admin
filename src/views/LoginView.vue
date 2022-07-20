<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <CWelcomeimg />
      </div>
      <div class="col-md-6" style="align-self: center">
        <CLogin />
      </div>
    </div>
  </div>
</template>

<script>
import CWelcomeimg from "@/components/Welcomeimg.vue";
import CLogin from "@/components/Login.vue";

export default {
  name: "LoginView",
  components: {
    CWelcomeimg,
    CLogin,
  },
};
</script>

<style></style>
