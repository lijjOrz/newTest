import { Component, Vue } from 'vue-property-decorator';
require('vue2-animate/dist/vue2-animate.min.css');

@Component({
    components: {},

})
export default class Home extends Vue {
    private name: string = "Home";
    private show: boolean = true;
    private clickCount: number = 0;
    private lock: boolean = true;
    private lockList: boolean = true;





    private isShow(e: any){
        this.show = !this.show;



        // let symbol = document.createElement("b");
        // symbol.style.position = "absolute";
		// symbol.style.left = (e.pageX - 10) + "px";
        // symbol.style.top = (e.pageY - 15) + "px";
        // symbol.style.zIndex = '9999';
        // symbol.style.userSelect = "none"; // 禁止文本被选中，影响美观
        // symbol.style.fontSize = "18px"; 
        // symbol.style.color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`; // 随机颜色
		// symbol.style.transition="all 1.5s";
        // symbol.addEventListener("transitionend",(et) => { // 动画结束移除dom
		// 	if(et.propertyName == "opacity" && et.srcElement["style"].opacity == '0'){
        // 		et.srcElement.remove(); //target
        //     }
        // });
 
		// switch(++this.clickCount){
		// 	case 1:
		//         symbol.innerText = "★";
		// 		break;
		// 	case 2:
		//         symbol.innerText = "❀";
        //         break;
        //     case 3:
        //         symbol.innerText = "♤";
        //         break;
        //     case 4:
        //         symbol.innerText = "♞";
        //         break;
        //     case 5:
        //         symbol.innerText = "❤";
        //         break;
		// 	default:
		//         symbol.innerText = "✦";
		// 		this.clickCount = 0;
        // };
        
        // document.body.appendChild(symbol);
        // requestAnimationFrame(()=>{
        //     symbol.style.top = (e.pageY - 100) + "px";
        //     symbol.style.opacity = '0';
        // });
    }

    private mounted(): void{
    }
}