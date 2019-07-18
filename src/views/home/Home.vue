<template>
    <div>
        <p @click="isShow($event)" style="letter-spacing: 1px">查看更多排名>></p>
        <transition
            name="zoomRight"
            >
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
require('vue2-animate/dist/vue2-animate.min.css');

//   enter-active-class="bounceInDown"
//   leave-active-class="bounceOutRight"
@Component({
    components: {},

})
export default class Home extends Vue {
    private name: string = "Home";
    private show: boolean = true;
    private clickCount: number = 0;
    private lock: boolean = true;

    private isShow(e: any){
        // console.log('event-------', e);
        this.show = !this.show;
        let symbol = document.createElement("b");

        const p = e.srcElement;
        p.style.transition = 'all 0.15s';
        p.addEventListener("transitionend", (e) => { // 动画结束移除dom
            if(e.srcElement.style.letterSpacing == '6px'){
                e.srcElement.style.letterSpacing = '1px';
                console.log('lock-----------', this.lock);
                window.setTimeout(()=>{
                    this.lock = true;
                    console.log("setTimeout-+++++++++++", this.lock);
                }, 150);
            }
        });//webKitTransitionEnd

        symbol.style.position = "absolute";
		symbol.style.left = (e.pageX - 10) + "px";
        symbol.style.top = (e.pageY - 15) + "px";
        symbol.style.zIndex = '9999';
        symbol.style.userSelect = "none"; // 禁止文本被选中，影响美观
        symbol.style.fontSize = "18px"; 
        symbol.style.color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`; // 随机颜色
		symbol.style.transition="all 1.5s";
        symbol.addEventListener("transitionend",(et) => { // 动画结束移除dom
			if(et.propertyName == "opacity" && et.srcElement["style"].opacity == '0'){
        		et.srcElement.remove();
            }
        });
 
		// 轮换几个预制字符
		switch(++this.clickCount){
			case 1:
		        symbol.innerText = "✔";
				break;
			case 2:
		        symbol.innerText = "❤";
				break;
			default:
		        symbol.innerText = "☺";
				this.clickCount = 0;
        };
        
        document.body.appendChild(symbol);
        requestAnimationFrame(()=>{
	        symbol.style.top = (e.pageY - 100) + "px";
            symbol.style.opacity = '0';
            if(this.lock){
                p.style.letterSpacing = '6px';
                this.lock = false;
            }
        });
    }

    private mounted(): void{
    }
}
</script>

<style lang="scss" scoped>

</style>