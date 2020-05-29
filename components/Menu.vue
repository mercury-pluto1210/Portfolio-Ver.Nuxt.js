<template>
  <div class="menu">
    <div class="menu-back">
      <p class="back"><i class="fas fa-angle-double-right back"></i></p>
    </div>
    <div class="menu-contents">
      <ul class="menu-lists">
        <li class="menu-list"><nuxt-link to="/Home" class="menu-text">Home</nuxt-link></li>
        <li class="menu-list"><nuxt-link to="/About" class="menu-text">About</nuxt-link></li>
        <li class="menu-list"><nuxt-link to="/Portfolio" class="menu-text">Portfolio</nuxt-link></li>
        <li class="menu-list"><nuxt-link to="/Contact" class="menu-text">Contact</nuxt-link></li>
      </ul>
    </div>
    <div class="menu-icons">
      <a href="https://twitter.com/SaitoYuto5" class="twitter"><i class="fab fa-twitter twitter"></i></a>
      <i class="fas fa-heart heart"></i>
      <a href="https://github.com/mercury-pluto1210?tab=repositories" class="github"><i class="fab fa-github github"></i></a>
    </div>
    <div class="like-contents">
      <p class="like-text">like!</p>
      <p class="like-text">Thank you</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.menu{
  position: fixed;
  top:0;
  right:-23%;
  background-color: #000;
  height: 100vh;
  width: 23%;
  margin-left: auto;
  z-index: 10;
}

.menu-back{
  padding: 10px;
}

.back{
  width: 30px;
}

.fa-angle-double-right{
  color: rgb(255, 255, 255);
}

.menu-contents{
  color: #fff;
  font-size: 2em;
  padding-top: 35%;
  margin: 0 auto;
}

.menu-lists{
  padding-left: 0px;
}

.menu-list{
  margin-bottom: 5%;
  text-align: center;
  list-style: none;
  text-decoration: none;
}

.menu-text{
  text-decoration: none;
  color: #fff;
}

.menu-text:hover{
  color: rgb(117, 116, 116);
  text-decoration: none;
}

.menu-icons{
  display: flex;
  justify-content: center;
  padding-top: 3em;
}

.fab{
  color: #fff;
  font-size: 2em;
  margin:0 1em;
  cursor: pointer;
  display: block;
}

.twitter:hover{
  color: #00acee;
  text-decoration: none;
}

.github:hover{
  color: #00ff6a;
  text-decoration: none;
}

.fas{
  color: #fff;
  font-size: 2em;
  cursor: pointer;
}

@keyframes liking {
  0% {
    transform: scale(0.5);
  }
  10% {
    transform: scale(0.7);
  }
  30% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.2);
  }
  80% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1.0);
  }
}

.like{
  color: rgb(255, 0, 170);
  animation: liking .2s;
}

.like-contents{
  display: none;
  padding-top: 10px;
}

.like-text{
  color: rgb(255, 251, 0);
  font-family: 'Bangers', cursive;
  letter-spacing: 2px;
  text-align: center;
}
</style>
