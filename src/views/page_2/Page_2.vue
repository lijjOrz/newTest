<template>
    <div class="page-2">
        <div class="nav">
            <router-link to="/page_2/page_2_1">.......2-1</router-link>
            <router-link to="/page_2/page_2_2">>>>>>>2-2</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {},

})
export default class Page_2 extends Vue {

    private name: string = "Page_2";

    private mounted(): void{
    }
}
</script>

<style lang="scss" scoped>
.page-2{
    width: 100%;
    height: 300px;
    border: 2px #000 solid;
}
.nav {
  padding: 30px;
  a {
    display: inline-block;
    margin-right: 20px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>