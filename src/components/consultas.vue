<script>
import componenteCar from '@/components/componenCar.vue';

export default{
    data(){
        return{

        }
    },
    components:{
        componenteCar
    }
}
</script>
<template>
    <div class=" flex mx-auto">
        <componenteCar>
            <div class=" grid grid-rows-2 gap-x-4">
                <div class=" flex flex-col space-y-4">
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
                                    <option value="ADMINISTRADOR" class=" font-light text-gray-800/90 font-sm font-Outfit rounded-lg">ADMINISTRADOR</option>
                                    <option value="VETERINARIA" class=" font-light font-Outfit text-gray-800/90 font-sm rounded-lg">VETERINARIA</option>
                                </select>
                    </div>
                </form>
                <div class="flex  mt-4 mx-1">
                    <button type="button" @click="crearUsuario" class=" bg-teal-600 p-2 min-w-lg rounded-lg text-white hover:bg-teal-500 cursor-pointer transition-colors ">crear usuario</button>
                </div>
                </div>

            </div>
            
        </componenteCar>
    </div>
        
            
                
    
    
</template>