<template>
  <nav class="navbar navbar-expand-lg changecolor">
    <div class="container-fluid">
      <a class="navbar-brand" href="/homeview"
        ><img class="img-table-1" src="@/assets/img/logo-niuniq.png"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <router-link class="nav-link" to="/homeview">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/tentangview">Tentang</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "CNavbar",
};
</script>

<style></style>
