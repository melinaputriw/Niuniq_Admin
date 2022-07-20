<template>
  <div>
    <div class="card" style="width: 100%; height: 85%">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h2>Informasi Akun</h2>
          </div>
        </div>
        <hr />
        <div class="form-group">
          <label for="exampleInputTelepon1">Email</label>
          <div class="input-group mb-2">
            <input
              type="telepon"
              class="form-control"
              id="exampleInputTelepon1"
              aria-describedby="teleponHelp"
              placeholder="Masukkan tahun produksi"
              readonly
            />
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputTelepon1">No. Handphone</label>
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
        <button
          type="button"
          class="btn btn-success btn-lg btn-block"
          style="background-color: #4e944f; border-radius: 8px; font-size: 16px"
        >
          Simpan
        </button>
      </div>
    </div>
    <br />
    <div class="card mt-3" style="width: 100%; height: 85%">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h2>Ubah kata sandi</h2>
          </div>
        </div>
        <hr />
        <div class="form-group">
          <label for="exampleInputTelepon1">Kata sandi saat ini</label>
          <div class="input-group mb-2">
            <input
              :type="inputTypeIcon"
              class="form-control"
              id="exampleInputTelepon1"
              aria-describedby="teleponHelp"
              placeholder="Masukkan tahun produksi"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputTelepon1">Kata sandi baru</label>
          <div class="input-group mb-2">
            <input
              :type="inputTypeIcon"
              class="form-control"
              id="exampleInputTelepon1"
              aria-describedby="teleponHelp"
              placeholder="Masukkan tahun produksi"
            />
            <div class="input-group-append">
              <button
                class="input-group-text"
                @click.prevent="ToggleButtonIcon"
              >
                <i v-if="inputTypeIcon == 'password'"><b-icon-eye /></i>
                <i v-else><b-icon-eye-slash /></i>
              </button>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputTelepon1">Konfirmasi kata sandi baru</label>
          <div class="input-group mb-2">
            <input
              :type="inputTypeIcon"
              class="form-control"
              id="exampleInputTelepon1"
              aria-describedby="teleponHelp"
              placeholder="Masukkan tahun produksi"
            />
            <div class="input-group-append">
              <button
                class="input-group-text"
                @click.prevent="ToggleButtonIcon"
              >
                <i v-if="inputTypeIcon == 'password'"><b-icon-eye /></i>
                <i v-else><b-icon-eye-slash /></i>
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-success btn-lg btn-block"
          style="background-color: #4e944f; border-radius: 8px; font-size: 16px"
        >
          Simpan
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CPengaturan",

  data() {
    return {
      inputType: "password",
      inputTypeIcon: "password",
      ShowPassword: "Show Password",
      HidePassword: "Hide Password",
    };
  },
  methods: {
    ToggleButton() {
      this.inputType = this.inputType === "password" ? "text" : "password";
    },
    ToggleButtonIcon() {
      this.inputTypeIcon =
        this.inputTypeIcon === "password" ? "text" : "password";
    },
  },
};
</script>

<style></style>
