<script>
import "./sass/main.scss";

import Sidebar from '@/components/sidebar/Sidebar'
import Nav from '@/components/Nav'
import Home from '@/views/Home'
import { sidebarWidth } from '@/components/sidebar/state'
export default {
  components: { Sidebar,Nav,Home },
  setup() {
    return { sidebarWidth }
  }
}
</script>
<template>
<div class="container">
<Nav />
  <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
  <Home/>
  </div>
</template>

<style>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.container{
  width:100%;
  height:100%;
}
</style>