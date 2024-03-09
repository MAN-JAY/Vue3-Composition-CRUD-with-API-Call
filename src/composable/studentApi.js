import {ref} from 'vue'
import axios from 'axios'

export default function useStudent(){
    const url = "http://localhost:3000/students/";
    const studentData = ref([])
    const error = ref(null)
    const statusCode = ref(null)
    const delError = ref(null)

    //get all student data

    const getAllStudent = async () => {
        // reset state before fetching
        studentData.value = [] 
        error.value = null
        try {
        const res = await axios(url);
        studentData.value =  res.data;
        console.log(res)

        }catch(err){
            error.value = err;
            console.log(error.value)
        }
    }

    const getStudent = async (id) => {
        // reset state before fetching
        studentData.value = [] 
        error.value = null
        try {
        const res = await axios(url+id);
        studentData.value =  res.data;
        console.log(res)

        }catch(err){
            error.value = err;
        }
    }

    const createStudent = async (formData) => {
        studentData.value = [] 
        error.value = null
        try {
            const config = {
                method: 'POST',
                url:url,
                Headers:{
                    'Content-Type' : 'application/json'
                },
                data: JSON.stringify(formData)
            }
            const res = await axios(config) 
            studentData.value = res.data   
            statusCode.value = res.status
            
        } catch (err) {
            error.value = err;
        }

    }

    const editStudent = async (id,formData) => {
        studentData.value = [] 
        error.value = null
        try {
            const config = {
                method: 'PUT',
                url:url+id,
                Headers:{
                    'Content-Type' : 'application/json'
                },
                data: JSON.stringify(formData)
            }
            const res = await axios(config) 
            studentData.value = res.data   
            
        } catch (err) {
            error.value = err;
        }

    }

    const deletedStudent = async (id) => {
        try {
            const config = {
                method: 'DELETE',
                url:url+id,
                Headers:{
                    'Content-Type' : 'application/json'
                }
            }
            const res = await axios(config) 
            statusCode.value = res.status   
            
        } catch (err) {
            delError.value = err;
        }


    }

    return {studentData,error,delError,getAllStudent,getStudent,createStudent,editStudent,deletedStudent,statusCode};
}