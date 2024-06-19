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
            <div class="title">
                <h3 class="text-center text-light">{{ $t('experience.title') }}</h3>
            </div>
            <div class="subtitle mt-3 mb-5">
                <p class="text-white fs-4 text-center">{{ $t('experience.description') }}</p>
            </div>

            <div class="col-md-12 mb-3">
                <div class="card d-block mx-auto bg-light bg-opacity-75 w-100" style="width: 18rem; ">
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/src/assets/images/experiences/usk1.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="/src/assets/images/experiences/usk2.png" class="d-block w-100" alt="...">
                            </div>

                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>


                    <div class="card-body">
                        <p class="text-muted">2024</p>
                        <p class="card-text">
                            {{ $t('experience.exOne') }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-12 mb-3">
                <div class="card d-block mx-auto bg-light bg-opacity-75 w-100" style="width: 18rem; ">
                    <div id="carouselExample2" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/src/assets/images/experiences/mps1.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="/src/assets/images/experiences/mps2.png" class="d-block w-100" alt="...">
                            </div>

                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample2"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample2"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>


                    <div class="card-body">
                        <p class="text-muted">Jun - Agu 2023</p>
                        <p class="card-text">
                            {{ $t('experience.exTwo') }} <span><a href="https://www.linkedin.com/company/batuloncatan/">Oqury Studio</a></span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-12 mb-3">
                <div class="card d-block mx-auto bg-light bg-opacity-75 w-100" style="width: 18rem; ">
                    <div id="carouselExample3" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/src/assets/images/experiences/lks1.png" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample3"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample3"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>


                    <div class="card-body">
                        <p class="text-muted">2023</p>
                        <p class="card-text">
                            {{ $t('experience.exThree') }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-12 mb-3">
                <div class="card d-block mx-auto bg-light bg-opacity-75 w-100" style="width: 18rem; ">
                    <div id="carouselExample4" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/src/assets/images/experiences/pkl1.jpg" class="d-block w-100" alt="..." >
                            </div>
                            <div class="carousel-item">
                                <img src="/src/assets/images/experiences/pkl2.jpg" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample4"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample4"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>


                    <div class="card-body">
                        <p class="text-muted">2023</p>
                        <p class="card-text">
                            {{ $t('experience.exFour') }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-12 mb-3">
                <div class="card d-block mx-auto bg-light bg-opacity-75 w-100" style="width: 18rem; ">
                    <div id="carouselExample5" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/src/assets/images/experiences/satuasa1.png" class="d-block w-100" alt="..." >
                            </div>
                            <div class="carousel-item">
                                <img src="/src/assets/images/experiences/satuasa2.png" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample5"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample5"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>


                    <div class="card-body">
                        <p class="text-muted">2022</p>
                        <p class="card-text">
                            {{ $t('experience.exFive') }}

                        </p>
                    </div>
                </div>
            </div>

        </div>
        <div class="row mb-5">
            <p class="fs-5 text-center text-light">
                {{ $t('experience.link') }}
                <span>
                    <RouterLink to="/project" class="text-warning text-decoration-underline fw-bold">{{ $t('navbar.projects') }}
                    </RouterLink>
                </span>
            </p>
        </div>


    </div>
</template>
