import Vue from 'vue'

export const formatAmount = function (amount:number, currency?:string) {
  if (currency) {
    return Number(amount).toLocaleString('en', { style: 'currency', currency })
  }
  return Number(amount).toLocaleString('en')
}
Vue.filter('formatAmount', formatAmount)
