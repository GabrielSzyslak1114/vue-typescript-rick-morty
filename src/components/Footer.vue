<template>
  
    <!-- --------------------------- Footer ---------------------------------------- -->

    <footer class="footer">
        <div class="container">
            <div class="about-us" data-aos="fade-right" data-aos-delay="200">
                <h2>About us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia atque nemo ad modi officiis
                    iure, autem nulla tenetur repellendus.</p>
            </div>
            <div class="newsletter" data-aos="fade-right" data-aos-delay="200">
                <h2>Newsletter</h2>
                <p>Stay update with our latest</p>
                <div class="form-element">
                    <input type="text" placeholder="Email"><span><i class="fas fa-chevron-right"></i></span>
                </div>
            </div>
            <div class="instagram" data-aos="fade-left" data-aos-delay="200">
                <h2>Instagram</h2>
                <div class="flex-row">
                    <img src="../assets/instagram/thumb-card3.png" alt="insta1">
                    <img src="../assets/instagram/thumb-card4.png" alt="insta2">
                    <img src="../assets/instagram/thumb-card5.png" alt="insta3">
                </div>
                <div class="flex-row">
                    <img src="../assets/instagram/thumb-card6.png" alt="insta4">
                    <img src="../assets/instagram/thumb-card7.png" alt="insta5">
                    <img src="../assets/instagram/thumb-card8.png" alt="insta6">
                </div>
            </div>

        </div>
        <div class="move-up">
            <span><i class="fas fa-arrow-circle-up fa-2x"></i></span>
        </div>
    </footer>

</template>

<script>

</script>

<style>

/* ----------------- Footer --------------------- */

footer.footer{
    height: 100%;
    background: var(--bg-color);
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



    footer.footer .container{
        grid-template-columns: repeat(1, 1fr);
    }

}
</style>