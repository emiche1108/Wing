<template>
  <div class="home">
    <h1 class="title-with-underline">
      Wing在庫管理
      <span class="underline"></span>
    </h1>
    
    <div class="button-grid">
      <router-link to="/zaiko" class="start-button">在庫計画</router-link>
      <router-link to="/inout" class="start-button">入出庫管理</router-link>
      <router-link to="/forecast" class="start-button">需要予測</router-link>
      <router-link to="/newitem" class="start-button">新商品登録</router-link>
      <router-link to="/master" class="start-button">マスタ管理</router-link>
      <router-link to="/setting" class="start-button">設定</router-link>
    </div>
  </div>

  
  <footer class="footer">
  <img src="/src/assets/images/truck.gif" alt="トラック" class="truck" />
  </footer>
</template>



<style scoped>
.home {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f8f9fa;
  padding: 60px;
  border-radius: 20px;
  box-shadow: 0 0 20px #d0d0d0; 
  width: 700px;
  margin: 80px auto 0;  /* 上に80px、左右はauto、下は0 余白*/
}

.title-with-underline {
  color: #2c3e50;
  font-size: 2.5rem;
  display: inline-block;  /* 文字幅に合わせて */
  position: relative;
  margin-bottom: 40px;
}

.underline {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;  /* タイトルとの距離 */
  height: 5px;
  width: 100%;
  background-color: #f1c40f;
  border-radius: 8px;
}


.button-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);   /* 2列にする */
  gap: 25px;   /* 縦の間隔 */
  padding: 20px 0;
  justify-items: center;
}

.start-button {
  background-color: #42b983;
  color: white;
  font-weight: bold; 
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  width: 160px;
  transition: background-color 0.3s ease;
}

.start-button:hover {
  background-color: #36966f;
}


.footer {
  margin-top: 60px;
}

.truck{
  display: block;
  margin: 40px auto 0;   /* 右寄せ */
  width: 180px;       
  opacity: 0.9;       /* 少し透過して主張抑える */
}



</style>

