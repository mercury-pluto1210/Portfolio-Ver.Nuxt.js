<template>
  <div class="loading">
    <h1 class="loading-text"><i>Hello World</i></h1>
    <img src="../assets/loading/puff.svg" class="loading-img">
  </div>
</template>

<script>

</script>

<style>
.loading{
  background-color: black;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.loading-text{
  color:rgb(112, 112, 112);
  font-family: 'Alegreya Sans SC', sans-serif;
  font-size: calc(40px + 4vw);
  animation-name: frashing;
  animation-duration:1s;
  animation-iteration-count:5;
  animation-delay:0.5s;
}

@keyframes frashing{
  0%{
      opacity: 1;
  }
  20%{
      opacity: 0.6;
  }
  40%{
      opacity: 0.2;
  }
  50%{
      opacity: 0;
  }
  60%{
      opacity: 0.2;
  }
  80%{
      opacity: 0.6;
  }
  100%{
      opacity: 1;
  }
}

.loading-img{
  width: calc(40px + 4vw);
}
</style>
