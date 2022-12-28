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
// rating
Vue.component('rating-component', require('./components/rating/RatingComponent.vue').default);
// partner
Vue.component('partner-component', require('./components/partner/PartnerComponent.vue').default);
// testimoni
Vue.component('testimoni-component', require('./components/testimoni/TestimoniComponent.vue').default);
// liput
Vue.component('liput-component', require('./components/liput/LiputComponent.vue').default);
// support
Vue.component('support-component', require('./components/support/SupportComponent.vue').default);
// payment
Vue.component('payment-component', require('./components/payment/PaymentComponent.vue').default);
// contact
Vue.component('contact-component', require('./components/contact/ContactComponent.vue').default);
// address
Vue.component('address-component', require('./components/address/AddressComponent.vue').default);
// footer
Vue.component('footer-component', require('./components/footer/FooterComponent.vue').default);




/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
