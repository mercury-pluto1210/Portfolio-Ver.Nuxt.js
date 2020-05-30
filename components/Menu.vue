<template>
  <div>
    <div class="menu-bars">
      <button @click="openDrawerMenu" v-if="closeMenuBar" class="bars-text">MENU</button>
    </div>
    <div v-click-outside="close" @click="close"></div>
    <transition name="right">
      <div v-if="drawerFlg" class="drawer-menu-wrapper">
        <div class="menu">
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
            <!-- <i class="fas fa-heart heart"></i> -->
            <a href="https://github.com/mercury-pluto1210?tab=repositories" class="github"><i class="fab fa-github github"></i></a>
          </div>
          <!-- ハートをクリックしたらアクションが起こるコンテンツ実装予定 -->
          <!-- <div class="like-contents">
            <p class="like-text">like!</p>
            <p class="like-text">Thank you</p>
          </div> -->
        </div>
      </div>
    </transition>
  </div>

</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  data() {
    return {
      drawerFlg: false,
      closeMenuBar: true
    };
  },
  methods: {
    openDrawerMenu: function() {
      this.drawerFlg = !this.drawerFlg;
      this.closeMenuBar = false
    },
    close: function(){
      this.drawerFlg = false
      this.closeMenuBar = true
    }
  },
  mounted () {
    this.popupItem = this.$el
  },
  directives: {
    ClickOutside
  }
}
</script>

<style>
.display{
  width: 100%;
  height: 100vh;
}

.right-enter-active, .right-leave-active {
  transform: translate(0px, 0px);
  transition: transform 1s cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.right-enter, .right-leave-to {
  transform: translateX(23vw) translateX(0px);
}

.bars-text{
  border: solid 2px #fff;
  color: #fff;
  font-size: 20px;
  display: inline-block;
  font-family: 'Roboto Condensed', sans-serif;
  padding: 20px 100px;
  background-color: rgba(102, 101, 101, 0.7);
  cursor: pointer;
  position: fixed;
  top: 40%;
  right: 0.5%;
  z-index: 5;
}

.bars-text:hover{
  background-color: rgba(102, 101, 101, 1.0);
}

.menu-bars{
  text-align: right;
}

.drawer-menu-wrapper {
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  width: 23%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  position: fixed;
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

</style>
