<template>
    <div class="page-2-1">
        <div class="grid">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
        </div>
        
        <button @click="change(test1)">test1</button>
        <button @click="change(test2)">test2</button>

        <button @click="changeCom()">切换组件</button>
        
        <component :is="this.myComponent"></component>
        
        
    </div>
</template>


<script lang="ts" type="text/x-template">
import { Component, Vue } from 'vue-property-decorator';
import test1 from '../components/test1.vue';
import test2 from '../components/test2.vue';

    /**
     * Vue.$set()在ts中的用法。
     * this.$set(this,"myComponent", this.test1);
     *
      */

     /**
      * 在 HTML 中绑定函数是一定要写  函数名后面的括号    无论是否传递参数
       */



@Component({
    components: {
        test1,
        test2
    },

})
export default class Page_2_1 extends Vue {
    private name: string = "Page_2_1";

    private myComponent: any = test1;

    private changeCom = function () {

        this.myComponent === test2?this.myComponent = test1:this.myComponent = test2;

    }

    /* 将组件当成参数传递时，需要将注册的组件实例化 */
    private test1: any = test1;
    private test2: any = test2;

    private change = function(com){

        this.myComponent = com; 
    }

    

    private mounted(): void{
            // console.log("执行了----------",this.myComponent.name)
    }
}
</script>

<style lang="scss" scoped>
.page-2-1{
    width: 100%;
    height: 400px;
    color: #fff;
    overflow: hidden;
}
.grid{
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, minmax(50px, auto));
}
.grid div{
    background: #ccc;
    padding: 10px;
}


button{
    display: block;
    margin: 0 auto;
    margin-top: 10px;
}



</style>