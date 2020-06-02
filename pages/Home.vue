<template>
  <div>
    <div class="home">
      <h1 class="home-text">To the Future</h1>
      <Menu />
    </div>
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'

export default {
  components: {
    Menu,
  }
}
</script>

<style>
.home{
  position: relative;
  background-image: url(~assets/img/PC-on-table.jpg);
  background-size: cover;
  height: 100vh;
}

.home-text{
  position: absolute;
  color: rgb(10, 238, 200);
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin:0;
  padding:0;
  font-family: 'Homemade Apple', cursive;
  font-size: calc(30px + 2vw);
}
</style>
