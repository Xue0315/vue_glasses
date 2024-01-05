import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'UserBoard',
    component: () => import('../views/user/UserBoard.vue'),
    children: [
      {
        path: '',
        name: 'UserHome',
        component: () => import('../views/user/UserHome.vue')
      },
      {
        path: 'login',
        name: 'AdminLogin',
        component: () => import('../views/user/AdminLogin.vue')
      },
      {
        path: 'products',
        name: 'UserProducts',
        component: () => import('../views/user/UserProducts.vue')
      },
      {
        path: 'cart',
        name: 'UserCart',
        component: () => import('../views/user/UserCart.vue')
      },
      {
        path: 'products/:productId',
        name: 'UserProuductItem',
        component: () => import('../views/user/UserProuductItem.vue')
      },
      {
        path: 'articles',
        name: 'UserArticles',
        component: () => import('../views/user/UserArticles.vue')
      },
      {
        path: 'articles/:articleId',
        name: 'UserArticleItem',
        component: () => import('../views/user/UserArticleItem.vue')
      },
      {
        path: 'favorite',
        name: 'UserFavorite',
        component: () => import('../views/user/UserFavorite.vue')
      },
      {
        path: '/ordersearch',
        name: 'OrderSearch',
        component: () => import('../views/user/OrderSearch.vue')
      },
      {
        path: '/order/:orderId',
        name: 'UserOrder',
        component: () => import('../views/user/UserOrder.vue')
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: () => import('../views/admin/DashBoard.vue'),
    children: [
      {
        path: 'adminproducts',
        name: 'AdminpPoducts',
        component: () => import('../views/admin/AdminProducts.vue')
      },
      {
        path: 'admincart',
        name: 'AdminCart',
        component: () => import('../views/admin/AdminCart.vue')
      },
      {
        path: 'admincoupons',
        name: 'AdminCoupons',
        component: () => import('../views/admin/AdminCoupons.vue')
      },
      {
        path: 'adminorders',
        name: 'AdminOrders',
        component: () => import('../views/admin/AdminOrders.vue')
      },
      {
        path: 'adminarticles',
        name: 'Articles',
        component: () => import('../views/admin/AdminArticles.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
