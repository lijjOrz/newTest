<template>
    <div class="test2">变成了test2</div>
</template>


<script lang="ts" type="text/x-template">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class test2 extends Vue {

    private name: string = "test2";

    private mounted(): void{
         console.error('test2出现了---------------');
    }
}
</script>

<style lang="scss" scoped>
.test2{
    width: 100%;
    height: 60px;
    font-size: 36px;
    background: #000;
}



</style>