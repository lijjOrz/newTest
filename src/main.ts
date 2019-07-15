import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import AI from './serve/utils/AppInteractive';
require('vue2-animate/dist/vue2-animate.min.css');

Vue.config.productionTip = false;

AI.setTitle('newTest...^_^');
// AI.interceptBack(1);

let vm = new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
