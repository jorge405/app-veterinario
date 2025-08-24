<script>
import sidebar from '@/layouts/sidebar.vue';
import crearUsuario from '@/components/crearUsuario.vue';
export default{
    
    components:{
        sidebar,
        crearUsuario
    }
}
</script>

<template>
<sidebar>
    <template #title>Usuarios</template>
    <div class=" flex">
        <crearUsuario></crearUsuario>
    </div>
<router-view></router-view>
</sidebar>
</template>