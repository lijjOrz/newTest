<template>
    <div class="box_page">
        <div class="page-2-2" ref="wrapper">
            <ul class="content">
                <li class="ref-li">
                    <i class="fa fa-refresh" :class="[faSpin]" :style="{fontSize: fontS}"></i>
                </li>
                <li class="ul-li" v-for="(item, index) in showData" :key="index" @click="myClick(index)">{{index + 1}}</li>
                <li class="li-text">{{scrollText[textState]}}</li>
            </ul>
        </div>
    </div>

</template>


<script lang="ts">  
import { Component, Vue } from 'vue-property-decorator';
import 'css-doodle';
import BScroll from 'better-scroll'

@Component
export default class Page_2_2 extends Vue {
    private name: string = "Page_2_2";

    private faSpin = '';
    private fontS = '12px';


    private showData = [0, 1, 2, 3, 4, 5, 6 ];
    private scroll;
    private counter = 0;
    private scrollText = [
        '加载中',
        '没有更多了',
        '',
        '加载完成'
    ]
    private textState = 2;

    private lockUp: boolean = true;

    private beforeMount(){
        this.init();
    }
    private mounted(){
    }
    

    private init(){
        this.showData.push(this.counter++);//上拉加载，加载数据    注意*写在nextTick外面。refresh写在nextTick里面
        this.$nextTick(() => {
            console.log('showData_________', this.showData)
            if(!this.scroll){
                this.scroll = new BScroll(this.$refs.wrapper, {
                    //配置Bscroll发送事件
                    probeType: 3,
                    //开启click事件。Bscroll默认是阻止的
                    click: true,
                    tap: true,

                    //滚动初始位置
                    startY: -100,
                    //用来配置下拉刷新
                    pullDownRefresh: {
                        threshold: 50,
                        stop: 40,
                    },
                    
                    //用来配置上拉加载
                    pullUpLoad: {
                        threshold: 30  //负值是当上拉到超过低部多少时；正值是距离底部多少时，单位px
                    },
                })
                
                
                // 上拉加载
                this.scroll.on('pullingUp', () => {
                    // 没有更多了
                    if(this.counter==10){
                        this.textState = 1;
                        return;
                    }
                    if(this.lockUp){
                        this.lockUp = false
                        console.log("拉到底部了------------");
                        this.textState = 0;
                        setTimeout(()=>{
                            this.init();
                        },1000)
                        

                        //请求执行完成并更新了列表之后， 执行这一些列操作
                        setTimeout(()=>{
                            this.textState = 3;
                            console.log('完成')
                            this.lockUp = true
                            this.scroll.finishPullUp();//只有finishPullUp执行后才能执行下一次上拉加载
                        }, 1000)
                    }
                })


                this.scroll.on('scroll', () => { //下拉刷新标志缩放
                    console.log('------',this.scroll.y);
                    if(this.scroll.y > 15){
                        if(this.scroll.y > 50){ this.fontS = "20px"; return;};
                        this.fontS = ((this.scroll.y - 13)*(8/37) + 12) + 'px';
                    }
                })


                // 下拉刷新
                this.scroll.on('pullingDown', () => {
                    console.log("下拉刷新了+++++++++++++")
                    this.faSpin = "fa-spin";
                    this.showData = this.showData.splice(0,this.showData.length);
                    this.showData = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                    setTimeout(()=>{
                        this.scroll.finishPullDown();//只有finishPullDown执行后才能执行下一次拉下刷新
                        console.log('页面刷新完成+++++++')
                        this.counter = 0;
                        this.textState = 2;
                        this.faSpin = "";
                        this.scroll.refresh();
                    },2000)
                })

            }else{
                this.scroll.refresh();
            }
        })
    }

    private myClick(index) {
        console.log("---------", index + 1);
    }
}

</script>

<style lang="scss" scoped>
@import './page_css.scss';
.box_page{
    width: 100%;
    height: 260px;
    overflow: hidden;
}
.page-2-2{
    width: 100%;
    height: 300px;
    border: 1px solid rgb(0, 255, 64);
    overflow: hidden;
    background: #fff;
    margin-top: -40px;
}
.content{
    width: 100%;
}
.ul-li{
    width: 100%;
    height: 40px;
    background: #ccc;
    padding: 10px;
    border-bottom: 1px solid #000;
}
.ref-li{
    width: 100%;
    height: 40px;
    line-height: 40px;
    // background: #ccc;
}
.li-text{
    text-align: center;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #31bbeb;
}
</style>