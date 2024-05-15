<script>
    import Navbar from '@/components/Navbar.vue';

    export default {
        components: {
            Navbar,
        },
        data() {
            return {
                cards: [{
                        id: 1,
                        cardName: "Noonajib",
                        thumbnail: "",
                        carousel: [],
                        link: "https://noonajib.id/",
                        detailProject: "Noonajib is a Korean restaurant in Bali. Tawa Talia asked me to make Noonajib a website where the website can carry out activities such as creating stories, menus, galleries, bookings and so on. This is a team project and I served as the Fullstack website developer on this project.",
                        client : "Tawa talia",
                        clientLink : "https://www.linkedin.com/in/tawa-talia-6558b9223/",
                        Tools: ['Laravel', 'Tailwindcss', 'Git & Github', 'Javascript']
                    },
                    {
                        id: 2,
                        cardName: "Just Do Pilates",
                        thumbnail: "",
                        carousel: [],
                        link: "https://justdopilatesstudio.com/",
                        detailProject: "Just Do Pilates is pilates in Bali. Tawa Talia asked me to create a Just Do Pilates website which functions to organize various activities such as adding classes, changing schedules and so on. This was a team project and I served as a Fullstack website developer on this project",
                        client : "Tawa talia",
                        clientLink : "https://www.linkedin.com/in/tawa-talia-6558b9223/",
                        Tools: ['Laravel', 'Bootstrap', 'Git & Github', 'Javascript']
                    },
                    {
                        id: 3,
                        cardName: "MPS",
                        thumbnail: "",
                        carousel: [],
                        link: "https://mpsonline.oqurystudio.com/login",
                        detailProject: "This is my first international project, actually it's a handover project (oqury studio might be holding a lot of projects so they asked to work with my team to complete this project). yes as you can see, Online School Management Manual Malaysia is a website to manage all schools in Malaysia. this website contains a data set of teachers there and many more. This was a team project and I served as a Frontend website developer on this project",
                        client : "Oqury Studio",
                        clientLink : "https://www.linkedin.com/company/batuloncatan/",
                        Tools: ['Laravel', 'Bootstrap', 'Git & Github', 'Javascript']
                    },
                    {
                        id: 4,
                        cardName: "SiPKL",
                        thumbnail: "",
                        carousel: [],
                        link: "none",
                        detailProject: "This project is a redesign and redevelopment of the old SIPKL website. SIPKL is a web-based application that functions as data management for students who are doing practical work at PUSTIKOM Universitas Negeri Jakarta. SIPKL consists of 2 parts. Namely the internship registration section for students and then the implementation of student activities such as realtime attendance and journal filling. unfortunately, this website is still not hosted because there are some improvements and additional features. This was a team project and I served as a Fullstack website developer on this project",
                        client : "UPT TIK UNJ",
                        clientLink : "https://www.linkedin.com/company/upt-tik-unj/",
                        Tools: ['Laravel', 'Bootstrap', 'Git & Github', 'CSS', 'Javascript']
                    },
                    {
                        id: 5,
                        cardName: "SEMUDAH",
                        thumbnail: "",
                        carousel: [],
                        link: "none",
                        detailProject: "This is a team competition to create a work in the field of technology. my team and I decided to make SEMUDAH. SEMUDAH is a website-based service provider, so service technicians can come directly to your home to repair your device. unfortunately, this website is still not hosted because there are some improvements and additional features. This was a team project and I served as a Frontend website developer on this project. By the way, This project is my first experience using a framework, so you could say that my code is still quite messy and there is a lot of code that is not actually needed but I put it on the web. ",
                        client : "Satuasa Student Award 3",
                        clientLink : "https://www.instagram.com/satuasapeduli/",
                        Tools: ['PHP', 'Bootstrap', 'Javascript']
                    },
                ]
            };
        },
        mounted() {
            this.$nextTick(() => {
                this.setThumbnails();
            });
        },
        methods: {
            setThumbnails() {
                const refs = this.$refs;
                this.cards = this.cards.map(card => {
                    let thumbnail = "";
                    let carousel = [];
                    if (card.cardName === "Noonajib") {
                        thumbnail = refs.NoonajibThumbnail.src;
                        carousel = [refs.NoonajibCarousel1.src, refs.NoonajibCarousel2.src, refs
                            .NoonajibCarousel3.src
                        ];
                    } else if (card.cardName === "Just Do Pilates") {
                        thumbnail = refs.JustDoPilatesThumbnail.src;
                        carousel = [refs.JustDoPilatesCarousel1.src, refs.JustDoPilatesCarousel2.src];
                    } else if (card.cardName === "MPS") {
                        thumbnail = refs.MPSThumbnail.src;
                        carousel = [refs.MPSCarousel1.src, refs.MPSCarousel2.src, refs.MPSCarousel3.src];
                    } else if (card.cardName === "SiPKL") {
                        thumbnail = refs.SiPKLThumbnail.src;
                        carousel = [refs.SiPKLCarousel1.src, refs.SiPKLCarousel2.src, refs.SiPKLCarousel3.src];
                    } else if (card.cardName === "SEMUDAH") {
                        thumbnail = refs.SEMUDAHThumbnail.src;
                        carousel = [refs.SEMUDAHCarousel1.src, refs.SEMUDAHCarousel2.src, refs.SEMUDAHCarousel3
                            .src
                        ];
                    }

                    return {
                        ...card,
                        thumbnail: thumbnail,
                        carousel: carousel,
                    };
                });
            }
        }
    };
