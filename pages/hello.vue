<template>
    <div>
      <h1>Hello Page</h1>
      <p>Name: {{ route.query.name }}</p>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';

    // Get query parameters
    const route = useRoute();
</script>
  
