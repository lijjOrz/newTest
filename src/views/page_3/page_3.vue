<template>
  <div class="tctc123">
    <component :is="comhjk"></component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import test2 from "./tc2.vue";
import test1 from "./tc1.vue";

@Component({
  components: {
    test2,
    test1
  }
})
export default class page_3 extends Vue {
    private name: string = "page_3";

    private comhjk: any = test2;


    private mounted() {
        console.log("--------", this.comhjk.name);
    }
}
</script>
<style lang="scss" scoped>
.tctc123 {
  width: 100%;
  height: 400px;
  color: #fff;
  overflow: hidden;
}
</style>


