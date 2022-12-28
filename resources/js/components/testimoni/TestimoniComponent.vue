<template>
    <section class="testimoni pt-5">
        <div class="container">
            <div class="row text-center">
                <h3>Apa Kata Mereka?</h3>
                <p>
                    Apa kata mereka yang sudah menggunakan layanan Qwords? Simak
                    pengalaman mereka yang telah membuktikan sendiri fitur dari
                    layanan kami.
                </p>
            </div>
            <div class="row mt-5">
                <div class="col-sm-4">
                    <a href="#">
                        <div class="image1">
                        <div class="play-icon"></div>
                    </div>
                    </a>
                </div>
                <div class="col-sm-4">
                    <a href="#">
                        <div class="image2">
                        <div class="play-icon"></div>
                    </div>
                    </a>
                </div>
                <div class="col-sm-4">
                    <a href="#">
                        <div class="image3">
                        <div class="play-icon"></div>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped>
.testimoni{
    padding-bottom: 100px;
}
/* style untuk icon play */
.play-icon {
    display: none; /* sembunyikan icon play secara default */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    background-image: url(https://img.icons8.com/external-others-inmotus-design/67/null/external-Play-virtual-keyboard-others-inmotus-design-6.png);
    background-size: cover;
}

/* style untuk gambar */
.image1 {
    position: relative;
    width: 300px;
    height: 300px;
    background-image: url(https://www.qwords.com/wp-content/uploads/2020/09/sukses-story-id-cert.png);
    background-size: cover;
}
.image2 {
    position: relative;
    width: 300px;
    height: 300px;
    background-image: url(https://www.qwords.com/wp-content/uploads/2020/09/sukses-story-infobdg.png);
    background-size: cover;
}
.image3 {
    position: relative;
    width: 300px;
    height: 300px;
    background-image: url(https://www.qwords.com/wp-content/uploads/2020/09/sukses-story-kopi-temanggung.png);
    background-size: cover;
}

/* menampilkan icon play ketika di-sorot */
.image1:hover .play-icon {
    display: block;
}
.image1:hover{
    filter: grayscale(250%);
    filter: brightness(200%);
}
.image2:hover .play-icon {
    display: block;
}
.image2:hover{
    filter: grayscale(250%);
    filter: brightness(200%);
}
.image3:hover .play-icon {
    display: block;
}
.image3:hover{
    filter: grayscale(250%);
    filter: brightness(200%);
}
</style>
