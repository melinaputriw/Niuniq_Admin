<template>
  <div>
    <div class="card" style="width: 100%">
      <div class="card-body">
        <h3 class="lognreg">Informasi Toko</h3>
        <hr />
        <div class="row">
          <div class="col-md-3">
            <label for="exampleInputTelepon1">Logo Toko</label>
            <vue-upload-multiple-image
              @upload-success="uploadImageSuccess"
              @before-remove="beforeRemove"
              @mark-is-primary="markIsPrimary"
              @limit-exceeded="limitExceeded"
              @edit-image="editImage"
              :data-images="images"
              idUpload="myIdUpload"
              idEdit="myIdEdit"
              maxImage="5"
              editUpload="myIdEdit"
              primaryText="Default"
              browseText="Browse picture(s)"
              markIsPrimaryText="Set image as default"
              dragText="Logo Toko"
              dropText="Drop your file here"
              popupText="This image will be displayed as default"
              multiple="true"
              showEdit="true"
              showDelete="true"
              showAdd="true"
            ></vue-upload-multiple-image>
          </div>
          <div class="col-md-9">
            <label for="exampleInputTelepon1">Foto Toko</label>
            <vue-upload-multiple-image
              @upload-success="uploadImageSuccess"
              @before-remove="beforeRemove"
              @mark-is-primary="markIsPrimary"
              @limit-exceeded="limitExceeded"
              @edit-image="editImage"
              :data-images="images"
              idUpload="myIdUpload"
              idEdit="myIdEdit"
              maxImage="5"
              editUpload="myIdEdit"
              primaryText="Default"
              browseText="Browse picture(s)"
              markIsPrimaryText="Set image as default"
              dragText="Upload Foto Toko"
              dropText="Drop your file here"
              popupText="This image will be displayed as default"
              multiple="true"
              showEdit="true"
              showDelete="true"
              showAdd="true"
            ></vue-upload-multiple-image>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputTelepon1">Nama Toko*</label>
              <div class="input-group mb-2">
                <input
                  type="telepon"
                  class="form-control"
                  id="exampleInputTelepon1"
                  aria-describedby="teleponHelp"
                  placeholder="Masukkan nama toko"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputTelepon1">Tahun Berdiri*</label>
              <div class="input-group mb-2">
                <input
                  type="telepon"
                  class="form-control"
                  id="exampleInputTelepon1"
                  aria-describedby="teleponHelp"
                  placeholder="Masukkan tahun toko berdiri"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h5 class="informasiproduk">Lokasi Toko</h5>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputTelepon1">Kota/Kabupaten*</label>
              <div class="input-group mb-2">
                <input
                  type="telepon"
                  class="form-control"
                  id="exampleInputTelepon1"
                  aria-describedby="teleponHelp"
                  placeholder="Masukkan nama kota/kabupaten"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputTelepon1">Provinsi*</label>
              <div class="input-group mb-2">
                <input
                  type="telepon"
                  class="form-control"
                  id="exampleInputTelepon1"
                  aria-describedby="teleponHelp"
                  placeholder="Masukkan nama provinsi"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="form-group">
          <label for="exampleInputTelepon1">Link Toko (Tokopedia)</label>
          <div class="input-group mb-2">
            <input
              type="telepon"
              class="form-control"
              id="exampleInputTelepon1"
              aria-describedby="teleponHelp"
              placeholder="Masukkan link toko"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputTelepon1">Link Toko (Shopee)</label>
          <div class="input-group mb-2">
            <input
              type="telepon"
              class="form-control"
              id="exampleInputTelepon1"
              aria-describedby="teleponHelp"
              placeholder="Masukkan link toko"
            />
          </div>
        </div>
        <a href="/notificationview">
          <button
            type="button"
            class="btn btn-success btn-lg btn-block mt-4 mb-2"
            style="
              background-color: #4e944f;
              border-radius: 8px;
              font-size: 16px;
            "
          >
            Simpan
          </button>
        </a>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";

export default {
  name: "CInputToko",
  components: {
    VueUploadMultipleImage,
  },
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log("upload success data ", formData, index, fileList);
    },
    beforeRemove(index, removeCallBack) {
      console.log("index", index);
      var r = confirm("Do you really want to remove the image?");
      if (r == true) {
        removeCallBack();
      }
    },
    editImage(formData, index, fileList) {
      console.log("edit data", formData, index, fileList);
    },
    markIsPrimary(index, fileList) {
      console.log("markIsPrimary data", index, fileList);
    },
    limitExceeded(amount) {
      console.log("limitExceeded data", amount);
    },
  },
};
</script>

<style></style>
