<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import LikeUI from './LikeUI.vue';
import SliderImgs from './SliderImgs.vue';
import InfoCard from './InfoCard.vue';
import checkDevice from '../helpers/checkDevice.ts';
import getViewport from '../helpers/getViewport.ts';
import getTransform from '../helpers/getTransform.ts';
import { MIN_TO_LIKE, LIKE_STATE } from '../const/likeConsts.ts';
import {cardClasses, baseTransform, measures, MAX_VIEWPORT, MAX_TO_CHANGE_CARD} from '../const/cardConsts.ts';

const props = defineProps<{
   zIndex: number,
   name: string,
   id:string,
   imgs: string[],
   age:number,
   description:string
}>();

const info:CardInfo = {
   name: props.name,
   age: props.age,
   description: props.description
}

const emit = defineEmits(['changeCard']);

const {cardHeigth, cardWidth} = measures;
const transform = ref('');
const device = ref('');
const userXPosition = ref(0);
const likePerson = ref(LIKE_STATE.NONE);
const viewport = ref(0);
const styleObj = reactive({
   'transform': transform,
   'width': `${cardWidth}px`,
   'height': `${cardHeigth}px`,
   'z-index': `${props.zIndex}0`,
   'transition': 'transform 32ms ease'
});

onMounted(() => {
   device.value = checkDevice();
   viewport.value = getViewport();
   if(device.value != 'mobile'){
      document.addEventListener('mouseup', onUp)
   }
});

const changeCard=(x:number)=>{
   if(x > MAX_TO_CHANGE_CARD 
      || x < (-MAX_TO_CHANGE_CARD)){
      emit('changeCard', props.id);
   }
};


const calcLikeState = (x: number) => {
   if (x > MIN_TO_LIKE) {
      likePerson.value = LIKE_STATE.LIKE;
   } else if (x < -MIN_TO_LIKE) {
      likePerson.value = LIKE_STATE.DONT_LIKE;
   }else{
      likePerson.value = LIKE_STATE.NONE;
   }
   userXPosition.value = x;
}

const onMove = (e: TouchEvent | MouseEvent) => {
   if (device.value == 'mobile') {
      e.preventDefault();
      const { clientX, clientY } = (e as TouchEvent).touches[0];
      const axisX = clientX - (cardWidth / 2);
      calcLikeState(axisX);
      const axisY = clientY - (cardHeigth / 2);
      transform.value = getTransform({ axisX, axisY });
   } else {
      const { clientX, clientY } = e as MouseEvent;
      const isLower = viewport.value < MAX_VIEWPORT;
      const cardWidthUse = isLower ? (cardWidth * 1.5) : (cardWidth * 2);
      const axisX = clientX - (cardWidthUse);
      calcLikeState(axisX);
      const axisY = clientY - (cardHeigth / 2);
      transform.value = getTransform({ axisX, axisY });
   }
}

const onDrag = () => {
   if (device.value == 'mobile') {
      document.addEventListener('touchmove', onMove);
   } else {
      document.addEventListener('mousemove', onMove);
   }
};

const onUp = () => {
   if (device.value == 'mobile') {
      document.removeEventListener('touchmove', onMove);
   } else {
      document.removeEventListener('mousemove', onMove);
   }
   transform.value = baseTransform;
   likePerson.value = LIKE_STATE.NONE;
   styleObj.transition = '';
   setTimeout(() => {
      styleObj.transition = 'transform 32ms ease';
   }, 300);
   changeCard(userXPosition.value);
}

</script>
<template>
   <div @mousedown="onDrag" 
         @mouseup="onUp" 
         @touchstart="onDrag" 
         @touchend="onUp" 
         :class="cardClasses" 
         :style="styleObj">
      <LikeUI :like-person="likePerson"/>      
      <SliderImgs :imgs="props.imgs"/>
      <InfoCard :info="info"/> 
   </div>
</template>

