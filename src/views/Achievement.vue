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
                <h3 class="text-center text-light">{{ $t('Achievement.title') }}</h3>
            </div>
            <div class="subtitle mt-3 mb-5">
                <p class="text-white fs-4 text-center">{{ $t('Achievement.description') }}
                </p>
            </div>

            <div class="col-md-4 mb-3">
                <div class="card d-block mx-auto bg-light bg-opacity-75" style="width: 18rem; ">
                    <a href="" target="_blank">
                        <img src="  " class="card-img-top" alt="certificate">

                    </a>
                    <div class="card-body">
                        <p class="text-muted">2024</p>
                        <p class="card-text">
                            {{ $t('Achievement.certif1') }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mb-3">
                <div class="card d-block mx-auto bg-light bg-opacity-75" style="width: 18rem; ">
                    <a href="https://drive.google.com/file/d/1y_DMl5SIrsJvJgwILw9-g8B8FfEI_Jny/view?usp=sharing"
                        target="_blank">
                        <img src="/src/assets/images/achievements/sertifikat-pkl_pages-to-jpg-0001.jpg"
                            class="card-img-top" alt="...">

                    </a>
                    <div class="card-body">
                        <p class="text-muted">2023</p>
                        <p class="card-text">
                            {{ $t('Achievement.certif2') }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mb-3">
                <div class="card d-block mx-auto bg-light bg-opacity-75" style="width: 18rem; ">
                    <a href="https://drive.google.com/file/d/1xUhRLKyE7f6Xx9Zhol4-gs2P_dbStJYD/view?usp=sharing"
                        target="_blank">
                        <img src="/src/assets/images/achievements/lomba.jpg" class="card-img-top h-50 d-block mx-auto"
                            alt="...">

                    </a>
                    <div class="card-body">
                        <p class="text-muted">2022</p>
                        <p class="card-text">
                            {{ $t('Achievement.certif3') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-5">
            <p class="fs-5 text-center text-light">
                {{ $t('Achievement.link') }}
                <span>
                    <RouterLink to="/experience" class="text-warning text-decoration-underline fw-bold">{{ $t('navbar.experience') }}
                    </RouterLink>
                </span>
            </p>
        </div>


    </div>
</template>
