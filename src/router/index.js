import { createRouter,createWebHistory } from "vue-router";
import Add from "@/components/student/Add.vue";
import List from "@/components/student/List.vue";
import Edit from "@/components/student/Edit.vue";
import View from "@/components/student/view.vue";
import NotFound from "@/components/student/NotFound.vue";


const routes = [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
        path:'/add',
        name:'add',
        component:Add
    },
    {
        path:'/edit/:id',
        name:'edit',
        component:Edit
    },
    {
        path:'/view/:id',
        name:'view',
        component:View
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
      },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
  })
  
  export default router
