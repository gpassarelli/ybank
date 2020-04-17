import { AccountState, initState } from './state'
import { Account } from '@/lib/ybank/models'
import { RESET_STATE, SET_ACCOUNT, SET_BALANCE, AccountMutations } from '~/store/account/mutation-types'

export const mutations: AccountMutations = {
  [SET_ACCOUNT]: (state:AccountState, account: Account) => {
    Object.assign(state, account)
  },
  [RESET_STATE]: (state:AccountState) => {
    Object.assign(state, initState())
  },
  [SET_BALANCE]: (state:AccountState, amount:number) => {
    state.balance = amount
  }
}

export default mutations
