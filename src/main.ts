import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import AI from './serve/utils/AppInteractive';
require('vue2-animate/dist/vue2-animate.min.css');

Vue.config.productionTip = false;

AI.setTitle('newTest...^_^');
// AI.interceptBack(1);



Vue.directive('zoom', (el) => {
    let _lock = true;//过度动画锁
    let lockList = true;//监听事件锁
    var oDiv= el;
    var count = 0;
    console.log('绑定了指令', oDiv)

    oDiv.onclick=function(ev){
        console.log("节点属性——————————————", ev)
        const p = ev.srcElement;
        p['style'].transition = 'all 0.15s';
        if(lockList){
            lockList = false;
            p.addEventListener("transitionend", function animateMe(e){ // 回弹过度 
                console.log("触发指令动画——————————", count++);
                if(e.srcElement['style'].letterSpacing == '6px'){
                    console.log('执行回弹')
                    e.srcElement['style'].letterSpacing = '0px';
                    p.removeEventListener("transitionend", animateMe);
                    window.setTimeout(()=>{
                        _lock = true;
                        lockList = true;
                    }, 150);
                }
            });
        }
        requestAnimationFrame(()=>{
            if(_lock){
                p['style'].letterSpacing = '6px';
                _lock = false;
            }
        });


    };
});



let vm = new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
