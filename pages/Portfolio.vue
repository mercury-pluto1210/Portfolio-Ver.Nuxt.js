<template>
  <div>
    <Menu />
    <div class="portfolio">
      <h1 class="portfolio-title">Portfolio</h1>
      <a href="https://mercury-pluto1210.netlify.app/" class="portfolio-link">
        <div class="my-page">
          <div class="my-page-text">
            <p>My Homepage</p>
            <p>初めて作成したWebサイトです</p>
          </div>
        </div>
      </a>
      <a href="https://github.com/mercury-pluto1210/Banmeshi" class="portfolio-link">
        <div class="banmeshi">
          <div class="banmeshi-text">
            <p>Banmeshi</p>
            <p>晩御飯を投稿できるサイトです</p>
          </div>
        </div>
      </a>
      <a href="https://mercury-pluto1210.github.io/Calculator-Ver.JavaScript/" class="portfolio-link">
        <div class="calculator">
          <div class="calculator-text">
            <p>Calculator</p>
            <p>大学の授業で作成した電卓です</p>
          </div>
        </div>
      </a>
      <div class="voice">
        <p>音声投稿サイト</p>
        <p>ハッカソンで作成したサイトです</p>
      </div>
      <div class="e-sports">
        <p>e-sports大会運営サイト</p>
        <p>現在作成中です</p>
      </div>
      <p class="continue">To be continued...</p>
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
.portfolio{
  background-color: rgb(43, 43, 43);
  width: 100%;
  color: #fff;
  text-align: center;
}

.portfolio-link{
  color: #fff;
}

.portfolio-link:hover{
  color: #fff;
}

.portfolio-title{
  font-size: calc(30px + 8vw);
  font-family: 'Caveat', cursive;
}

.my-page{
  background-image: url("~static/img/My-Homepage.jpg");
  background-size: cover;
  position: relative;
  height: 50vh;
  background-position: 50% 50%;
  border: 3px solid #fff;
  cursor: pointer;
  margin-bottom: 20px;
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
  top: 25%;
  left: 0;
  text-align: center;
  width: 100%;
  font-size: calc(10px + 2vw);
  font-family: 'Lato', 'Noto Sans JP', '游ゴシック Medium', '游ゴシック体', 'Yu Gothic Medium', YuGothic, 'ヒラギノ角ゴ ProN',
  'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  letter-spacing: 3px;
  line-height: 2em;
  cursor: pointer;
}

.banmeshi{
  background-image: url("~static/img/Banmeshi.jpg");
  background-size: cover;
  position: relative;
  height: 50vh;
  background-position: 50% 0;
  border: 3px solid #000;
  cursor: pointer;
  margin-bottom: 20px;
}

.banmeshi::before{
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.8);
}

.banmeshi:hover::before{
  background-color: rgba(0,0,0,0.9);
}

.banmeshi-text{
  position: absolute;
  top: 25%;
  left: 0;
  text-align: center;
  width: 100%;
  font-size: calc(10px + 2vw);
  font-family: 'Lato', 'Noto Sans JP', '游ゴシック Medium', '游ゴシック体', 'Yu Gothic Medium', YuGothic, 'ヒラギノ角ゴ ProN',
  'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  letter-spacing: 3px;
  line-height: 2em;
  cursor: pointer;
}

.calculator{
  background-image: url("~static/img/Calculator.jpg");
  position: relative;
  height: 50vh;
  background-position: 50% 50%;
  border: 3px solid #fff;
  cursor: pointer;
  background-repeat: no-repeat;
  margin-bottom: 20px;
}

.calculator::before{
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.8);
}

.calculator:hover::before{
  background-color: rgba(0,0,0,0);
}

.calculator-text{
  position: absolute;
  top: 25%;
  left: 0;
  text-align: center;
  width: 100%;
  font-size: calc(10px + 2vw);
  font-family: 'Lato', 'Noto Sans JP', '游ゴシック Medium', '游ゴシック体', 'Yu Gothic Medium', YuGothic, 'ヒラギノ角ゴ ProN',
  'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  letter-spacing: 3px;
  line-height: 2em;
  cursor: pointer;
}

.voice{
  font-family: 'Lato', 'Noto Sans JP', '游ゴシック Medium', '游ゴシック体', 'Yu Gothic Medium', YuGothic, 'ヒラギノ角ゴ ProN',
  'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  font-size: calc(10px + 2vw);
  border-bottom: 3px solid #000;
  margin-bottom: 20px;
}

.e-sports{
  font-family: 'Lato', 'Noto Sans JP', '游ゴシック Medium', '游ゴシック体', 'Yu Gothic Medium', YuGothic, 'ヒラギノ角ゴ ProN',
  'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  border-bottom: 3px solid #fff;
  font-size: calc(10px + 2vw);
}

.continue{
  padding: 5%;
  font-size: calc(20px + 1vw);
  font-family: 'Lato', 'Noto Sans JP', '游ゴシック Medium', '游ゴシック体', 'Yu Gothic Medium', YuGothic, 'ヒラギノ角ゴ ProN',
  'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  letter-spacing: 3px;
  margin-bottom: 0px;
}

@media screen and (max-width: 640px) {
  .my-page{
    height: 30vh;
    border: 1px solid #fff;
  }

  .banmeshi{
    height: 30vh;
    border: 1px solid #000;
  }

  .calculator{
    height: 30vh;
    border: 1px solid #fff;
  }
}
</style>
