<script lang="ts">
import { LIKE_STATE } from '../const/likeConsts.ts';
import TextLike from './TextLike.vue';
export default {
        components:{
            TextLike
        },
        props:{
            likePerson:String
        },
        data(){
            return{
                LIKE_STATE
            }
        },
    }
</script>
<template>
    <div v-if="likePerson != LIKE_STATE.NONE">
         <div v-show="likePerson == LIKE_STATE.LIKE">
            <TextLike :isLike="true">
                LIKE
            </TextLike>
        </div>
         <div v-show="likePerson == LIKE_STATE.DONT_LIKE">
            <TextLike>
                NOPE
            </TextLike>
         </div>
      </div>
</template>
