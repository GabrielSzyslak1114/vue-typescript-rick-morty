<script lang='ts' setup>
import { computed, ref } from "@vue/runtime-core";
const estadoMenu = ref(false)

const toggleActive = ()=>{
    estadoMenu.value = !estadoMenu.value
    console.log(estadoMenu.value)
}

    const toggle = computed(()=> estadoMenu.value ? 'nav collapse' : 'nav')
    const menu = computed(()=> estadoMenu.value ? 'menutoggle menuactive' : 'menutoggle')

</script>

<template>
    <!-- ----------------------------  Navigation ---------------------------------------------- -->

    <nav :class="toggle">
        <div class="nav-menu flex-row">
            <div class="nav-brand">
                <a href="#" class="text-gray">Blooger</a>
            </div>
            <div class="toggle-collapse">
                <div class="toggle-icons">
                    <button :class="menu" @click="toggleActive"></button>
                </div>
            </div>
            <div>
                <ul class="nav-items">
                    <li class="nav-link">
                        <a href="#">Home</a>
                    </li>
                    <li class="nav-link">
                        <a href="#">Category</a>
                    </li>
                    <li class="nav-link">
                        <a href="#">Archive</a>
                    </li>
                    <li class="nav-link">
                        <a href="#">Pages</a>
                    </li>
                    <li class="nav-link">
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div class="social text-gray">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
        </div>
    </nav>


</template>



<style lang="scss" scoped>

/* --------------- navbar ----------------- */

.nav{
    background: white;
    padding: 0 2rem;
    height: 0rem;
    min-height: 10vh;
    overflow: hidden;
    transition: height 1s ease-in-out;
}

.nav .nav-menu{    
    justify-content: space-between;
}

.nav .toggle-collapse{
    position: absolute;
    top: 0%;
    width: 90%;
    cursor: pointer;
    display: none;
}

.nav .toggle-collapse .toggle-icons{
    display: flex;
    justify-content: flex-end;
    padding: 1.7rem 0;
}

.nav .toggle-collapse .toggle-icons i{
    font-size: 1.4rem;
    color: var(--text-gray);
}



.menutoggle{
    display: none;
        @media(max-width:1160px){
            position: relative;
            display: flex !important;
            justify-content: center;
            align-items: center;
            top: 0px;
            right: 0px;
            width: 50px;
            height: 50px;
            background:  rgb(42, 207, 134);
            border-radius: 10px;
            cursor: pointer;
            transition: 0.2s;
            z-index: 1000;
            &::before{
                content: '';
            position: absolute;
            width: 28px;
            height: 2px;
            background:#fff;
            transition: .2s;
            transform: translateY(-10px);
            box-shadow: 0 10px 0 #fff; /*linea en medio*/
                }

            }
              &::after{
                content: '';
                position: absolute;
                width: 28px;
                height: 2px;
                background:#fff;
                transition: .2s;
                transform: translateY(10px);
            }


}


.menuactive{
  background: rgb(255, 68, 31);
    &::before{
      transform: translateY(0px) rotate(45deg);
      box-shadow: 0 0 0 #fff;
    }
    &::after{
      transform: translateY(0px) rotate(-45deg);
    }
}



.collapse{
    height: 30rem;
}

.nav .nav-items{
    display: flex;
    margin: 0;
    max-width: 100%;
    padding: 15px 0;
}

.nav .nav-items .nav-link{
    padding: 1.2rem 1rem;
    font-size: 1.1rem;
    position: relative;
    font-family: var(--Abel);
    font-size: 1.1rem;
}

.nav .nav-items .nav-link:hover{
    background-color: var(--midnight);
}

.nav .nav-items .nav-link:hover a{
    color: var(--white);
}

.nav .nav-brand a{
    font-size: 1.6rem;
    padding: 1rem 0;
    display: block;
    font-family: var(--Lexend);
    font-size: 1.6rem;
}

.nav .social{
    padding: 1.4rem 0
}

.nav .social i{
    padding: 0 .2rem;
}

.nav .social i:hover{
    color: #a1c4cf;
}

/* -------x------- navbar ---------x------- */

@media only screen and (max-width: 750px){
    .nav .nav-menu, .nav .nav-items{
        flex-direction: column;
    }

    .nav .toggle-collapse{
        display: initial;
    }
}


@media only screen and (max-width: 520px){

        nav .toggle-collapse{
        width: 80% !important;
    }

}
</style>