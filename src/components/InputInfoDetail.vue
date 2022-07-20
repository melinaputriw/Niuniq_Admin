<template>
<!-- test -->
  <div>
    <div class="card" style="width: 100%; height: 75%">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h2>Informasi Produksi</h2>
          </div>
        </div>
        <hr />
        <div class="form-group">
          <label for="exampleInputTelepon1">Tahun Produksi</label>
          <div class="input-group mb-2">
            <input
              type="telepon"
              class="form-control"
              id="exampleInputTelepon1"
              aria-describedby="teleponHelp"
              placeholder="Masukkan tahun produksi"
            />
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="card" style="width: 100%; height: 75%">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h2>Detail Produk</h2>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputTelepon1">Nama Produk</label>
              <div class="input-group mb-2">
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder="Masukkan nama produk"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputTelepon1">Deskripsi Produk</label>
              <div class="input-group mb-2">
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder="Masukkan deskripsi produk"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputTelepon1">Bahan Baku Produk</label>
              <div class="input-group mb-2">
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder="Masukkan bahan baku produk"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputTelepon1">Cara Penyimpanan Produk</label>
              <div class="input-group mb-2">
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder="Masukkan cara penyimpanan produk"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CInputInfoDetail",
};
</script>

<style></style>
