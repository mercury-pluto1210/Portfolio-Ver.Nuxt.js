<template>
  <div>
    <Menu />
    <Menubars />
    <div class="contact">
      <h1 class="contact-title">Contact</h1>
      <div class="contact-form">
        <form action="">
          <div class="form-field">
              <input type="text" id="name" class="con transform" required>
              <label for="name" class="label">Name</label>
          </div>
          <div class="form-field">
              <input type="email" id="email" class="con transform" required>
              <label for="email" class="label">E-mail</label>
          </div>
          <div class="form-field">
              <textarea name="" class="main-text transform" id="message" cols="30" rows="10"></textarea>
              <label for="message" class="re-label">Message</label>
          </div>
          <input type="submit" class="submit" value="SUBMIT">
        </form>
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
  }
}
</script>

<style>
.contact{
  text-align: center;
  background-attachment: fixed;
  background-image: url(~assets/img/PC-on-table1.jpg);
  background-size: cover;
  height: 100vh;
  color: #fff;
  width: 100%;
}

.contact-title{
  font-size: 150px;
  font-family: 'Caveat', cursive;
  border-width: 0 0 2px 0;
  border-color: brown;
  border-bottom: brown;
}

.con{
  border-width: 0 0 3px 0;
  outline: none;
  border-color: rgb(255, 255, 255);
  background: rgba(0, 0, 0, 0);
  height: 40px;
  font-size: 20px;
  font-weight: 400;
  display: block;
  margin: 5% auto 0 auto;
  width: 30%;
  color: #fff;
  font-family: 'Lato', 'Noto Sans JP', '游ゴシック Medium', '游ゴシック体', 'Yu Gothic Medium', YuGothic, 'ヒラギノ角ゴ ProN',
  'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  letter-spacing: 3px;
}

.transform:hover{
  background-color: rgba(0,0,0,0);
}

.main-text{
  border-width: 0 0 3px 0;
  outline: none;
  border-color: rgb(255, 255, 255);
  background: rgba(0, 0, 0, 0);
  resize: none;
  width: 30%;
  height: 150px;
  font-size: 20px;
  font-weight: 400;
  margin: 3% auto 0 auto;
  color: #fff;
  font-family: 'Lato', 'Noto Sans JP', '游ゴシック Medium', '游ゴシック体', 'Yu Gothic Medium', YuGothic, 'ヒラギノ角ゴ ProN',
  'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  letter-spacing: 3px;
  line-height: 1.5em;
  display: block;
}

.form-field{
  position: relative;
}

.label{
  position: absolute;
  left: 35%;
  bottom: 1%;
  font-family: Lusitana, serif;
  font-size: 20px;
  font-weight: 600;
  color: #888;
  cursor: text;
  height: 40px;
  letter-spacing: 1px;
  line-height: 1.5em;
  transition: transform .2s ease-in-out;
}

.re-label{
  position: absolute;
  left: 35%;
  bottom: 70%;
  font-family: Lusitana, serif;
  font-size: 20px;
  font-weight: 600;
  color: #888;
  cursor: text;
  height: 40px;
  letter-spacing: 1px;
  line-height: 1.5em;
  transition: transform .2s ease-in-out;
}

.up{
  transform: translateY(-40px);
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

input{
  background-color: rgba(0,0,0,0);
}
</style>
