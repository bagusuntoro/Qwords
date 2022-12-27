<template>
  <section class="komitmen">
    <div class="container">
        <div class="row text-center">
            <h3>Komitmen Qwords</h3>
            <p>Berbagai Alasan Mengapa Pelanggan memilih Qwords</p>
        </div>
        <div class="row mt-5">
            <div class="col-sm-3">
                <div class="card">
                    <img class="ms-3 mt-3 bouncing-element" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-business-web-store-flaticons-lineal-color-flat-icons-2.png" width="70"/>
                        <div class="card-body">
                            <h5 class="product">Layanan 24/7</h5>
                            <p class="diskon">Tim Technical Support dan Customer Service Qwords siap membantu Anda selama 24 jam, 7 hari. Anda dapat menghubungi melalui Live chat, Call Center, dan Support Ticket.</p>
                            <br>
                        </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                    <img class="ms-3 mt-3 bouncing-element" src="https://img.icons8.com/cute-clipart/64/null/user-manual.png" width="70"/>
                        <div class="card-body">
                            <h5 class="product">Panduan Manual Lengkap</h5>
                            <p class="diskon">Qwords dilengkapi dengan halaman knowledge base yang berisi tutorial dan tips seputar pengelolaan website. Dapat diakses dengan mudah dan solutif.</p>
                            <br>
                        </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                    <img class="ms-3 mt-3 bouncing-element" src="https://img.icons8.com/external-vectorslab-flat-vectorslab/53/null/external-Cloud-Server-Uploading-data-management-vectorslab-flat-vectorslab.png" width="70"/>
                        <div class="card-body">
                            <h5 class="product">Uptime 99.99%</h5>
                            <p class="diskon">Uptime Network & Server di atas 99.99% dengan konfigurasi server yang tepat. Didukung manajemen jaringan dan multiple upstream tier 1 provider network serta multiple peering.</p>
                            
                        </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                    <img class="ms-3 mt-3 bouncing-element" src="https://img.icons8.com/ultraviolet/40/null/keyhole-shield.png" width="70"/>
                        <div class="card-body">
                            <h5 class="product">Jaminan keamanan</h5>
                            <p class="diskon">Keamanan menjadi fokus utama kami di Qwords. Tindakan pemantauan dan pencegahan yang berstandar & berkelanjutan telah menjadi perhatian utama kami.</p>
                            <br>
                        </div>
                </div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-sm-3">
                <div class="card">
                    <img class="ms-3 mt-3 bouncing-element" src="https://img.icons8.com/emoji/48/null/globe-with-meridians-emoji.png" width="70"/>
                        <div class="card-body">
                            <h5 class="product">Clustered DNS</h5>
                            <p class="diskon">DNS Server Cloud Hosting Qwords terhubung satu dengan yang lainnya. Hal ini membuat DNS Server akan selalu dapat di akses karena saling membackup antar server.</p>
                            
                        </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                    <img class="ms-3 mt-3 bouncing-element" src="https://img.icons8.com/external-colours-bomsymbols-/91/null/external-asset-financial-and-business-economics-colours-bomsymbols-.png" width="70"/>
                        <div class="card-body">
                            <h5 class="product">High Enterprise Server</h5>
                            <p class="diskon">Standar server Qwords adalah server kelas enterprise Dual Xeon Octa Core yang merupakan hardware kelas terbaik. Hardware ini biasa digunakan oleh perusahaan terkemuka.</p>
                            
                        </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                    <img class="ms-3 mt-3 bouncing-element" src="https://img.icons8.com/external-flatarticons-blue-flatarticons/65/null/external-modem-internet-of-things-flatarticons-blue-flatarticons.png" width="70"/>
                        <div class="card-body">
                            <h5 class="product">Tier 1 Network</h5>
                            <p class="diskon">Tier 1 Network merupakan jaringan dunia tanpa transit network, yang membuat jaringan lebih cepat serta jalur routing yang lebih pendek dan ketersediaan backup network.</p>
                            
                        </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                    <img class="ms-3 mt-3 bouncing-element" src="https://img.icons8.com/fluency/48/null/network-cable.png" width="70"/>
                        <div class="card-body">
                            <h5 class="product">Peering Network</h5>
                            <p class="diskon">Jaringan di Qwords terhubung langsung ke public peering seperti OpenIXP dan CDIX yang membuat latency atau waktu tunggu pengiriman data semakin kecil.</p>
                            
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
.komitmen{
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #F2F7FB;
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