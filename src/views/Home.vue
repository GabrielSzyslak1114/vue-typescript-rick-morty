<template>
 <section class="body-cards-characters">
     <h1>Rick and Morty - Vue typescript</h1>
    <main v-for="character in characters" :key="character.id"
    class="card-character">
        <div class="container-image">
            <img :src="character.image" alt="" 
            class="image-card">
        </div>

        <div class="description-card">
            <h2>{{character.name}}</h2>
            <h3>{{character.species}}</h3>
        </div>
        <router-link :to="`/character/${character.id}`" class="boton-card">
            ver mas
        </router-link>
    </main>
 </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import CharacterService from '../services/CharacterService'
    const service = new CharacterService();
    const characters = service.getCharacters();

    onMounted(async ()=>{
        await service.fetchAll()
    })

</script>

<style lang="scss" scoped>
.body-cards-characters{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    place-items: center;
    max-width: 100%;
    padding: 30px;
    @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    
    }
    @media (max-width: 700px) {
    grid-template-columns: auto;

    }
}

.card-character{
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 300px;
    border-radius: 15px;
    background-color: #f7f7f7;
    box-shadow: 4px 6px 10px rgba(7, 248, 79, 0.322);
    transition: .3s;

}

.container-image{
    border-radius: 15px  15px  0px 0px;
    overflow: hidden;
    
}

.image-card{
    width: 100%;
    transition: .4s;
    &:hover{
        transform: scale(1.2)
    }
}

.description-card{
    padding: 10px;
    margin-bottom: 15px;
    
}

.boton-card{
    position: absolute;
    background-color: rgb(42, 207, 134);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 40px;
    bottom: 0px;
    right: 0px;
    border-radius: 15px 0px 15px;
    transition: .3s;
    color: white;
        &:hover{
            background-color: rgb(255, 68, 31);
        }
}
</style>