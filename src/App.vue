<template>
    <div :class="[
        showMobileMenu ? 'fixed' : 'absolute',
        'left-7 top-5 z-50 md:left-8 md:top-5'
    ]">
        <h1 class="text-2xl text-white font-bold font-dmsans"><a href="/">Zan Wijaya</a></h1>
    </div>
    <div :class="showMobileMenu && isMd ? 'md:blur-xs' : ''"
        class="bg-[url('/src/assets/Aurora.jpg')] h-screen w-screen bg-cover font-dmsans">
        <!-- Navigation -->
        <header class="bg-black/60 h-full">
            <div class=" flex">
                <div class="container mx-auto w-full px-4 md:px-8 flex">
                    <div class="w-6/12 ps-3 mt-5">
                        <!-- <h1 class="text-2xl text-white"><a href="/">Zan Wijaya</a></h1> -->
                    </div>
                    <div class="w-6/12 text-right text-xl mt-5">
                        <div>
                            <ul class="text-white inline-flex items-center gap-6">
                                <li class="hidden md:inline-block relative h-8 w-24">
                                    <a href="#Work" class="group block h-full w-full">
                                        <span
                                            class="absolute left-0 top-0 w-full transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0">
                                            Work
                                        </span>
                                        <span
                                            class="absolute left-0 top-0 w-full text-[#41B883] transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                                            Work
                                        </span>
                                    </a>
                                </li>
                                <li class="hidden md:inline-block relative h-8 w-24">
                                    <a href="#Contact" class="group block h-full w-full">
                                        <span
                                            class="absolute left-0 top-0 w-full transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0">
                                            Contact
                                        </span>
                                        <span
                                            class="absolute left-0 top-0 w-full text-[#41B883] transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                                            Contact
                                        </span>
                                    </a>
                                </li>
                                <li class="inline-block pe-4">
                                    <!-- Custom Hamburger Icon -->
                                    <span class="inline-block align-middle hover:text-yellow-400 hover:cursor-pointer"
                                        @click="showMobileMenu = true">
                                        <span class="block h-1 w-8 bg-white rounded mb-2"></span>
                                        <span class="block h-1 w-5 bg-white rounded"></span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto h-5/6 md:h-3/4 flex justify-center items-center">
                <div class="text-center md:text-left text-white space-x-3 space-y-3 m-9">
                    <p class="text-[#41B883] md:text-xl uppercase font-semibold font-poppins">Hello, My Name Is Zan</p>
                    <h1 class="text-5xl md:text-8xl font-dmsans font-bold">
                        <span>{{ displayText }}</span>
                        <span v-if="typing" class="animate-pulse">|</span>
                    </h1>
                    <h1 class="text-2xl md:text-4xl font-dmsans font-semibold"><a
                            href="https://www.instagram.com/dosdev_/" target="_blank" class="underline">DosDev</a>
                        Founder<span class="text-[#41B883] font-bold">.</span></h1>
                    <p class="md:text-xl md:w-9/12 font-poppins">I build seamless and intuitive digital experiences. As
                        the founder of DosDev, I translate complex problems into elegant, user-centric solutions.</p>
                    <div class="absolute bottom-8 left-0 w-full flex flex-col items-center animate-bounce">
                        <span class="text-5xl">&#41783;</span>
                        <p class="text-center">Scroll Down</p>
                    </div>
                </div>
            </div>
        </header>
        <!-- End Navigation -->

        <section class="h-auto w-screen bg-gradient-to-b from-[#030E12] via-[#277552] to-[#328d64]" id="About">
            <div class="container mx-auto font-poppins text-white pt-16 ps-5 flex flex-col md:flex-row items-center md:items-center min-h-screen"
                data-aos="fade-up" data-aos-duration="1000">
                <!-- Profile Picture -->
                <div class="w-full md:w-6/12 flex justify-center md:justify-center mb-8 md:mb-0">
                    <div class="size-64 md:size-72 shadow-sm shadow-white rounded-sm flex items-center justify-center overflow-hidden transition-transform duration-700 ease-in-out"
                        @mousemove="handleMouseMove" @mouseleave="handleMouseLeave"
                        :style="{ transform: imgTransform }">
                        <img src="/src/assets/ProfilePicture.JPG" alt="" class="object-coverrounded-sm" />
                    </div>
                </div>
                <!-- Stack Skill -->
                <div class="space-y-3 w-full md:w-6/12 space-x-2 text-lg md:ms-6 flex flex-col justify-center mb-5">
                    <h1 class="text-3xl md:text-5xl font-dmsans font-bold">
                        ABOUT ME<span class="text-[#41B883]">.</span>
                    </h1>
                    <p>A results-driven developer with two years of hands-on experience in transforming complex ideas
                        into elegant digital solutions. My journey in technology is fueled by a passion for building
                        impactful products and a commitment to continuous learning.
                    </p>
                    <p>After honing my skills on a diverse range of freelance projects, I founded DosDev, a collective
                        of talented freelancers. As a team, we collaborate to tackle more ambitious projects, combining
                        our expertise to deliver comprehensive digital solutions for clients.<br><br> My technical expertise is centered around the following technologies:
                    </p>
                    <ul class="list-disc ps-5 flex flex-row justify-evenly md:justify-start text-lg">
                        <div>
                            <li>PYTHON</li>
                            <li>PHP</li>
                            <li>JAVA</li>
                            <li>JAVASCRIPT</li>
                            <li>DART</li>
                            <li>SQL</li>
                            <li>GIT</li>
                        </div>
                        <div class="md:ms-16">
                            <li>STREAMLIT</li>
                            <li>LARAVEL</li>
                            <li>TAILWIND</li>
                            <li>BOOTSTRAP</li>
                            <li>VUE</li>
                            <li>MYSQL</li>
                            <li>GITHUB</li>
                            <li>SYSTEM DESIGN</li>
                            <li>CI/CD</li>
                            <li>TRELLO</li>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
        <section class="h-auto w-screen mb-7" id="Work">
            <div class="container mx-auto font-poppins pt-11 px-5 text-black">
                <div class="flex flex-col md:flex-row md:items-start md:gap-8">
                    <div
                        class="w-full md:w-6/12 md:flex md:items-center md:justify-center md:min-h-[54rem] md:order-1 md:sticky md:top-0">
                        <div class="w-11/12 space-y-4">
                            <h1 class="text-3xl md:text-6xl font-dmsans font-bold text-left md:ms-20 w-full md:w-10/12">
                                FEATURED PROJECTS<span class="text-[#41B883]">.</span>
                            </h1>
                            <p class="text-lg md:ms-20 w-96 text-left hidden md:block">A showreel of my personal
                                projects
                                and work that I have done for various clients.</p>
                            <a href=""
                                class="hidden md:inline-block md:ms-20 p-2  bg-black hover:bg-[#41B883] text-white rounded">See
                                More</a>
                        </div>
                    </div>
                    <div class="w-full md:w-6/12 flex flex-col gap-8 md:order-2 md:pe-5">
                        <div class="bg-white rounded-xl shadow-lg p-5 w-full mx-auto max-w-md">
                            <div class=" rounded-lg mb-4 mx-auto overflow-hidden flex items-center justify-center">
                                <img src="/src/assets/ClinicoDekstop.png" alt="Project Image"
                                    class="object-cover w-80" />
                            </div>
                            <h3 class="font-bold text-center text-xl uppercase mb-2">Clinico</h3>
                            <p class="text-center text-gray-700 mb-3">
                                Clinico is a Software as a Service (SaaS) Electronic Health Record (EHR) platform
                                designed for clinics and healthcare facilities in Malaysia. It streamlines patient data
                                management, appointment scheduling, and medical record keeping, helping healthcare
                                providers deliver efficient and secure services.
                            </p>
                            <div class="flex justify-center items-center mb-3">
                                <span
                                    class="px-3 py-1 rounded-full bg-[#41B883] text-white text-sm font-semibold">Status:
                                    Project Manager</span>
                            </div>
                            <div class="flex flex-wrap justify-center gap-2">
                                <span class="px-2 py-1 bg-gray-100 rounded text-xs text-gray-800">Trello</span>
                                <span class="px-2 py-1 bg-gray-100 rounded text-xs text-gray-800">System Design</span>
                                <span class="px-2 py-1 bg-gray-100 rounded text-xs text-gray-800">Figma</span>
                                <span class="px-2 py-1 bg-gray-100 rounded text-xs text-gray-800">Google Meet</span>
                            </div>
                        </div>
                        <div class="bg-white rounded-xl shadow-lg p-5 w-full mx-auto max-w-md">
                            <div class=" rounded-lg mb-4 mx-auto overflow-hidden flex items-center justify-center">
                                <img src="/src/assets/TawataliaDekstop.png" alt="Project Image"
                                    class="object-cover w-80" />
                            </div>
                            <h3 class="font-bold text-center text-xl uppercase mb-2">Tawatalia</h3>
                            <p class="text-center text-gray-700 mb-3">
                                Tawatalia is a website-based company profile that offers professional SEO services to
                                help businesses improve their online visibility and search engine rankings.
                            </p>
                            <div class="flex justify-center items-center mb-3">
                                <span
                                    class="px-3 py-1 rounded-full bg-[#41B883] text-white text-sm font-semibold">Status:
                                    Developer</span>
                            </div>
                            <div class="flex flex-wrap justify-center gap-2">
                                <span class="px-2 py-1 bg-gray-100 rounded text-xs text-gray-800">Laravel</span>
                                <span class="px-2 py-1 bg-gray-100 rounded text-xs text-gray-800">Tailwind</span>
                                <span class="px-2 py-1 bg-gray-100 rounded text-xs text-gray-800">MySQL</span>
                                <span class="px-2 py-1 bg-gray-100 rounded text-xs text-gray-800">Github</span>
                            </div>
                        </div>
                        <div class="bg-white rounded-xl shadow-lg p-5 w-full mx-auto max-w-md">
                            <div class=" rounded-lg mb-4 mx-auto overflow-hidden flex items-center justify-center">
                                <img src="/src/assets/NoonajibDekstop.png" alt="Project Image"
                                    class="object-cover w-80" />
                            </div>
                            <h3 class="font-bold text-center text-xl uppercase mb-2">Noonajib</h3>
                            <p class="text-center text-gray-700 mb-3">
                                Noonajib is a web-based restaurant table booking system that enables customers to easily
                                reserve tables online. The platform streamlines the reservation process for both diners
                                and restaurant staff, ensuring a convenient and efficient dining experience.
                            </p>
                            <div class="flex justify-center items-center mb-3">
                                <span
                                    class="px-3 py-1 rounded-full bg-[#41B883] text-white text-sm font-semibold">Status:
                                    Developer</span>
                            </div>
                            <div class="flex flex-wrap justify-center gap-2">
                                <span class="px-2 py-1 bg-gray-100 rounded text-xs text-gray-800">Laravel</span>
                                <span class="px-2 py-1 bg-gray-100 rounded text-xs text-gray-800">Tailwind</span>
                                <span class="px-2 py-1 bg-gray-100 rounded text-xs text-gray-800">MySQL</span>
                                <span class="px-2 py-1 bg-gray-100 rounded text-xs text-gray-800">Github</span>
                            </div>
                        </div>
                        <div class="bg-white rounded-xl shadow-lg p-5 w-full mx-auto max-w-md">
                            <div class=" rounded-lg mb-4 mx-auto overflow-hidden flex items-center justify-center">
                                <img src="/src/assets/SiPKLDekstop.png" alt="Project Image"
                                    class="object-cover w-80" />
                            </div>
                            <h3 class="font-bold text-center text-xl uppercase mb-2">SiPKL</h3>
                            <p class="text-center text-gray-700 mb-3">
                                SiPKL is a web-based system used for managing internship employees at the Center for
                                Information and Communication Technology, Universitas Negeri Jakarta.
                            </p>
                            <div class="flex justify-center items-center mb-3">
                                <span
                                    class="px-3 py-1 rounded-full bg-[#41B883] text-white text-sm font-semibold">Status:
                                    Developer</span>
                            </div>
                            <div class="flex flex-wrap justify-center gap-2">
                                <span class="px-2 py-1 bg-gray-100 rounded text-xs text-gray-800">Laravel</span>
                                <span class="px-2 py-1 bg-gray-100 rounded text-xs text-gray-800">Bootstrap</span>
                                <span class="px-2 py-1 bg-gray-100 rounded text-xs text-gray-800">MySQL</span>
                                <span class="px-2 py-1 bg-gray-100 rounded text-xs text-gray-800">Github</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="h-screen w-screen md:h-auto bg-[url('/src/assets/PutriMalu.jpg')] bg-cover" id="Contact">
            <div class="h-full bg-black/60">
                <div class="container mx-auto pt-16 ps-4 md:p-7 text-white font-popins md:flex md:justify-center md:items-center md:min-h-[45rem]"
                    data-aos="fade-up" data-aos-duration="2500">
                    <div class="md:w-6/12 md:ps-7 space-y-3">
                        <h1 class="text-4xl md:text-6xl font-dmsans font-bold">Interested?<br>
                            Let's get in touch<span class="text-[#41B883]">.</span></h1>
                        <p class="text-lg md:text-xl">If you're looking for a goal-oriented and creative Full-Stack
                            developer, I might
                            be the one you're looking for. Feel free to send me a message, I will get back to you as
                            soon as
                            possible!</p>
                    </div>
                    <div class="mt-12 md:w-6/12">
                        <span class="text-9xl flex justify-center mb-4 animate-spin">😁</span>
                        <a href="mailto:neacakbar@gmail.com"
                            class="text-lg border border-[#41B883] py-2 px-4 rounded-sm hover:bg-[#41B883] hover:text-white transition flex justify-center mx-auto font-semibold capitalize md:hidden w-64">Send
                            me an email!</a>
                        <div class="mt-12 flex flex-col items-center gap-2">
                            <div class="flex gap-6 text-3xl">
                                <a href="https://github.com/fauzanakbarwijaya" target="_blank" rel="noopener"
                                    class=" hover:text-[#41B883]">
                                    <i class="bi bi-github"></i>
                                </a>
                                <a href="https://linkedin.com/in/fauzanakbarwijaya" target="_blank" rel="noopener"
                                    class="hover:text-[#41B883]">
                                    <i class="bi bi-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    </div>
    <!-- Mobile Nav -->
    <transition name="mobile-menu">
        <div v-if="showMobileMenu" id="mobileMenu"
            class="bg-white text-black h-screen w-full md:w-6/12 fixed top-0 left-0 md:left-auto md:right-0 z-50">
            <div class="relative h-16">
                <h1 class="text-2xl text-black font-bold absolute left-7 top-5 md:hidden">
                    <a href="/">Zan Wijaya</a>
                </h1>
                <span
                    class="text-5xl hover:cursor-pointer absolute right-9 md:right-13 top-2 flex items-center justify-end"
                    @click="showMobileMenu = false" style="min-width: 48px;">
                    &times;
                </span>
            </div>
            <div class="flex justify-center items-center h-2/3 md:h-3/4 text-4xl">
                <ul>
                    <li class="mb-3 list-disc"><a href="#About"
                            class="font-bold text-center uppercase hover:text-[#41B883]"
                            @click="showMobileMenu = false">About</a>
                    </li>
                    <li class="mb-3 list-disc"><a href="#Work"
                            class="font-bold text-center uppercase hover:text-[#41B883]"
                            @click="showMobileMenu = false">Work</a>
                    </li>
                    <li class="mb-3 list-disc"><a href="#Contact"
                            class="font-bold text-center uppercase hover:text-[#41B883]"
                            @click="showMobileMenu = false">Contact</a></li>
                    <li class="mb-3 list-disc"><a href="#Resume"
                            class="font-bold text-center uppercase hover:text-[#41B883]"
                            @click="showMobileMenu = false">Resume</a>
                    </li>
                </ul>
            </div>
            <!-- Medsos Section -->
            <div class="flex flex-col items-center gap-3">
                <div class="flex gap-6 text-3xl">
                    <a href="https://github.com/fauzanakbarwijaya" target="_blank" rel="noopener"
                        class=" hover:text-[#41B883]">
                        <i class="bi bi-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/fauzanakbarwijaya" target="_blank" rel="noopener"
                        class="hover:text-[#41B883]">
                        <i class="bi bi-linkedin"></i>
                    </a>
                </div>
                <a href="mailto:neacakbar@email.com" class="mt-2 text-xl hover:text-[#41B883]">
                    neacakbar@email.com
                </a>
            </div>
            <!-- End Medsos Section -->
        </div>
    </transition>
    <!-- End Mobile Nav -->
