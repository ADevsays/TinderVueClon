<script lang="ts">
export default{
    props:{
        info: {
            type: (Object as any | CardInfo)
        }
    },
    data(){
        return{
            cardInfo: this.info.description
        }
    },
    methods:{
        getDescription(){
            const maxCharacteres = 65;
            if(this.cardInfo.length > maxCharacteres){
              return [...this.cardInfo].splice(0, maxCharacteres).join('') + '...'
            }
            return this.cardInfo;
        }
    }
}
</script>
<template>
    <div class="absolute top-[500px] left-5 w-[90%]">
        <div class="flex w-full justify-between">
            <h3 class="text-shadow font-bold text-white text-3xl">{{info.name}}, <span>{{info.age}}</span></h3>
            <button class="text-3xl text-white">-></button>
        </div>
        <p class="text-white font-normal z-10 text-shadow">{{getDescription()}}</p>
    </div>
</template>

<style scoped>
    .text-shadow{
        text-shadow: 1px 0px 10px black;
    }
</style>