<template>
<Loading :active="isLoading"/>
  <div class="container-fluid">
    <table class="table mt-3">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order,key) in orderList" :key="key">
          <td>{{ $filter.date(order.create_at) }}</td>
          <td>{{ order.user.email }}</td>
          <td>
            <ul class="list-unstyled" v-for="(item,i) in order.products" :key="i">
              <li><strong>{{ item.product.title }}</strong>
                數量 : {{ item.qty }} {{ item.product.unit }}
              </li>
            </ul>
          </td>
          <td>{{ $filter.currency(order.total) }}</td>
          <td>
            <div class="form-check form-switch">
              <input type="checkbox" class="form-check-input" :id="`${order.id}`" v-model="order.is_paid" @change="updatePaid(order)">
              <label v-if="order.is_paid" :for="`${order.id}`" class="form-label">已付款</label>
              <label v-else :for="`${order.id}`" class="form-label">未付款</label>
            </div>
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <button type="button" class="btn btn-outline-primary" @click="openModal(order)">檢視</button>
              <button type="button" class="btn btn-outline-danger" @click="openDelModal(order)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <OrderModal :orders="tempOrder"  ref="ordermodal"></OrderModal>
  <DelModal @delete-product="delOrder" :product="tempOrder" ref="orderdelmodal"></DelModal>
  <Pagination :pages="pages" @update-page="getOrders"></Pagination>
</template>

<script>
import OrderModal from '@/components/OrderModal.vue'
import DelModal from '@/components/DelModal.vue'
import Pagination from '@/components/Pagination.vue'
export default {
  data () {
    return {
      orderList: {},
      tempOrder: {},
      isPay: false,
      isLoading: false,
      pages: {}
    }
  },
  methods: {
    getOrders (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/orders?page=${page}`
      this.isLoading = true
      this.$http.get(api).then(res => {
        this.orderList = res.data.orders
        this.pages = res.data.pagination
        this.isLoading = false
      })
        .catch(() => {

        })
    },
    openModal (item) {
      this.tempOrder = { ...item }
      const OrderModal = this.$refs.ordermodal
      OrderModal.showModal()
    },
    openDelModal (item) {
      this.tempOrder = { ...item }
      const OrderDelModal = this.$refs.orderdelmodal
      OrderDelModal.showModal()
    },
    updatePaid (order) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${order.id}`
      this.isLoading = true
      this.$http.post(api).then(res => {
        this.$pushMessage(res, '付款')
      })
        .catch(() => {

        })
      this.isLoading = false
    },
    delOrder (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${id}`
      this.isLoading = true
      const OrderDelModal = this.$refs.orderdelmodal
      this.$http.delete(api).then(() => {
        this.getOrders()
        OrderDelModal.hideModal()
      })
        .catch(() => {

        })
      this.isLoading = false
    }
  },
  components: { OrderModal, DelModal, Pagination },
  created () {
    this.getOrders()
  }
}
</script>

<style>

</style>
