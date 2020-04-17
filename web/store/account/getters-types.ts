import { GetterTree } from '~/node_modules/vuex'
import { Account } from '~/lib/ybank/models'
import { AccountState } from '~/store/account/state'
import { RootState } from '~/store/state'

/**
 * GETTERS
 */
export const getAccount = 'getAccount'
export const getId = 'getId'
export const getBalance = 'getBalance'
export const getCurrency = 'getCurrency'

/**
 * TS
 */
export interface AccountGetters extends GetterTree<AccountState, RootState> {
  [getAccount]: (ctx: AccountState) => Account;
  [getId]: (ctx: AccountState) => number;
  [getBalance]: (ctx: AccountState) => number;
  [getCurrency]: (ctx: AccountState) => string;
}
