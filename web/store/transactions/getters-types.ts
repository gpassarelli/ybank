import { GetterTree } from 'vuex/types/index'
import { RootState } from '../state'
import { TransactionsState } from './state'
import { Transaction } from '~/lib/ybank/models'

/**
 * GETTERS
 */
export const getTransactions = 'getTransactions'
export const getForm = 'getForm'
export const getFormStatus = 'getFormStatus'
export const isProcessingForm = 'isProcessingForm'

/**
 * TS
 */
export interface TransactionsGetters extends GetterTree<TransactionsState, RootState> {
  [getTransactions]: (ctx: TransactionsState) => Transaction[];
  [getForm]: (ctx: TransactionsState) => {};
  [getFormStatus]: (ctx: TransactionsState) => string|null;
  [isProcessingForm]: (ctx: TransactionsState) => boolean;
}
