import {
  getForm,
  getFormStatus,
  getTransactions,
  isProcessingForm,
  TransactionsGetters
} from '~/store/transactions/getters-types'
import { formStatusOptions, TransactionsState } from '~/store/transactions/state'
import { Transaction } from '~/lib/ybank/models'

export const getters: TransactionsGetters = {
  [getTransactions] (state:TransactionsState):Transaction[] {
    return state.list
  },
  [getForm] (state:TransactionsState):{} {
    return state.form
  },
  [getFormStatus] (state:TransactionsState):string|null {
    return state.formStatus ? formStatusOptions[state.formStatus] : null
  },
  [isProcessingForm] (state:TransactionsState):boolean {
    return state.formStatus === 'processing'
  }
}

export default getters
