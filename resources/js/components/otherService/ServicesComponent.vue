<template>
  <section class="services mt-5 pb-5">
    <div class="container pt-3">
        <div class="row">
            <h3 class="text-center">Lihat Juga Layanan Kami Yang Lain</h3>
            <p class="text-center">Layanan unggulan dengan teknologi terbaik untuk website anda</p>
        </div>

        <div class="row mt-5">
            <div class="col-sm-4">
                <div class="card">
                    <img class="mt-3 ms-3 bouncing-element" src="https://img.icons8.com/color/48/null/check-file.png" width="50"/>
                        <div class="card-body">
                            <h4 class="product">SSL</h4>
                            <p class="diskon">Jadikan website Anda lebih terpercaya dan disukai oleh search engine dengan menggunakan SSL Certificate.</p>
                            <br>
                            <p class="mulai">Mulai dari</p>
                            <p class="harga">Rp 112.000 /thn</p>
                            <button class="customButton">Order sekarang</button>
                        </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <img class="mt-3 ms-3 bouncing-element" src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/null/external-cloud-hosting-work-from-home-xnimrodx-blue-xnimrodx.png" width="50"/>
                        <div class="card-body">
                            <h4 class="product">Dedicated Server</h4>
                            <p class="diskon">Nikmati kelola Dedicated Server sendiri dengan akses remote dari seluruh dunia tanpa batas</p>
                            <br>
                            <br>
                            <p class="mulai">Mulai dari</p>
                            <p class="harga">Rp 499.000 /bln</p>
                            <button class="customButton">Order sekarang</button>
                        </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <img class="mt-3 ms-3 bouncing-element" src="https://img.icons8.com/external-phatplus-lineal-color-phatplus/64/null/external-database-cloud-computing-phatplus-lineal-color-phatplus.png" width="50"/>
                        <div class="card-body">
                            <h4 class="product">Colocation Server</h4>
                            <p class="diskon">Akses cepat dari seluruh dunia dengan fasilitas 24x7 full monitoring dengan cooling system terbaik serta fire extinguisher</p>
                            <br>
                            <p class="mulai">Mulai dari</p>
                            <p class="harga">Rp 500.000 /bln</p>
                            <button class="customButton">Order sekarang</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
p.mulai{
    font-weight: 500;
}
p.harga{
    font-size: 25px;
}
.customButton{
    margin-top: 30px;
    padding: 8px 15px 8px 15px;
    background-color: #FF9800;
    color: white;
    border-radius: 20px;
    border: 0;
    box-shadow: 1px 1px 5px #FF9800;
}
.customButton:hover{
    border: 1px solid #FF9800;
    background-color: #fff;
    color: #FF9800;
}

/* animasi */
@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
}

.bouncing-element {
  animation-name: bounce;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
</style>