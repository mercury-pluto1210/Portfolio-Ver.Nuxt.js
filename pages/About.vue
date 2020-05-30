<template>
  <div>
    <Menu />
      <div class="about">
        <h1 class="about-title"><i>About</i></h1>
        <div class="about-main">
          <div class="about-name">
            <div class="about-name-display">
              <h2 class="about-name-English">Yuto Saito</h2>
              <p class="about-name-Japanese">斉藤 勇人</p>
            </div>
          </div>
          <div class="text-style">
            <div class="about-history">
              <h2 class="about-history-title">History</h2>
              <table class="history-table">
                <tr v-for="(list, index) in lists" v-bind:key="index">
                  <td class="history-day">{{ list.day }}</td>
                  <td class="history-text">{{ list.contents }}</td>
                </tr>
              </table>
            </div>
          <div class="about-skill">
            <h2 class="about-skill-title">Skill</h2>
            <p class="skill-text">HTMLとCSS、jQueryの勉強が終わり、現在はNuxt.jsを勉強中</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'

export default {
  components: {
    Menu,
  },

  data (){
    return{
      lists: [
        { id: 1, day: '1999/12/10', contents: '東京で生まれ東京で育つ' },
        { id: 2, day: '2018/04/01', contents: '東京電機大学に入学する' },
        { id: 3, day: '2019/10/31', contents: '学生エンジニア団体stegに加入する' }
      ]
    }
  }
}
</script>

<style>
.about{
  background-attachment: fixed;
  background-image: url(~assets/img/PC-on-table.jpg);
  background-size: cover;
  height: 100%;
  color: #fff;
}

.about-title{
  font-family: 'Caveat', cursive;
  text-align: center;
  font-size: calc(30px + 8vw);
  color: rgb(161, 150, 150);
  top: 80px;
  z-index: 1;
  letter-spacing: 8px;
}

.about-main{
  background: #000;
  height: 120vh;
  opacity: 0.9;
  padding-top: 2em;
}

.about-name{
  background-color: rgb(43, 42, 42);
  margin: 2em 2%;
  letter-spacing: 5px;
  height: 15vw;
  width: 50vw;
  position: relative;
}

.about-name-display{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
}

.about-name-English{
  font-size: calc(5px + 3vw);
  font-family: 'Economica', sans-serif;
}

.about-name-Japanese{
  font-size: calc(5px + 1vw);
  font-family: 'Sawarabi Gothic', sans-serif;
  text-align: center;
}

.text-style{
  text-align: center;
  font-family: 'Lato', 'Noto Sans JP', '游ゴシック Medium', '游ゴシック体', 'Yu Gothic Medium', YuGothic, 'ヒラギノ角ゴ ProN',
  'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  letter-spacing: 3px;
}

.about-history-title{
  font-size: calc(30px + 2vw);
}

.history-table{
  text-align: left;
  padding: 1em 10% 0 10%;
  line-height: 2em;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 30px 0;
  font-size: calc(12px + 0.5vw);;
}

.history-day{
  padding-right: 10px;
}

.about-skill-title{
  font-size: calc(30px + 2vw);
  padding-top: 100px;
}

.skill-text{
  padding: 1em 10% 0 10%;
  font-size: calc(12px + 0.5vw);
}
</style>