</script>

<template>
    <Navbar></Navbar>
    <!-- ASSETS -->
    <!-- Noonajib -->
    <img ref="NoonajibThumbnail" src="/src/assets/images/projects/Noonajib/noonajib.png" alt="Noonajib" class="d-none">
    <img ref="NoonajibCarousel1" src="/src/assets/images/projects/Noonajib/noonajib.png" alt="" class="d-none">
    <img ref="NoonajibCarousel2" src="/src/assets/images/projects/Noonajib/noonajib-2.png" alt="" class="d-none">
    <img ref="NoonajibCarousel3" src="/src/assets/images/projects/Noonajib/noonajib-3.png" alt=""
        class="d-none">
    <!-- Noonajib END -->

    <!-- Just Do Pilates -->
    <img ref="JustDoPilatesThumbnail" src="/src/assets/images/projects/JustDoPilates/justdopilates.png"
        alt="Just Do Pilates" class="d-none">
    <img ref="JustDoPilatesCarousel1" src="/src/assets/images/projects/JustDoPilates/justdopilates.png" alt=""
        class="d-none">
    <img ref="JustDoPilatesCarousel2" src="/src/assets/images/projects/JustDoPilates/justdopilates-2.png" alt=""
        class="d-none">
    <!-- Just Do Pilates END -->

    <!-- MPS -->
    <img ref="MPSThumbnail" src="/src/assets/images/projects/MPS/mps.png" alt="MPS" class="d-none">
    <img ref="MPSCarousel1" src="/src/assets/images/projects/MPS/mps.png" alt="" class="d-none">
    <img ref="MPSCarousel2" src="/src/assets/images/projects/MPS/mps-setting.png" alt="" class="d-none">
    <img ref="MPSCarousel3" src="/src/assets/images/projects/MPS/mps-lagu.png" alt="" class="d-none">
    <!-- MPS END -->

    <!-- SiPKL -->
    <img ref="SiPKLThumbnail" src="/src/assets/images/projects/SiPKL/halaman_beranda.png" alt="SiPKL" class="d-none">
    <img ref="SiPKLCarousel1" src="/src/assets/images/projects/SiPKL/halaman_beranda.png" alt="" class="d-none">
    <img ref="SiPKLCarousel2" src="/src/assets/images/projects/SiPKL/halaman_daftar.png" alt="" class="d-none">
    <img ref="SiPKLCarousel3" src="/src/assets/images/projects/SiPKL/halaman_logiPKL.png" alt="" class="d-none">
    <!-- SiPKL END -->

    <!-- SEMUDAH -->
    <img ref="SEMUDAHThumbnail" src="/src/assets/images/projects/SEMUDAH/beranda_semudah.png" alt="SEMUDAH"
        class="d-none">
    <img ref="SEMUDAHCarousel1" src="/src/assets/images/projects/SEMUDAH/beranda_semudah.png" alt=""
        class="d-none">
    <img ref="SEMUDAHCarousel2" src="/src/assets/images/projects/SEMUDAH/login_semudah.png" alt=""
        class="d-none">
    <img ref="SEMUDAHCarousel3" src="/src/assets/images/projects/SEMUDAH/register_semudah.png" alt=""
        class="d-none">
    <!-- SEMUDAH END -->

    <!-- END ASSETS -->

    <div class="container mb-5">
        <div class="row mb-5">
            <div class="title">
                <h3 class="text-center text-light">Projects</h3>
            </div>
            <div class="subtitle mt-3 mb-5">
                <p class="text-white fs-4 text-center">
                    Below are some of my real projects that are worthwhile
                </p>
            </div>

            <div class="col-md-4 mb-3" v-for="card in cards" :key="card.cardName">
                <div class="card bg-white bg-opacity-50 d-block mx-auto" style="width: 18rem;">
                    <img :src="card.thumbnail" class="card-img-top" :alt="card.cardName">
                    <div class="card-body">
                        <h5 class="card-title">{{ card . cardName }}</h5>
                        <div class="d-flex">
                            <div v-if="card.link === 'none'">
                                <a class="btn btn-warning disabled">Visit Website</a>
                            </div>
                            <div v-else>
                                <a :href="card.link" class="btn btn-warning">Visit Website</a>
                            </div>
                            <RouterLink
                                :to="{
                                    name: 'ProjectDetail',
                                    params: { id: card.id },
                                    query: {
                                        cardName: card.cardName,
                                        carousel: JSON.stringify(card.carousel),
                                        detailProject: card.detailProject,
                                        client: card.client,
                                        clientLink: card.clientLink,
                                        Tools: card.Tools
                                    }
                                }"
                                class="btn btn-success ms-3">Detail</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-5">
            <p class=" fs-4 text-center fw-bold text-white">
                Interested in collaborating with me?
                <a href="mailto:neacakbar@gmail.com?subject=Interested%20to%20make%20a%20collaboration&body=I'm%20interested%20in%20collaborating%20with%20you.%20How%20to?" class="text-decoration-none text-warning" target="_blank">Click Here</a>
            </p>
          </div>
    </div>
</template>
