<template>
    <div>
        <Loading :pending="pending" />

        <div v-if="error">
            <p>Error: {{ error }}</p>
            <button @click="fetchDoctors()">Retry</button>
        </div>
        <div v-else>
            <section class="hero-area-1 hero-area-1">
                <img src="/assets/images/shep/bg-blur-shep-1.png" alt="VRE" class="hero-area-1-shep-1">
                <img src="/assets/images/shep/bg-blur-shep-1.png" alt="VRE" class="hero-area-1-shep-2">
                <div class="container hero-wrapper">
                    <div class="hero-inner">
                        <div class="hero-inner-left">
                            <div class="hero-title">
                                <h2 class="font-size-1-70 mb-40 split-collab">
                                    Digital Marketing For Your Business 
                                    <span class="home-1-hero-text-shep">
                                        <img src="/assets/images/shep/text-shep-1.png" alt="VRE">
                                    </span>
                                </h2>
                                <p class="font-size-1-20">At Coalition Technologies, we tightly weave our website
                                    design and search engineoptimization work to exceed our clients goals.</p>
                                <div class="hero-info mt-50">
                                    <a href="index.html#" class="font-size-1-20 btn-1">Free Trail Now</a>
                                    <div class="some-clients-view">
                                        <img src="/assets/images/hero/rating.webp" alt="VRE">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hero-1-banner hero-1-banner">
                            <img src="/assets/images/banner/home-1-hero-slider.webp" alt="VRE" class="banner-big-img vre-slide-down-gsap">
                            <img src="/assets/images/shep/home-3-hero-banner-shep-1.png" alt="VRE"
                                class="home-1-hero-banner-shep-1 vre-slide-up-gsap">
                            <img src="/assets/images/shep/home-3-hero-banner-shep-2.png" alt="VRE"
                                class="home-1-hero-banner-shep-2 vre-slide-up-gsap">
                            <img src="/assets/images/shep/home-3-hero-banner-shep-3.png" alt="VRE"
                                class="home-1-hero-banner-shep-3 vre-slide-up-gsap">
                            <img src="/assets/images/shep/home-3-hero-banner-shep-4.png" alt="VRE"
                                class="home-1-hero-banner-shep-4 vre-slide-up-gsap">
                        </div>
                    </div>
                </div>
            </section>

            <section class="offer-area-home-1 st_box_jump_animation">
                <img src="/assets/images/shep/bg-blur-shep-1.png" alt="VRE" class="offer-area-1-shep-1 blur-1">
                <div class="container">
                    <div class="title">
                        <div class="sub-title">
                            <p>what we offer</p>
                        </div>
                        <div class="main-title">
                            <h3 class="split-collab">We Offer A Wide Range Of <br> Digital Marketing 
                                <span> <img src="/assets/images/shep/text-shep-1.png" alt=""></span>
                            </h3>
                        </div>
                    </div>
                    <div class="offer-wrapper">
                        <div class="row justify-content-center">
                            <div class="col-xl-4 col-lg-4 col-md-6 st_box_animation">
                                <div class="offer-inner st_box_anim">
                                    <p class="font-size-1-24">UI/UX Design, Motion, <br> Illustration, Branding, <br>
                                        Photography</p>
                                    <svg width="69" height="167" viewBox="0 0 69 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M34.3163 118.899L67.5418 148.197C56.9474 165.278 33.4836 171.131 15.1337 161.269C9.02319 157.985 4.6188 153.885 1.09082 148.197L34.3163 118.899Z" fill="#1954ED"/>
                                    <path d="M68.6331 118.899H0V51.0325H68.6331V118.899Z" fill="#CCFF00"/>
                                    <path d="M34.3166 0L68.5104 51.0324H0.122803L34.3166 0Z" fill="#104CBA"/>
                                    </svg>
                                    <div class="offer-work">
                                        <span class="font-size-1-20">design & UI/UX <br>
                                            Experience</span>
                                        <a href="services-details.html">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 21 20" fill="none">
                                            <path d="M2.00076 15.7281L18.4737 4.58581M4.84375 1L19.5719 3.84299L16.7289 18.5711" stroke="#CCFF00" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 st_box_animation">
                                <div class="offer-inner st_box_anim">
                                    <p class="font-size-1-24">WordPress, Shopify, <br> Webflow, React, HTML, <br> Mobile
                                        Solutions</p>
                                    <svg width="105" height="167" viewBox="0 0 105 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M33.2525 116.583L0.931396 97.8413C2.71505 103.854 7.30486 119.878 11.5198 133.881C24.3127 142.035 41.8175 153.334 49.1187 157.977L33.2525 116.583Z" fill="#CCFF00"/>
                                    <path d="M61.7937 79.9978L46.3699 83.8451L38.0979 114.533L54.3777 157.005C63.6951 150.759 84.7931 136.494 94.7151 129.781L61.7937 79.9978Z" fill="#082CAF"/>
                                    <path d="M53.8435 0.0422363L65.3697 75.8675L97.4639 124.398C99.2864 116.565 103.06 100.267 104.622 94.9749C94.6678 76.3773 62.8149 16.7428 53.8435 0.0422363Z" fill="#1954ED"/>
                                    <path d="M45.0113 78.2514L45.9577 78.5099L59.9267 75.0259L48.5642 0.284912C43.6355 10.4526 32.7139 32.9679 23.2686 52.4818L45.0113 78.2514Z" fill="#CCFF00"/>
                                    <path d="M33.6777 110.735L41.3882 82.1231L20.7096 57.613C13.048 71.1498 5.59599 85.2883 1.94971 92.3382L33.6777 110.735Z" fill="#1954ED"/>
                                    </svg>

                                    <div class="offer-work">
                                        <span class="font-size-1-20">development & <br>
                                            coding</span>
                                        <a href="services-details.html">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 21 20" fill="none">
                                            <path d="M2.00076 15.7281L18.4737 4.58581M4.84375 1L19.5719 3.84299L16.7289 18.5711" stroke="#CCFF00" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 st_box_animation">
                                <div class="offer-inner st_box_anim">
                                    <p class="font-size-1-24">Social Solutions, <br> Marketing & Targeting, <br> SEO & SMM</p>
                                    <svg width="167" height="167" viewBox="0 0 167 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.362901 132.428C0.135249 102.41 24.6519 77.8936 55.1229 77.6693C85.5938 77.445 110.48 101.597 110.708 131.616C110.71 131.886 110.71 132.158 110.708 132.428" fill="#082CAF"/>
                                    <path d="M54.9514 0.313232C75.9962 0.313232 93.0565 17.1199 93.0565 37.8523C93.0565 58.5847 75.9962 75.3917 54.9514 75.3917C33.9065 75.3917 16.8462 58.5847 16.8462 37.8523C16.8462 17.1199 33.9065 0.313232 54.9514 0.313232Z" fill="#CCFF00"/>
                                    <path d="M131.775 0.313232H166.194V132.862H131.775V0.313232Z" fill="#1954ED"/>
                                    </svg>
                                    <div class="offer-work">
                                        <span class="font-size-1-20">marketing & SEO <br>
                                            Analytic</span>
                                        <a href="services-details.html">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 21 20" fill="none">
                                            <path d="M2.00076 15.7281L18.4737 4.58581M4.84375 1L19.5719 3.84299L16.7289 18.5711" stroke="#CCFF00" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </div>
</template>

<script setup>
    import { ref, computed, onMounted } from 'vue';
    import Loading from '@/components/loading.vue';

    definePageMeta({
        layout: 'default', // Refers to layouts/custom.vue
    });

    const pending = ref(true); 
    const posts = ref([]);

    const fetchSlider = async () => {
      try {
        const response = await fetch('https://admitdoctors.com/api/home-sliders');
        posts.value = await response.json();
        console.log(posts);
      } catch (err) {
        error.value = err.message;
      } finally {
        pending.value = false; // Stop the spinner after data is loaded
      }
    };

    
    fetchSlider();
    console.log(posts);


</script>
  