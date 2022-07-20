<template>
  <div class="card" style="width: 100%; height: 75%">
    <div class="card-body">
      <div class="row">
        <div class="col-md-6">
          <h2>Nama Produk</h2>
        </div>
        <div class="col-mr-6">
          <button
            type="button"
            class="btn btn-danger"
            style="border-radius: 100px"
          >
            Verifikasi produk gagal
          </button>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col">
          <img
            src="@/assets/img/produk-1.png"
            alt="foto-produk"
            class="img-thumbnail"
          />
        </div>
        <div class="col">
          <h5>Deskripsi produk</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex
          </p>
        </div>
      </div>
      <br />
      <div>
        <h5 style="color: #dc3545">Alasan gagal verifikasi produk</h5>
        <p>
          Alasan produk anda gagal dalam verifikasi produk karena ada beberapa
          permasalahan, seperti: - Resolusi foto kurang jernih - Pencahayaan
          video kurang terang
        </p>
      </div>
      <div>
        <p>
          Silahkan mengisi ulang kembali dengan memperbaiki permasalahan yang
          sudah diberikan
        </p>
      </div>
      <a href="/inputprodukview">
      <button
        type="button"
        class="btn btn-success btn-lg btn-block"
        style="background-color: #4e944f; border-radius: 8px; font-size: 16px"
      >
        Mengisi kembali informasi produk
      </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CNotifFail",
};
</script>

<style></style>
