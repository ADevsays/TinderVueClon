<script setup lang="ts">
import {ref, watch, provide, onBeforeMount} from 'vue';
import Card from './Card.vue';
import Profiles from '../server/Profiles.ts';
import TinderButtons from './TinderButtons.vue';

const profilesToUse = [...Profiles];
profilesToUse.shift();
const profiles = ref<Profile[]>(profilesToUse);
const idProfileToUse = ref(profiles.value[0].id);

onBeforeMount(()=>{
    provide('idToUse', idProfileToUse)
});

watch(profiles, async(newProfiles)=>{
    const firstId = newProfiles[0].id;
    idProfileToUse.value = firstId;
    provide('idToUse', idProfileToUse)
});

const changeCardState=()=>{
    const newMockProfile = [...profiles.value] as Profile[];
    const prevElement = newMockProfile.shift();
    newMockProfile.push(prevElement as Profile);
    profiles.value = newMockProfile;
}

const zIndex =(id:string)=> {
    const profile = profiles.value.find(profile=> profile.id == id) as Profile;
    const profileIndex = profiles.value.indexOf(profile);
    return profiles.value.length - profileIndex + 1;
}; 

</script>

<template>
    <div class="relative h-[720px] lg:w-[500px] top-0 left-0 w-full flex justify-center items-center overflow-hidden">
        <Card v-for="(profile) in profiles"
             :key="Math.random()"
             :z-index="zIndex(profile.id)"
             :name="profile.name"
             :id="profile.id"
             :imgs="profile.imgs"
             :age="profile.age"
             :description="profile.description"
             @change-card="changeCardState"/>
        <TinderButtons />
    </div>
</template>