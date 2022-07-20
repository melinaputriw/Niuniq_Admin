<template>
<!-- test -->
  <nav class="navbar navbar-expand-lg changecolor">
    <div class="container-fluid">
      <a class="navbar-brand" href="/registerview"
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
          <router-link class="nav-link" to="/tentangviewpenjual"
            >Tentang</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/notificationview"
            ><b-icon-bell
          /></router-link>
        </li>
        <div>
          <b-dropdown
            id="dropdown-right"
            right
            text="Right align"
            variant="link"
            toggle-class="text-decoration-none"
            no-caret
          >
            <template #button-content>
              <b-icon-person-circle style="color: #4e944f" />
            </template>
            <b-dropdown-item href="#"
              ><b-icon-person-fill /> Profil Saya</b-dropdown-item
            >
            <b-dropdown-item href="/pengaturanview"
              ><b-icon-gear-fill /> Pengaturan</b-dropdown-item
            >
            <hr />
            <b-dropdown-item href="#"
              ><b-icon-box-arrow-right /> Keluar</b-dropdown-item
            >
          </b-dropdown>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "CNavbarPenjual",
};
</script>

<style></style>
