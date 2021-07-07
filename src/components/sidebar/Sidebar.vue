<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'
export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
 <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <div class="hamburger" @click="hamburgerOpen = !hamburgerOpen" :class="hamburgerOpen ? 'hamburger--is-open' : ''">
    <div class="hamburger__item hamburger__item--first"></div>
    <div class="hamburger__item hamburger__item--middle"></div>
    <div class="hamburger__item hamburger__item--last"></div>
    </div>
    </span>

    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/games" icon="fas fa-columns">Games</SidebarLink>
    <SidebarLink to="/following" icon="fas fa-chart-bar">Following</SidebarLink>
    <SidebarLink to="/history" icon="fas fa-users">History</SidebarLink>
    <SidebarLink to="/events" icon="fas fa-image">Events</SidebarLink>

   
  </div>
</template>



<style scoped lang="scss">
.sidebar {
  color: white;
  background-color: #171717;
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  border-right:1px solid rgb(71, 71, 71);
}

.collapse-icon {
  // position: absolute;
  top: 0;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}

.hamburger {
  padding:10px;
  margin:10px;
  height: 15px;
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    cursor: pointer;
    border-radius: 100%;
    background-color: gray;
  }
  
  &__item {
    height: 2px;
    width: 100%;
    background: white;
    transition: transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 300ms linear;
    
  }
}
</style>