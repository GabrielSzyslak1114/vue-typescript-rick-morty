<template>

                    <div class="blog-post">
                        <div class="blog-content" data-aos="fade-right" data-aos-delay="200">
                            <img src="../assets/Blog-post/post-1.jpg" alt="post-1">
                            <div class="blog-title">
                                <h3>London Fashion week's continued the evolution</h3>
                                <button class="btn btn-blog">Fashion</button>
                                <span>2 minutes</span>
                            </div>
                        </div>
                        <div class="blog-content" data-aos="fade-in" data-aos-delay="200">
                            <img src="../assets/Blog-post/post-3.jpg" alt="post-1">
                            <div class="blog-title">
                                <h3>London Fashion week's continued the evolution</h3>
                                <button class="btn btn-blog">Fashion</button>
                                <span>2 minutes</span>
                            </div>
                        </div>
                        <div class="blog-content" data-aos="fade-left" data-aos-delay="200">
                            <img src="../assets/Blog-post/post-2.jpg" alt="post-1">
                            <div class="blog-title">
                                <h3>London Fashion week's continued the evolution</h3>
                                <button class="btn btn-blog">Fashion</button>
                                <span>2 minutes</span>
                            </div>
                        </div>

                    </div>

</template>



<style lang="scss" scoped>

/* --------------- Blog Carousel ------------ */



.blog-post{
    padding-top: 6rem;
    position: relative;
    display: flex;
    justify-content: center;
    @media (max-width: 1200px) {

        min-height: 100vh;
        flex-wrap: wrap;
        align-items: center;
    }
}

.blog-post .blog-content{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 350px;
    margin: 3rem 2rem;
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);
}

.blog-content .blog-title{
    padding: 2rem 0;
}

.blog-content .btn-blog{
    padding: .7rem 2rem;
    background: var(--sky);
    margin: .5rem;
}

.blog-content span{
    display: block;
}


/* -------x------- Blog Carousel -----x------ */




</style>