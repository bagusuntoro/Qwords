<template>
  <section class="rate mt-5">
    <div class="container">
        <div class="row text-center">
            <h3>Telah Dipercaya oleh 45.000+ Pelanggan Aktif</h3>
        </div>
        <div class="row text-center">
            <div class="rating">
                <span class="rating star">&#9733;</span>
                <span class="rating star">&#9733;</span>
                <span class="rating star">&#9733;</span>
                <span class="rating star">&#9733;</span>
                <span class="customRating star">&#9733;</span>
            </div>
            <p>Rating: 4.79/5. From 302 votes.</p>
        </div>
        <div class="row text-center mt-3">
            <img src="https://www.qwords.com/wp-content/themes/qwords_v10/assets/images/partner-desktop.2.jpg" alt="image">
            <a href="#">Dan masih banyak lainnya</a>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.rating {
  font-size: 36px;
  color: #FF9800; /* warna kuning untuk bintang terisi */
  cursor: pointer;
}
.customRating{
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, #FF9800, #E5E520);
}
/* .rating .star {
} */

.rating .star:hover,.customRating:hover {
    color: #ffd700; /* warna kuning untuk bintang terisi */
}
a{
    text-decoration: none;
    color: #505D69;
}
</style>