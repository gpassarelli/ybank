import { Account } from '@/lib/ybank/models'
import {
  AccountActions,
  decreaseBalance,
  fetchAccount,
  increaseBalance,
  resetState
} from '~/store/account/actions-types'
import { getAccount } from '~/store/account/getters-types'
import $api from '@/lib/ybank/api'
import { RESET_STATE, SET_ACCOUNT, SET_BALANCE } from '~/store/account/mutation-types'
export const actions: AccountActions = {
  [fetchAccount]: async ({ commit }, payload:{id:number}) => {
    const { id } = payload
    const { data: { data: accountProps } } = await $api.accounts.show(id)
    const account = new Account(accountProps)
    commit(SET_ACCOUNT, account)
  },
  [increaseBalance]: ({ commit, getters }, payload:{amount:number}) => {
    const { amount } = payload
    const account = getters[getAccount]
    account.increaseBalance(amount)

    commit(SET_BALANCE, account.balance)
  },
  [decreaseBalance]: ({ commit, getters }, payload:{amount:number}) => {
    const { amount } = payload
    const account = getters[getAccount]
    account.decreaseBalance(amount)
    commit(SET_BALANCE, account.balance)
  },
  [resetState]: ({ commit }) => {
    commit(RESET_STATE)
  }
}

export default actions
