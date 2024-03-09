<script setup>
import useStudent from '@/composable/studentApi';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const {studentData,error,getStudent} = useStudent();
const route = useRoute();
onMounted(()=>{
  getStudent(route.params.id)
})

</script>
<template>
  <div class="shadow-md pb-6">
    <div
    v-if="error"
    class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded font-medium"
    role="alert"
  >
    {{ error.message }}
  </div>
    <table class="table-auto w-full" v-else-if="studentData">
      <thead class="bg-slate-600 text-white">
        <tr>
          <th class="py-1">ID</th>
          <th class="py-1">Name</th>
          <th class="py-1">Email</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr>
          <th class="py-2">{{studentData.id}}</th>
          <th class="py-2">{{studentData.name}}</th>
          <th class="py-2">{{studentData.email }}</th>
        </tr>
      </tbody>
    </table>

    <div class="m-8 flex justify-center">
      <RouterLink :to="{ name: 'list' }">
        <button
          type="button"
          class="bg-emerald-700 text-white font-medium p-2 rounded-md hover:bg-emerald-800"
        >
          Back to Home
        </button>
      </RouterLink>
    </div>
  </div>
</template>
<style scoped></style>
