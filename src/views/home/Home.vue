<template>
    <div class="home">
        <div v-zoom>自定义指令1</div>
        <div v-zoom>自定义指令1</div>
        <div v-zoom>自定义指令1</div>
        <div v-zoom>自定义指令1</div>
        <!-- <div v-drag>自定义指令2</div>
        <div v-drag>自定义指令3</div> -->
        <p @click="isShow($event)" v-float>查看更多排名>></p>
        <transition
            name="zoomRight"
            >
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>

<script lang="ts" src="./Home.ts"></script>


<style lang="scss" scoped>
.home{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>