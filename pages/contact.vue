<template>
    <div>
      <!-- Transition wrapper for spinner -->
      <transition name="fade" @before-enter="beforeEnter" @after-leave="afterLeave">
        <!-- Overlay and Spinner for loading -->
        <div v-if="pending" class="overlay">
          <div class="spinner">
            Loading...
          </div>
        </div>
      </transition>
  
      <!-- Error message if there's an error -->
      <div v-if="error">Error: {{ error.message }}</div>
  
      <div class="bg-white p-5" v-else>
        <!-- Posts list -->
        <ul>
          <li v-for="post in paginatedPosts" :key="post.id">
            {{ post.title }} <br />
            {{ post.body }}<hr />
          </li>
        </ul>
  
        <!-- Pagination buttons -->
        <div class="pagination">
          <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">
            Prev
          </button>
  
          <button 
            v-for="page in visiblePages" 
            :key="page" 
            :disabled="page === currentPage || page === '...'"
            @click="page !== '...' && changePage(page)">
            {{ page }}
          </button>
  
          <button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">
            Next
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  
  // State variables
  const posts = ref([]);
  const currentPage = ref(1);
  const pageSize = ref(15);
  const pending = ref(true); // to control the loading spinner
  const error = ref(null);
  
  // Computed properties
  const paginatedPosts = computed(() => {
      const start = (currentPage.value - 1) * pageSize.value;
      const end = start + pageSize.value;
      return posts.value.slice(start, end);
  });
  
  const totalPages = computed(() => {
      return Math.ceil(posts.value.length / pageSize.value);
  });
  
  const visiblePages = computed(() => {
      const pages = [];
      const total = totalPages.value;
      const current = currentPage.value;
  
      if (total <= 5) {
          for (let i = 1; i <= total; i++) {
              pages.push(i);
          }
      } else {
          pages.push(1);
          if (current > 3) pages.push("...");
          const start = Math.max(2, current - 1);
          const end = Math.min(current + 1, total - 1);
          for (let i = start; i <= end; i++) {
              pages.push(i);
          }
          if (current < total - 2) pages.push("...");
          pages.push(total);
      }
      return pages;
  });
  
  // Methods
  const changePage = async (page) => {
      if (page >= 1 && page <= totalPages.value) {
          currentPage.value = page;
          pending.value = true; // Start loading spinner
          await fetchPosts();
      }
  };
  
  const fetchPosts = async () => {
      try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          posts.value = await response.json();
      } catch (err) {
          error.value = err;
      } finally {
          pending.value = false; // Stop the spinner after data is loaded
      }
  };
  
  // Lifecycle
  onMounted(() => {
      fetchPosts();
  });
  </script>
  
  <style scoped>
  /* Centered spinner and overlay */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1); /* Semi-transparent black background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    backdrop-filter: blur(10px); /* Blurs the background */
  }
  
  .spinner {
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;

    /* animation: spin 1.5s infinite linear; */
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  /* Pagination styling */
  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  
  button {
    padding: 5px 10px;
    border: 1px solid #ddd;
    background: #f5f5f5;
    cursor: pointer;
  }
  
  button:disabled {
    background: #e0e0e0;
    cursor: not-allowed;
  }
  
  button.active {
    font-weight: bold;
    background-color: #007bff;
    color: white;
  }
  /* Transition for fading in and out */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.8s ease-in-out;
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  