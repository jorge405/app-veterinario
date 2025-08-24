<script>
import {Toast} from '@/utils/toast.js';
import axios from 'axios';
export default{
    data(){
        return{
            nombre_completo:'',
            usuario:'',
            contrasena:'',
            tipo_us:'',
            listUser:null
        }
    },
    mounted(){
        this.listUsers();
    },
    methods:{
        async crearUsuario(){
            
            try {
             const datos={
                nombre_completo:this.nombre_completo,
                usuario:this.usuario,
                contrasena:this.contrasena,
                tipo_us:this.tipo_us
             }
             const response= await axios.post('http://localhost:3000/veterinario/addUser',datos)
                if (response.data.status==='ok') {
                    this.nombre_completo='',
                    this.usuario='',
                    this.contrasena='',
                    this.tipo_us=''
                    Toast.fire({
                        icon:'success',
                        title:'Veterinario DOGS',
                        text:'Usuario creado exitosamente',

                    })
                } else if(response.data.status==='error'){
                    Toast.fire({
                        icon:'error',
                        title:'Veterinaria DOGS',
                        text:'Error al crear usuario'
                    })
                }
            } catch (error) {
                console.log('hubo un problema servidor:',error)
            }
        },
        async listUsers(){
            try {
                const response = await axios.get('http://localhost:3000/veterinario/getUsers')
                if (response.data.status ==='ok') {
                    this.listUser= response.data.users;
                }else if(response.data.status ==='error'){
                    console.log('error con los usuarios')
                }
            } catch (error) {
                console.log('problemas con el servidor:',error);
            }
        }
    }
}

</script>

<template>
<div class="bg-white/90  flex flex-row space-x-5 items-start justify-center mt-5 mx-auto rounded-lg py-10 h-[500px]  md:min-w-6xl md:ml-70 z-50 shadow-xl/30">
<div class=" flex flex-col space-y-4 ">
    <form method="post" >
        <div class="block">
        <label for="" class=" font-Outfit text-sm  block mx-1 my-1 text-slate-700">Nombre completo</label>
        <input type="text" v-model="nombre_completo" class=" text-sm min-w-lg bg-gray-200 rounded-md placeholder:text-xs placeholder:font-Outfit placeholder:text-slate-500 p-2 mx-1 focus:outline-slate-200 " placeholder="ingrese su nombre completo ">
        </div>
        <div class="block">
            <label for="" class=" font-Outfit text-sm  block mx-1 my-1 text-slate-700">usuario</label>
            <input type="text" v-model="usuario" class="text-sm min-w-lg bg-gray-200 rounded-md placeholder:text-xs placeholder:font-Outfit placeholder:text-slate-500 p-2 mx-1 focus:outline-slate-200 " placeholder="ingrese su usuario ">
        </div>
        <div class="block">
            <label for="" class=" font-Outfit text-sm  block mx-1 my-1 text-slate-700">constraseña</label>
            <input type="text" v-model="contrasena" class="text-sm min-w-lg bg-gray-200 rounded-md placeholder:text-xs placeholder:font-Outfit placeholder:text-slate-500 p-2 mx-1 focus:outline-slate-200 " placeholder="******* ">
        </div>
        <div class="block">
            <label for="" class="  text-slate-700 text-sm font-Outfit mx-1 my-1 block">Tipo</label>
                    <select v-model="tipo_us" class="bg-gray-200 h-11  appearance-none rounded-lg   font-Outfit  px-4 p-1.5 text-xs text-gray-800/90 min-w-lg placeholder:text-gray-600 mx-1  focus:outline-gray-300  ">
                        <option value="" class=" font-Outfit text-slate-700 font-xs rounded-lg" selected disabled>selecciona tipo</option>
                        <option value="ADMINISTRADOR" class=" font-light text-gray-800/90 font-am font-Outfit rounded-lg">ADMINISTRADOR</option>
                        <option value="VETERINARIA" class=" font-light font-Outfit rounded-lg">VETERINARIA</option>
                    </select>
        </div>
    </form>
    <div class="flex  mt-4 mx-1">
        <button type="button" @click="crearUsuario" class=" bg-teal-600 p-2 min-w-lg rounded-lg text-white hover:bg-teal-500 cursor-pointer transition-colors ">crear usuario</button>
    </div>
</div>
<!-- AQUI ESTARA LA TABLA-->
<div class="overflow-hidden rounded-xl border border-gray-200 bg-white h-[420px] z-50 shadow-xl/30">
<div class=" flex min-w-lg h-full  bg-gray-200 rounded-lg overflow-y-auto">
    <table class=" min-w-full h-fit custom-scrollbar mt-3 mx-2">
       <thead>
        <tr class="border-b border-gray-300">
            <th  class="px-2 py-3 text-left w-3/11">
                <p class=" font-Outfit text-slate-500  text-xs text-theme-xs">Nombre</p>
            </th>
            <th class="px-2 py-3 text-left w-3/11"> 
                <p class=" font-Outfit text-slate-500 text-xs text-theme-xs">usuario</p>
            </th>
            <th class="px-2 py-3 text-left w-3/11"> 
                <p class=" font-Outfit text-slate-500 text-xs text-theme-xs">tipo</p>
            </th>
            <th class="px-2 py-3 text-left w-3/11">
                <p class=" font-Outfit text-slate-500 text-xs text-theme-xs">Accion</p>
            </th>
        </tr>
       </thead> 
       <tbody class="divide-y divide-gray-700">
            <tr class=" border-t border-gray-300" v-for="(user,index) in listUser" :key="index">
                <td class="px-2 py-3">
                                <div class="flex items-center gap-3">
                                    <div>
                                        <span class="block text-xs font-Outfit text-theme-sm text-slate-600 ">{{ user.nombre_completo }}</span>
                                    </div>
                                </div>
                </td>
                <td class="px-2 py-3 ">
                                <div class="flex items-center gap-3 ">
                                    <div>
                                        <span class="block text-xs font-Outfit text-theme-sm text-slate-600 ">{{ user.usuario }}</span>
                                    </div>
                                </div>
                </td>
                <td class="px-2 py-3  ">
                                <div class="flex items-center gap-3 ">
                                    <div>
                                        <span class="block text-xs font-Outfit text-theme-sm text-slate-600 ">{{ user.tipo_us }}</span>
                                    </div>
                                </div>
                </td>
                <td>
                    <div class="flex items-center">
                        <div class=" flex-row flex space-x-1">
                            <i class=" pi pi-user-edit text-gray-700 p-1 rounded-full border border-gray-800 cursor-pointer transition-all hover:scale-110  hover:duration-300 hover:ease-in-out "></i>
                            <i class=" pi pi-trash text-gray-700 p-1 rounded-full border border-gray-800 cursor-pointer  transition-all hover:scale-110  hover:duration-300 hover:ease-in-out"></i>
                        </div>
                    </div>
                </td>
            </tr>
       </tbody>
    </table>
</div>
</div>    

</div>
</template>



