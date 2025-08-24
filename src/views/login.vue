<script>
import router from '@/router';
import axios from 'axios'
import {Toast} from '@/utils/toast.js';

export default{
    data(){
        return{
            usuario:'',
            contrasena:''
        }
    },
    methods:{
        async iniciarSesion(){
            try {
                const response = await axios.post('http://localhost:3000/veterinario/login',{
                    usuario:this.usuario,
                    contrasena:this.contrasena
                })
                console.log(response.data)
            if (response.data.status==='error') {
                Toast.fire({
                    icon:'error',
                    title:'veterinaria dogs',
                    text:'usuario o contraseña incorrectos',
                    
                })
                this.usuario='',
                this.contrasena=''
            }else if(response.data.status==='ok'){
                Toast.fire({
                    icon:'success',
                    title:'veterinaria dogs',
                    text:'usuario o contraseña incorrectos',
            
                })
                this.$router.push('/usuario')
            }
            } catch (error) {
              if (error.response && error.response.status===401) {
                Toast.fire({
                    icon:'error',
                    title:'veterinaria dogs',
                    text:'usuario o contraseña incorrectos',
                    
                })
                this.usuario='',
                this.contrasena=''
              }else{
                console.log('error en el servidor', error)
              }  
                
            }
            
        }
    }
}
</script>

<template>
<div class=" fixed min-h-screen min-w-screen bg-[url(@/assets/image/fondo.jpeg)] bg-no-repeat bg-cover ">
    <div class=" flex flex-row mt-40 mx-30 z-50 space-x-50">
        <div class="flex rounded-2xl bg-white shadow-xl/30 z-50">
            <img src="@/assets/image/logo.jpg" alt="" class="object-cover w-120 h-120 mask-r-from-50% rounded-2xl">
        </div>
        <div class=" flex flex-col bg-slate-700 min-w-md h-[420px] rounded-xl shadow-xl/30 z-50  ">
            <span class="text-white mx-auto mt-10 font-Outfit text-xl">Veterinario DOGS</span>
            <hr class=" text-gray-500 mt-4">
            <form method="post">
                <div class="block mt-10">
                    <label for="" class=" text-gray-300 font-Outfit text-sm mt-5 mb-2 block mx-22">usuario</label>
                    <input type="text" v-model="usuario" placeholder="ingrese su usuario" class=" bg-slate-300 rounded-lg p-1 mx-auto block placeholder:text-sm w-70 focus:outline-slate-400"> 
                </div>
                <div class="block mt-5">
                    <label for="" class="text-gray-300 font-Outfit text-sm mt-5 mb-2 mx-22 block">password</label>
                    <input type="password" v-model="contrasena" placeholder="******" class="bg-slate-300 rounded-lg p-1 mx-auto block placeholder:text-sm w-70 focus:outline-slate-400">
                </div>
            </form>
            <div class="block mt-10 mx-auto">
                <button type="button" @click="iniciarSesion" class=" p-3 bg-green-700 text-white font-Outfit text-sm rounded-lg w-70 cursor-pointer hover:bg-green-600">Iniciar sesion</button>
            </div>
        </div>
    </div>
</div>


</template>