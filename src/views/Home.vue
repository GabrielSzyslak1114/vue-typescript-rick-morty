<template>
 <h1>home</h1>
 <section class="body-cards-characters">
    <div v-for="character in characters" :key="character.id">
        <img :src="character.image" alt="">
        <h2>{{character.name}}</h2>
        <h3>{{character.species}}</h3>
        <router-link :to="`/character/${character.id}`">
            ver mas
        </router-link>


    </div>
 </section>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import CharacterService from '../services/CharacterService'
    const service = new CharacterService();
    const characters = service.getCharacters();

    onMounted(async ()=>{
        await service.fetchAll()
    })

</script>

<style lang="scss">
.body-cards-characters{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    place-items: center;
}

</style>