<template>
    <section class="body-character" v-if="!isLoading">
        <img :src="character.image" alt="">
        <h3>{{character.name}}</h3>
        <h4>Specie: {{character.species}}</h4>
        <h4>Type: {{character.type}}</h4>
        <h4>Status: {{character.status}}</h4>
    </section>

    <div class="isLoading" v-else>
        <h1>isLoading</h1>
    </div>
</template>

<script lang="ts" setup>
import CharacterService from "../services/CharacterService";
import { onMounted, ref} from "vue";
import { useRoute } from "vue-router";


const service = new CharacterService();
const character = service.getCharacter();
const isLoading = ref<Boolean>(true);
const {id} = useRoute().params;

onMounted(async()=>{
    await service.fetchById(id)
    isLoading.value = false;
})

</script>

<style>

</style>