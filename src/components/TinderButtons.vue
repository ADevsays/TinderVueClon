<script lang="ts" setup>
import NoneIcon from '../imgs/NoneIcon.png';
import SuperIcon from '../imgs/SuperIcon.png';
import HeartIcon from '../imgs/HeartIcon.png';
import TinderButtonIcon from './TinderButtonIcon.vue';
import { inject, onMounted, watch, ref} from 'vue';

interface T{
    value:string
}

const icons = [NoneIcon, SuperIcon, HeartIcon];
const idToUse = ref('');
onMounted(()=>{
    ((inject('idToUse') as T)?.value);
    // console.log(inject('idToUse'))
})
watch(idToUse, async()=>{

});
</script>

<template>
    <ul class="flex absolute gap-12 bottom-4 w-full justify-center items-center">
        <TinderButtonIcon v-for="icon in icons" :img="icon" />
    </ul>
</template>