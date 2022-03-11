<template>
<div class="character-page"  v-if="!isLoading">
    <h1>Description</h1>
    <main class="body-character">
        <div class="body-image">
            <img :src="character.image" alt="">
        </div>
        <div class="body-description">
            <h2>{{character.name}}</h2>
            <h4>Specie: {{character.species}}</h4>
            <h4 v-if="character.type != ''">Type: {{character.type}}</h4>
            <h4>Status: {{character.status}}</h4>
        </div>

    </main>

    <router-link class="back-button" to="/">
        Back
    </router-link>
</div>

    <main class="isLoading" v-else>
        <h1>isLoading</h1>
    </main>
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

<style lang="scss">
.character-page{
    padding: 10px 0;
}

.body-character{
    width: 65%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background: rgb(243, 243, 245);
    border-radius: 30% 0% 0% 30%;
        @media (max-width: 600px){
        width: 80%;
        border-radius: 30% 30% 0% 30%;
    }
}

.body-image{
    border-radius: 30% 0% 0% 30%;
    width: 50%;
    overflow: hidden;
    @media (max-width: 600px){
        border-radius: 30% 30% 0% 30%;
        width: 100%;
    }
}

img{ 
    width: 100%;
}

.body-description{
    display: flex;
    width: 45%;
    margin: 10px 0;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
        @media (max-width: 600px){
        padding: 15px;
        width: 100%;
    }
}

.back-button{
    color: white;
    border-radius: 10px;
    padding: 12px;
    background-color:rgb(255, 68, 31);
    margin: 20px 0;
    transition: .3s;
    &:hover{
        background-color:rgb(42, 207, 134);
    }
}
</style>