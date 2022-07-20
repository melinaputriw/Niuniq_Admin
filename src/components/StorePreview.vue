<template>
<!-- test -->
  <b-card>
    <div class="row mt-4 px-3">
      <div class="col" style="padding-left: 0">
        <img
          src="@/assets/img/logo-rmhbmb.png"
          class="img-fluid"
          alt="Responsive image"
        />
      </div>
      <div class="col-md-11" style="align-self: center; padding-left: 0">
        <h4 class="card-title"><Strong>Produk Rumah Bamboe</Strong></h4>
        <p class="card-text">
          Berikut merupakan beberapa produk terlaris yang dijual oleh Rumah
          Bamboe
        </p>
      </div>
      <div class="row mt-4">
        <div class="col-md-4">
          <a href="/detailview">
            <img src="@/assets/img/produk-1.png" class="rounded img-fluid" />
          </a>
        </div>
        <div class="col-md-4">
          <a href="/detailview">
            <img src="@/assets/img/produk-2.png" class="rounded img-fluid" />
          </a>
        </div>
        <div class="col-md-4">
          <a href="/detailview">
            <img src="@/assets/img/produk-3.png" class="rounded img-fluid" />
          </a>
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "CStorepreview",
};
</script>

<style></style>
