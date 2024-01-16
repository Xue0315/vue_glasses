<template>
    <div class="modal fade" id="orderModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">訂單細節</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <h3 class="h3">用戶資料</h3>
              <table class="table">
                <tbody v-if="tempOrders.user">
                  <tr>
                    <td><strong>姓名</strong></td>
                    <td>{{ tempOrders.user.name }}</td>
                  </tr>
                  <tr>
                    <td><strong>Email</strong></td>
                    <td>{{ tempOrders.user.email }}</td>
                  </tr>
                  <tr>
                    <td><strong>電話</strong></td>
                    <td>{{ tempOrders.user.tel }}</td>
                  </tr>
                  <tr>
                    <td><strong>地址</strong></td>
                    <td>{{ tempOrders.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h3 class="h3">訂單細節</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <td><strong>訂單編號</strong></td>
                    <td style="width: 400px;">{{ tempOrders.id }}</td>
                  </tr>
                  <tr>
                      <td><strong>下單時間</strong></td>
                      <td>{{ $filter.date(tempOrders.create_at) }}</td>
                  </tr>
                  <tr>
                      <td><strong>付款時間</strong></td>
                      <td v-if="tempOrders.paid_date">{{ $filter.date(tempOrders.paid_date) }}</td>
                      <td v-else>時間不正確</td>
                  </tr>
                  <tr>
                      <td><strong>付款狀態</strong></td>
                      <td v-if="tempOrders.is_paid" class="text-success">已付款</td>
                      <td v-else>尚未付款</td>
                  </tr>
                  <tr>
                      <td><strong>總金額</strong></td>
                      <td>{{ $filter.currency(tempOrders.total) }}</td>
                  </tr>
                  <h3 class="h3 mt-4">選購商品</h3>
                  <tr v-for="(item,i) in tempOrders.products" :key="i">
                    <td><strong>{{ item.product.title }}</strong></td>
                    <td>{{ item.qty }} / {{ item.product.unit }}</td>
                    <td style="width: 200px;">{{ $filter.currency(item.total) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MixinModal from '@/methods/MixinModal'

export default {
  props: {
    orders: {
      type: Object,
      default () { return {} }
    }
  },
  data () {
    return {
      modal: '',
      tempOrders: {}
    }
  },
  watch: {
    orders () {
      this.tempOrders = this.orders
    }
  },
  mixins: [MixinModal]
}
</script>

<style>

</style>
