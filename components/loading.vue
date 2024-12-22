<template>
    <transition name="fade" @before-enter="beforeEnter" @after-leave="afterLeave">
        <!-- Overlay and Spinner for loading -->
        <div v-if="pending" class="overlay">
          <div class="spinner"> Loading... </div>
        </div>
      </transition>
</template>

<script setup>
    defineProps({
        pending: {
            type: Boolean,
            required: true,
        },
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
        /* background-color: rgba(0, 0, 0, 0.5);  */
        /* background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.5));
         */
        background: radial-gradient(circle,  rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 00%, rgba(0, 0, 0, 0.5)100%,  rgba(0, 0, 0, 0.5) 10%);
        
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        /* backdrop-filter: blur(0.5px);
        opacity: 0.8; */
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        filter: grayscale(50%); /* Applies 50% grayscale */
        filter: sepia(30%);
    }

    .spinner {
        padding-top: 36px;
        background-color: white;
        border-radius: 10px;
        font-size: 16px;
        font-weight: bold;
        /* animation: spin 1.5s infinite linear; */
        border-radius: 50%;
        width: 100px;
        height: 100px;
        border: 2px solid silver;
        padding-left: 13px;
        box-shadow: 0px 3px 6px #737070;
        text-shadow: 0px 3px 5px #5c6268;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(60deg); }
    }

    
    /* Transition for fading in and out */
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s ease-in-out;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>