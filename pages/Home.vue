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
  color: rgb(10, 238, 200);
  position: absolute;
  left: 0;
  top: 45%;
  width: 100%;
  text-align: center;
  font-family: 'Homemade Apple', cursive;
  font-size: calc(25px + 3vw);
}
</style>
