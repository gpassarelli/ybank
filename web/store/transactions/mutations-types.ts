import { MutationTree } from 'vuex/types/index'
import { TransactionsState } from './state'
import { Transaction } from '~/lib/ybank/models'

/**
 * MUTATIONS
 */
export const SET_TRANSACTIONS = 'SET_TRANSACTIONS'
export const SET_FORM = 'SET_FORM'
export const RESET_FORM = 'RESET_FORM'
export const ADD_TRANSACTION = 'ADD_TRANSACTION'
export const SET_FORM_SUCCESS = 'SET_FORM_SUCCESS'
export const SET_FORM_ERROR = 'SET_FORM_ERROR'
export const RESET_STATE = 'RESET_STATE'

/**
 * TS
 */
export interface TransactionsMutations extends MutationTree<TransactionsState> {
  [SET_TRANSACTIONS]: (state: TransactionsState, transactions: Transaction[]) => void;
  [SET_FORM]: (state: TransactionsState, formFields:{}) => void;
  [ADD_TRANSACTION]: (state: TransactionsState, transaction:Transaction) => void;
  [RESET_FORM]: (state: TransactionsState) => void;
  [SET_FORM_SUCCESS]: (state: TransactionsState) => void;
  [SET_FORM_ERROR]: (state: TransactionsState) => void;
  [RESET_STATE]: (state: TransactionsState) => void;
}
