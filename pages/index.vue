<template>
  <div>
    <!-- <Loading /> -->
    <div class="home">
      <h1 class="home-text">To the Future</h1>
      <Menubars />
    </div>
    <Menu />
  </div>
</template>

<script>
import Loading from '~/components/Loading.vue'
import Menu from '~/components/Menu.vue'
import Menubars from '~/components/Menu-bars.vue'

export default {
  components: {
    Loading,
    Menu,
    Menubars
  }
}
</script>

<style>
.home{
    position: relative;
    background-image: url(~assets/img/PC-on-table1.jpg);
    background-size: cover;
    height: 100vh;
    /* display: none; */
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
    font-size: 70px;
}

</style>
