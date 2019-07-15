<template>
    <div class="count" v-if="isShow">
        <input 
            @input="change"
            v-model="currentMsg">
    </div>
</template>


<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import Bus from '../../serve/utils/Bus';

@Component({
    components: {},
})
export default class Count extends Vue {
    @Prop({default: false, type: Boolean})
    isShow: Boolean = false;

    @Prop()
    msg: any = null;

    private currentMsg: any = null;

    @Watch('msg')
    onchange(newVal: any, oldVal: any){
        this.currentMsg = newVal;
    }


    private change(): void{
        // Bus.$emit('change', this.msg);
        this.$emit('change', this.currentMsg);
    };



    private mounted(): void{
    };
}
</script>

<style lang="scss" scoped>
.count{
    width: 100%;
    height: 200px;
    border: 2px #000 solid;
    line-height: 200px;
    margin-top: 20px;
}
</style>