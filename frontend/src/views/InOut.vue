<template>
    <div class="inout">
      <h2> 在庫計画</h2>

      <table class="zaiko-table">
        <thead>
            <tr>
                <th>商品コード</th>
                <th>商品名</th>
                <th>在庫数</th>
                <th>出荷数</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>113300</td>
                <td>クラシエ ボタニケア</td>
                <td>120</td>
                <td>25</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>
  


  <style scoped>
  .zaiko-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.zaiko-table th, .zaiko-table td {
  border: 1px solid #ccc;
  padding: 8px 12px;
  text-align: center;
  background-color: #fff;
}

.zaiko-table th {
  background-color: #f1c40f;
  color: #2c3e50;
}


  </style>
  