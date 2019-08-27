import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import AI from './serve/utils/AppInteractive';
require('./serve/feedback.ts')
require('vue2-animate/dist/vue2-animate.min.css');

//npm install font-awesome --save       安装字符图标依赖
require('font-awesome/css/font-awesome.min.css');



Vue.config.productionTip = false;

AI.setTitle('newTest...^_^');
// AI.interceptBack(1);



let vm = new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
