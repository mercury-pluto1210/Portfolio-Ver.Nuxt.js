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
    text-align: center;
}

.loading-text{
    color:rgb(112, 112, 112);
    font-family: 'Alegreya Sans SC', sans-serif;
    font-size: 100px;
    padding-top: 250px;
    text-align: center;
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
    width: 100px;
    text-align:center;
    vertical-align:middle;
    margin:auto;
}
</style>
