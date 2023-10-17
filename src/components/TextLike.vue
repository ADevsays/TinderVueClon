<script lang="ts">
    export default{
        props:{
            isLike: Boolean
        }
    }
</script>
<template>
    <div 
        class="z-30 absolute top-0 m-3 mx-4 font-mono w-40 translate-y-5 font-bold px-2 border-4 bg-transparent flex justify-center items-center rounded-lg"
        :class="{'text-green-400  border-green-400 rotate-[-7deg] left-0 ': isLike,
                 'text-red-700 border-red-700 rotate-[7deg] right-0': !isLike}"
        >
        <h4 class="text-5xl  tracking-wider">
            <slot/>
        </h4>
    </div>
    <div 
        class="z-30 absolute top-0 left-0 w-full h-full opacity-10"
        :class="{'bg-red-800': !isLike,
                 'bg-green-700': isLike}"              
            ></div>
</template>