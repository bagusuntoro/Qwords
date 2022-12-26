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
        <ul class="navbar-nav">
          <!-- dropdown -->

          <div v-for="n in 6" :key="n">
            <dropdown-component :listname="name[n]" />
          </div>

          <li class="nav-item">
            <a class="nav-link text-light" aria-current="page" href="#"
              >Promo</a
            >
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-warning text-light">
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
          title: "Cloud Hosting",
        },
        {
          title: "Server",
        },
        {
          title: "Internet",
        },
        {
          title: "Domain",
        },
        {
          title: "Email Suite",
        },
        {
          title: "Service",
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
</style>