<script lang="ts">
import NavigationSlide from './NavigationSlide.vue';

export default {
    props: {
        imgs: { type: Array, required: true }
    },
    data() {
        return {
            imgsIndex: 0,
        };
    },
    methods: {
        nextImg() {
            if (this.imgsIndex < this.imgs.length - 1) {
                this.imgsIndex++;
            }
            return;
        },
        prevImg() {
            if (this.imgsIndex > 0) {
                this.imgsIndex--;
            }
            return;
        }
    },
    computed: {
        getImg() {
            return this.imgs[this.imgsIndex];
        }
    },
    components: { NavigationSlide }
}
</script>
<template>
    <section class="w-full h-full flex dontSelect justify-center items-center">
        <div  lazy="load" class="w-full h-full bg-cover bg-center absolute dontSelect"
            :style="{backgroundImage:`url(${getImg})`}"></div>
        <div @click="nextImg()" class="absolute w-1/2 right-0 h-full"></div>
        <div @click="prevImg()" class="absolute w-1/2 left-0 h-full"></div>
        <NavigationSlide :num-of-children="imgs.length" :index-img="imgsIndex"/>
    </section>
</template>

<style scoped>
.dontSelect{
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

}
</style>