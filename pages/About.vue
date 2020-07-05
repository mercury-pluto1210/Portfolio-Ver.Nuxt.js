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
                  <td class="history-td history-day">{{ list.day }}</td>
                  <td class="history-td history-text">{{ list.contents }}</td>
                </tr>
              </table>
            </div>
          <div class="about-skill">
            <h2 class="about-skill-title">Skill</h2>
            <table class="skill-table">
              <tr v-for="(item, index) in items" v-bind:key="index">
                <td class="skill-td skill-name">{{ item.start }}</td>
                <td class="skill-td skill-start">{{ item.name }}</td>
                <td class="skill-td skill-level">{{ item.level }}</td>
              </tr>
            </table>
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
        { id: 3, day: '2019/10/31', contents: '学生エンジニア団体stegに加入する' },
        { id: 4, day: '2020/02 ～ 2020/03', contents: 'CREGG社主催ハッカソンに参加する'}
      ],

      items: [
        { id: 1, start: '2019/10 ～', name: 'HTML', level: '★★★' },
        { id: 2, start: '2019/10 ～', name: 'CSS', level: '★★★' },
        { id: 3, start: '2019/10 ～', name: 'JavaScript', level: '★★★' },
        { id: 4, start: '2020/01 ～', name: 'PHP', level: '★★☆'},
        { id: 5, start: '2020/02 ～', name: 'Node.js', level: '★☆☆' },
        { id: 6, start: '2020/02 ～', name: 'Vue.js', level: '★★☆' },
        { id: 7, start: '2020/02 ～', name: 'Nuxt.js', level: '★★☆' },
        { id: 8, start: '2018/04 ～', name: 'C', level: '★☆☆' },
        { id: 9, start: '2019/02 ～', name: 'Java', level: '★☆☆' },
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
  color: #fff;
}

.about-title{
  font-family: 'Caveat', cursive;
  text-align: center;
  font-size: calc(30px + 8vw);
  color: #fff;
  top: 80px;
  z-index: 1;
  letter-spacing: 8px;
}

.about-main{
  background: #000;
  opacity: 0.9;
  padding-top: 2em;
}

.about-name{
  background-color: rgb(43, 42, 42);
  margin: 2em 2%;
  letter-spacing: 5px;
  height: 18vw;
  width: 60vw;
  position: relative;
}

.about-name-display{
  position: absolute;
  top: 20%;
  left: 0;
  width: 100%;
  text-align: center;

}

.about-name-English{
  font-size: calc(5px + 4vw);
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

.skill-table{
  text-align: left;
  padding: 1em 10% 10% 10%;
  line-height: 2em;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 30px 0;
  font-size: calc(12px + 0.5vw);;
}

.skill-name{
  padding-right: 20px;
}

.skill-start{
  padding-right: 20px;
}

.skill-level{
  color: rgb(240, 216, 3);
}

@media screen and (max-width: 640px) {
  .history-table {
    width: 80%;
    border-spacing: 0 20px;
    border-collapse: separate;
    text-align: center;
  }

  .history-td {
    display: block;
    width: 100%;
  }

  .skill-table{
    width: 80%;
    border-spacing: 0 20px;
    border-collapse: separate;
    text-align: center;
  }

  .skill-td{
    display: block;
    width: 100%;
    padding: 0;
  }
}
</style>
