<script>
import Login from './login.vue'
import Register from './register.vue'
import useStore from '../../stores'
const store = useStore()

  export default {
    data() {
      return {
      
      store:{}
      
      }
    },
    computed:{
    isLogin(){
    return this.store.isLogin
    }
    },
    created() {
      this.store = useStore()


    },
    
    props:[],
    components: {
    Login,
    Register
    }
  
  }
</script>

<template>

 <Login v-if="isLogin" />
 <Register v-else />

</template>

<style module>

</style>