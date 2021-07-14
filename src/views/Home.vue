<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed, watch, getCurrentInstance, onMounted } from "vue";

import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  mounted() {
    console.log('aaaa')
    //console.log(this.$http)
  },
  // setup() {
 

  //   // const { proxy } = getCurrentInstance()
  //   // const sysName = proxy.$systemName
  //   // return {
  //   //  sysName
  //   // }


  //   //const { ctx } = getCurrentInstance(); //获取上下文实例，ctx=vue2的this
  //   //const { proxy } = getCurrentInstance(); 
  //   //const router=useRouter()

  //   onMounted(() => {
  //     //console.log(proxy, "proxy");
  //     //proxy.http();
  //   });

  // }
});
</script>
