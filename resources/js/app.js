require('./bootstrap');

window.Vue = require('vue').default;




// component
Vue.component('parent-component', require('./components/ParentComponent.vue').default);
// header
Vue.component('header-component', require('./components/header/HeaderComponent').default);
// navbar
Vue.component('navbar-component', require('./components/navbar/NavbarComponent.vue').default);
Vue.component('dropdown-component', require('./components/navbar/DropdownComponent.vue').default);
// jumbotron
Vue.component('jumbotron-component', require('./components/jumbotron/JumbotronComponent.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
