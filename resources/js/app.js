/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
// component
Vue.component('parent-component', require('./components/ParentComponent.vue').default);
// header
Vue.component('header-component', require('./components/header/HeaderComponent').default);
// navbar
Vue.component('navbar-component', require('./components/navbar/NavbarComponent.vue').default);
Vue.component('dropdown-component', require('./components/navbar/DropdownComponent.vue').default);
// jumbotron
Vue.component('jumbotron-component', require('./components/jumbotron/JumbotronComponent.vue').default);
// cloud services
Vue.component('cloud-component', require('./components/cloudHosting/CloudComponent.vue').default);
// other services
Vue.component('services-component', require('./components/otherService/ServicesComponent.vue').default);
// solutions
Vue.component('solution-component', require('./components/solutions/SolutionComponent.vue').default);
// create website
Vue.component('website-component', require('./components/createWebsite/WebsiteComponent.vue').default);
// komitmen
Vue.component('komitmen-component', require('./components/komitmen/KomitmenComponent.vue').default);
// garansi
Vue.component('garansi-component', require('./components/garansi/GaransiComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
