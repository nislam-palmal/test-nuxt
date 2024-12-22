<template>
  <div>
    <h1>User Page</h1>
    <p>User ID: {{ route.params.id }}</p>
    <p>Referred by: {{ route.query.ref }}</p>
  </div>


</template>

<script setup>
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const metaTitle = `User ${route.params.id} Page`;
  const metaDescription = `Details about user with ID ${route.params.id}`;

  useHead({
    title: `User ${route.params.id} Page`,
    meta: [
      { name: 'title', content: metaTitle },
      { name: 'description', content: metaDescription },
      { name: 'keywords', content: metaDescription }
    ],

  })
</script>

