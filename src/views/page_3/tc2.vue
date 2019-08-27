<template>
    <div class="tc2"></div>
</template>
<script lang="ts">
import {Component, Vue, Prop } from "vue-property-decorator";


@Component


export default class tc2 extends Vue {
    private name: string = "tc2";

    private mounted(): void{
        console.error('我是tc2，我加载了')
    }
     
    private beforeMount() {
        console.error('我是tc2，我加载了')   
    }
}
</script>
<style lang="scss" scoped>

@function listShadowOne() {
    $n: 10;
    $m: 5;
    $list: ();
    @for $j from 0 to $m {
        @for $i from 0 to $n {
            $list: $list, $i*10vmin $j*2*10vmin #fff;
        }
    }

    @return $list;
}

@function listShadowThree() {
    $n: 10;
    $m: 5;
    $list: ();
    @for $j from 0 to $m {
        @for $i from 0 to $n {
            $list: $list, $i*10vmin ($j*2-1)*10vmin #fff;
        }
    }

    @return $list;
}

@function listShadowTwo() {
    $n: 10;
    $m: 5;
    $list: ();

    @for $j from 0 to $m {
        @for $i from 0 to $n {
            $list: $list, $i*10vmin $j*2*10vmin-10vmin #00f1fc;
        }
    }

    @return $list;
}

@function listShadowFour() {
    $n: 10;
    $m: 5;
    $list: ();

    @for $j from 0 to $m {
        @for $i from 0 to $n {
            $list: $list, $i*10vmin ($j*2-1)*10vmin+10vmin #fd0130;
        }
    }

    @return $list;
}


body {
    background: #000;
    overflow: hidden;
}

div {
    position: relative;
    width: 100vmin;
    height: 100vmin;
    margin: 0 auto;
    background: #000;
    animation: scale 5s infinite alternate;
    transform-origin: center center;
}

div::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5vmin;
    height: 5vmin;
    // background: #fff;
    box-shadow: listShadowOne();
    animation: radiusChange 5s infinite alternate;
}

div::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5vmin;
    height: 5vmin;
    // background: #fff;
    box-shadow: listShadowThree();
    animation: radiusChangeAfter 5s infinite alternate;
}

@keyframes radiusChange {
    25% {
        box-shadow: listShadowOne();
        border-radius: 50%;
    }
    50% {
        box-shadow: listShadowTwo();
        border-radius: 0%;
    }
    100% {
        box-shadow: listShadowOne();
        border-radius: 50%;
    }
}

@keyframes radiusChangeAfter {
    25% {
        box-shadow: listShadowThree();
        border-radius: 50%;
    }
    50% {
        box-shadow: listShadowFour();
        border-radius: 0%;
    }
    100% {
        box-shadow: listShadowThree();
        border-radius: 50%;
    }
}

@keyframes scale {
    25% {
        transform: scale(2);
    }
    50% {
        transform: scale(2);
    }
}
</style>

