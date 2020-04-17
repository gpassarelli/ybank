import { resetAllStates, RootActions } from '~/store/actions-types'
import { resetState as resetTransactionsState } from '~/store/transactions/action-types'
import { resetState as resetAccountState } from '~/store/account/actions-types'

export const actions: RootActions = {
  [resetAllStates]: async ({ dispatch }) => {
    try {
      await dispatch(`transactions/${resetTransactionsState}`)
      await dispatch(`account/${resetAccountState}`)
    } catch (errors) {
      throw new Error(errors)
    }
  }
}
export default actions
