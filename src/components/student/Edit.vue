<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import useStudent from '@/composable/studentApi';
const {studentData,error,getStudent,editStudent} = useStudent();
const route = useRoute();
onMounted(()=>{
  getStudent(route.params.id)
  console.log(studentData)
})
const handleUpdateStudentForm = (async () => {
   editStudent(route.params.id,studentData.value)
});
</script>
<template>
  <div class="shadow-md pb-6">
    <form
      @submit.prevent="handleUpdateStudentForm"
      class="w-full" v-if="studentData"
    >
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="stuid"> ID: </label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="stuid"
            v-model.trim="studentData.id"
            class="border-2 border-gray-200 w-full py-2 px-2"
            readonly
            disabled
          />
        </div>
      </div>

      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="stuname"> Name: </label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="stuname"
            v-model.trim="studentData.name"
            class="border-2 border-gray-200 w-full py-2 px-2"
            required
          />
        </div>
      </div>

      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="stuemail"> Email: </label>
        </div>
        <div class="w-4/5">
          <input
            type="email"
            id="stuemail"
            v-model.trim="studentData.email"
            class="border-2 border-gray-200 w-full py-2 px-2"
            required
          />
        </div>
      </div>

      <div class="m-8 flex justify-center">
        <button
          type="submit"
          class="bg-purple-700 text-white font-medium py-2 rounded-md px-6 hover:bg-purple-800 mr-6"
        >
          Save
        </button>
        <RouterLink :to="{ name: 'list' }">
          <button
            type="button"
            class="bg-emerald-700 text-white font-medium p-2 rounded-md hover:bg-emerald-800"
          >
            Back to Home
          </button>
        </RouterLink>
      </div>
    </form>
  </div>
</template>
<style scoped></style>
