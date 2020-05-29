<template>
  <div>
    <Menu />
    <Menubars />
    <div class="portfolio">
      <h1 class="portfolio-title">Portfolio</h1>
      <div class="my-page">
        <div class="my-page-text">
          <p>My Homepage</p>
          <p>Nuxt.jsとjQueryを使用</p>
        </div>
      </div>
      <p class="continue">To be continued...</p>
    </div>
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
import Menubars from '~/components/Menu-bars.vue'

export default {
  components: {
    Menu,
    Menubars,
  }
}
</script>

<style>
.portfolio{
  background-attachment: fixed;
  background: #110000;
  background-size: cover;
  height: 100vh;
  color: #fff;
  text-align: center;
  width: 100%;
}

.portfolio-title{
  font-size: 150px;
  font-family: 'Caveat', cursive;
}


.my-page{
  background: url(~assets/img/My-Homepage.jpg);
  background-size: cover;
  position: relative;
  height: 50%;
  background-position: 50% 50%;
  border: 3px solid #fff;
  cursor: pointer;
}

.my-page::before{
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.8);
}

.my-page:hover::before{
  background-color: rgba(0,0,0,0);
}

.my-page-text{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
  font-family: 'Lato', 'Noto Sans JP', '游ゴシック Medium', '游ゴシック体', 'Yu Gothic Medium', YuGothic, 'ヒラギノ角ゴ ProN',
  'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  letter-spacing: 3px;
  line-height: 2em;
  cursor: pointer;
}

.continue{
  padding-top: 5%;
  font-size: 2em;
  font-family: 'Lato', 'Noto Sans JP', '游ゴシック Medium', '游ゴシック体', 'Yu Gothic Medium', YuGothic, 'ヒラギノ角ゴ ProN',
  'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  letter-spacing: 3px;
}
</style>
