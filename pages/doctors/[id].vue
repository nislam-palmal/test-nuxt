<template>
  <div>
    <!-- Loading spinner -->
    <Loading :pending="pending" />

    <!-- Error display -->
    <div v-if="error">
      <p>Error: {{ error }}</p>
      <button @click="fetchDoctors()">Retry</button>
    </div>

    <!-- Doctors list -->
    <div class="bg-white p-5" v-else>
      <p class="text-capitalize text-left bg-secondary p-3 text-white">{{ type }}</p>
      <ul>
        <li v-for="doctor in doctors" :key="doctor.id">
          <strong>{{ doctor.full_name }}</strong><br />
          <span v-html="doctor.education"></span>
          <hr />
        </li>
      </ul>

      <!-- Pagination -->
      <div class="pagination">
        <button v-if="pagination.prev_page_url" @click="changePage(pagination.current_page - 1)"> &laquo; Prev </button>

        <button v-for="link in numberedLinks" :key="link.label"
          :class="{ active: link.active }" :disabled="!link.url || link.active"
          @click="link.url && changePage(link.label)">
          <span v-html="link.label"></span>
        </button>

        <button v-if="pagination.next_page_url" @click="changePage(pagination.current_page + 1)"> Next &raquo; </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted, watch } from 'vue';
  import { useRouter, useRoute } from '#app'; // Use Nuxt's auto-imported composables
  import Loading from '@/components/loading.vue';
  
  // Vue Router
  const router = useRouter();
  const route = useRoute();

  // State variables
  const doctors = ref([]);
  const pagination = ref({});
  const pending = ref(false);
  const error = ref(null);

  const metaTitle = `User ${route.params.id} Page`;
  const metaDescription = `Details about user with ID ${route.params.id}`;

  // Base API URL
  const apiBaseUrl = `https://admitdoctors.com/api/doctors-with-category/${route.params.id}`;

  // Filter out only numbered links from API response
  const numberedLinks = computed(() => {
    return pagination.value.links?.filter(
      (link) => link.label !== '&laquo; Previous' && link.label !== 'Next &raquo;'
    );
  });

  const type = route.query.type
    ? route.query.type
        .replace(/-/g, ' ') // Replace hyphens with spaces
        .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase()) // Capitalize first letter of each word
    : '';

  // Fetch doctors from the API
  const fetchDoctors = async (page = 1) => {
    pending.value = true;
    error.value = null;

    try {
      const url = `${apiBaseUrl}?page=${page}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch doctors.');
      }

      const data = await response.json();

      // Update doctors and pagination
      doctors.value = data.data;
      pagination.value = {
        current_page: data.current_page,
        last_page: data.last_page,
        prev_page_url: data.prev_page_url,
        next_page_url: data.next_page_url,
        links: data.links,
      };

      // Update the URL query parameter while keeping existing params
      const currentQuery = { ...route.query }; // Copy existing query params
      currentQuery.page = page || 1; // Update the page parameter

      // Push the updated query to the router
      router.push({ query: currentQuery });
    } catch (err) {
      error.value = err.message;
    } finally {
      pending.value = false;
    }
  };

  // Change page and scroll to top
  const changePage = (page) => {
    fetchDoctors(page);
    scrollToTarget();
  };

  // Watch for query parameter changes
  watch(
    () => route.query.page,
    (newPage) => {
      fetchDoctors(parseInt(newPage) || 1);
    }
  );

  // Initial data fetch
  onMounted(() => {
    fetchDoctors(parseInt(route.query.page) || 1);
  });

  useHead(() => ({
    title: `Doctors - Page `,
    meta: [
      {
        name: 'description',
        content: `Browse a list of doctors on page ${
          pagination.value.current_page || 1
        }.`,
      },
      {
        name: 'keywords',
        content: 'doctors, healthcare, pagination, Nuxt',
      },
    ],
  }));

  // Function to scroll to the target div
  const scrollToTarget = () => {
    const target = document.getElementById('mainContent');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
</script>
