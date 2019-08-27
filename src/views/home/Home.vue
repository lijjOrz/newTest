<template>
    <div class="home">
        <div v-zoom>自定义指令1</div>
        <div v-zoom>自定义指令2</div>
        <div v-zoom>自定义指令3</div>
        <div v-zoom>自定义指令4</div>
        <!-- <div v-drag>自定义指令2</div>
        <div v-drag>自定义指令3</div> -->
        <p @click="isShow($event)" v-float>查看更多排名>></p>
        <transition
            name="zoomRight"
            >
            <p v-if="show">hello</p>
        </transition>
        <div class="button-box">
            <p class="button" v-button>button1</p>
        </div>
        <div class="div12" v-button>button2</div>
        <!-- 第一种水波 -->
        <div class="animate wave">
            <div class="w1"></div>
            <div class="w2"></div>
            <div class="w3"></div>
            <div class="w4"></div>
        </div>
        <!-- 第二种水波 -->
        <div class="circle">
            <div class="c1"></div>
            <div class="c2"></div>
            <div class="c3"></div>
        </div>
        <!-- 第三种水波 -->

    </div>
</template>

<script lang="ts" src="./Home.ts"></script>


<style lang="scss" scoped>
html{
		font-size: 20px;
	}
  	body{
  		background:#444;
  	}

.home{
    width: 100%;
    height: 100%;
    // overflow: hidden;
}
.button{
    width: 150px;
    height: 45px;
    margin: 0 auto;
    background: #ccc;
    border-radius: 20px;
    line-height: 45px;
}
.button-box{
    padding-top: 20px;
    width: 100%;
    height: 80px;
}
.div12{
    width: 100px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    margin: 20px auto;
}
// 水波纹效果

	@-webkit-keyframes opac{
		from {
			opacity: 1;
			width:0;
			height:0;
			top:50%;
			left:50%;
		}
		to {
			opacity : 0;
			width:100%;
			height:100%;
			top:0;
			left:0;
		}
	}
	.animate .w2{
		-webkit-animation-delay:1s;
	}
	.animate .w3{
		-webkit-animation-delay:2s;
	}
	.animate .w4{
		-webkit-animation-delay:3s;
	}
	.wave{
		width: 22.7rem;
		height: 22.7rem;
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
        z-index: 0;
	}
	.wave *{
		border:1px solid #ccc;
		position:absolute;
		border-radius:50%;
		-webkit-animation:opac 4s infinite;
	}

//第二种水波


     .circle {
            position: relative;
            left:0;
            top:0;
            right: 0;
            margin: 0 auto;
            width:90px;
            height:90px
 
        }
        .circle div {
            position:absolute;
            top:50%;
            left:50%;
            background:rgb(196, 127, 127);
            width:90px;
            height:90px;
            margin-left:-45px;
            margin-top:-45px;
            border-radius:90px;
            animation: 1.2s linear infinite;
        }
        .circle div.c1 {
            width:20px;
            height:20px;
            margin-left:-10px;
            margin-top:-10px;
            opacity:1;
            border-radius:90px
        }
        .circle div.c2 {
            animation-name:c2;  
            animation-delay:.6s;
            opacity:0; 
        }
        .circle div.c3 {
            animation-name:c2; 
            animation-delay:1.2s;
            opacity:0;
        }
        @-webkit-keyframes c2 {
            0% {
                transform:scale(.222);
                opacity:1
            }
            50% {
                transform:scale(.622);
                opacity:.4
            }
            98% {
                transform:scale(1);
                opacity:.2
            }
            100% {
                opacity:0
            }
        }


</style>