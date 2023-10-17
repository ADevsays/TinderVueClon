<script lang="ts">
const widthNav = 350;
export default{
    props:{
        numOfChildren:{
            type:Number, 
            required:true
        },
        indexImg: Number
    },
    data(){
        return{
            index: 0,
            widthNav: widthNav,
            widthBar: widthNav / this.numOfChildren 
        }
    },
    watch:{
        indexImg(newIndex){
            this.index = newIndex;
        }
    },
    computed:{
        getTranslate(){
            const transform = this.widthBar * this.index; 
            return `${transform}px`;
        }
    }
}
</script>
<template>
    <div>
        <div class="flex gap-3">
            <div class="absolute z-20 left-0 m-2 top-0 rounded h-1 bg bg-white transition-transform"
                :style="{'width': `${widthBar}px`,
                        'transform': `translateX(${getTranslate})`}"></div>
        </div>
        <div class="absolute opacity-50 left-0 m-2 top-0 rounded h-1 bg bg-black"
            :style="{'width': widthNav + 'px'}">
        </div>
    </div>
</template>
