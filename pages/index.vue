<template>
  <div>
    <Loading />
    <div class="index">
      <h1 class="index-text">To the Future</h1>
      <Menu />
    </div>
  </div>
</template>

<script>
import Loading from '~/components/Loading.vue'
import Menu from '~/components/Menu.vue'

export default {
  components: {
    Loading,
    Menu,
  }
}
</script>

<style>
.index{
  background-image: url("~static/img/PC-on-table.jpg");
  background-size: cover;
  height: 100vh;
  display: none;
  position: relative;
}

.index-text{
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
