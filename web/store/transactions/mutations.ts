import {
  ADD_TRANSACTION,
  RESET_FORM,
  RESET_STATE,
  SET_FORM,
  SET_FORM_ERROR,
  SET_FORM_SUCCESS,
  SET_TRANSACTIONS,
  TransactionsMutations
} from '~/store/transactions/mutations-types'

import { Transaction } from '~/lib/ybank/models'
import initState, { formStatusOptions, TransactionsState } from '~/store/transactions/state'

export const mutations: TransactionsMutations = {
  [SET_TRANSACTIONS]: (state:TransactionsState, transactions: Transaction[]) => {
    state.list = transactions
  },
  [ADD_TRANSACTION]: (state:TransactionsState, transaction: Transaction) => {
    state.list = [...state.list, transaction]
  },
  [RESET_STATE]: (state:TransactionsState) => {
    Object.assign(state, initState())
  },
  [SET_FORM]: (state:TransactionsState, form: {}) => {
    Object.assign(state.form, form)
    state.formStatus = formStatusOptions.processing
  },
  [SET_FORM_SUCCESS]: (state:TransactionsState) => {
    state.formStatus = formStatusOptions.success
  },
  [SET_FORM_ERROR]: (state:TransactionsState) => {
    state.formStatus = formStatusOptions.error
  },
  [RESET_FORM]: (state:TransactionsState) => {
    Object.assign(state.form, {})
    state.formStatus = null
  }
}

export default mutations
