<template>
    <div class="tc1">
        <div data-name="这里是重庆">这里是重庆</div>
    </div>
</template>

<script lang="ts">

import {Component, Vue, Prop } from "vue-property-decorator";

@Component


export default class tc1 extends Vue {
    private name: string = "tc1";

    private mounted(){
        console.error('tc1----打印了')
    }
    private beforeMount() {
        console.error('我是tc1，我加载了')
        
    }
}
</script>



<style lang="scss" scoped>
.tc1{
  width: 100%;
  height: 2rem;
  color: #fff;
  background: #000;
}

div {
    font-family: Times New Roman, 'serif';
    position: relative;
    font-size: 30vmin;
    line-height: 40vmin;
    margin: 30vmin auto;
    text-align: center;
    text-shadow: 4px 4px 1px #333;

    &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(-45deg, #fff 0%, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent 100%);
        background-size: 6px 6px;
        z-index: 1;
    }

    &::after {
        position: absolute;
        content: attr(data-name);
        top: -4px;
        left: -2px;
        right: 6px;
        bottom: 6px;
        color: #333;
        z-index: 2;
        text-shadow: 3px 3px #fff;
    }
}


</style>


