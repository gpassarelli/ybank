import { Account } from '@/lib/ybank/models'
import { AccountGetters, getAccount, getBalance, getCurrency, getId } from '~/store/account/getters-types'
import { AccountState } from '~/store/account/state'

export const getters: AccountGetters = {
  [getAccount] (state:AccountState) {
    return new Account({ ...state })
  },
  [getId] (state:AccountState) {
    const { id } = state
    return id
  },
  [getBalance] (state:AccountState) {
    const { balance } = state
    return balance
  },
  [getCurrency] (state:AccountState) {
    const { currency } = state
    return currency
  }
}

export default getters
