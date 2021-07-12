<template>
  <div class="nav">
    <div class="search">
      <input type="text" placeholder="Users, Channels, Games" />
          <i class="icon fas fa-search" />

    </div>
  
    <a class="modal-show" href="#modal">Log In / Sign Up </a>

<div class="modal" id="modal">
   <div class="modal-content">
    <a class="modal-hide" href="#">✕</a>
    <div class="header">
     <ul>
       <li><a >Log In </a></li>
      <li><a > Sign Up </a></li>
       </ul> 
    </div>
    <form >
  <input type="text" id="fname" name="fname" placeholder="Email">
  <input type="text" id="lname" name="lname" placeholder="Password">
  <p><span>Forgot password?</span></p>
  <input type="submit" value="Log in">
</form> 
  </div>
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


.bg-blue-bright {
  background-color: white;
}
.icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
  color:white;
}


.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  animation: modal-show 0.5s 1 forwards;
}

.modal-content {
  position: relative;
  width: 320px;
    min-height: 360px;
  padding: 45px 48px 40px;
  background-color: v.$color-bg-2;
}

.modal:target {
  display: flex;
  z-index:200;
}

.modal-show {
    line-height: 32px;
    min-width: 60px;
    font-size: 14px;
    background-color: v.$color-brand-regular;
    border: none;
    line-height: 1;
    text-align: center;
    cursor: pointer;
    color: white;
    padding: 10px 10px;
    border-radius: 4px;
      margin: 10px;

  text-decoration: none;
}

.modal-hide {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 60px;
  height: 60px;
  padding: 0;
  background-color: transparent;
  border: none;
  font-size: 25px;
  text-align: center;
  color: white;
  text-decoration: none;
}

@keyframes modal-show {
	0% { opacity: 0; }
	100% { opacity: 1; }
}

.header{
  ul{
    display:flex;
    margin:10px 20px;
    list-style:none;
    margin-bottom: 36px;
    li{
      color:white;
      font-size:18px;
      margin:0 10px;
    }
  }
}
form{

  input[type=text]{
    width:80%;
        padding-top: 10px;
    flex: 1;
    background-color: transparent;
    border: none;
    font-size: 12px;
    color: gray;
    border-bottom:1px solid gray;
    padding:20px;
    margin:0 20px;
  }
  input[type=submit]{
    margin-top: 20px;
    width: 90%;
    height: 48px;
    font-size: 18px;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    background-color: v.$color-brand-regular;
    border:none;
   }
  
  
  p{
    padding: 12px 1px 12px 36px;
    font-size: 12px;
    display:flex;
    justify-content:flex-start;
    span{
      color: v.$color-brand-regular;
      cursor:pointer;
    }
  }
}
</style>
