<template>
    <Navbar/>
  <router-view></router-view>
  <Footer/>
</template>


<script lang="ts" setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

</script>


<style lang="scss">
@import './scss/globals';
:root{

    /*      Theme colors        */
    --text-gray: #3f4954;
    --text-light : #686666da;
    --bg-color: #0f0f0f;
    --white: #ffffff;
    --midnight: #104f55;
    --color-primary: rgb(255, 68, 31);
    --color-secondary: #9051ff;

    /* gradient color   */
    --sky: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);

    /*      theme font-family   */
    --Abel: 'Abel', cursive;
    --Anton: 'Anton', cursive;
    --Josefin : 'Josefin', cursive;
    --Lexend: 'Lexend', cursive;
    --Livvic : 'Livvic', cursive;
}

</style>

