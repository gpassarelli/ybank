import { ActionContext, ActionTree } from 'vuex/types/index'
import { RootState } from '../state'
import { AccountState } from './state'

/**
 * ACTIONS
 */
export const fetchAccount = 'fetchAccount'
export const increaseBalance = 'increaseBalance'
export const decreaseBalance = 'decreaseBalance'
export const resetState = 'resetState'

/**
 * TS
 */
export type AccountActionContext = ActionContext<AccountState, RootState>;
export interface AccountActions extends ActionTree<AccountState, RootState> {
  [fetchAccount]: (ctx: AccountActionContext, payload:{id:number}) => Promise<void>;
  [increaseBalance]: (ctx: AccountActionContext, payload:{amount:number}) => void;
  [decreaseBalance]: (ctx: AccountActionContext, payload:{amount:number}) => void;
  [resetState]: (ctx: AccountActionContext) => void;
}
