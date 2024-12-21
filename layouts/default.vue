<template>
  
    <div>

      <div id="progress"> 
        <span id="progress-value"><i class="fa-solid fa-arrow-up"></i></span>
      </div>

      <Header />
     
      <main>
        <NuxtPage />
      </main>

      <Footer />

      <div class="loader-wrapper">
          <div class="loader"></div>
          <div class="loader-section section-left"></div>
          <div class="loader-section section-right"></div>
      </div>
    </div>
</template>

<script setup>

  import Header from '@/components/header.vue';
  import Footer from '@/components/footer.vue';

</script>

<style scoped>
  
  .layout-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  header {
    background: #333;
    color: white;
    padding: 1rem;
  }
  
  header ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  header li {
    margin-right: 1rem;
  }
  
  header a {
    color: white;
    text-decoration: none;
  }
  
  
  footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 1rem;
  }
  
</style>


  