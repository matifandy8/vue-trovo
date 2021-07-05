<template>
<Nav/>
 <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
    <font-awesome-icon icon="user-secret" />

</template>

<script>
import Nav from "./components/Nav"
import Sidebar from './components/sidebar/Sidebar.vue';
import { sidebarWidth } from '@/components/sidebar/state'



export default {
  name: 'App',
  components: {
    Nav,
    Sidebar
  },
    setup() {
    return { sidebarWidth }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/styles.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
body{
  margin: 0px 15px;
}

</style>
