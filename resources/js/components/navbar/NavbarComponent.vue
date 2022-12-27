<template>
  <nav class="navbar navbar-expand-lg fixed-top customNavbar">
    <div class="container">
      <a class="navbar-brand text-light" href="#">
        <img src="img/logo.png" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <!-- dropdown -->

          <div v-for="n in 7" :key="n">
            <dropdown-component :listname="name[n]" />
          </div>

          <li class="nav-item">
            <a class="nav-link text-light" aria-current="page" href="#"
              >Promo</a
            >
          </li>
          <li class="nav-item">
            <div class="baru pulsing-div text-light">Baru</div>
          </li>
          <li class="nav-item">
            <button class="customButton">
              <i class="bi bi-lock-fill"></i> Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      name: [
        {
          // index 0
          title: "zonk",
        },
        {
          title: "Cloud Hosting",
        },
        {
          title: "Server",
        },
        {
          title: "Internet Access",
        },
        {
          title: "Domain",
        },
        {
          title: "Email Suite",
        },
        {
          title: "Services",
        },
        {
          title: "Customer Care",
        },
      ],
    };
  },
};
</script>

<style scoped>
.customNavbar {
  background-color: #323645;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  margin-top: 35px;
}
.baru{
  margin: 0 10px 10px 10px;
  padding: 2px 10px 2px 10px;
  background-color: #1FA37F;
  border-radius: 20px;
}

/* animasi */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
.pulsing-div {
  animation-name: pulse;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

/* button */
.customButton{
    /* margin-top: 30px; */
    padding: 8px 10px 8px 10px;
    background-color: #FF9800;
    color: white;
    border-radius: 20px;
    border: 0;
    box-shadow: 1px 1px 3px #FF9800;
}
.customButton:hover{
    border: 1px solid #FF9800;
    background-color: #fff;
    color: #FF9800;
}
</style>