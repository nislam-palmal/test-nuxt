
<template>
  <Loading :pending="pending" />

  <form @submit.prevent="submitForm" class="bg-white p-5">
    <div>
      <label for="full_name">Full Name:</label>
      <input id="full_name" v-model="formData.full_name" type="text" />
      <p v-if="errors.full_name" class="error">{{ errors.full_name[0] }}</p>
    </div>

    <div>
      <label for="education">Education:</label>
      <input id="education" v-model="formData.education" type="text" />
      <p v-if="errors.education" class="error">{{ errors.education[0] }}</p>
    </div>

    <div>
      <label for="phone">Phone:</label>
      <input id="phone" v-model="formData.phone" type="text" />
      <p v-if="errors.phone" class="error">{{ errors.phone[0] }}</p>
    </div>

    <div>
      <label for="sex">Sex:</label>
      <input id="sex" v-model="formData.sex" type="text" />
      <p v-if="errors.sex" class="error">{{ errors.sex[0] }}</p>
    </div>

    <div>
      <label for="reg">Registration:</label>
      <input id="reg" v-model="formData.reg" type="text" />
      <p v-if="errors.reg" class="error">{{ errors.reg[0] }}</p>
    </div>

    <div>
      <label for="district">District:</label>
      <input id="district" v-model="formData.district" type="text" />
      <p v-if="errors.district" class="error">{{ errors.district[0] }}</p>
    </div>

    <div>
      <label for="chamber_phone">Chamber Phone:</label>
      <input id="chamber_phone" v-model="formData.chamber_phone" type="text" />
      <p v-if="errors.chamber_phone" class="error">{{ errors.chamber_phone[0] }}</p>
    </div>

    <div>
      <label for="visiting_hours">Visiting Hours:</label>
      <input id="visiting_hours" v-model="formData.visiting_hours" type="text" />
      <p v-if="errors.visiting_hours" class="error">{{ errors.visiting_hours[0] }}</p>
    </div>

    <div>
      <label for="chamber_address">Chamber Address:</label>
      <input id="chamber_address" v-model="formData.chamber_address" type="text" />
      <p v-if="errors.chamber_address" class="error">{{ errors.chamber_address[0] }}</p>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>


<script setup>
  import { ref } from 'vue';
  import { useRuntimeConfig } from '#app';
  import Loading from '@/components/loading.vue';

  const pending = ref(false);

  // Form data and errors
  const formData = ref({
    full_name: '',
    education: '',
    phone: '',
    sex: '',
    reg: '',
    district: '',
    chamber_phone: '',
    visiting_hours: '',
    chamber_address: '',
  });
  const errors = ref({});

  // Runtime configuration
  const config = useRuntimeConfig();
  const apiUrl = `${config.public.apiBase}/api/save-doctor`;

  // Submit the form
  const submitForm = async () => {
    pending.value = true;
    
    errors.value = {}; // Clear previous errors
    try {
      const response = await $fetch(apiUrl, {
        method: 'POST',
        body: formData.value,
      });

      if(response.errors){
        errors.value = response.errors;
      }

      if (response.success) {
        // Reset form on success
        Object.keys(formData.value).forEach(key => {
          formData.value[key] = '';
        });

        alert('Form submitted successfully!');
      }
      
    } catch (error) {
      alert('Some unexpected error appears. Please try again later')
    }
    pending.value = false;
    
  };
</script>

<style>
.error {
  color: red;
  font-size: 0.875rem;
}
</style>
