<template>
  <div class="nav">
    <div class="search">
      <input type="text" placeholder="Users, Channels, Games" />
          <i class="icon fas fa-search" />

    </div>
    <div class="btnlogin">
      <button>Log In / Sign Up 
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@use '@/sass/abstracts/_variables.scss' as v;
.nav {
  display: flex;
  justify-content: center;
  top: 0;
  right: 0;
  background-color: #171717;
  width: 100%;
  height: 60px;
  z-index: 50;
  border-bottom: 1px solid rgb(71, 71, 71);

  img {
    height: 100%;
  }
}

.search {
  background-color: rgb(49, 49, 49);
  position: relative;
  display: flex;
  align-items: center;
  max-width: 480px;
  height: 32px;
  margin: 10px 0px;
  border-radius: 3px;
  input {
    flex-grow: 1;
    min-width: 200px;
    max-width: 440px;
    height: 32px;
    color: gray;
    outline-style: none;
    appearance: none;
    padding: 0px 14px;
    background: transparent;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-image: initial;
    border-radius: 3px;
  }
}
.btnlogin {
  position: relative;
  margin: 10px;
  button {
    height: 32px;
    line-height: 32px;
    min-width: 60px;
    font-size: 14px;
    background-color: v.$color-brand-regular;
    border: none;
    line-height: 1;
    text-align: center;
    cursor: pointer;
    color: white;
    padding: 0px 10px;
    border-radius: 4px;
  }
}

.bg-blue-bright {
  background-color: white;
}
.icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
  color:white;
}
</style>