</template>

<script setup>
    import {
        ref,
        onMounted,
        watch
    } from 'vue'

    const showMobileMenu = ref(false)
    const isMd = ref(false)
    const typeTexts = [
        'Front-End',
        'Back-End',
        'Project Manager',
        'Website Developer'
    ]
    const displayText = ref('')
    const currentText = ref(0)
    const typing = ref(true)
    const imgTransform = ref('translate(0px, 0px)')

    function checkMd() {
        isMd.value = window.innerWidth >= 768
    }

    function typeWriter(text, i = 0) {
        if (i <= text.length) {
            displayText.value = text.slice(0, i)
            setTimeout(() => typeWriter(text, i + 1), 80)
        } else {
            // Pause before next text
            if (currentText.value < typeTexts.length - 1) {
                setTimeout(() => {
                    typing.value = false
                    setTimeout(() => {
                        typing.value = true
                        currentText.value++
                        typeWriter(typeTexts[currentText.value])
                    }, 600)
                }, 1000)
            }
        }
    }

    function handleMouseMove(e) {
        const box = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - box.left - box.width / 2
        const y = e.clientY - box.top - box.height / 2
        // Batasi gerakan agar tidak terlalu jauh
        const moveX = Math.max(-30, Math.min(30, x / 8))
        const moveY = Math.max(-30, Math.min(30, y / 8))
        imgTransform.value = `translate(${moveX}px, ${moveY}px)`
    }

    function handleMouseLeave() {
        imgTransform.value = 'translate(0px, 0px)'
    }
    onMounted(() => {
        checkMd()
        window.addEventListener('resize', checkMd)
        typeWriter(typeTexts[0])
        if (window.AOS) {
            window.AOS.init()
        }
        watch(showMobileMenu, (val) => {
            if (window.innerWidth < 768) {
                document.body.classList.toggle('overflow-hidden', val)
                document.body.classList.toggle('h-screen', val)
            } else {
                document.body.classList.remove('overflow-hidden')
                document.body.classList.remove('h-screen')
            }
        })
    })
</script>

<style>
    .mobile-menu-enter-active,
    .mobile-menu-leave-active {
        transition: opacity 0.3s, transform 0.3s;
    }

    .mobile-menu-enter-from,
    .mobile-menu-leave-to {
        opacity: 0;
        transform: translateX(100%);
    }

    .mobile-menu-enter-to,
    .mobile-menu-leave-from {
        opacity: 1;
        transform: translateX(0);
    }
</style>
