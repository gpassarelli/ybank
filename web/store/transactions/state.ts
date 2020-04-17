import { Transaction } from '~/lib/ybank/models'
/**
 * STATE
 */
export const initState = ():TransactionsState => ({
  list: [],
  form: {},
  formStatus: null
})
export default initState

/**
 * TS
 */

export interface TransactionsState {
  list: Transaction[],
  form: {},
  formStatus: formStatusOptions | null
}
export enum formStatusOptions {
  processing = 'processing',
  success = 'success',
  error = 'error',
}
