<template>
  <Loading :active="isLoading"/>
  <div class="row">
    <div class="col">
      <div class="text-end mt-4">
        <button type="button" class="btn btn-primary" @click="openModal(true)">建立新的優惠券</button>
      </div>
      <table class="table mt-4">
        <thead>
          <tr>
            <th>名稱</th>
            <th>折扣百分比</th>
            <th>到期日</th>
            <th>是否啟用</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in coupons" :key="item.id">
            <td>{{ item.title }}</td>
            <td>{{ item.percent }}%</td>
            <td>{{ $filter.date(item.due_date) }}</td>
            <td>
              <div v-if="item.is_enabled" class="text-success">已啟用</div>
              <div v-else class="text-muted">未啟用</div>
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                  <button type="button" class="btn btn-outline-primary" @click="openModal(false,item)">編輯</button>
                  <button type="button" class="btn btn-outline-danger" @click="openDelModel(item)">刪除</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <CouponModal ref="couponmodal" :coupon="tempCoupons" @update-coupon="updateCoupon"/>
  <DelModal :product="tempCoupons" ref="delmodal" @delete-product="deleteCoupon"/>
  <Pagination :pages="pages" @update-page="getCoupons"/>
 </template>

<script>
import CouponModal from '@/components/CouponModal.vue'
import DelModal from '@/components/DelModal.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  data () {
    return {
      isNew: false,
      coupons: [],
      tempCoupons: {
        title: '',
        is_enabled: 1,
        percent: 80,
        code: ''
      },
      isLoading: false,
      pages: {}
    }
  },
  methods: {
    openModal (isNew, item) {
      const CouponModal = this.$refs.couponmodal
      this.isNew = isNew
      if (isNew) {
        this.tempCoupons = {
          due_date: new Date().getTime() / 1000
        }
      } else {
        this.tempCoupons = { ...item }
      }
      CouponModal.showModal()
    },
    openDelModel (item) {
      const DelModal = this.$refs.delmodal
      this.tempCoupons = { ...item }
      DelModal.showModal()
    },
    getCoupons (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`
      this.isLoading = true
      this.$http.get(api).then(res => {
        this.coupons = res.data.coupons
        this.pages = res.data.pagination
        this.isLoading = false
      }).catch((err) => {
        this.$pushMessage(err.response)
      })
    },
    updateCoupon (item) {
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'
      this.isLoading = true
      const CouponModal = this.$refs.couponmodal
      if (!this.isNew) {
        httpMethod = 'put'
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
      }
      CouponModal.hideModal()
      this.$http[httpMethod](api, { data: item }).then(res => {
        if (res.data.success) {
          if (httpMethod === 'put') {
            this.$pushMessage(res, '優惠券更新')
          } else {
            this.$pushMessage(res, '優惠券建立')
          }
          this.isLoading = false
          this.getCoupons()
        }
      }).catch((err) => {
        this.$pushMessage(err.response)
      })
    },
    deleteCoupon (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`
      const DelModal = this.$refs.delmodal
      this.isLoading = true
      DelModal.hideModal()
      this.$http.delete(api).then(() => {
        this.isLoading = false
        this.getCoupons()
      })
    }
  },
  components: { CouponModal, DelModal, Pagination },
  created () {
    this.getCoupons()
  }
}
</script>

<style lang="scss">
  .table{
    th{
      width: 400px;
    }
  }
</style>
