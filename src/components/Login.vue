<template>
  <section class="lognreg">
    <div>
      <h3 class="lognreg">Masuk</h3>
    </div>
    <div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text"><b-icon-envelope /></div>
            </div>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Masukkan email anda"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Kata Sandi</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text"><b-icon-lock /></div>
            </div>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Masukkan kata sandi anda"
            />
          </div>
          <a href="#" class="card-link">Lupa kata sandi?</a>
        </div>
      </form>
      <div>
        <a href="/">
          <button type="submit" class="btn btn-info">Masuk</button>
        </a>
        <hr />
        <a href="/">
          <button type="button" class="btn btn-outline-info">
            Log in with google
          </button>
        </a>
        <p>
          Belum punya akun?
          <a href="/registerview" class="card-link">Daftar disini</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CLogin",
};
</script>

<style></style>
