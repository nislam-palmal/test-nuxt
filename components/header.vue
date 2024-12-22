<template>
    <div>
        <header class="header-area-1 header-sticky">
            <div class="container">
                <div class="header-wrapper">
                    <div class="logo">
                        <nuxt-link to="/">
                            <img src="/assets/images/logo/logo-1.svg" alt="VRE">
                        </nuxt-link>
                    </div>
                    <div class="menu-bar">
                        <a href="#" class="menu-bar-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="15" viewBox="0 0 49 15" fill="#CCDEFF">
                                <line x1="0.249023" y1="1.41577" x2="48.6221" y2="1.41577" stroke="#CCDEFF" stroke-width="2">
                                </line>
                                <line x1="0.249023" y1="13.9224" x2="48.6221" y2="13.9224" stroke="#CCDEFF" stroke-width="2">
                                </line>
                            </svg>
                        </a>
                    </div>
                    <div class="main-menu main-menu-1">
                        <ul>
                            <li><nuxt-link to="/" class="font-size-1-18 transition-1">Home  </nuxt-link></li>
                            <li><a href="#" class="font-size-1-18 transition-1">Doctors
                                    <span>
                                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1_9793)">
                                                <path
                                                    d="M3.52937 12.868C3.78979 13.2098 4.21271 13.2098 4.47312 12.868L7.80646 8.49298C8.06687 8.15118 8.06687 7.59611 7.80646 7.25431C7.54604 6.91251 7.12312 6.91251 6.86271 7.25431L4.66687 10.1391L4.66687 1.75001C4.66687 1.26603 4.36896 0.875012 4.00021 0.875012C3.63146 0.875012 3.33354 1.26603 3.33354 1.75001L3.33354 10.1391L1.13771 7.25704C0.87729 6.91525 0.454373 6.91525 0.193956 7.25704C-0.0664601 7.59884 -0.0664602 8.15392 0.193956 8.49571L3.52729 12.8707L3.52937 12.868Z"
                                                    fill="#CCDEFF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_979466">
                                                    <rect width="8" height="14" fill="white"
                                                        transform="translate(8 14) rotate(-180)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </a>
                                <ul class="submenu submenu-1" style="max-height: 80vh;overflow-y: scroll;">
                                    <li v-for="type in posts" :key="type.id">
                                        <nuxt-link :to="`/doctors/${type.id}?type=${type.title.toLowerCase().replace(/\s+/g, '-')}`"
                                        class="font-size-1-18">{{type.title}}</nuxt-link>
                                    </li>
                                </ul>
                            </li>
               
                            <li><nuxt-link to="/contact" class="font-size-1-18 transition-1">Contact </nuxt-link></li>
                        </ul>
                    </div>
                    <div class="get-in-touch">
                        <a href="contact.html">
                            <span class="text-color">
                                log In
                            </span>
                        </a>
                        <a href="index.html#" class="font-size-1-20 btn-1">Get in Touch</a>
                    </div>
        
                </div>
            </div>
        </header>
        

        <div class="search-bar home-1">
            <div class="search">
                <form action="#">
                    <input type="text" placeholder="Search Here ....">
                    <input type="submit" value="Search" class="btn-primary-style btn-2 hero-info-btn btn-3 btn-4">
                </form>
            </div>
            <a href="javascript:void(0)" class="search-popup-close"><i class="fa-solid fa-xmark"></i></a>
        </div>


        <div class="nft-mobile-menu">
            <button class="close-menu float-end"><i class="fa-solid fa-xmark"></i></button>
            <a class='mobile-menu-logo' href="index.html"><img src="/assets/images/logo/logo-1.svg" alt="VRE"></a>
            <ul>
                <li class="has-submenu"><a href="javascript:void(0)">Home</a>
                    <ul class="submenu-wrapper">
                        <li><a href="index.html">Home Page 1</a></li>
                        <li><a href="index-2.html">Home Page 2</a></li>
                        <li><a href="index-3.html">Home Page 3</a></li>
                    </ul>
                </li>
                <li class="has-submenu"><a href="javascript:void(0)">Pages</a>
                    <ul class="submenu-wrapper">
                        <li><a href="about.html" class="font-size-1-18">About</a></li>
                        <li><a href="team.html" class="font-size-1-18">Team</a></li>
                        <li><a href="https://devsaidul.com/ui/dynamic/team-details.html" class="font-size-1-18">Team Details</a></li>
                        <li><a href="price.html" class="font-size-1-18">Price</a></li>
                        <li><a href="faq.html" class="font-size-1-18">Faq</a></li>
                        <li><a href="404.html" class="font-size-1-18">404</a></li>
                    </ul>
                </li>
                <li class="has-submenu"><a href="javascript:void(0)">services</a>
                    <ul class="submenu-wrapper">
                        <li><a href="services.html" class="font-size-1-18">Services</a></li>
                        <li><a href="services-details.html" class="font-size-1-18">Services Details</a></li>
                    </ul>
                </li>
                <li class="has-submenu"><a href="javascript:void(0)">Blog</a>
                    <ul class="submenu-wrapper">
                        <li><a href="blog-grid.html" class="font-size-1-18">Blog Grid</a></li>
                        <li><a href="blog-standart.html" class="font-size-1-18">Blog Standart</a></li>
                        <li><a href="blog-details.html" class="font-size-1-18">Blog Details</a></li>
                    </ul>
                </li>
                <li class="has-submenu"><a href="javascript:void(0)">Portfolio</a>
                    <ul class="submenu-wrapper">
                        <li><a href="project-grid.html" class="font-size-1-18">Portfolio Grid</a></li>
                        <li><a href="project-details.html" class="font-size-1-18">Portfolio Details</a></li>
                    </ul>
                </li>
                <li class="has-submenu"><a href="contact.html">Contact</a>
                </li>
            </ul>
            <div class="search-form">
                <form action="index.html#">
                    <input type="text" placeholder="Search...">
                    <button type="submit" class="border-0">Go</button>
                </form>
            </div>
            <div class="phone-number-mobile-menu">
                <a href="index.html#">+8 (123) 985 789</a>
            </div>
            <div class="mobile-menu-copy-right-text">
                <p class="font-size-1-18">Copyright © 2024 - Powered by <a href="index.html">Dynamic</a></p>
            </div>
        </div>
        
    </div>

</template>

<script setup>
    import { ref, computed, onMounted } from 'vue';
 

    const pending = ref(true); 
    const posts = ref([]);

    const fetchSlider = async () => {
      try {
        const response = await fetch('https://admitdoctors.com/api/doctor-categories/all');
        posts.value = await response.json();

      } catch (err) {
        error.value = err.message;
      } finally {
        pending.value = false; // Stop the spinner after data is loaded
      }
    };

    
    fetchSlider();
</script>