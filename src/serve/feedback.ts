import Vue from 'vue';

// 按钮点击文本缩放响应
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


var clickCount = 0
Vue.directive('float', (e) => {
    var oDiv= e;
    console.log('绑定了指令', oDiv)
    
    oDiv.onclick=function(e){
        console.log("节点属性——————————————", e)

        let symbol = document.createElement("b");
        symbol.style.position = "absolute";
		symbol.style.left = (e['pageX'] - 10) + "px";
        symbol.style.top = (e['pageY'] - 15) + "px";
        symbol.style.zIndex = '9999';
        symbol.style.userSelect = "none"; // 禁止文本被选中，影响美观
        symbol.style.fontSize = "18px"; 
        symbol.style.color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`; // 随机颜色
		symbol.style.transition="all 1.5s";
        symbol.addEventListener("transitionend",(et) => { // 动画结束移除dom
			if(et.propertyName == "opacity" && et.srcElement["style"].opacity == '0'){
                // et.srcElement.remove(); //target
                // symbol.parentNode.removeChild(symbol);
                symbol.remove();
            }
        });
 
		switch(clickCount++){
			case 0:
		        symbol.innerText = "★";
				break;
			case 1:
		        symbol.innerText = "❀";
                break;
            case 2:
                symbol.innerText = "♤";
                break;
            case 3:
                symbol.innerText = "♞";
                break;
            case 4:
                symbol.innerText = "❤";
                break;
			default:
		        symbol.innerText = "✦";
				clickCount = 0;
        };
        
        document.body.appendChild(symbol);
        requestAnimationFrame(()=>{
            symbol.style.top = (e['pageY'] - 100) + "px";
            symbol.style.opacity = '0';
        });
    }
    
});



Vue.directive('button', (el) => {
    let _lock = true;//过度动画锁
    let lockList = true;//监听事件锁
    var buttonEl = el;

    buttonEl.style.boxShadow  = "0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3)";

    buttonEl.onclick=function(ev){
        let El = ev.srcElement;
        El['style'].transition = 'all 0.1s';
        
        if(lockList){
            lockList = false;
            El.addEventListener("transitionend", function animateMe(e){ 
                if(e.srcElement['style'].zoom == '0.95'){
                    El['style'].zoom = '1';
                    El['style'].boxShadow = "0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3)";
                    // 删除监听
                    El.removeEventListener("transitionend", animateMe);
                    window.setTimeout(()=>{
                        _lock = true;
                        lockList = true;
                    }, 100);
                }
            });
        }
        
        requestAnimationFrame(()=>{
            if(_lock){
                El['style'].zoom = '0.95';
                El['style'].boxShadow = '0 1px 1px 0 rgba(0, 0, 0, 0.14),0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px -1px rgba(0, 0, 0, 0.3)';//, 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 3px -1px rgba(0, 0, 0, 0.3)
                _lock = false;
            }
        });


    };
});