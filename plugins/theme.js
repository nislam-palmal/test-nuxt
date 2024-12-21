// plugins/theme.js
export default defineNuxtPlugin(nuxtApp => {
    // Initialize global state for theme using `useState`
    const loadState = useState('loading', () => true); //default is true
  
    // Add the theme state to the global context
    nuxtApp.provide('loading', loadState);
});
  