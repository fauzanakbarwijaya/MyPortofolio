<template>
    <div :class="[
        showMobileMenu ? 'fixed' : 'absolute',
        'left-7 top-5 z-50 md:left-8 md:top-5'
    ]">
        <h1 class="text-2xl text-white"><a href="/">Zan Wijaya</a></h1>
    </div>
    <div :class="showMobileMenu && isMd ? 'md:blur-xs' : ''"
        class="bg-[url('/src/assets/Aurora.jpg')] h-screen bg-cover font-poppins">
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
                    <p class="text-[#41B883] md:text-xl uppercase font-bold">Hello, My Name Is Zan</p>
                    <h1 class="text-5xl md:text-8xl font-dmsans">
                        <span>{{ displayText }}</span>
                        <span v-if="typing" class="animate-pulse">|</span>
                    </h1>
                    <h1 class="text-2xl md:text-4xl font-dmsans"><a href="https://www.instagram.com/dosdev_/"
                            target="_blank" class="underline">DosDev</a> Founder<span
                            class="text-[#41B883] font-bold">.</span></h1>
                    <p class="md:text-xl md:w-9/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                        iure
                        voluptatibus necessitatibus. Sed tempore, velit voluptatem est temporibus dolore placeat
                        tenetur, rerum deserunt doloribus ad.</p>
                    <div class="absolute bottom-8 left-0 w-full flex flex-col items-center animate-bounce">
                        <span class="text-5xl">&#41783;</span>
                        <p class="text-center">Scroll Down</p>
                    </div>
                </div>
            </div>
        </header>
        <section class="h-screen bg-gradient-to-b from-[#011d17] to-[#2b825b]">
          
        </section>

        <!-- End Navigation -->
    </div>
    <!-- Mobile Nav -->
    <transition name="mobile-menu">
        <div v-if="showMobileMenu" id="mobileMenu"
            class="bg-white text-black h-screen w-full md:w-6/12 fixed top-0 left-0 md:left-auto md:right-0 z-50">
            <div class="relative h-16">
                <h1 class="text-2xl text-black absolute left-4 top-5 md:hidden">
                    <a href="/">Zan Wijaya</a>
                </h1>
                <span class="text-5xl hover:cursor-pointer absolute right-9 top-2 flex items-center justify-end"
                    @click="showMobileMenu = false" style="min-width: 48px;">
                    &times;
                </span>
            </div>
            <div class="flex justify-center items-center h-3/4 text-4xl">
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
        onMounted
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
    onMounted(() => {
        checkMd()
        window.addEventListener('resize', checkMd)
        typeWriter(typeTexts[0])
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
