<template>
    <div class="tc2">
        <p>2222222222222222222222222</p>
    </div>
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
.tc2 {
  width: 100%;
  height: 2rem;
  color: #fff;
  background: #f00;
//   display: -webkit-box;
//   -webkit-box-pack: center;
//   -webkit-box-align: center;
//   -webkit-box-orient: vertical;
 
}
</style>


    // "lib-pixi-ani": "^1.0.32",
