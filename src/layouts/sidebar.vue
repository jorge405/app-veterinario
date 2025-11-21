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
<div  class="fixed top-0 left-0  min-h-screen w-16 bg-green-50 z-50 border-r-3 border border-slate-200 transition-transform durantion-300">

<div class="flex items-center justify-between px-6 mt-10 ">
          <span class="text-white font-bold text-lg" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#071d31" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.235 2.374c-.368.152-.697.482-1.356 1.14c-.659.66-.989.989-1.14 1.356a2 2 0 0 0 0 1.531c.151.368.48.697 1.14 1.356c.658.659.988.989 1.356 1.14a2 2 0 0 0 1.53 0c.368-.151.697-.48 1.356-1.14s.988-.988 1.14-1.356a2 2 0 0 0 0-1.53c-.152-.368-.48-.697-1.14-1.356s-.988-.989-1.356-1.141a2 2 0 0 0-1.53 0M4.87 8.738c-.367.152-.697.481-1.355 1.14c-.66.66-.989.989-1.141 1.356a2 2 0 0 0 0 1.531c.152.368.482.697 1.14 1.356c.66.659.989.988 1.356 1.14a2 2 0 0 0 1.531 0c.368-.152.697-.481 1.356-1.14s.988-.988 1.14-1.356a2 2 0 0 0 0-1.53c-.152-.368-.48-.698-1.14-1.357s-.988-.988-1.356-1.14a2 2 0 0 0-1.53 0m11.372 1.14c-.659.66-.988.989-1.14 1.356a2 2 0 0 0 0 1.531c.152.368.481.697 1.14 1.356s.989.988 1.356 1.14a2 2 0 0 0 1.53 0c.368-.152.698-.481 1.357-1.14s.987-.988 1.14-1.356a2 2 0 0 0 0-1.53c-.153-.368-.481-.698-1.14-1.357c-.66-.659-.989-.988-1.356-1.14a2 2 0 0 0-1.531 0c-.367.152-.697.481-1.356 1.14m-5.008 5.224c-.368.152-.697.482-1.356 1.14c-.659.66-.989.989-1.14 1.357a2 2 0 0 0 0 1.53c.151.368.48.697 1.14 1.356c.658.659.988.989 1.356 1.14a2 2 0 0 0 1.53 0c.368-.151.697-.48 1.356-1.14s.988-.988 1.14-1.356c.203-.49.203-1.04 0-1.53c-.152-.368-.48-.698-1.14-1.356c-.659-.66-.988-.989-1.356-1.141a2 2 0 0 0-1.53 0"/></svg></span>
          
</div>
<ul class="mt-15 space-y-4 px-6">
        <li>
                <router-link to="#">
                        <span class="cursor-pointer p-2 rounded-md transition-colors duration-200 hover:bg-red-600 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#071d31" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z"/><path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21"/></g></svg></span>
                </router-link>
        </li>
        <li>
                <router-link to="/usuario" >
                        <span class=" cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#071d31" stroke-width="1.5"><circle cx="12" cy="6" r="4"/><path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"/></g></svg></span>
                </router-link>
        </li>
        <li>
                <router-link to="/consultas" class="text-white font-Outfit  transition">
                        <span class=" cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#071d31" d="M7 2h1a1 1 0 0 1 1 1v1h5V3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3V3a1 1 0 0 1 1-1m8 2h1V3h-1zM8 4V3H7v1zM6 5a2 2 0 0 0-2 2v1h15V7a2 2 0 0 0-2-2zM4 18a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9H4zm8-5h5v5h-5zm1 1v3h3v-3z" stroke-width="0.5" stroke="#071d31"/></svg></span>
                </router-link>
        </li>        
</ul>

</div>
</transition>        

<!-- barra superior-->
<div class="flex  justify-between items-center py-2 bg-transparent z-50 shadow-x/30 ">
        <div @click="toggleMenu" class=" mx-5 ">
           <i class="pi pi-bars w-10 h-10  text-white cursor-pointer  "></i>     
        </div>
        <h3 class="font-md font-semibold mx-4 text-slate-600">
        <slot name="title">Título</slot>
        </h3>
        <div class="mx-5 flex-row flex space-x-2 items-center">
        <span class="font-Outfit text-sm  text-slate-700 ">Usuario:Admin</span>        
        <img src="@/assets/image/logo.jpg" alt="" class=" object-cover w-15 h-15 rounded-full p-2">        
        </div>
</div>

<div  class=" flex flex-row min-h-screen bg-white transition-colors duration-300">
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