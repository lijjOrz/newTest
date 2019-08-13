<template>
  <div class="tctc123">
    <!-- <div class=""> -->
        <component :is="comhjk"></component>
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import test2 from './tc2.vue';
import test1 from './tc1.vue';

@Component({
  components: {
    // A: test1,
    // B: test2
    test2,
    test1,
  }
})
export default class iscomponent extends Vue {
  //===============data=================
    // private name: string = ''

  private comhjk: any = test1;




//   private test() {
//     // this.com='B';
//   }

//   private created(){
//     //   this.com='A';
//   }
    

    private mounted() {
        console.log('--------',this.comhjk.name);
    }
}
</script>
<style lang="scss" scoped>
.tctc123{
    width: 100%;
    height: 400px;
    color: #fff;
    overflow: hidden;
}
</style>


