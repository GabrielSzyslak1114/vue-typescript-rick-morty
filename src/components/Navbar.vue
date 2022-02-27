<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

const menu = ref(false)
const activeMenu = ()=> menu.value = !menu.value;
const classMenu = computed(()=> menu.value ? ' toggle toggleActive' : 'toggle')
const classNavbar = computed(()=> menu.value ? 'navbar navbarAcitve' : 'navbar')
</script>

<template>
    <header id="header">
        <a href="" class="logo">Logo</a>
        <button @click="activeMenu" :class="classMenu"></button >
        <nav :class="classNavbar">
            <ul>
                <li><router-link to="">Home</router-link></li>
                <li><router-link to="">Menu2</router-link></li>
                <li><router-link to="">Menu3</router-link></li>
                <li><router-link to="">Menu4</router-link></li>
            </ul>
        </nav>
    </header>
</template>


<style lang="scss" scoped>
header{
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: var( --white);
    box-shadow: 0 5px 25px rgba(0,0,0,.5);
    z-index: 100;
}

.logo{
    height: 60px;
    line-height: 60px;
    color: var(--midnight);
    font-weight:  700;
    font-size: 2em;
    text-decoration: none;
    cursor: pointer;
    padding-left: 20px;
    text-decoration: none;
}

.toggle{
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    background: var(--sky);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    &:before {
        content: '';
        position: absolute;
        width: 25px;
        height: 2px;
        background: var( --white);
        transform: translateY(-5px);
        transition: .2s;
    }
        &:after {
        content: '';
        position: absolute;
        width: 25px;
        height: 2px;
        background: var( --white);
        transform: translateY(5px);
        transition: .2s;
    }
}

.toggleActive{
      background: var(--color-primary);
      &::before{
          transform: translateY(0) rotate(45deg);
      }
      &::after{
          transform: translateY(0) rotate(-45deg);
      }
}

.navbar{
    position: relative;
    display: flex;
    align-items: center;
    height: 60px;
    right: 60px;
    background: #fff;
    transition: .3s;
    width: 0px;
    overflow: hidden;
    @media (max-width: 990px) {
        position: fixed;
        bottom: -100%;
        right: 0;
        width: 100%;
        transition: 0.5s;
        display: flex;
        justify-content: center;
        align-items: center;
            

    }
    ul{
        position: relative;
        display: flex;
        flex-direction: row;
            @media (max-width: 990px) {
            
                flex-direction: column;
                justify-content:center;
                align-items:center;
        
            }

        li{
            list-style: none;

            a{ 
                color: #12334e;
                height:60px;
                line-height: 60px;
                display: inline-block;
                text-decoration: none;
                font-size: 1.2em;
                padding: 0 15px;
                letter-spacing: 2px;

                &:hover{
                    color: #fff;
                    background: #9051f1;
                }
            }
        }
    }
}

.navbarAcitve{
    width: 500px;
        @media (max-width: 990px) {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100%;
        transition: 0.5s;
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 60px); // menos el height del logo
    }

}
</style>