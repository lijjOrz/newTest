<template>
    <div class="tc1">
        <p>1111111111111111111111111111111111</p>
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
//   display: -webkit-box;
//   -webkit-box-pack: center;
//   -webkit-box-align: center;
//   -webkit-box-orient: vertical;
 
}
</style>


