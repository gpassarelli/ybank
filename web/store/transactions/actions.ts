import {
  fetchTransactions,
  makeTransaction,
  resetState,
  TransactionsActions
} from '~/store/transactions/action-types'
import { Transaction } from '~/lib/ybank/models'
import $api from '@/lib/ybank/api'
import {
  ADD_TRANSACTION, RESET_FORM,
  RESET_STATE,
  SET_FORM, SET_FORM_ERROR,
  SET_FORM_SUCCESS,
  SET_TRANSACTIONS
} from '~/store/transactions/mutations-types'
import { decreaseBalance } from '~/store/account/actions-types'
import { getAccount } from '~/store/account/getters-types'

export const actions: TransactionsActions = {
  [fetchTransactions]: async ({ commit }, payload: { id: number }) => {
    try {
      const { id } = payload
      const request = await $api.accounts.getTransactions(id)
      const { data: { data: transactions } } = request
      const mappedTransactions = transactions.map((transaction:Transaction) => {
        return new Transaction({ ...transaction })
      })
      commit(SET_TRANSACTIONS, mappedTransactions)
    } catch (error) {
      throw new Error(error)
    }
  },
  [makeTransaction]: async ({ commit, dispatch, rootGetters }, payload:{transaction:Transaction}) => {
    const { transaction } = payload
    const account = rootGetters[`account/${getAccount}`]
    try {
      account.addTransaction(transaction)
    } catch (error) {
      throw new Error(error.message)
    }
    commit(SET_FORM, transaction)
    try {
      const { data: { data: savedTransaction } } = await $api.accounts.storeTransaction(transaction)
      commit(ADD_TRANSACTION, savedTransaction)
      dispatch(`account/${decreaseBalance}`, {amount: savedTransaction.amount}, {root:true})
    } catch (errors) {
      commit(SET_FORM_ERROR)
      throw new Error(errors)
    }
    commit(SET_FORM_SUCCESS)
    commit(RESET_FORM)
  },
  [resetState]: ({ commit }) => {
    commit(RESET_STATE)
  }
}

export default actions
