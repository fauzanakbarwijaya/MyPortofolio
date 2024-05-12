<script>
    import Navbar from '@/components/Navbar.vue';

    export default {
        components: {
            Navbar,
        },
        data() {
            return {
                count: 0,
                loves: [],
                iconIndex: 0,
                icons: [
                    '/src/assets/images/icon/brand_icon.png',
                    '/src/assets/images/icon/brand_icon_yellow.png',
                    '/src/assets/images/icon/brand_icon_black.png'
                ]

            }
        },
        methods: {
            changeBackgroundColor() {
                this.count++;
                this.loves.push({
                    id: this.count,
                    x: Math.random() * 100,
                    y: 0
                });
            },
            changeIcon() {
                this.iconIndex = (this.iconIndex + 1) % this.icons.length;
            }
        },
        mounted() {
            setInterval(() => {
                this.changeIcon();
            }, 2500);
        }

    };
</script>

<template>

    <Navbar></Navbar>

    <div class="container">
        <div class="loves-container">
            <div v-for="love in loves" :key="love.id" class="love"
                :style="{ top: love.y + 'vh', left: love.x + 'vw' }">
                <i class="bi bi-heart-fill text-warning fs-1 fw-bold"></i>
            </div>
        </div>
        <div class="row d-flex justify-content-center align-items-center mb-5">
            <div class="mt-4">
                <div class="logo mb-5">
                    <img :src="icons[iconIndex]" :alt="icons" class="img-fluid d-block mx-auto icon-transition" style="width: 5rem;">
                </div>
                <div class="title mb-3">
                    <h1 class="text-center">Hello Everyone!</h1>
                </div>
                <div class="subtitle">
                    <p class="lh-lg fs-5 text-center">I'm interested in becoming a Website Developer. making code simple
                        and
                        creating
                        interactive and user friendly websites. Let's explore <span class="fw-bold">My
                            Portfolio!</span></p>
                </div>
                <div class="see-more">
                    <a href="/About" class="btn btn-warning d-block mx-auto w-50">Get Started</a>
                    <button class="btn btn-secondary rounded-pill d-block mx-auto mt-4" type="button"
                        @click="changeBackgroundColor()">
                        Give me as much of your love as possible! <i class="bi bi-heart-fill text-warning"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
    .loves-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
    }

    .love {
        position: absolute;
        animation: fall linear 2s forwards;
    }

    @keyframes fall {
        0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
        }

        100% {
            transform: translateY(100vh) rotate(480deg);
            opacity: 0;
        }
    }

    .icon-transition {
        opacity: 85%;
        transition-delay: opacity 2s;
    }
    
</style>
