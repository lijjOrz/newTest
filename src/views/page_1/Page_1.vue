<template>
    <div class="page-1">
        <p @click="isShowFun">《点击我弹出子组件》</p>
        <input v-model="msg" placeholder="请输入">
        <count
            :isShow="isShow"
            :msg="msg"
            @change="change"
        ></count>
        <p style="width: 100%; height: 40px; line-height: 40px;">
            <i class="fa fa-cog fa-spin fa-5x fa-fw"></i>
        </p>
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import count from '../components/count.vue';
import Bus from '../../serve/utils/Bus';


@Component({
    components: {
        count,
    },
})
export default class Page_1 extends Vue {
    private name: string = "Page_1";

    private isShow: Boolean = false;
    private msg: any = null;

    private isShowFun(): void{
        !this.isShow?this.isShow=true:this.isShow=false;
        !this.isShow?this.msg = null:'';
    };

    private change(_msg: any){
        this.msg = _msg;
    };
    // private mounted(): void{
    //     Bus.$on('change',(_msg: any)=>{
    //         this.msg = _msg;
    //     })
    // };
}
</script>

<style lang="scss" scoped>

</style>