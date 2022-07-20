<template>
  <div class="row mt-4">
    <div
      style="
        background: #cadfca;
        width: 100vw;
        height: 50%;
        position: absolute;
        left: 0;
      "
    ></div>
    <div class="col-md-6 mt-5">
      <div
        class="card"
        style="border-radius: 20px; width: 32rem; height: 18rem"
      >
        <div
          class="card-body"
          style="
            text-align: start;
            margin-top: 20px;
            margin-left: 20px;
            margin-right: 20px;
            margin-bottom: 20px;
          "
        >
          <img class="img-table mr-3" src="@/assets/img/icon.png" />
          <h5 class="card-title mt-3">Cara Menyimpan Produk</h5>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-6 mt-5" style="padding-right: 0; padding-left: 42px">
      <div
        class="card"
        style="border-radius: 20px; width: 32rem; height: 18rem"
      >
        <div
          class="card-body"
          style="
            text-align: start;
            margin-top: 20px;
            margin-left: 20px;
            margin-right: 20px;
            margin-bottom: 20px;
          "
        >
          <img class="img-table mr-3" src="@/assets/img/icon.png" />
          <h5 class="card-title mt-3">Bahan Baku Produk</h5>
          <div class="row">
            <div class="col-md-6">
              <ul>
                <li>Lorem ipsum</li>
                <li>Ut enim ad minim</li>
                <li>Lorem ipsum</li>
                <li>Ut enim ad minim</li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul>
                <li>Lorem ipsum</li>
                <li>Ut enim ad minim</li>
                <li>Lorem ipsum</li>
                <li>Ut enim ad minim</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CCard",
};
</script>

<style></style>
