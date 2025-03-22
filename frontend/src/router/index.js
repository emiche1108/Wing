// vue-routerの関数をインポート
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'        // トップページ
import InOut from '../views/InOut.vue'              // 入出庫管理
import MasterHub from '../views/MasterHub.vue'      // マスターデータ管理
import NewItem from '../views/NewItem.vue'          // 新規商品登録
import Setting from '../views/Setting.vue'          // 設定画面
import ZaikoView from '../views/ZaikoView.vue'      // 在庫管理画面



// ルート定義
const routes = [
  { path: '/', component: HomeView },
  { path: '/inout', component: InOut },
  { path: '/master', component: MasterHub },
  { path: '/newitem', component: NewItem },
  { path: '/setting', component: Setting },
  { path: '/zaiko', component: ZaikoView }
]

// ルーター作成
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }
export default router
