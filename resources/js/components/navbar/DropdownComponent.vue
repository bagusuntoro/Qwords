<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle text-light"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ listname.title }}
    </a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    listname: {
      // type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style>
</style>