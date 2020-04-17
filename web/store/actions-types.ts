import { ActionContext, ActionTree } from 'vuex'
import { RootState } from './state'

/**
 * ACTIONS
 */
export const resetAllStates = 'resetAllStates'

/**
 * TS
 */
export type RootActionContext = ActionContext<RootState, RootState>;
export interface RootActions extends ActionTree<RootState, RootState> {
  [resetAllStates]: (ctx: RootActionContext) => void;
}
