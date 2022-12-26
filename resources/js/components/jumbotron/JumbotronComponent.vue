<template>
  <section class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-5">
          <div class="row mt-4">
            <h2>Cloud Hosting Indonesia dengan Resource Terbaik</h2>
          </div>
          <div class="row mt-5">
            <p>
              Cloud Hosting Indonesia dengan pelayanan terbaik dan harga murah
              serta diskon nama domain.
            </p>
          </div>
          <div class="row mt-2">
            <img src="/img/ICANN.png" alt="ICANN" class="icann" />
            <p>Cari nama domain aja dulu</p>
          </div>
          <div class="row">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Cari nama domain anda"
                aria-label="Cari nama domain anda"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-outline-warning"
                type="button"
                id="button-addon2"
              >
                Button
              </button>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-4">
              <p><span>.com</span> Rp. 165.000</p>
            </div>
            <div class="col-sm-4">
              <p><span>.id</span> Rp. 225.000</p>
            </div>
            <div class="col-sm-4">
              <p><span>.info</span> Rp. 77.000</p>

            </div>
          </div>
          <div class="row">
            <p><span>Coba cari banyak domain?</span></p>
          </div>


        </div>
        <div class="col-sm-3"></div>
        <div class="col-sm-4">
          <div class="row">
            <img
              class="internet"
              src="/img/internet-rumah-cepat.png"
              alt="internet cepat"
              height="350"
            />
          </div>
          <div class="row">
            <h6>
              Mau internet cepat, anti-ngelag? Pakai Qwords Internet Broadband.
              Diskon 20%!
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  background-color: #323645;
  color: white;
  margin-top: 120px;
  padding-bottom: 200px;
}
img.internet {
  max-width: 80%;
}

img.icann {
  width: 100px;
  height: 100px;
}

p>span{
  color: #F7863B;
}
</style>