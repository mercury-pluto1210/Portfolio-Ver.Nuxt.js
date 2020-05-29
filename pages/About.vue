<template>
  <div>
    <Menu />
      <div class="about">
        <Menubars />
        <h1 class="about-title"><i>About</i></h1>
        <div class="about-main">
          <div class="about-name">
            <h2 class="about-name-English">Yuto Saito</h2>
            <p class="about-name-Japanese">斉藤 勇人</p>
          </div>
          <div class="slogan">
            <p>Towards the Future</p>
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
import Menubars from '~/components/Menu-bars.vue'

export default {
  components: {
    Menu,
    Menubars
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
  background-image: url(~assets/img/PC-on-table1.jpg);
  background-size: cover;
  height: 100%;
  color: #fff;
  position: relative;
}

.about-title{
  font-family: 'Caveat', cursive;
  text-align: center;
  font-size: 150px;
  color: rgb(161, 150, 150);
  position: relative;
  top: 80px;
  z-index: 10;
  letter-spacing: 8px;
}

.about-main{
  background: #000;
  height: 1000px;
  opacity: 0.9;
}

.about-name{
  background-color: rgb(43, 42, 42);
  display: inline-block;
  margin: 8% 0 8% 2%;
  padding: 40px 12% 40px 20%;
  letter-spacing: 5px;
}

.about-name-English{
  font-size: 50px;
  padding-bottom: 5px;
  font-family: 'Economica', sans-serif;
}

.about-name-Japanese{
  font-size: 20px;
  text-align: center;
  font-family: 'Sawarabi Gothic', sans-serif;
}

.slogan{
  position: absolute;
  left: 43%;
  top: 30%;
  font-size: 30px;
  font-family: 'Homemade Apple', cursive;
  opacity: 0.7;
}

.text-style{
  text-align: center;
  font-family: 'Lato', 'Noto Sans JP', '游ゴシック Medium', '游ゴシック体', 'Yu Gothic Medium', YuGothic, 'ヒラギノ角ゴ ProN',
  'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  letter-spacing: 3px;
}

.about-history-title{
  font-size: 50px;
}

.history-table{
  text-align: left;
  padding-top: 20px;
  line-height: 2em;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 30px 0;
}

.history-day{
  padding-right: 10px;
}

.about-skill-title{
  font-size: 50px;
  padding-top: 100px;
}

.skill-text{
  padding-top: 20px;
}
</style>
