<script>

import Sidebar from '@/layouts/sidebar.vue';
import consultas from '@/components/consultas.vue';
export default{
    data(){
        return{

        }
    },
    components:{
     Sidebar,
     consultas
    }
}
</script>

<template>
    <Sidebar>
    <template  #title>Consultas</template>
    <consultas>

    </consultas>
    
    <router-view></router-view>
    </Sidebar>
    
    
</template>