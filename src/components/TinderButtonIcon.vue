<script lang="ts">
export default{
    props:{
        img:String
    }
}
</script>
<template>
    <li class="h-22 w-22 bg-white flex items-center rounded-full p-2">
        <button class="w-full h-full hover:opacity-70">
            <img :src="img" alt="Tinder Button Icon" width="35">
        </button>
    </li>
</template>