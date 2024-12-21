// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  pages: true, 


  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'My Website',
      // link and script file must be at public directory 
      link: [
        { rel: 'stylesheet', href: '/assets/css/all.css' },
        { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/assets/css/jquery-ui.css' },
        { rel: 'stylesheet', href: '/assets/css/animate.css' },
        { rel: 'stylesheet', href: '/assets/css/swiper.css' },
        { rel: 'stylesheet', href: '/assets/css/magnific-popup.css' },
        { rel: 'stylesheet', href: '/assets/css/style.css' },
      ],
      script: [
        { src: '/assets/js/jquery.min.js', type: 'text/javascript', defer: true },
        { src: '/assets/js/popper.min.js', type: 'text/javascript', defer: true },
        { src: '/assets/js/bootstrap.min.js', type: 'text/javascript', defer: true },
        { src: '/assets/js/jquery-ui.js', type: 'text/javascript', defer: true },
        { src: '/assets/js/wow.js', type: 'text/javascript', defer: true },
        { src: '/assets/js/gsap.min.js', type: 'text/javascript', defer: true },
        { src: '/assets/js/scrolltigger.js', type: 'text/javascript', defer: true },
        { src: '/assets/js/split-text.js', type: 'text/javascript', defer: true },
        { src: '/assets/js/magnific-popup.js', type: 'text/javascript', defer: true },
        { src: '/assets/js/waypoints.js', type: 'text/javascript', defer: true },
        { src: '/assets/js/swiper.js', type: 'text/javascript', defer: true },
        { src: '/assets/js/isotop.min.js', type: 'text/javascript', defer: true },
        { src: '/assets/js/script.js', type: 'text/javascript', defer: true }
      ]

    },
    
  },


})
