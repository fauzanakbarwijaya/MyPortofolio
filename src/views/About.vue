<script>
    import Navbar from '@/components/Navbar.vue';

    export default {
        components: {
            Navbar,
        },
    };
</script>
<template>
    <Navbar></Navbar>

    <div class="container mb-5">
        <div class="row mb-5">
            <div class="col-md-6">
                <img src="/src/assets/images/me.jpeg" alt=""
                    class="img-fluid border border-5 border-warning rounded">
            </div>
            <div class="col-md-6">
                <div class="title mt-3">
                    <h5 class="text-warning fw-semibold">About Me</h5>
                    <h1 class="text-white mt-2">Fauzan Akbar Wijaya</h1>
                </div>
                <div class="subtitle mb-3">
                    <p class="text-white fs-5 mb-5">I am Fauzan <span class="fw-bold">(some people called me
                            Zan).</span> A
                        graduate of a state vocational high school in Indonesia majoring in software engineering. Please
                        explore this website to your heart's content! I created this website to document the
                        projects I created during my life as a website developer</p>
                    <h4 class="text-warning fw-semibold">My Sosial Media </h4>
                    <div class="d-flex justify-content-start">
                        <a href="https://www.instagram.com/fauzanakbarwijaya/" target="_blank"><i
                                class="bi bi-instagram fs-4 text-white"></i></a>
                        <a href="https://www.linkedin.com/in/fauzanakbarwijaya/" target="_blank"><i
                                class="bi bi-linkedin ms-3 fs-4 text-white"></i></a>
                        <a href="https://github.com/fauzanakbarwijaya" target="_blank"><i
                                class="bi bi-github ms-3 fs-4 text-white"></i></a>
                        <a href="https://www.youtube.com/@Fauzanakbarwijaya" target="_blank"><i
                                class="bi bi-youtube ms-3 fs-4 text-white"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <h3 class="text-warning fw-semibold text-center mb-3">My knowledge</h3>
            <p class="text-white fs-5 mb-3">During my almost 3 year journey as a website developer, I have learned many
                things to help me make it easier to complete my projects. The various tools and frameworks that I
                learned include the following :
            </p>
            <div class="card bg-light bg-opacity-75 border-0 card-lg text-center rounded" style="height: 30%;">
                <div class="card-body">
                    <div class="d-flex mx-auto mt-4">
                        <a href="https://www.w3schools.com/html/default.asp" target="_blank" class="mx-auto">
                            <img src="/src/assets/images/icon/html_icon.svg" class="img-fluid" width="70">
                        </a>
                        <a href="https://www.w3schools.com/css/default.asp" target="_blank" class="mx-auto">
                            <img src="/src/assets/images/icon/css_icon.svg" class="img-fluid mx-auto" width="70">
                        </a>
                        <a href="https://www.w3schools.com/php/default.asp" target="_blank" class="mx-auto">
                            <img src="/src/assets/images/icon/php_icon.png" class="img-fluid mx-auto mt-2"
                                width="100">
                        </a>
                        <a href="https://www.w3schools.com/js/default.asp" target="_blank" class="mx-auto">
                            <img src="/src/assets/images/icon/javascript_icon.svg" class="img-fluid mx-auto"
                                width="70">
                        </a>
                        <a href="https://github.com/" target="_blank" class="mx-auto">
                            <img src="/src/assets/images/icon/git_icon.svg" class="img-fluid mx-auto" width="70">
                        </a>
                    </div>
                    <div class="d-flex mx-auto mt-5">
                        <a href="https://getbootstrap.com/" target="_blank" class="mx-auto">
                            <img src="/src/assets/images/icon/bootstrap_icon.svg" class="img-fluid mx-auto"
                                width="70">
                        </a>
                        <a href="https://laravel.com/" target="_blank" class="mx-auto">
                            <img src="/src/assets/images/icon/laravel_icon.svg" class="img-fluid mx-auto"
                                width="70">
                        </a>
                        <a href="https://vuejs.org/" target="_blank" class="mx-auto">
                            <img src="/src/assets/images/icon/vuejs.png" class="img-fluid mx-auto" width="70">
                        </a>
                        <a href="https://tailwindcss.com/" target="_blank" class="mx-auto">
                            <img src="/src/assets/images/icon/tailwindcss.png" class="img-fluid mx-auto" width="70">
                        </a>

                        <a href="https://www.figma.com/ " target="_blank" class="mx-auto">
                            <img src="/src/assets/images/icon/figma.png" class="img-fluid mx-auto" width="70">
                        </a>
                    </div>

                </div>
            </div>
            <div class="mt-3 mb-5">
                <p class="fs-5 text-light">with these tools and frameworks I have received many awards as you can see
                    here: <span>
                        <RouterLink to="/achievement" class="text-warning text-decoration-underline fw-bold">My Achievements</RouterLink>
                    </span>
                </p>
            </div>
        </div>


    </div>
</template>
