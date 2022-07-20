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
            class="btn btn-success"
            style="border-radius: 100px"
          >
            Verifikasi produk berhasil
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
      <hr />
      <div>
        <b-button
          id="show-btn"
          variant="link"
          style="color: #28a745"
          @click="$bvModal.show('bv-modal-example')"
          >Silahkan download hasil QRCode</b-button
        >
        <b-modal id="bv-modal-example" hide-footer>
          <div class="d-block text-center mt-2 mb-4">
            <img
              src="@/assets/img/popup-save.png"
              alt="foto-produk"
            />
            <h6></h6>
            <br />
            <h4>QRCode berhasil di download</h4>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CNotifSuccess",
};
</script>

<style></style>
