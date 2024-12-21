<template>
    <div>
        <h1>Routing to another Page</h1>

        <p>Pass data using query parameters, like /page?name=John. </p>
        <nuxt-link :to="{ path: '/hello', query: { name: 'John' } }">
            Go to Hello Page
        </nuxt-link>
        <br> <hr>


        <p>Passing dynamic routes! based on default <b>directory format</b> </p>
        <nuxt-link :to="`/user/${userId}`">Go to User Page</nuxt-link> <br> <hr>


        <p>Programmatic Navigation. go to a link by <b>Clicking a butron</b></p>
        <button @click="goToUserPage">Go to User Page</button>
    </div>
    
</template>
  
<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();

    // definePageMeta({
    //     layout: 'default', // Refers to layouts/custom.vue
    // });

    const userId = 123;


    const goToUserPage = () => {
        router.push({  
            path: `/user/${userId}`, query: { ref: 'google' } 
        });
        
    };
</script>
