<script setup>
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/vue/24/solid";
import useStudent from "@/composable/studentApi";
import { RouterLink } from "vue-router";
import { onMounted } from "vue";

const {
  studentData,
  error,
  getAllStudent,
  deletedStudent,
  statusCode,
  delError,
} = useStudent();
console.log("list", error);

onMounted(getAllStudent);

const deleteStudent = async (id) => {
  if (!window.confirm("Are you sure?")) {
    return;
  }
  await deletedStudent(id);
  await getAllStudent();
};
</script>
<template>
  <div class="bg-orange-600 p-4 grid grid-cols-9">
    <div class="col-span-6 md:col-span-8">
      <h1 class="text-3xl front-bold text-center mt-3">Student List</h1>
    </div>
    <div class="text-right">
      <RouterLink :to="{ name: 'add' }">
        <button
          class="text-white text-md bg-green-700 hover:bg-green-800 font-medium rounded-lg p-2 px-6"
        >
          <UserPlusIcon />Add
        </button>
      </RouterLink>
    </div>
  </div>
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
        <th class="py-1">No</th>
        <th class="py-1">Name</th>
        <th class="py-1">Email</th>
        <th class="py-1">Action</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr v-for="({ id, name, email }, i) in studentData" :key="id">
        <th class="py-2">{{ ++i }}</th>
        <th class="py-2">{{ name }}</th>
        <th class="py-2">{{ email }}</th>
        <th class="py-2">
          <RouterLink :to="{ name: 'view', params: { id: id } }">
            <EyeIcon class="text-blue-500 h-6 w-6 inline" />
          </RouterLink>
          <RouterLink :to="{ name: 'edit', params: { id: id } }">
            <PencilIcon class="text-emerald-500 h-6 w-6 mx-6 inline" />
          </RouterLink>
          <TrashIcon
            @click="deleteStudent(id)"
            class="text-red-500 h-6 w-6 inline cursor-pointer"
          />
        </th>
      </tr>
    </tbody>
  </table>
  <div
    v-if="delError"
    class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded font-medium"
    role="alert"
  >
    {{ delError.message }}
  </div>
  <div
    v-if="statusCode === 200"
    class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded font-medium"
    role="alert"
  >
    Student Deleted Successfully
  </div>
</template>
<style scoped></style>
