<template>
  <!-- Masthead-->
  <header class="masthead">
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-6" style="align-self: center">
          <h1 style="text-align: left">
            Lihat detail produk dengan memasukkan ID QRCode
          </h1>
          <p style="text-align: left">
            Masukan ID QRCode untuk mendapatkan detail produk
          </p>
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-9">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Masukkan ID produk"
                    />
                  </div>
                </div>
                <div class="col-md-3">
                  <a href="/detailview">
                    <button type="submit" class="btn btn-info">Cari</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img
            src="@/assets/img/home-pict.png"
            class="img-fluid"
            alt="Responsive image"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "CQrcodeid",
};
</script>

<style></style>
