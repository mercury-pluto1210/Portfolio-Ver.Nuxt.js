<template>
  <div>
    <Menu />
    <div class="contact">
      <h1 class="contact-title">Contact</h1>
      <div class="contact-form">
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSe1tyB1xLyDlLY2uuUks4RYf7yg1N8MYkBF0AVFm7cZjaxmaQ/formResponse?embedded=true">
          <div class="form-field">
              <input name="entry.1580705687" type="text" id="name" class="con transform" placeholder="Name" required>
          </div>
          <div class="form-field">
              <input name="entry.397100579" type="email" id="email" class="con transform" placeholder="E-mail" required>
          </div>
          <div class="form-field">
              <textarea name="entry.856947783" class="main-text transform" id="message" cols="30" rows="10" placeholder="Message"></textarea>
          </div>
          <input type="submit" class="submit" value="SUBMIT">
        </form>
      </div>
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
.contact{
  text-align: center;
  background-attachment: fixed;
  background-image: url("~static/img/PC-on-table.jpg");
  background-size: cover;
  height: 100vh;
  color: #fff;
  width: 100%;
}

.contact-title{
  font-size: calc(30px + 8vw);
  font-family: 'Caveat', cursive;
}

.con{
  border-width: 0 0 3px 0;
  border-color: rgb(255, 255, 255);
  outline: none;
  background: rgba(0, 0, 0, 0);
  height: 10vh;
  font-size: calc(12px + 0.5vw);;
  font-weight: 400;
  display: block;
  margin: 20px auto 0 auto;
  width: 50%;
  color: #fff;
  font-family: 'Lato', 'Noto Sans JP', '游ゴシック Medium', '游ゴシック体', 'Yu Gothic Medium', YuGothic, 'ヒラギノ角ゴ ProN',
  'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  letter-spacing: 3px;
}


.main-text{
  border-width: 0 0 3px 0;
  border-color: rgb(255, 255, 255);
  outline: none;
  background: rgba(0, 0, 0, 0);
  resize: none;
  width: 50%;
  height: 30vh;
  font-size: calc(12px + 0.5vw);;
  font-weight: 400;
  display: block;
  margin: 20px auto 0 auto;
  color: #fff;
  font-family: 'Lato', 'Noto Sans JP', '游ゴシック Medium', '游ゴシック体', 'Yu Gothic Medium', YuGothic, 'ヒラギノ角ゴ ProN',
  'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  letter-spacing: 3px;
  line-height: 1.5em;
}

.form-field{
  position: relative;
}

.submit{
  display: inline-block;
  background-color: #000;
  color: #fff;
  font-family: Raleway, sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  line-height: 24px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  margin-top: 80px;
  border-radius: 5px;
}

.submit:hover{
  background-color: #fff;
  color: #000;
}

@media screen and (max-width: 640px) {
  .con{
    width: 80%;
  }

  .main-text{
    width: 80%;
  }
}
</style>
