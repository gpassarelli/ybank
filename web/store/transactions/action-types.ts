import { ActionContext, ActionTree } from 'vuex/types/index'
import { TransactionsState } from '~/store/transactions/state'
import { RootState } from '~/store/state'
import { Transaction } from '~/lib/ybank/models'

/**
 * ACTIONS
 */
export const fetchTransactions = 'fetchTransactions'
export const makeTransaction = 'makeTransaction'
export const resetState = 'resetState'

/**
 * TS
 */
export type TransactionsActionContext = ActionContext<TransactionsState, RootState>;
export interface TransactionsActions extends ActionTree<TransactionsState, RootState> {
  [fetchTransactions]:(ctx: TransactionsActionContext, payload:{id:number}) => void
  [makeTransaction]: (ctx: TransactionsActionContext, payload:{transaction:Transaction}) => void
  [resetState]: (ctx: TransactionsActionContext) => void;
}
