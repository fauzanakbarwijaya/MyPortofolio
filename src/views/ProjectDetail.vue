<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
      Navbar,
  },
  // mounted() {
  //     console.log("Project ID:", this.$route.params.id);
  //     console.log("Project Name:", this.$route.query.cardName);
  //     console.log("Carousel Images:", this.$route.query.carousel);
  //     console.log("Project Details:", this.$route.query.detailProject);
  //     console.log("Project Details:", this.$route.query.client);
  //     console.log("Project Details:", this.$route.query.clientLink);
  // }
};
</script>

<template>
  <div>
      <Navbar></Navbar>

      <div class="container">
        <RouterLink to="/project" class="btn btn-light w-25 mb-3"><i class="bi bi-backspace-fill text-dark"></i> Back</RouterLink>
          <div class="row mb-5">
              <div class="title mb-3">
                  <h3 class="text-center text-light">{{ $route.query.cardName }}</h3>
              </div>

              <div id="carouselExample" class="carousel slide mb-3">
                  <div class="carousel-inner">
                      <div v-for="(image, index) in JSON.parse($route.query.carousel)" :key="index" :class="['carousel-item', { active: index === 0 }]">
                          <img :src="image" class="d-block w-100" :alt="`Slide ${index + 1}`">
                      </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                  </button>
              </div>
              <div class="mb-3">
                <div v-if="$route.query.client == 'Satuasa Student Award 3'">
                    <p class="fs-5 text-decoration-none text-light">
                        Competition : <a :href="$route.query.clientLink" class="text-decoration-none fw-bold text-warning" target="_blank">{{ $route.query.client }}</a>
                    </p>
                    <p class="fs-5 text-decoration-none text-light">
                        Winner : <a href="https://www.instagram.com/p/CkH-Ul4LkED/?igshid=MzRlODBiNWFlZA%3D%3D" class="text-decoration-none fw-bold text-warning" target="_blank">3rd place for the Jakarta Governor's trophy</a>
                    </p>
                </div>
                <div v-else>
                    <p class="fs-5 text-decoration-none text-light">
                        Client : <a :href="$route.query.clientLink" class="text-decoration-none fw-bold text-warning">{{ $route.query.client }}</a>
                    </p>
                </div>
                
              </div>
              <div class="detail mb-3">
                  <p class="fs-5 text-light">{{ $route.query.detailProject }}</p>
              </div>

              <div class="tools mb-3">
                  <p class="fs-5 text-light">
                     The tools I used to work on this project are :
                     <span class="fw-bold text-warning" v-for="tool in $route.query.Tools">{{ tool }}, </span>
                  </p>
              </div>
          </div>
      </div>
  </div>
</template>



<style>
/* Add any styles you need */
</style>
