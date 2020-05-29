<template>
  <div class="menu-bars">
    <p class="bars-text">MENU</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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
  top: 320px;
  right: 10px;
  z-index: 5;
}

.menu-bars{
  text-align: right;
}
</style>
