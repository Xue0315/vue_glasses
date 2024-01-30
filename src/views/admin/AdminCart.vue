<template>
<Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="row">
      <div class="col-md-7">
        <table class="table mt-4">
          <thead>
            <tr>
              <th>圖片</th>
              <th>產品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td style="width:200px">
                <div style="height:100px; background-size:cover; background-position: center;"
                :style="{backgroundImage: `url(${item.imageUrl})`}">
                </div>
              </td>
              <td>
                {{ item.title }}
              </td>
              <td>
                  <div class="h5" v-if="!item.origin_price">{{ item.origin_price }}</div>
                  <del class="h6" v-if="item.price">原價{{ $filter.currency(item.origin_price) }}元</del>
                  <div class="h5" v-if="item.price">現在只要{{ $filter.currency(item.price) }}元</div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button type="button" class="btn btn-outline-secondary" @click="productDetail(item.id)">查看更多</button>
                  <button type="button" class="btn btn-outline-danger" @click="addCart(item.id)"
                    :disabled="status.loadingItem === item.id ">
                    加入購物車
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-5">
        <div class="sticky-top">
          <template v-if="cart.carts">
            <table class="table mt-4">
              <thead>
                  <tr>
                      <th></th>
                      <th>品名</th>
                      <th style="width: 110px;">數量</th>
                      <th >單價</th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for="(item,key) in cart.carts" :key="key">
                  <td>
                    <button type="button" class="btn btn-outline-danger" :disabled="item.id === status.loadingItem" @click="deleteCart(item.id)">
                    <i class="fa fa-trash" aria-hidden="true"></i></button>
                  </td>
                  <td style="width: 200px;">
                    {{ item.product.title }}
                    <div v-if="item.coupon" class="text-success">已套用優惠券</div>
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <input type="number" min="1" class="form-control" v-model="item.qty" @click="updateCart(item)">
                      <div class="input-group-text">/{{ item.product.unit }}</div>
                    </div>
                  </td>
                  <td style="width: 180px;" class="text-end">
                    <small v-if="item.coupon" class="text-success">折扣價 : </small>{{ $filter.currency(item.final_total) }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3" class="text-end">總計</td>
                  <td class="text-end">{{ $filter.currency(cart.total) }}</td>
                </tr>
                <tr v-if="cart.total !== cart.final_total">
                  <td colspan="3" class="text-end text-success">折扣價</td>
                  <td class="text-end">{{ $filter.currency(cart.final_total) }}</td>
                </tr>
              </tfoot>
            </table>
          <div class="mt-3 input-group ">
            <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="code">
            <button type="button" class="btn btn-outline-secondary" @click="checkCode">套用優惠碼</button>
          </div>
          </template>
        </div>
      </div>
    </div>
  </div>
  <div class="my-5 row justify-content-center">
    <Form class="col-md-6" v-slot="{ errors }" @submit="addOrder">
      <div class="mb-3">
        <div class="mb-1">
          <label for="email" class="form-label">Email</label>
        </div>
        <Field type="email" id="email" name="email"  class="form-control" placeholder="請輸入Email" rules="email|required"
          :class="{ 'is-invalid': errors['email'] }" v-model="form.user.email">
        </Field>
        <ErrorMessage name="email" class="invalid-feedback" ></ErrorMessage>
      </div>
      <div class="mb-3">
        <div class="mb-1">
          <label for="name" class="form-label">收件人姓名</label>
        </div>
        <Field type="text" id="name" name="姓名"  class="form-control" placeholder="請輸入姓名" rules="required"
          :class="{ 'is-invalid': errors['姓名'] }" v-model="form.user.name">
        </Field>
        <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <div class="mb-1">
          <label for="tel" class="form-label">收件人電話</label>
        </div>
        <Field type="text" id="tel" name="電話" class="form-control" placeholder="請輸入電話" rules="required"
          :class="{ 'is-invalid': errors['電話'] }" v-model="form.user.tel">
        </Field>
        <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <div class="mb-1">
          <label for="address" class="form-label">收件人地址</label>
        </div>
        <Field type="text" id="address" name="地址"  class="form-control" placeholder="請輸入地址" rules="required"
          :class="{ 'is-invalid': errors['地址'] }" v-model="form.user.address">
        </Field>
        <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <div class="mb-1">
          <label for="message">留言</label>
        </div>
        <textarea type="text" id="message" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
      </div>
      <div class="text-end mt-3">
        <button type="button" class="btn btn-danger">送出訂單</button>
      </div>
    </Form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      products: [],
      cart: [],
      isLoading: false,
      status: {
        loadingItem: ''
      },
      form: {
        user: {
          email: '',
          name: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      tempOrderId: '',
      code: ''
    }
  },
  inject: ['emitter'],
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/all`
      this.$http.get(api).then(res => {
        this.products = res.data.products
      }).catch((err) => {
        this.$pushMessage(err.response)
      })
    },
    productDetail (id) {
      this.$router.push(`/user/product/${id}`)
    },
    addCart (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      const product = {
        product_id: id,
        qty: 1
      }
      this.$http.post(api, { data: product }).then(res => {
        this.getCart()
        this.$pushMessage(res, '加入購物車')
      }).catch((err) => {
        this.$pushMessage(err.response)
      })
    },
    getCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(api).then(res => {
        if (res.data.success) {
          this.cart = res.data.data
          this.isLoading = false
        }
      }).catch((err) => {
        this.$pushMessage(err.response)
      })
    },
    deleteCart (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.status.loadingItem = id
      this.$http.delete(api).then(res => {
        this.getCart()
        this.$pushMessage(res, '刪除')
      }).catch((err) => {
        this.$pushMessage(err.response)
      })
    },
    updateCart (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      const product = {
        product_id: item.id,
        qty: item.qty
      }
      this.$http.put(api, { data: product }).then(() => {
        this.getCart()
      }).catch((err) => {
        this.$pushMessage(err.response)
      })
    },
    checkCode () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const CouponCode = {
        code: this.code
      }
      this.$http.post(api, { data: CouponCode }).then(res => {
        this.$pushMessage(res, '套用優惠券')
        this.getCart()
        this.code = ''
      }).catch((err) => {
        this.$pushMessage(err.response)
      })
    },
    addOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(api, { data: order }).then(res => {
        this.tempOrderId = res.data.orderId
        this.$router.push(`/user/checkout/${this.tempOrderId}`)
      }).catch((err) => {
        this.$pushMessage(err.response)
      })
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>

<style>

</style>
