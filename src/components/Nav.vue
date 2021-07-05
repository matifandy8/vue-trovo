<template>
  <div class="nav">
     <div class="hamburger" @click="hamburgerOpen = !hamburgerOpen" :class="hamburgerOpen ? 'hamburger--is-open' : ''">
    <div class="hamburger__item hamburger__item--first"></div>
    <div class="hamburger__item hamburger__item--middle"></div>
    <div class="hamburger__item hamburger__item--last"></div>
  </div>
        <img alt="Vue logo" src="https://qph.fs.quoracdn.net/main-qimg-eb31ebaf8545558217a00abef4e80f2c" />
</div>

</template>

<script>
export default {
  
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.nav {
  display:flex;
    background-color: $color-bg-nav;
    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 50;
    img {
        height: 100%;
    }
}

.bg-blue-bright {
  background-color: $color-white;
}

.hamburger {
  margin: 10px;
  padding: 10px;
  height: 15px;
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    cursor: pointer;
    border-radius: 100%;
    background-color: $color-gray-3-alpha-80;
  }
  
  &__item {
    height: 2px;
    width: 100%;
    background: $color-white;
    transition: transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 300ms linear;
    
  }
}
</style>
