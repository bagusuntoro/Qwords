<template>
  <section class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-5">
          <div class="row mt-4">
            <h2>Cloud Hosting Indonesia dengan</h2>
            <h2 class="typing-text"></h2>
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
            <!-- <div class="input-group mb-3">
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
            </div> -->
            <div class="inputan">
              <input type="text" placeholder="Cari nama domain anda">
              <select name="tes" id="#">
                <option value=".com">.com</option>
                <option value=".com">.id</option>
                <option value=".com">.info</option>
              </select>
              <button class="customButton float-end">Cari</button>
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

/* animasi */
@keyframes typing {
  from { width: 0; }
}
.typing-text {
  animation-name: typing;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  overflow: hidden;
}

.typing-text::before {
  content: "Resource\00A0Terbaik";
}


.tombol-kirim {
  background-color: #4CAF50; /* Warna latar belakang tombol */
  border: none; /* Menghilangkan garis batas tombol */
  color: white; /* Warna teks tombol */
  padding: 15px 32px; /* Padding atas-bawah dan kiri-kanan */
  text-align: center; /* Align teks ke tengah */
  text-decoration: none; /* Menghilangkan underline pada teks */
  display: inline-block; /* Membuat tombol tampil seperti inline element, tapi dapat memiliki lebar dan tinggi yang ditentukan */
  font-size: 16px; /* Ukuran font teks */
}


.inputan{
  background-color: #fff;
  border-radius: 20px;
}
.inputan>input,select{
  border: none;
  margin-top: 5px;
}
input{
  width: 300px;
}
input,select:focus {
  outline: none;
}

/* button */
.customButton{
    margin: 5px 0 5px 0;
    padding: 5px 50px 5px 50px;
    background-color: #FF9800;
    color: white;
    border-radius: 20px;
    border: 0;
    box-shadow: 1px 1px 2px #FF9800;
}
.customButton:hover{
    border: 1px solid #FF9800;
    background-color: #fff;
    color: #FF9800;
}
</style>