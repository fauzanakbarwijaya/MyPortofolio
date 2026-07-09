<template>
    <div :class="[
        showMobileMenu ? 'fixed' : 'absolute',
        'left-7 top-5 z-50 md:left-8 md:top-5'
    ]">
        <h1 class="text-2xl text-white font-bold font-dmsans"><a href="/">Zan Wijaya</a></h1>
    </div>
    <div :class="showMobileMenu && isMd ? 'md:blur-xs' : ''"
        class="min-h-screen w-screen bg-[#0a1a1f] font-dmsans">
        <!-- Navigation -->
        <nav class="bg-black/60 sticky top-0 z-40">
            <div class="flex">
                <div class="container mx-auto w-full px-4 md:px-8 flex">
                    <div class="w-6/12 ps-3 mt-5">
                    </div>
                    <div class="w-6/12 text-right text-xl mt-5">
                        <div>
                            <ul class="text-white inline-flex items-center gap-6">
                                <li class="hidden md:inline-block relative h-8 w-24">
                                    <a href="/" class="group block h-full w-full">
                                        <span
                                            class="absolute left-0 top-0 w-full transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0">
                                            Home
                                        </span>
                                        <span
                                            class="absolute left-0 top-0 w-full text-[#41B883] transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                                            Home
                                        </span>
                                    </a>
                                </li>
                                <li class="hidden md:inline-block relative h-8 w-24">
                                    <a href="/" class="group block h-full w-full">
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
        </nav>
        <!-- End Navigation -->

        <!-- Project Overview + Details Section -->
        <section id="ProjectOverview" class="w-full text-white font-poppins">
            <div class="container mx-auto px-5 md:px-8 py-16 md:py-24">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
                    <!-- Left: Title, Description & Specs Table (sticky) -->
                    <div
                        class="md:col-span-4 md:border-r md:border-gray-700 md:pr-10 md:self-start md:sticky md:top-24">
                        <h1 class="text-4xl md:text-5xl font-dmsans font-bold mb-4">{{ project.title }}</h1>
                        <p class="text-gray-400 leading-relaxed mb-8">{{ project.description }}</p>
                        <dl class="divide-y divide-gray-700 text-sm">
                            <div v-for="spec in project.specs" :key="spec.label" class="flex justify-between py-3">
                                <dt class="text-gray-500">{{ spec.label }}</dt>
                                <dd class="font-medium text-right">{{ spec.value }}</dd>
                            </div>
                        </dl>
                    </div>
                    <!-- Right: Project Image + Details (scrolls normally) -->
                    <div class="md:col-span-8 space-y-10 md:space-y-16">
                        <div class="rounded-xl overflow-hidden shadow-lg bg-gray-900 aspect-video">
                            <img :src="project.image" :alt="project.title"
                                class="w-full h-full object-cover" />
                        </div>
                        <div v-for="section in project.content" :key="section.title">
                            <h2 class="text-2xl md:text-3xl font-dmsans font-bold mb-3">{{ section.title }}</h2>
                            <p v-if="section.text" class="text-gray-300 leading-relaxed">{{ section.text }}</p>
                            <ul v-else class="space-y-3">
                                <li v-for="item in section.list" :key="item.label" class="text-gray-300 leading-relaxed">
                                    <span class="font-semibold text-white">{{ item.label }}:</span> {{ item.value }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Other Projects -->
            <div class="border-t border-gray-700">
                <div class="container mx-auto px-5 md:px-8 py-16">
                    <h2 class="text-3xl md:text-4xl font-dmsans font-bold mb-10">Other Projects</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <router-link v-for="other in otherProjects" :key="other.title" :to="other.link" class="group block">
                            <div class="rounded-xl overflow-hidden bg-gray-900 aspect-video mb-4">
                                <img :src="other.image" :alt="other.title"
                                    class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                            </div>
                            <div class="flex items-center justify-between">
                                <div>
                                    <h3 class="text-xl font-dmsans font-bold">{{ other.title }}</h3>
                                    <p class="text-gray-500">{{ other.description }}</p>
                                </div>
                                <span
                                    class="text-2xl shrink-0 ms-4 transition-transform group-hover:translate-x-1">&rarr;</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Project Overview + Details Section -->

        <footer class="h-screen w-screen md:h-auto bg-[url('/src/assets/PutriMalu.jpg')] bg-cover" id="Contact">
            <div class="h-full bg-black/60">
                <div class="container mx-auto pt-16 px-4 md:p-7 text-white font-popins md:flex md:justify-center md:items-center md:min-h-[45rem]"
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
                    <li class="mb-3 list-disc"><a href="/"
                            class="font-bold text-center uppercase hover:text-[#41B883]"
                            @click="showMobileMenu = false">Home</a>
                    </li>
                    <li class="mb-3 list-disc"><a href="/"
                            class="font-bold text-center uppercase hover:text-[#41B883]"
                            @click="showMobileMenu = false">Work</a>
                    </li>
                    <li class="mb-3 list-disc">
                        <a href="/FauzanAkbarWijaya-Resume.pdf" target="_blank" rel="noopener"
                            class="font-bold text-center uppercase hover:text-[#41B883]"
                            @click="showMobileMenu = false">Resume
                        </a>
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
        computed,
        onMounted,
        watch
    } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const showMobileMenu = ref(false)
    const isMd = ref(false)

    const projectsData = {
        clinico: {
            title: 'Clinico',
            description: 'Clinico is a Software as a Service (SaaS) Electronic Health Record (EHR) platform designed for clinics and healthcare facilities in Malaysia. It streamlines patient data management, appointment scheduling, and medical record keeping, helping healthcare providers deliver efficient and secure services.',
            image: '/src/assets/ClinicoDekstop.png',
            specs: [
                { label: 'Role', value: 'Project Manager' },
                { label: 'Platform', value: 'Web Application' },
                { label: 'Industry', value: 'Healthcare' },
                { label: 'Type', value: 'SaaS' },
            ],
            content: [
                {
                    title: 'Introduction',
                    text: 'Clinico was built to address the growing need for digital healthcare management in Malaysia. As a SaaS platform, it provides clinics and healthcare facilities with a comprehensive solution for managing patient records, scheduling appointments, and maintaining medical documentation.',
                },
                {
                    title: 'Project Details',
                    text: 'As the Project Manager, I led the development team in building a scalable and secure EHR system. The platform handles sensitive patient data with strict compliance to healthcare data regulations, ensuring both accessibility and security for healthcare providers.',
                },
                {
                    title: 'Key Features',
                    list: [
                        { label: 'Patient Management', value: 'Comprehensive digital records for patient demographics, medical history, and treatment plans.' },
                        { label: 'Appointment Scheduling', value: 'Real-time booking system with automated reminders and calendar integration.' },
                        { label: 'Medical Records', value: 'Secure digital storage for diagnoses, prescriptions, lab results, and treatment notes.' },
                        { label: 'Reporting Dashboard', value: 'Analytics and reporting tools for clinic performance and patient insights.' },
                    ],
                },
                {
                    title: 'Technologies Used',
                    list: [
                        { label: 'Backend Framework', value: 'Laravel' },
                        { label: 'Frontend Framework', value: 'React, Tailwind CSS' },
                        { label: 'Database', value: 'Relational Database' },
                    ],
                },
            ],
        },
        tawatalia: {
            title: 'Tawatalia',
            description: 'Tawatalia is a website-based company profile that offers professional SEO services to help businesses improve their online visibility and search engine rankings.',
            image: '/src/assets/TawataliaDekstop.png',
            specs: [
                { label: 'Role', value: 'Developer' },
                { label: 'Platform', value: 'Web Application' },
                { label: 'Industry', value: 'Digital Marketing' },
                { label: 'Type', value: 'Company Profile' },
            ],
            content: [
                {
                    title: 'Introduction',
                    text: 'Tawatalia is a professional company profile website designed to showcase SEO services and digital marketing solutions. The platform serves as a business presence to attract potential clients looking to improve their online visibility.',
                },
                {
                    title: 'Project Details',
                    text: 'As the Developer, I built a modern, responsive company profile website that effectively communicates the brand\'s SEO expertise. The site features a clean design with clear calls-to-action and service descriptions.',
                },
                {
                    title: 'Key Features',
                    list: [
                        { label: 'SEO Service Showcase', value: 'Detailed presentation of available SEO packages and service offerings.' },
                        { label: 'Responsive Design', value: 'Fully responsive layout ensuring optimal viewing across all devices.' },
                        { label: 'Contact Integration', value: 'Seamless contact forms and communication channels for client inquiries.' },
                        { label: 'Performance Optimized', value: 'Fast loading times and optimized assets for better search engine ranking.' },
                    ],
                },
                {
                    title: 'Technologies Used',
                    list: [
                        { label: 'Backend Framework', value: 'Laravel' },
                        { label: 'Frontend Framework', value: 'Tailwind CSS' },
                        { label: 'Database', value: 'Relational Database' },
                    ],
                },
            ],
        },
        noonajib: {
            title: 'Noonajib',
            description: 'Noonajib is a web-based restaurant table booking system that enables customers to easily reserve tables online. The platform streamlines the reservation process for both diners and restaurant staff, ensuring a convenient and efficient dining experience.',
            image: '/src/assets/NoonajibDekstop.png',
            specs: [
                { label: 'Role', value: 'Developer' },
                { label: 'Platform', value: 'Web Application' },
                { label: 'Industry', value: 'Food & Beverage' },
                { label: 'Type', value: 'Booking System' },
            ],
            content: [
                {
                    title: 'Introduction',
                    text: 'Noonajib is a web-based restaurant table booking system designed to simplify the reservation process for both customers and restaurant staff. It provides a convenient way for diners to book tables online while giving restaurant owners full control over their seating management.',
                },
                {
                    title: 'Project Details',
                    text: 'As the Developer, I created an intuitive booking platform that handles real-time table availability, reservation management, and customer notifications. The system reduces no-shows and optimizes restaurant seating efficiency.',
                },
                {
                    title: 'Key Features',
                    list: [
                        { label: 'Online Table Booking', value: 'Customers can browse available time slots and reserve tables in real-time.' },
                        { label: 'Reservation Management', value: 'Restaurant staff can view, modify, and manage all bookings from a dashboard.' },
                        { label: 'Table Availability', value: 'Real-time tracking of table occupancy and availability across time slots.' },
                        { label: 'Customer Notifications', value: 'Automated confirmations and reminders sent to customers via email or SMS.' },
                    ],
                },
                {
                    title: 'Technologies Used',
                    list: [
                        { label: 'Backend Framework', value: 'Laravel' },
                        { label: 'Frontend Framework', value: 'Tailwind CSS' },
                        { label: 'Database', value: 'Relational Database' },
                    ],
                },
            ],
        },
        sipkl: {
            title: 'SiPKL',
            description: 'SiPKL is a web-based system used for managing internship employees at the Center for Information and Communication Technology, Universitas Negeri Jakarta.',
            image: '/src/assets/SiPKLDekstop.png',
            specs: [
                { label: 'Role', value: 'Developer' },
                { label: 'Platform', value: 'Web Application' },
                { label: 'Industry', value: 'Education' },
                { label: 'Type', value: 'Management System' },
            ],
            content: [
                {
                    title: 'Introduction',
                    text: 'SiPKL is a web-based internship management system developed for the Center for Information and Communication Technology (Puskom) at Universitas Negeri Jakarta. It digitizes the internship workflow from application to evaluation.',
                },
                {
                    title: 'Project Details',
                    text: 'As the Developer, I built a comprehensive system that handles the complete internship lifecycle — from student applications and supervisor assignments to progress tracking and final evaluations. The system replaces manual paperwork with a streamlined digital process.',
                },
                {
                    title: 'Key Features',
                    list: [
                        { label: 'Internship Applications', value: 'Digital application submission and approval workflow for students.' },
                        { label: 'Supervisor Assignment', value: 'Automatic and manual assignment of supervisors to intern groups.' },
                        { label: 'Progress Tracking', value: 'Weekly report submission and monitoring of intern activities and milestones.' },
                        { label: 'Evaluation System', value: 'Structured evaluation forms and scoring for intern performance assessment.' },
                    ],
                },
                {
                    title: 'Technologies Used',
                    list: [
                        { label: 'Backend Framework', value: 'Laravel' },
                        { label: 'Frontend Framework', value: 'Bootstrap' },
                        { label: 'Database', value: 'Relational Database' },
                    ],
                },
            ],
        },
    }

    const fallbackProject = {
        title: 'Project Not Found',
        description: 'The project you are looking for does not exist or has been removed.',
        image: '/src/assets/ClinicoDekstop.png',
        specs: [],
        content: [],
    }

    const project = computed(() => {
        const id = route.params.id
        return projectsData[id] || fallbackProject
    })

    const otherProjects = computed(() => {
        const id = route.params.id
        const others = Object.entries(projectsData)
            .filter(([key]) => key !== id)
            .map(([key, data]) => ({
                title: data.title,
                description: data.description,
                image: data.image,
                link: `/detail/${key}`,
            }))
        return others
    })

    function checkMd() {
        isMd.value = window.innerWidth >= 768
    }

    onMounted(() => {
        checkMd()
        window.addEventListener('resize', checkMd)
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
