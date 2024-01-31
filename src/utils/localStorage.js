class LocalStorage {
  constructor () {
    if (!window.localStorage) {
      console.error('當前的開發環境不支援 localStorage')
    }
  }

  get (key) {
    if (!key) {
      console.error('缺少取得localstorage 的 key')
      return
    }
    const data = window.localStorage.getItem(key) || []
    if (data) {
      return JSON.parse(data)
    }
  }

  set (key, value) {
    if (!key) {
      console.error('缺少取得localstorage 的 key')
      return
    }
    if (!value) {
      console.error('缺少取得localstorage 的 value')
      return
    }
    window.localStorage.setItem(key, JSON.stringify(value))
    const data = this.get(key)
    if (!data) {
      console.error('設定 localStorage 失敗')
      return false
    } else {
      return true
    }
  }
}
export default new LocalStorage()
