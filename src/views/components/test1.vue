<template>
    <div class="test1">这是组件test1</div>
</template>


<script lang="ts" type="text/x-template">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class test1 extends Vue {

    private name: string = "test1";

    private mounted(): void{
        console.error('打印了-----------test1')
    }
}
</script>

<style lang="scss" scoped>
.test1{
    width: 100%;
    height: 60px;
    font-size: 36px;
    background: #f00;
}



</style>