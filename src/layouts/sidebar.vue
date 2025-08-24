<script>
export default{
        data(){
                return{
                        menuAbierto:false,
                }
        },
        methods:{
                toggleMenu() {
                        this.menuAbierto = !this.menuAbierto;
                 }
        }

}
</script>

<template>
<div class="relative">
<transition name="slide">
<div v-if="menuAbierto" class="fixed top-0 left-0  min-h-screen w-56 bg-slate-800 z-50 border-r-3 border border-slate-700 transition-transform durantion-300">

<div class="flex items-center justify-between p-4 border-b border-slate-800">
          <span class="text-white font-bold text-lg">Menú</span>
          <i class="pi pi-bars text-white font-Outfit text-xl cursor-pointer rounded-full p-2 border border-slate-700 transition hover:rotate-180 hover:duration-300" @click="toggleMenu"></i>
</div>
<ul class="mt-6 space-y-4 px-6">
        <li><i class="pi pi-home mr-4 text-white"></i><router-link to="#" class="text-white font-Outfit hover:text-blue-400 transition">Home</router-link></li>
        <li><i class="pi pi-user mr-4 text-white"></i><router-link to="/usuario" class="text-white font-Outfit hover:text-blue-400 transition">Crear Usuario</router-link></li>
        <li><i class="pi pi-calendar-plus mr-4 text-white"></i><router-link to="/consultas" class="text-white font-Outfit hover:text-blue-400 transition">Consultas</router-link></li>        
</ul>

</div>
</transition>        

<!-- barra superior-->
<div class="flex  justify-between items-center py-8 bg-slate-800 z-50 shadow-x/30 ">
        <div @click="toggleMenu" class=" mx-5 ">
           <i class="pi pi-bars w-10 h-10  text-white cursor-pointer  "></i>     
        </div>
        <h3 class="font-md font-semibold mx-4 text-white">
        <slot name="title">Título</slot>
        </h3>
        <div class="mx-5 flex-row flex space-x-2 items-center">
        <span class="font-Outfit text-sm text-white ">Usuario:Admin</span>        
        <img src="@/assets/image/logo.jpg" alt="" class=" object-cover w-15 h-15 rounded-full p-2">        
        </div>
</div>

<div  class=" flex flex-row min-h-screen bg-slate-200 transition-colors duration-300">
      <slot />
    </div>
</div>


</template>



<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-leave-from {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>