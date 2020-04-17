import { MutationTree } from '~/node_modules/vuex'
import { Account } from '~/lib/ybank/models'
import { AccountState } from '~/store/account/state'

/**
 * MUTATIONS
 */
export const SET_ACCOUNT = 'SET_ACCOUNT'
export const SET_BALANCE = 'SET_BALANCE'
export const RESET_STATE = 'RESET_STATE'

/**
 * TS
 */
export interface AccountMutations extends MutationTree<AccountState> {
  [SET_ACCOUNT]: (state: AccountState, account: Account) => void;
  [SET_BALANCE]: (state: AccountState, amount:number) => void;
  [RESET_STATE]: (state: AccountState) => void;
}
