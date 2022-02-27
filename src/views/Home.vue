<template>
    <main>
        <!------------------------ Banner---------------------->
        <section class="banner-home" id="banner-home">
            <div class="site-background" data-aos="fade-up" data-aos-delay="100">
                <h3>Template de Vuejs</h3>
                <h1>Amazing Place on Earth</h1>
                <button class="btn">Explore</button>
            </div>
        </section>

        <!-- --------------------- Blog Carousel ----------------- -->
        <section>
            <div class="blog">
                <BlogHomeVue/>
            </div>
        </section>

        <!-- ---------------------- Site Content -------------------------->
        <section class="container">
            <div class="site-content">
                <main class="posts">
                   <PostHomeVue/>
                </main>
      <!-- ---------------------- Sidebar -------------------------->

                <aside class="sidebar">
                    <div class="category">
                        <h2>Category</h2>
                        <ul class="category-list">
                            <PostCategoriaFilter/>
                        </ul>
                    </div>

      <!-- ---------------------- Popular posts -------------------------->
                    <div class="popular-post">
                        <h2>Popular Post</h2>
                        <PostPopular/>
                    </div>


    <!-- ---------------------- Popular tags -------------------------->
                    <div class="popular-tags">
                        <h2>Popular Tags</h2>
                        <div class="tags flex-row">
                            <span class="tag" data-aos="flip-up" data-aos-delay="100">Software</span>
                            <span class="tag" data-aos="flip-up" data-aos-delay="200">technology</span>
                            <span class="tag" data-aos="flip-up" data-aos-delay="300">travel</span>
                            <span class="tag" data-aos="flip-up" data-aos-delay="400">illustration</span>
                            <span class="tag" data-aos="flip-up" data-aos-delay="500">design</span>
                            <span class="tag" data-aos="flip-up" data-aos-delay="600">lifestyle</span>
                            <span class="tag" data-aos="flip-up" data-aos-delay="700">love</span>
                            <span class="tag" data-aos="flip-up" data-aos-delay="800">project</span>
                        </div>
                    </div>
                </aside>
            </div>
        </section>

        <!-- -----------x---------- Site Content -------------x------------>

    </main>

</template>

<script lang="ts" setup>
import { ref } from '@vue/reactivity';
import BlogHomeVue from '../components/Blog-home.vue';
import PostHomeVue from '../components/Post-home.vue';
import PostCategoriaFilter from '../components/Post-categoria-filter.vue'
import PostPopular from '../components/Post-popular.vue'
import {useCounterStore} from '../store/counter';

const color = ref('red')
const counterStore = useCounterStore();
const reset = ()=>{
    counterStore.resetCount()
}
</script>

<style lang="scss">
@import '../scss/app';

/* --------------- 
h1{
    color: v-bind(color);
}
 ---------------- */

/* --------------- Site title ---------------- */
main .banner-home{
    background: url('../assets/Background-image.png');
    background-size: cover;
    height: 110vh;
    display: flex;
    justify-content: center;

    .site-background{
        padding-top: 10rem;
        text-align: center;
        color: var(--white);
       h1{ 
        font-size: 2.5rem;
            @media (max-width: 600px) {
                font-size: 2rem;
            }
        }
 
    }

    h1, h3{
        margin: .3rem;
    }



}



/* --------x------ blog carousel --------x------- */



main .blog{
    background: url('../assets/Abract01.png');
    background-repeat: no-repeat;
    background-position: right;
       min-height: 100vh;
    width: 100%;
    background-size: 65%;
    margin-bottom: 50px;
}




/* ---------------- Site Content ----------------*/

 .site-content{
    display: grid;
    grid-template-columns: 70% 30%;
    gap: 15px;
}








/* --------------- Sidebar ----------------------- */

.site-content > .sidebar .category-list{
    font-family: var(--Livvic);   
}

.sidebar{
    @media (max-width: 500px) {
        display: none;
    }
}


.site-content .sidebar .popular-post h2{
    padding-top: 8rem;
}








.site-content .sidebar .newsletter{
    padding-top: 10rem;
}

.site-content .sidebar .newsletter .form-element{
    padding: .5rem 2rem;
}

.site-content .sidebar .newsletter .input-element{
    width: 80%;
    height: 1.9rem;
    padding: .3rem .5rem;
    font-family: var(--Lexend);
    font-size: 1rem;
}

.site-content .sidebar .newsletter .form-btn{
    border-radius: 0;
    padding: .8rem 32%;
    margin: 1rem 0;
    background: var(--sky);
}

.site-content .sidebar .popular-tags{
    padding: 5rem 0;
}

.site-content .sidebar .popular-tags .tags .tag{
    background: var(--sky);
    padding: .4rem 1rem;
    border-radius: 3rem;
    margin: .4rem .6rem;
}




/* -------x------- Sidebar -----------x----------- */

/* ---------x------- Main Content -----x----- */


/* ----------------- Footer --------------------- */

footer.footer{
    height: 100%;
  
    position: relative;
}

footer.footer .container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

footer.footer .container > div{
    flex-grow: 1;
    flex-basis: 0;
    padding: 3rem .9rem;
}

footer.footer .container h2{
    color: var(--white);
}

footer.footer .newsletter .form-element{
    background: black;
    display: inline-block;
}

footer.footer .newsletter .form-element input{
    padding: .5rem .7rem;
    border: none;
    background: transparent;
    color: white;
    font-family: var(--Josefin);
    font-size: 1rem;
    width: 74%;
}

footer.footer .newsletter .form-element span{
    background: var(--sky);
    padding: .5rem .7rem;
    cursor: pointer;
}

footer.footer .instagram div > img{
    display: inline-block;
    width: 25%;
    height: 50%;
    margin: .3rem .4rem;
}

footer.footer .follow div i{
    color: var(--white);
    padding: 0 .4rem;
}

footer.footer .rights{
    justify-content: center;
    font-family: var(--Josefin);
}

footer.footer .rights h4 a{
    color: var(--white);
}

footer.footer .move-up{
    position: absolute;
    right: 6%;
    top: 50%;
}

footer.footer .move-up span{
    color: var(--midnight);
}

footer.footer .move-up span:hover{
    color: var(--white);
    cursor: pointer;
}

/* ---------x------- Footer ----------x---------- */

/*              Viewport less then or equal to 1130px            */

@media only screen and (max-width: 1130px){


    footer.footer .container{
        grid-template-columns: repeat(2, 1fr);
    }

}

/*      x       Viewport less then or equal to 1130px    x     */


/*              Viewport less then or equal to 750px            */

@media only screen and (max-width: 750px){


    main .site-content{
        grid-template-columns: 100%;
    }

    footer.footer .container{
        grid-template-columns: repeat(1, 1fr);
    }

}


/*        x      Viewport less then or equal to 750px       x     */


/*              Viewport less then or equal to 520px            */

@media only screen and (max-width: 520px){


    main .blog{
        height: 125vh;
    }

    .site-content .post-content > .post-image .post-info{
        display: none;
    }

    footer.footer .container > div{
        padding:  1rem .9rem !important;
    }

    footer .rights{
        padding: 0 1.4rem;
        text-align: center;
    }



}




</style>