<template>
  <!-- Normal modal -->
  <div>
    <!-- Download QRCode -->
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
          <img src="@/assets/img/popup-save.png" alt="foto-produk" />
          <h6></h6>
          <br />
          <h4>QRCode berhasil di download!</h4>
        </div>
      </b-modal>
    </div>

    <!-- Kata sandi baru -->
    <div>
      <b-button
        id="show-btn"
        variant="link"
        style="color: #28a745"
        @click="$bvModal.show('bv-modal-example')"
        >Kata sandi baru</b-button
      >
      <b-modal id="bv-modal-example" hide-footer>
        <div class="d-block text-center mt-2 mb-4">
          <img src="@/assets/img/popup-save.png" alt="foto-produk" />
          <h6></h6>
          <br />
          <h4>Kata sandi baru berhasil disimpan!</h4>
        </div>
      </b-modal>
    </div>

    <!-- Data dihapus -->
    <div>
      <b-button
        id="show-btn"
        variant="link"
        style="color: #28a745"
        @click="$bvModal.show('bv-modal-example')"
        >Data dihapus</b-button
      >
      <b-modal id="bv-modal-example" hide-footer>
        <div class="d-block text-center mt-2 mb-4">
          <img src="@/assets/img/popup-save.png" alt="foto-produk" />
          <h6></h6>
          <br />
          <h4>Data produk berhasil dihapus!</h4>
        </div>
      </b-modal>
    </div>

    <!-- Confirm dihapus -->
    <div>
      <b-button
        id="show-btn"
        variant="link"
        style="color: #28a745"
        @click="$bvModal.show('bv-modal-example')"
        >Confirm dihapus</b-button
      >
      Return value: {{ String(boxTwo) }}
      <b-modal id="bv-modal-example" hide-footer>
        <div class="d-block text-center mt-2 mb-4">
          <img src="@/assets/img/popup-delete.png" alt="foto-produk" />
          <h6></h6>
          <br />
          <h4>Kamu ingin menghapus produk ini?</h4>
          <b-button size="sm" variant="success" @click="showMsgBoxTwo">
            OK
          </b-button>
          <b-button size="sm" variant="danger" @click="cancel()">
            Cancel
          </b-button>
        </div>
      </b-modal>
    </div>

    <!-- Confirming modal -->
    <div>
      <div class="mb-1">
        <b-button @click="showMsgBoxTwo">msgBoxConfirm with options</b-button>
        Return value: {{ String(boxTwo) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CPagination",
  data() {
    return {
      boxTwo: "",
    };
  },
  methods: {
    showMsgBoxTwo() {
      this.boxTwo = "";
      this.$bvModal
        .msgBoxConfirm("Kamu ingin menghapus produk ini?", {
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "Hapus",
          cancelTitle: "Batal",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          this.boxTwo = value;
        });
      // .catch((err) => {
      //   // An error occurred
      // });
    },
  },
};
</script>

<style></style>
